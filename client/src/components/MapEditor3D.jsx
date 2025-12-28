import { useState, useEffect, useRef, useMemo } from 'react';

const API_BASE = 'http://localhost:3001/api/map';

export const MapEditor3D = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [overlaps, setOverlaps] = useState([]);
    const [draggedRoom, setDraggedRoom] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0, z: 0 });
    const [viewAngle, setViewAngle] = useState({ x: -30, y: 45, z: 0 });
    const [zoom, setZoom] = useState(1);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    // Load map data
    useEffect(() => {
        loadMapData();
        loadOverlaps();
    }, []);

    const loadMapData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE}/data`);
            const data = await response.json();
            if (data.success) {
                setRooms(data.rooms);
            } else {
                setError(data.error || 'Failed to load map data');
            }
        } catch (err) {
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

    // Group rooms by z-level
    const roomsByLevel = useMemo(() => {
        const grouped = {};
        rooms.forEach(room => {
            const z = room.z;
            if (!grouped[z]) grouped[z] = [];
            grouped[z].push(room);
        });
        return grouped;
    }, [rooms]);

    // Get all levels sorted
    const levels = useMemo(() => {
        return Object.keys(roomsByLevel).map(Number).sort((a, b) => a - b);
    }, [roomsByLevel]);

    // Calculate GLOBAL grid bounds across ALL levels
    const globalBounds = useMemo(() => {
        if (rooms.length === 0) return null;
        
        const xs = rooms.map(r => r.x);
        const ys = rooms.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        return {
            minX,
            minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1
        };
    }, [rooms]);

    // Calculate grid layouts for each level using GLOBAL bounds
    const gridLayouts = useMemo(() => {
        if (!globalBounds) return {};
        
        const layouts = {};
        levels.forEach(level => {
            const levelRooms = roomsByLevel[level] || [];
            
            // Use global bounds for all levels
            layouts[level] = {
                minX: globalBounds.minX,
                minY: globalBounds.minY,
                width: globalBounds.width,
                height: globalBounds.height,
                rooms: levelRooms
            };
        });
        return layouts;
    }, [roomsByLevel, levels, globalBounds]);

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

    // Handle drag start
    const handleDragStart = (e, room) => {
        e.preventDefault();
        setDraggedRoom(room);
        const rect = sceneRef.current?.getBoundingClientRect();
        if (rect) {
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                z: 0
            });
        }
    };

    // Handle drag
    const handleDrag = (e) => {
        if (!draggedRoom || !sceneRef.current) return;
        // Drag handling will be done in drag end for 3D
    };

    // Handle drag end
    const handleDragEnd = async (e) => {
        if (!draggedRoom) return;

        const rect = sceneRef.current?.getBoundingClientRect();
        if (!rect) {
            setDraggedRoom(null);
            return;
        }

        // For now, keep the same z-level when dragging
        // In a full 3D implementation, we'd calculate the new position based on 3D projection
        const newZ = draggedRoom.z;
        
        // Calculate 2D position (accounting for zoom)
        if (!globalBounds || !gridDimensions) {
            setDraggedRoom(null);
            return;
        }
        
        const cellSize = gridDimensions.cellSize * zoom;
        const gap = gridDimensions.gap * zoom;
        const totalCellSize = cellSize + gap;
        const x = Math.round((e.clientX - rect.left - dragOffset.x) / totalCellSize);
        const y = Math.round((e.clientY - rect.top - dragOffset.y) / totalCellSize);

        // Use global bounds for all levels
        if (!globalBounds) {
            setDraggedRoom(null);
            return;
        }

        const newX = globalBounds.minX + x;
        const newY = globalBounds.minY + (globalBounds.height - 1 - y);

        const success = await updateRoomCoordinates(draggedRoom.id, newX, newY, newZ);
        if (!success) {
            loadMapData();
        }
        setDraggedRoom(null);
    };

    // Get room overlap
    const getRoomOverlap = (room) => {
        return overlaps.find(ov => ov.rooms.some(r => r.id === room.id));
    };

    // Calculate level offset (stack levels vertically)
    const getLevelOffset = (z) => {
        const levelIndex = levels.indexOf(z);
        const spacing = 200; // pixels between levels
        return levelIndex * spacing;
    };

    // Calculate grid dimensions once - all levels use the same
    const gridDimensions = useMemo(() => {
        if (!globalBounds) return null;
        
        const cellSize = 40;
        const gap = 4;
        const padding = 10;
        const gridWidth = globalBounds.width * cellSize + (globalBounds.width - 1) * gap;
        const gridHeight = globalBounds.height * cellSize + (globalBounds.height - 1) * gap;
        const totalWidth = gridWidth + (padding * 2);
        const totalHeight = gridHeight + (padding * 2);
        
        return {
            cellSize,
            gap,
            padding,
            gridWidth,
            gridHeight,
            totalWidth,
            totalHeight
        };
    }, [globalBounds]);

    if (loading) {
        return <div className="map-editor-3d">Loading map data...</div>;
    }

    if (error) {
        return <div className="map-editor-3d">Error: {error}</div>;
    }

    return (
        <div className="map-editor-3d" style={{ padding: '20px', fontFamily: 'monospace', height: '100vh', overflow: 'auto' }}>
            <div style={{ marginBottom: '20px', position: 'sticky', top: 0, background: '#0f0f1e', zIndex: 100, padding: '10px' }}>
                <h1>🗺️ World Map Editor - 3D View</h1>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <div>
                        <label>View Angle X: </label>
                        <input
                            type="range"
                            min="-90"
                            max="90"
                            value={viewAngle.x}
                            onChange={(e) => setViewAngle({ ...viewAngle, x: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{viewAngle.x}°</span>
                    </div>
                    <div>
                        <label>View Angle Y: </label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={viewAngle.y}
                            onChange={(e) => setViewAngle({ ...viewAngle, y: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{viewAngle.y}°</span>
                    </div>
                    <div>
                        <label>Zoom: </label>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={zoom}
                            onChange={(e) => setZoom(parseFloat(e.target.value))}
                            style={{ width: '150px' }}
                        />
                        <span style={{ marginLeft: '10px' }}>{zoom.toFixed(1)}x</span>
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
            </div>

            <div
                ref={containerRef}
                style={{
                    perspective: '2000px',
                    perspectiveOrigin: '50% 50%',
                    width: '100%',
                    minHeight: '800px',
                    position: 'relative'
                }}
            >
                <div
                    ref={sceneRef}
                    style={{
                        transform: `
                            rotateX(${viewAngle.x}deg) 
                            rotateY(${viewAngle.y}deg) 
                            scale(${zoom})
                        `,
                        transformStyle: 'preserve-3d',
                        position: 'relative',
                        width: '100%',
                        height: `${levels.length * 300}px`,
                        margin: '0 auto'
                    }}
                    onMouseMove={handleDrag}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    {levels.map((level, levelIdx) => {
                        const layout = gridLayouts[level];
                        if (!layout || !globalBounds || !gridDimensions) return null;

                        const levelOffset = getLevelOffset(level);
                        const levelName = level === 0 ? 'Ground' : level > 0 ? `Mountain +${level}` : `Underground ${level}`;
                        const levelColor = level < 0 ? '#4a004a' : level > 0 ? '#4a4a00' : '#16213e';
                        const levelBg = level < 0 ? '#1a0a1a' : level > 0 ? '#1a1a0a' : '#1a1a2e';

                        return (
                            <div
                                key={level}
                                style={{
                                    position: 'absolute',
                                    transform: `translateZ(${levelOffset}px)`,
                                    transformStyle: 'preserve-3d',
                                    left: '50%',
                                    top: `${levelIdx * 300}px`,
                                    marginLeft: `-${gridDimensions.totalWidth / 2}px`,
                                    width: `${gridDimensions.totalWidth}px`,
                                    height: `${gridDimensions.totalHeight}px`
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-30px',
                                    left: '0',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>
                                    {levelName} (Z={level}) - {layout.rooms.length} rooms
                                </div>
                                
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${globalBounds.width}, ${gridDimensions.cellSize}px)`,
                                        gridTemplateRows: `repeat(${globalBounds.height}, ${gridDimensions.cellSize}px)`,
                                        gap: `${gridDimensions.gap}px`,
                                        background: levelBg,
                                        border: `2px solid ${levelColor}`,
                                        borderRadius: '5px',
                                        padding: `${gridDimensions.padding}px`,
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: `${gridDimensions.gridWidth}px`,
                                        height: `${gridDimensions.gridHeight}px`
                                    }}
                                >
                                    {Array.from({ length: globalBounds.height }).map((_, row) =>
                                        Array.from({ length: globalBounds.width }).map((_, col) => {
                                            const currentX = globalBounds.minX + col;
                                            const currentY = globalBounds.minY + (globalBounds.height - 1 - row);

                                            const room = layout.rooms.find(r => r.x === currentX && r.y === currentY);
                                            const overlap = room ? getRoomOverlap(room) : null;
                                            const isSelected = selectedRoom?.id === room?.id;
                                            const isDragged = draggedRoom?.id === room?.id;

                                            // Check for vertical connections (up/down)
                                            let hasUp = false;
                                            let hasDown = false;
                                            let upTarget = null;
                                            let downTarget = null;
                                            if (room) {
                                                const roomExits = room.exits || {};
                                                hasUp = roomExits.up !== undefined;
                                                hasDown = roomExits.down !== undefined;
                                                upTarget = roomExits.up;
                                                downTarget = roomExits.down;
                                            }

                                            return (
                                                <div
                                                    key={`${currentX}-${currentY}-${level}`}
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                        background: room
                            ? (overlap ? '#ff4444' : isSelected ? '#4a9eff' : level < 0 ? '#5a2a5a' : level > 0 ? '#5a5a2a' : '#2d5a87')
                            : 'transparent',
                                                        border: room
                                                            ? (isSelected ? '2px solid #fff' : '1px solid #4a9eff')
                                                            : '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: room ? 'move' : 'default',
                                                        position: 'relative',
                                                        opacity: isDragged ? 0.5 : 1,
                                                        transform: isDragged ? 'scale(1.1)' : 'scale(1)',
                                                        transition: isDragged ? 'none' : 'all 0.2s'
                                                    }}
                                                    onMouseDown={(e) => room && handleDragStart(e, room)}
                                                    onClick={() => room && setSelectedRoom(room)}
                                                    title={room
                                                        ? `${room.name} (${room.x}, ${room.y}, ${room.z})${overlap ? ' - OVERLAP!' : ''}`
                                                        : `(${currentX}, ${currentY}, ${level})`
                                                    }
                                                >
                                                    {room && (
                                                        <>
                                                            {overlap && <span style={{ color: '#fff', fontSize: '20px' }}>⚠️</span>}
                                                            {!overlap && <span style={{ color: '#4a9eff', fontSize: '12px' }}>●</span>}
                                                            {hasUp && (
                                                                <div style={{
                                                                    position: 'absolute',
                                                                    top: '-15px',
                                                                    left: '50%',
                                                                    transform: 'translateX(-50%)',
                                                                    background: '#0f0',
                                                                    color: '#000',
                                                                    padding: '2px 4px',
                                                                    borderRadius: '3px',
                                                                    fontSize: '8px',
                                                                    fontWeight: 'bold',
                                                                    whiteSpace: 'nowrap',
                                                                    zIndex: 10
                                                                }}>
                                                                    ↑ {upTarget ? rooms.find(r => r.id === upTarget)?.name.substring(0, 10) || upTarget.substring(0, 10) : 'up'}
                                                                </div>
                                                            )}
                                                            {hasDown && (
                                                                <div style={{
                                                                    position: 'absolute',
                                                                    bottom: '-15px',
                                                                    left: '50%',
                                                                    transform: 'translateX(-50%)',
                                                                    background: '#0ff',
                                                                    color: '#000',
                                                                    padding: '2px 4px',
                                                                    borderRadius: '3px',
                                                                    fontSize: '8px',
                                                                    fontWeight: 'bold',
                                                                    whiteSpace: 'nowrap',
                                                                    zIndex: 10
                                                                }}>
                                                                    ↓ {downTarget ? rooms.find(r => r.id === downTarget)?.name.substring(0, 10) || downTarget.substring(0, 10) : 'down'}
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

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

