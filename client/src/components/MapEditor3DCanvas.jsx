import { useState, useEffect, useRef, useMemo } from 'react';

const API_BASE = 'http://localhost:3001/api/map';

// Simple 3D projection functions (isometric-like)
function project3D(x, y, z, camera) {
    const { angleX, angleY, zoom, offsetX, offsetY } = camera;
    
    // Convert angles to radians
    const radX = angleX * Math.PI / 180;
    const radY = angleY * Math.PI / 180;
    
    // Rotate around Y axis (horizontal rotation)
    const cosY = Math.cos(radY);
    const sinY = Math.sin(radY);
    let x1 = x * cosY - z * sinY;
    let z1 = x * sinY + z * cosY;
    
    // Rotate around X axis (vertical tilt)
    const cosX = Math.cos(radX);
    const sinX = Math.sin(radX);
    let y1 = y * cosX - z1 * sinX;
    z1 = y * sinX + z1 * cosX;
    
    // Perspective projection
    const distance = 1000;
    const scale = distance / (distance + z1);
    
    return {
        x: x1 * scale * zoom + offsetX,
        y: y1 * scale * zoom + offsetY,
        z: z1,
        scale: scale * zoom
    };
}

export const MapEditor3DCanvas = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [overlaps, setOverlaps] = useState([]);
    const [draggedRoom, setDraggedRoom] = useState(null);
    const canvasRef = useRef(null);
    const [camera, setCamera] = useState({
        angleX: -30,
        angleY: 45,
        zoom: 1,
        offsetX: 0,
        offsetY: 0
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [hoveredRoom, setHoveredRoom] = useState(null);

    // Load map data
    useEffect(() => {
        loadMapData();
        loadOverlaps();
    }, []);

    const loadMapData = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Loading map data from:', `${API_BASE}/data`);
            const response = await fetch(`${API_BASE}/data`);
            const data = await response.json();
            console.log('Map data response:', data);
            if (data.success) {
                console.log(`Loaded ${data.rooms?.length || 0} rooms`);
                setRooms(data.rooms || []);
            } else {
                const errorMsg = data.error || 'Failed to load map data';
                console.error('Error loading map:', errorMsg);
                setError(errorMsg);
            }
        } catch (err) {
            console.error('Exception loading map:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const loadOverlaps = async () => {
        try {
            const response = await fetch(`${API_BASE}/overlaps`);
            const data = await response.json();
            if (data.success) {
                setOverlaps(data.overlaps);
            }
        } catch (err) {
            console.error('Error loading overlaps:', err);
        }
    };

    // Calculate GLOBAL bounds across ALL levels
    const globalBounds = useMemo(() => {
        if (rooms.length === 0) return null;
        
        const xs = rooms.map(r => r.x).filter(x => typeof x === 'number' && !isNaN(x));
        const ys = rooms.map(r => r.y).filter(y => typeof y === 'number' && !isNaN(y));
        
        if (xs.length === 0 || ys.length === 0) {
            console.warn('No valid coordinates found in rooms');
            return null;
        }
        
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        const bounds = {
            minX,
            maxX,
            minY,
            maxY,
            width: maxX - minX + 1,
            height: maxY - minY + 1
        };
        
        console.log('Global bounds calculated:', bounds);
        return bounds;
    }, [rooms]);

    // Group rooms by level
    const roomsByLevel = useMemo(() => {
        const grouped = {};
        rooms.forEach(room => {
            const z = room.z;
            if (!grouped[z]) grouped[z] = [];
            grouped[z].push(room);
        });
        return grouped;
    }, [rooms]);

    const levels = useMemo(() => {
        return Object.keys(roomsByLevel).map(Number).sort((a, b) => a - b);
    }, [roomsByLevel]);

    // Update room coordinates
    const updateRoomCoordinates = async (roomId, x, y, z) => {
        try {
            const response = await fetch(`${API_BASE}/coordinates`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomId, x, y, z })
            });

            const data = await response.json();
            if (data.success) {
                await loadMapData();
                loadOverlaps();
                if (selectedRoom?.id === roomId) {
                    const updatedRoom = rooms.find(r => r.id === roomId);
                    if (updatedRoom) setSelectedRoom(updatedRoom);
                }
                return true;
            } else {
                alert(`Error: ${data.error}`);
                return false;
            }
        } catch (err) {
            alert(`Error: ${err.message}`);
            return false;
        }
    };

    // Get room overlap
    const getRoomOverlap = (room) => {
        return overlaps.find(ov => ov.rooms.some(r => r.id === room.id));
    };

    // Draw the 3D scene
    useEffect(() => {
        if (!canvasRef.current) {
            console.log('Canvas ref not available');
            return;
        }
        
        console.log('Draw effect triggered', { rooms: rooms.length, globalBounds, loading });
        
        const draw = () => {
            if (!canvasRef.current) {
                console.log('Canvas ref lost during draw');
                return;
            }
            
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            
            // Only update canvas size if it actually changed (avoid unnecessary resizing)
            const width = Math.max(1, rect.width || 800);
            const height = Math.max(1, rect.height || 600);
            
            // Use a small threshold to avoid constant resizing
            if (Math.abs(canvas.width - width) > 1 || Math.abs(canvas.height - height) > 1) {
                canvas.width = width;
                canvas.height = height;
            }
            
            // Always clear and show something
            ctx.fillStyle = '#0a0a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw a test rectangle to verify canvas works
            ctx.fillStyle = '#4a9eff';
            ctx.fillRect(10, 10, 100, 50);
            ctx.fillStyle = '#fff';
            ctx.font = '16px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Canvas is working!', 120, 35);
            
            if (!globalBounds || rooms.length === 0) {
                ctx.fillStyle = '#fff';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Loading map data...', canvas.width / 2, canvas.height / 2);
                ctx.fillText(`Rooms: ${rooms.length}, Bounds: ${globalBounds ? 'yes' : 'no'}`, canvas.width / 2, canvas.height / 2 + 30);
                return;
            }

            // Set canvas size - ensure we have valid dimensions (reuse existing variables)
            // Only check size once per render to avoid thrashing
            const canvasWidth = Math.max(1, rect.width || 800);
            const canvasHeight = Math.max(1, rect.height || 600);
            
            // Use a small threshold to avoid constant resizing
            if (Math.abs(canvas.width - canvasWidth) > 1 || Math.abs(canvas.height - canvasHeight) > 1) {
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
            }

            // Clear canvas
            ctx.fillStyle = '#0a0a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw debug info (overwrite the test rectangle)
            ctx.fillStyle = '#0a0a1a';
            ctx.fillRect(0, 0, 300, 100);
            ctx.fillStyle = '#fff';
            ctx.font = '12px monospace';
            ctx.textAlign = 'left';
            ctx.fillText(`Canvas: ${canvas.width}x${canvas.height}`, 10, 20);
            ctx.fillText(`Rooms: ${rooms.length}`, 10, 35);
            
            if (!globalBounds) {
                ctx.fillText('Bounds: null', 10, 50);
                return;
            }
            
            ctx.fillText(`Bounds: ${globalBounds.width}x${globalBounds.height}`, 10, 50);
            
            const centerX = (globalBounds.minX + globalBounds.maxX) / 2;
            const centerY = (globalBounds.minY + globalBounds.maxY) / 2;
            
            if (isNaN(centerX) || isNaN(centerY)) {
                ctx.fillText(`Center: NaN (minX: ${globalBounds.minX}, maxX: ${globalBounds.maxX})`, 10, 65);
                console.error('NaN center detected:', { globalBounds, centerX, centerY });
                return;
            }
            
            ctx.fillText(`Center: (${centerX.toFixed(1)}, ${centerY.toFixed(1)})`, 10, 65);
        
            // Center the camera
            const centerZ = 0; // Center at z=0
            
            // Calculate appropriate cell size based on canvas and world size
            const worldWidth = globalBounds.width;
            const worldHeight = globalBounds.height;
            const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
            const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
            const levelSpacing = cellSize * 2.5; // Space between levels in Z
            
            console.log('Rendering:', {
                canvas: `${canvas.width}x${canvas.height}`,
                rooms: rooms.length,
                bounds: globalBounds,
                cellSize,
                camera
            });

        // Draw rooms
        const roomProjections = [];
        rooms.forEach(room => {
            const z = room.z * levelSpacing;
            const proj = project3D(
                (room.x - centerX) * cellSize,
                (room.y - centerY) * cellSize,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            // Only draw if in front of camera (less restrictive check)
            if (proj.z > -10000) {
                roomProjections.push({ room, proj });
            }
        });

        // Sort by Z (draw back to front)
        roomProjections.sort((a, b) => b.proj.z - a.proj.z);

        // Draw grid background for each level (simplified - just draw corners)
        levels.forEach((level) => {
            const z = level * levelSpacing;
            const levelColor = level < 0 ? 'rgba(74, 0, 74, 0.1)' : level > 0 ? 'rgba(74, 74, 0, 0.1)' : 'rgba(22, 33, 62, 0.1)';
            
            // Draw corners of the grid
            const corners = [
                { x: globalBounds.minX, y: globalBounds.minY },
                { x: globalBounds.maxX, y: globalBounds.minY },
                { x: globalBounds.minX, y: globalBounds.maxY },
                { x: globalBounds.maxX, y: globalBounds.maxY }
            ];
            
            corners.forEach(corner => {
                const proj1 = project3D(
                    (corner.x - centerX) * cellSize,
                    (corner.y - centerY) * cellSize,
                    z,
                    { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
                );
                
                if (proj1.z > -10000) {
                    ctx.fillStyle = levelColor;
                    ctx.fillRect(proj1.x - 3, proj1.y - 3, 6, 6);
                }
            });
        });

        // Draw rooms
        roomProjections.forEach(({ room, proj }) => {
            const overlap = getRoomOverlap(room);
            const isSelected = selectedRoom?.id === room.id;
            const isDragged = draggedRoom?.id === room.id;
            const isHovered = hoveredRoom?.id === room.id && !isDragging;
            
            // Apply drag offset if this is the dragged room
            let drawX = proj.x;
            let drawY = proj.y;
            if (isDragged) {
                drawX += dragOffset.x;
                drawY += dragOffset.y;
            }
            
            const size = Math.max(6, Math.min(25, cellSize * proj.scale * 0.5));
            
            // Draw room
            ctx.fillStyle = overlap 
                ? '#ff4444' 
                : isSelected 
                    ? '#4a9eff' 
                    : isHovered
                        ? '#6ab0ff'
                        : room.z < 0 
                            ? '#5a2a5a' 
                            : room.z > 0 
                                ? '#5a5a2a' 
                                : '#2d5a87';
            ctx.fillRect(drawX - size / 2, drawY - size / 2, size, size);
            
            // Draw border
            ctx.strokeStyle = isSelected ? '#fff' : isDragged ? '#ffff00' : '#4a9eff';
            ctx.lineWidth = isSelected || isDragged ? 2 : 1;
            ctx.strokeRect(drawX - size / 2, drawY - size / 2, size, size);
            
            // Draw dot
            if (!overlap) {
                ctx.fillStyle = isDragged ? '#ffff00' : '#4a9eff';
                ctx.beginPath();
                ctx.arc(drawX, drawY, Math.max(2, size * 0.2), 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Draw up/down indicators
            const exits = room.exits || {};
            if (exits.up) {
                ctx.fillStyle = '#0f0';
                ctx.fillRect(drawX - size / 2, drawY - size / 2 - size * 0.4, size, size * 0.25);
                ctx.fillStyle = '#000';
                ctx.font = `${Math.max(8, size * 0.4)}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText('↑', drawX, drawY - size / 2 - size * 0.25);
            }
            if (exits.down) {
                ctx.fillStyle = '#0ff';
                ctx.fillRect(drawX - size / 2, drawY + size / 2 + size * 0.15, size, size * 0.25);
                ctx.fillStyle = '#000';
                ctx.font = `${Math.max(8, size * 0.4)}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText('↓', drawX, drawY + size / 2 + size * 0.4);
            }
        });

        // Draw level labels
        levels.forEach((level) => {
            const z = level * levelSpacing;
            const proj = project3D(
                0,
                (globalBounds.maxY - centerY + 3) * cellSize,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            if (proj.z > -10000) {
                const levelName = level === 0 ? 'Ground' : level > 0 ? `Mountain +${level}` : `Underground ${level}`;
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(`${levelName} (Z=${level}) - ${roomsByLevel[level]?.length || 0} rooms`, proj.x, proj.y);
            }
        });
        };
        
        // Draw immediately
        draw();
        
        // Use requestAnimationFrame for smooth rendering instead of setInterval
        let animationFrameId;
        let lastTime = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;
        
        const animate = (currentTime) => {
            if (currentTime - lastTime >= frameInterval) {
                draw();
                lastTime = currentTime;
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animationFrameId = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [rooms, globalBounds, levels, roomsByLevel, camera, selectedRoom, draggedRoom, overlaps, dragOffset, hoveredRoom]);

    // Find room at mouse position
    const findRoomAtPosition = (mouseX, mouseY, canvas, globalBounds, levels, rooms, camera) => {
        if (!globalBounds || rooms.length === 0) return null;
        
        const centerX = (globalBounds.minX + globalBounds.maxX) / 2;
        const centerY = (globalBounds.minY + globalBounds.maxY) / 2;
        const worldWidth = globalBounds.width;
        const worldHeight = globalBounds.height;
        const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
        const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
        const levelSpacing = cellSize * 2.5;
        
        let clickedRoom = null;
        let minDist = Infinity;
        
        rooms.forEach(room => {
            const z = room.z * levelSpacing;
            const proj = project3D(
                (room.x - centerX) * cellSize,
                (room.y - centerY) * cellSize,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            const size = Math.max(6, Math.min(25, cellSize * proj.scale * 0.5));
            const dist = Math.sqrt((mouseX - proj.x) ** 2 + (mouseY - proj.y) ** 2);
            
            if (dist < size / 2 && dist < minDist && proj.z > -10000) {
                minDist = dist;
                clickedRoom = room;
            }
        });
        
        return clickedRoom;
    };

    // Convert 2D screen position to 3D world coordinates (simplified - projects to ground plane)
    const screenToWorld = (mouseX, mouseY, canvas, globalBounds, camera, targetZ = 0) => {
        if (!globalBounds) return null;
        
        const centerX = (globalBounds.minX + globalBounds.maxX) / 2;
        const centerY = (globalBounds.minY + globalBounds.maxY) / 2;
        const worldWidth = globalBounds.width;
        const worldHeight = globalBounds.height;
        const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
        const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
        const levelSpacing = cellSize * 2.5;
        
        // Convert screen coordinates to normalized coordinates
        const nx = (mouseX - canvas.width / 2) / (canvas.width / 2);
        const ny = (mouseY - canvas.height / 2) / (canvas.height / 2);
        
        // Reverse the projection (simplified - approximate)
        const radX = camera.angleX * Math.PI / 180;
        const radY = camera.angleY * Math.PI / 180;
        
        // Approximate reverse projection
        const distance = 1000;
        const z = targetZ * levelSpacing;
        const scale = distance / (distance + z);
        
        // Reverse rotation
        const cosY = Math.cos(radY);
        const sinY = Math.sin(radY);
        const cosX = Math.cos(radX);
        const sinX = Math.sin(radX);
        
        // Approximate world position
        const worldX = (nx * canvas.width / (scale * camera.zoom)) / cellSize + centerX;
        const worldY = (ny * canvas.height / (scale * camera.zoom)) / cellSize + centerY;
        
        return {
            x: Math.round(worldX),
            y: Math.round(worldY),
            z: targetZ
        };
    };

    // Handle mouse events
    const handleMouseDown = (e) => {
        if (!canvasRef.current || !globalBounds) return;
        
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const clickedRoom = findRoomAtPosition(mouseX, mouseY, canvas, globalBounds, levels, rooms, camera);
        
        if (clickedRoom) {
            if (e.button === 0 && !e.ctrlKey && !e.shiftKey) { // Left click - select
                setSelectedRoom(clickedRoom);
            } else if (e.button === 0 && (e.ctrlKey || e.metaKey)) { // Ctrl/Cmd + Left click - start drag
                e.preventDefault();
                setDraggedRoom(clickedRoom);
                setDragStart({ x: mouseX, y: mouseY });
                setDragOffset({ x: 0, y: 0 });
                setIsDragging(true);
            }
        } else {
            // Start camera drag
            if (e.button === 0) {
                setIsDragging(true);
                setDragStart({ x: mouseX, y: mouseY });
            }
        }
    };

    const handleMouseMove = (e) => {
        if (!canvasRef.current || !globalBounds) return;
        
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Update hover state
        if (!isDragging) {
            const hovered = findRoomAtPosition(mouseX, mouseY, canvas, globalBounds, levels, rooms, camera);
            setHoveredRoom(hovered);
        }
        
        if (!isDragging) return;
        
        if (draggedRoom) {
            // Calculate drag offset
            const dx = mouseX - dragStart.x;
            const dy = mouseY - dragStart.y;
            setDragOffset({ x: dx, y: dy });
        } else {
            // Drag camera
            const dx = mouseX - dragStart.x;
            const dy = mouseY - dragStart.y;
            setCamera(prev => ({
                ...prev,
                angleY: prev.angleY + dx * 0.5,
                angleX: Math.max(-90, Math.min(90, prev.angleX - dy * 0.5))
            }));
            setDragStart({ x: mouseX, y: mouseY });
        }
    };

    const handleMouseUp = async (e) => {
        if (draggedRoom && isDragging && (Math.abs(dragOffset.x) > 5 || Math.abs(dragOffset.y) > 5)) {
            // Calculate new position
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const worldPos = screenToWorld(mouseX, mouseY, canvas, globalBounds, camera, draggedRoom.z);
            
            if (worldPos) {
                const success = await updateRoomCoordinates(
                    draggedRoom.id,
                    worldPos.x,
                    worldPos.y,
                    worldPos.z
                );
                
                if (!success) {
                    console.log('Failed to update room coordinates');
                }
            }
        }
        
        setDraggedRoom(null);
        setDragOffset({ x: 0, y: 0 });
        setIsDragging(false);
    };

    // Set up wheel handler with proper passive handling
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const handleWheel = (e) => {
            e.preventDefault();
            setCamera(prev => ({
                ...prev,
                zoom: Math.max(0.1, Math.min(3, prev.zoom - e.deltaY * 0.001))
            }));
        };
        
        canvas.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            canvas.removeEventListener('wheel', handleWheel);
        };
    }, []);

    if (loading) {
        return <div className="map-editor-3d">Loading map data...</div>;
    }

    if (error) {
        return <div className="map-editor-3d">Error: {error}</div>;
    }

    return (
        <div className="map-editor-3d" style={{ 
            padding: '20px', 
            fontFamily: 'monospace', 
            height: '100vh', 
            overflow: 'hidden', 
            width: '100vw', 
            minWidth: '100vw', 
            maxWidth: '100vw', 
            boxSizing: 'border-box', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            margin: 0
        }}>
            <div style={{ marginBottom: '20px', position: 'sticky', top: 0, background: '#0f0f1e', zIndex: 100, padding: '10px', width: '100%', boxSizing: 'border-box' }}>
                <h1>🗺️ World Map Editor - 3D Canvas View</h1>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <div>
                        <label>View Angle X: </label>
                        <input
                            type="range"
                            min="-90"
                            max="90"
                            value={camera.angleX}
                            onChange={(e) => setCamera({ ...camera, angleX: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{camera.angleX}°</span>
                    </div>
                    <div>
                        <label>View Angle Y: </label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={camera.angleY}
                            onChange={(e) => setCamera({ ...camera, angleY: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{camera.angleY}°</span>
                    </div>
                    <div>
                        <label>Zoom: </label>
                        <input
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={camera.zoom}
                            onChange={(e) => setCamera({ ...camera, zoom: parseFloat(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{camera.zoom.toFixed(1)}x</span>
                    </div>
                    {overlaps.length > 0 && (
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            ⚠️ {overlaps.length} overlap(s) detected!
                        </span>
                    )}
                </div>
                {selectedRoom && (
                    <div style={{ 
                        background: '#333', 
                        padding: '10px', 
                        borderRadius: '5px',
                        marginBottom: '10px'
                    }}>
                        <strong>{selectedRoom.name}</strong> ({selectedRoom.id})
                        <br />
                        Coordinates: ({selectedRoom.x}, {selectedRoom.y}, {selectedRoom.z})
                        <br />
                        Exits: {Object.keys(selectedRoom.exits || {}).join(', ') || 'none'}
                    </div>
                )}
                <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                    <strong>Controls:</strong> Left click to select | <strong>Ctrl/Cmd + Left click + drag</strong> to move room | Drag background to rotate camera | Scroll to zoom
                </div>
            </div>

            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: 'calc(100vh - 250px)',
                    minHeight: '500px',
                    maxHeight: 'calc(100vh - 250px)',
                    background: '#0a0a1a',
                    border: '2px solid #16213e',
                    borderRadius: '5px',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    display: 'block',
                    boxSizing: 'border-box',
                    flexShrink: 0
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onContextMenu={(e) => e.preventDefault()}
            />

            {overlaps.length > 0 && (
                <div style={{ marginTop: '20px', background: '#ff4444', padding: '10px', borderRadius: '5px' }}>
                    <strong>Overlaps Detected:</strong>
                    {overlaps.map((ov, idx) => (
                        <div key={idx} style={{ marginTop: '5px' }}>
                            <strong>{ov.coordinate}:</strong> {ov.rooms.map(r => r.name || r.id).join(', ')}
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <button 
                    onClick={loadMapData}
                    style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}
                >
                    Refresh
                </button>
                <button 
                    onClick={loadOverlaps}
                    style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}
                >
                    Check Overlaps
                </button>
                <button 
                    onClick={async () => {
                        try {
                            const response = await fetch(`${API_BASE}/cleanup`, { method: 'POST' });
                            const data = await response.json();
                            if (data.success) {
                                alert(`Cleaned up ${data.removedCount} non-adjacent exits, added ${data.addedCount} missing connections`);
                                await loadMapData();
                                loadOverlaps();
                            } else {
                                alert(`Error: ${data.error}`);
                            }
                        } catch (err) {
                            alert(`Error: ${err.message}`);
                        }
                    }}
                    style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer', background: '#ff6b6b', color: '#fff', border: 'none' }}
                >
                    Cleanup Non-Adjacent Exits
                </button>
            </div>
        </div>
    );
};

