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

export const MapEditor3DCanvas = ({ onBackToGame }) => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [overlaps, setOverlaps] = useState([]);
    const [draggedRoom, setDraggedRoom] = useState(null);
    const canvasRef = useRef(null);
    const [camera, setCamera] = useState({
        angleX: 180,
        angleY: 0, // Start with North at top
        zoom: 1,
        offsetX: 0,
        offsetY: 0,
        panX: 0,  // Pan offset X
        panY: 0   // Pan offset Y
    });
    const [isPanning, setIsPanning] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [hoveredRoom, setHoveredRoom] = useState(null);
    const [dragStartWorldPos, setDragStartWorldPos] = useState(null);
    const [editingDescription, setEditingDescription] = useState(false);
    const [editingItems, setEditingItems] = useState(false);
    const [editDescription, setEditDescription] = useState('');
    const [editItems, setEditItems] = useState('');
    const [verticalNeighbors, setVerticalNeighbors] = useState([]);
    const [adjacentRooms, setAdjacentRooms] = useState([]);
    const [visibleLevels, setVisibleLevels] = useState(new Set()); // Will be initialized with all levels
    const levelsInitializedRef = useRef(false); // Track if we've initialized visible levels
    const lastLevelsRef = useRef(''); // Track last levels string to detect actual changes
    const [showCreateRoom, setShowCreateRoom] = useState(false);
    const [newRoomData, setNewRoomData] = useState({ roomId: '', name: '', description: '', x: 0, y: 0, z: 0, items: '', enemies: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [rightClickWorldPos, setRightClickWorldPos] = useState(null);
    const [showOverlaps, setShowOverlaps] = useState(false);
    const [terrainMap, setTerrainMap] = useState(null);
    const [terrainLabels, setTerrainLabels] = useState([]);
    const [showTerrain, setShowTerrain] = useState(true);

    // Generate a unique room ID (30+ character alphanumeric)
    const generateRoomId = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 32; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    // Load map data
    useEffect(() => {
        loadMapData();
        loadOverlaps();
        loadTerrainMap();
    }, []);

    // Load terrain map for visualization
    const loadTerrainMap = async () => {
        try {
            const response = await fetch(`${API_BASE}/terrain-map`);
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.terrain) {
                    console.log(`Loaded terrain map: ${data.terrain.length} cells`);
                    setTerrainMap(data.terrain);
                    if (data.labels) {
                        console.log(`Loaded ${data.labels.length} terrain labels`);
                        setTerrainLabels(data.labels);
                    }
                }
            } else {
                console.log('Terrain map endpoint not available (this is optional)');
            }
        } catch (err) {
            console.log('Terrain map not available (this is optional):', err.message);
        }
    };

    // Load vertical neighbors when room is selected
    useEffect(() => {
        if (selectedRoom) {
            loadVerticalNeighbors(selectedRoom.id);
        } else {
            setVerticalNeighbors([]);
        }
    }, [selectedRoom]);

    // Find adjacent rooms automatically when room is selected
    useEffect(() => {
        if (selectedRoom && rooms.length > 0) {
            const adjacent = [];
            const roomCoord = { x: selectedRoom.x, y: selectedRoom.y, z: selectedRoom.z };
            
            rooms.forEach(otherRoom => {
                if (otherRoom.id === selectedRoom.id) return;
                
                const dx = Math.abs(otherRoom.x - roomCoord.x);
                const dy = Math.abs(otherRoom.y - roomCoord.y);
                const dz = Math.abs(otherRoom.z - roomCoord.z);
                
                // Check if adjacent (same level: dx<=1, dy<=1, or vertical: dz===1, dx===0, dy===0)
                const isAdjacent = 
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0);
                
                if (isAdjacent) {
                    let dir = null;
                    if (dz === 1) dir = 'up';
                    else if (dz === -1) dir = 'down';
                    else if (otherRoom.x > roomCoord.x && otherRoom.y === roomCoord.y) dir = 'east';
                    else if (otherRoom.x < roomCoord.x && otherRoom.y === roomCoord.y) dir = 'west';
                    else if (otherRoom.x === roomCoord.x && otherRoom.y > roomCoord.y) dir = 'north';
                    else if (otherRoom.x === roomCoord.x && otherRoom.y < roomCoord.y) dir = 'south';
                    else if (otherRoom.x > roomCoord.x && otherRoom.y > roomCoord.y) dir = 'northeast';
                    else if (otherRoom.x < roomCoord.x && otherRoom.y > roomCoord.y) dir = 'northwest';
                    else if (otherRoom.x > roomCoord.x && otherRoom.y < roomCoord.y) dir = 'southeast';
                    else if (otherRoom.x < roomCoord.x && otherRoom.y < roomCoord.y) dir = 'southwest';
                    
                    if (dir) {
                        adjacent.push({ room: otherRoom, direction: dir });
                    }
                }
            });
            
            setAdjacentRooms(adjacent);
        } else {
            setAdjacentRooms([]);
        }
    }, [selectedRoom, rooms]);

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
                const updatedRooms = data.rooms || [];
                setRooms(updatedRooms);
                
                // Update selected room if it exists in the new data
                if (selectedRoom) {
                    const updatedSelectedRoom = updatedRooms.find(r => r.id === selectedRoom.id);
                    if (updatedSelectedRoom) {
                        setSelectedRoom(updatedSelectedRoom);
                    }
                }
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

    const loadVerticalNeighbors = async (roomId) => {
        try {
            console.log('Loading vertical neighbors for:', roomId);
            const response = await fetch(`${API_BASE}/vertical-neighbors/${roomId}`);
            const data = await response.json();
            console.log('Vertical neighbors response:', data);
            if (data.success) {
                const neighbors = data.neighbors || [];
                console.log(`Found ${neighbors.length} vertical neighbors:`, neighbors);
                setVerticalNeighbors(neighbors);
            } else {
                console.error('Failed to load vertical neighbors:', data.error);
                setVerticalNeighbors([]);
            }
        } catch (err) {
            console.error('Error loading vertical neighbors:', err);
            setVerticalNeighbors([]);
        }
    };

    const updateRoomData = async (roomId, description, items) => {
        try {
            const response = await fetch(`${API_BASE}/room-data`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomId, description, items })
            });

            const data = await response.json();
            if (data.success) {
                await loadMapData();
                // Update selected room if it's the one we edited
                if (selectedRoom?.id === roomId) {
                    const updatedRoom = rooms.find(r => r.id === roomId);
                    if (updatedRoom) {
                        setSelectedRoom(updatedRoom);
                    }
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

    const updateExitConfig = async (roomId, direction, config) => {
        try {
            const response = await fetch(`${API_BASE}/exit-config`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomId, direction, config })
            });

            const data = await response.json();
            if (data.success) {
                await loadMapData();
                // Update selected room if it's the one we edited
                if (selectedRoom?.id === roomId) {
                    const updatedRoom = rooms.find(r => r.id === roomId);
                    if (updatedRoom) {
                        setSelectedRoom(updatedRoom);
                    }
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

    const toggleVerticalConnection = async (roomId, direction, targetRoomId, enabled) => {
        try {
            const response = await fetch(`${API_BASE}/toggle-vertical`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomId, direction, targetRoomId, enabled })
            });

            const data = await response.json();
            if (data.success) {
                // Immediately update the selected room with new exits from API response
                if (selectedRoom?.id === roomId) {
                    const updatedExits = data.exits || {};
                    setSelectedRoom(prev => ({
                        ...prev,
                        exits: updatedExits
                    }));
                }
                
                // Reload map data to get updated exits for all rooms
                await loadMapData();
                
                // Reload vertical neighbors to refresh the list
                await loadVerticalNeighbors(roomId);
                
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

    // Initialize visible levels when levels change (all visible by default)
    // Only initialize once, then only add new levels that appear
    useEffect(() => {
        if (levels.length > 0) {
            // Create a stable string representation of levels to detect actual content changes
            const levelsKey = levels.sort((a, b) => a - b).join(',');
            
            // Only update if the actual level values have changed (not just array reference)
            if (levelsKey === lastLevelsRef.current) {
                return; // Levels haven't actually changed, don't update visibility
            }
            
            lastLevelsRef.current = levelsKey;
            
            setVisibleLevels(prev => {
                // If not yet initialized, initialize with all levels
                if (!levelsInitializedRef.current && prev.size === 0) {
                    levelsInitializedRef.current = true;
                    return new Set(levels);
                }
                // Otherwise, only add any new levels that appear (preserve existing visibility state)
                const newVisible = new Set(prev);
                let changed = false;
                levels.forEach(level => {
                    if (!newVisible.has(level)) {
                        newVisible.add(level);
                        changed = true;
                    }
                });
                return changed ? newVisible : prev;
            });
        }
    }, [levels]);

    // Filter levels based on visibility
    const visibleLevelsArray = useMemo(() => {
        return levels.filter(level => visibleLevels.has(level));
    }, [levels, visibleLevels]);

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

    // Center camera on a specific room
    const centerOnRoom = (room) => {
        if (!room || !canvasRef.current) return;
        
        // Calculate global bounds
        const xs = rooms.map(r => r.x);
        const ys = rooms.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        
        // Calculate cell size (same as in draw function)
        const worldWidth = maxX - minX + 1;
        const worldHeight = maxY - minY + 1;
        const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
        const canvas = canvasRef.current;
        const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
        
        // Calculate pan offsets to center the room
        const panX = -(room.x - centerX) * cellSize;
        const panY = -(room.y - centerY) * cellSize;
        
        // Update camera to center on room
        setCamera(prev => ({
            ...prev,
            panX: panX,
            panY: panY
        }));
        
        // Make sure the room's Z level is visible
        setVisibleLevels(prev => {
            const newSet = new Set(prev);
            newSet.add(room.z);
            return newSet;
        });
        
        // Select the room
        setSelectedRoom(room);
    };

    // Search for rooms by name
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            setShowSearchResults(false);
            return;
        }
        
        const query = searchQuery.toLowerCase();
        const results = rooms
            .filter(room => 
                room.name.toLowerCase().includes(query) || 
                room.id.toLowerCase().includes(query)
            )
            .slice(0, 10) // Limit to 10 results
            .sort((a, b) => {
                // Sort by relevance (exact matches first, then by name)
                const aNameMatch = a.name.toLowerCase().startsWith(query);
                const bNameMatch = b.name.toLowerCase().startsWith(query);
                if (aNameMatch && !bNameMatch) return -1;
                if (!aNameMatch && bNameMatch) return 1;
                return a.name.localeCompare(b.name);
            });
        
        setSearchResults(results);
        setShowSearchResults(results.length > 0);
    }, [searchQuery, rooms]);

    // Draw the 3D scene
    useEffect(() => {
        if (!canvasRef.current) {
            console.log('Canvas ref not available');
            return;
        }
        
        // Draw effect triggered
        
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
            
            // Rendering canvas

        // Draw rooms (only from visible levels)
        const roomProjections = [];
        rooms.forEach(room => {
            // Only render rooms from visible levels
            if (!visibleLevels.has(room.z)) return;
            
            const z = room.z * levelSpacing;
            const proj = project3D(
                (room.x - centerX) * cellSize + camera.panX,
                (room.y - centerY) * cellSize + camera.panY,
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

        // Draw terrain map as background (only on ground level and if enabled)
        if (showTerrain && terrainMap && terrainMap.length > 0 && visibleLevels.has(0)) {
            const terrainColors = {
                mountain: 'rgba(100, 100, 100, 0.4)',    // Gray - ^
                mount_doom: 'rgba(200, 50, 0, 0.6)',    // Dark red/orange - M (Mount Doom)
                forest: 'rgba(0, 100, 0, 0.3)',        // Green - f
                hill: 'rgba(139, 90, 43, 0.3)',        // Brown - h
                river: 'rgba(0, 100, 200, 0.4)',        // Blue - |
                hobbit_route: 'rgba(255, 220, 0, 0.7)', // Bright Yellow - * (route they took) - VERY VISIBLE
                path: 'rgba(240, 240, 240, 0.6)',      // Very light gray - p - VERY VISIBLE
                road: 'rgba(200, 200, 200, 0.6)',       // Light gray - R - VERY VISIBLE
                gulf: 'rgba(0, 150, 255, 0.5)',         // Light blue - G (gulf of water)
                marsh: 'rgba(50, 100, 50, 0.3)',        // Dark green - m
                coast: 'rgba(200, 200, 150, 0.4)',      // Beige/tan - C (coast)
                ocean: 'rgba(0, 100, 200, 0.5)',        // Deep blue - O (ocean, deep)
                sea: 'rgba(0, 150, 220, 0.45)',         // Medium blue - S (sea, not as deep as ocean)
                lake: 'rgba(0, 150, 255, 0.4)',         // Light blue - L, ~
                shire: 'rgba(100, 200, 100, 0.3)',      // Light green - :
                plains: 'rgba(50, 50, 50, 0.05)'        // Very faint - blank
            };
            
            terrainMap.forEach(terrainCell => {
                if (terrainCell.type === 'plains') return; // Skip plains to reduce clutter
                
                const terrainColor = terrainColors[terrainCell.type] || terrainColors.plains;
                const proj = project3D(
                    (terrainCell.x - centerX) * cellSize + camera.panX,
                    (terrainCell.y - centerY) * cellSize + camera.panY,
                    0,
                    { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
                );
                
                if (proj.z > -10000) {
                    const size = cellSize * proj.scale * 0.9; // Slightly larger for better visibility
                    ctx.fillStyle = terrainColor;
                    ctx.fillRect(proj.x - size / 2, proj.y - size / 2, size, size);
                    
                    // Add prominent border for paths, roads, and hobbit routes to make them more visible
                    if (terrainCell.type === 'path' || terrainCell.type === 'road' || terrainCell.type === 'hobbit_route') {
                        if (terrainCell.type === 'hobbit_route') {
                            ctx.strokeStyle = 'rgba(255, 200, 0, 1.0)'; // Bright yellow border
                        } else if (terrainCell.type === 'path') {
                            ctx.strokeStyle = 'rgba(200, 200, 200, 0.9)'; // Light gray border
                        } else if (terrainCell.type === 'road') {
                            ctx.strokeStyle = 'rgba(150, 150, 150, 0.9)'; // Medium gray border
                        }
                        ctx.lineWidth = 2;
                        ctx.strokeRect(proj.x - size / 2, proj.y - size / 2, size, size);
                    }
                }
            });
            
            // Draw terrain labels
            if (terrainLabels && terrainLabels.length > 0) {
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                
                terrainLabels.forEach(label => {
                    const proj = project3D(
                        (label.x - centerX) * cellSize + camera.panX,
                        (label.y - centerY) * cellSize + camera.panY,
                        0,
                        { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
                    );
                    
                    if (proj.z > -10000) {
                        const textX = proj.x + 8;
                        const textY = proj.y;
                        
                        // Draw text with black outline for visibility
                        ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';
                        ctx.lineWidth = 4;
                        ctx.lineJoin = 'round';
                        ctx.miterLimit = 2;
                        ctx.strokeText(label.text, textX, textY);
                        
                        // Draw white text on top
                        ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
                        ctx.fillText(label.text, textX, textY);
                    }
                });
            }
        }

        // Draw grid background for each level (simplified - just draw corners)
        visibleLevelsArray.forEach((level) => {
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
            
            // Special highlighting for important rooms
            const isBagEnd = room.id === 'bag_end';
            const isMountDoom = room.id === 'mount_doom_summit';
            
            // Apply drag offset if this is the dragged room
            let drawX = proj.x;
            let drawY = proj.y;
            if (isDragged) {
                drawX += dragOffset.x;
                drawY += dragOffset.y;
            }
            
            const size = Math.max(6, Math.min(25, cellSize * proj.scale * 0.5));
            
            // Draw room with special colors for important rooms
            if (isBagEnd) {
                ctx.fillStyle = '#FFD700'; // Bright gold
            } else if (isMountDoom) {
                ctx.fillStyle = '#FF0000'; // Bright red
            } else if (overlap) {
                ctx.fillStyle = '#ff4444';
            } else if (isSelected) {
                ctx.fillStyle = '#4a9eff';
            } else if (isHovered) {
                ctx.fillStyle = '#6ab0ff';
            } else if (room.z < 0) {
                ctx.fillStyle = '#5a2a5a';
            } else if (room.z > 0) {
                ctx.fillStyle = '#5a5a2a';
            } else {
                ctx.fillStyle = '#2d5a87';
            }
            ctx.fillRect(drawX - size / 2, drawY - size / 2, size, size);
            
            // Draw border with special styling for important rooms
            if (isBagEnd) {
                ctx.strokeStyle = '#FFA500'; // Orange border
                ctx.lineWidth = 3;
            } else if (isMountDoom) {
                ctx.strokeStyle = '#8B0000'; // Dark red border
                ctx.lineWidth = 3;
            } else if (isSelected) {
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
            } else if (isDragged) {
                ctx.strokeStyle = '#ffff00';
                ctx.lineWidth = 2;
            } else {
                ctx.strokeStyle = '#4a9eff';
                ctx.lineWidth = 1;
            }
            ctx.strokeRect(drawX - size / 2, drawY - size / 2, size, size);
            
            // Draw glow effect for special rooms
            if (isBagEnd || isMountDoom) {
                ctx.shadowBlur = 15;
                ctx.shadowColor = isBagEnd ? 'rgba(255, 215, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';
                ctx.strokeRect(drawX - size / 2, drawY - size / 2, size, size);
                ctx.shadowBlur = 0;
            }
            
            // Draw icon or dot
            if (isBagEnd) {
                // Draw a house icon (square with triangle roof)
                ctx.fillStyle = '#000';
                ctx.fillRect(drawX - size * 0.25, drawY, size * 0.5, size * 0.3);
                ctx.beginPath();
                ctx.moveTo(drawX - size * 0.3, drawY);
                ctx.lineTo(drawX, drawY - size * 0.3);
                ctx.lineTo(drawX + size * 0.3, drawY);
                ctx.closePath();
                ctx.fill();
            } else if (isMountDoom) {
                // Draw a flame icon (triangle with wavy top)
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.moveTo(drawX, drawY - size * 0.3);
                ctx.lineTo(drawX - size * 0.2, drawY + size * 0.2);
                ctx.lineTo(drawX + size * 0.2, drawY + size * 0.2);
                ctx.closePath();
                ctx.fill();
                // Add a small circle for fire effect
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(drawX, drawY, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
            } else if (!overlap) {
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

        // Level labels removed - now controlled by GUI toggle panel

        // Draw compass directions (N/S/E/W) - projected in 3D space so they rotate with the world
        // Position them at the edges of the visible world
        const compassDistance = Math.max(globalBounds.width, globalBounds.height) * cellSize * 0.6;
        const compassZ = 0; // At ground level
        
        // North (positive Y in world coordinates)
        const northProj = project3D(
            0,
            compassDistance,
            compassZ,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        
        // South (negative Y in world coordinates)
        const southProj = project3D(
            0,
            -compassDistance,
            compassZ,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        
        // East (positive X in world coordinates)
        const eastProj = project3D(
            compassDistance,
            0,
            compassZ,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        
        // West (negative X in world coordinates)
        const westProj = project3D(
            -compassDistance,
            0,
            compassZ,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        
        // Only draw if in front of camera
        const compassLabels = [
            { proj: northProj, label: 'N', color: '#0f0' },
            { proj: southProj, label: 'S', color: '#f00' },
            { proj: eastProj, label: 'E', color: '#ff0' },
            { proj: westProj, label: 'W', color: '#0ff' }
        ];
        
        compassLabels.forEach(({ proj, label, color }) => {
            if (proj.z > -10000) {
                // Draw label with background for visibility
                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.fillRect(proj.x - 20, proj.y - 20, 40, 40);
                
                ctx.fillStyle = color;
                ctx.font = 'bold 32px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, proj.x, proj.y);
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
    }, [rooms, globalBounds, levels, roomsByLevel, camera, selectedRoom, draggedRoom, overlaps, dragOffset, hoveredRoom, visibleLevels, visibleLevelsArray, terrainMap, terrainLabels, showTerrain]);

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
                (room.x - centerX) * cellSize + camera.panX,
                (room.y - centerY) * cellSize + camera.panY,
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

    // Convert 2D screen position to 3D world coordinates
    // Uses iterative approach: find closest room, then calculate offset
    const screenToWorld = (mouseX, mouseY, canvas, globalBounds, camera, targetZ = 0) => {
        if (!globalBounds || rooms.length === 0) return null;
        
        const centerX = (globalBounds.minX + globalBounds.maxX) / 2;
        const centerY = (globalBounds.minY + globalBounds.maxY) / 2;
        const worldWidth = globalBounds.width;
        const worldHeight = globalBounds.height;
        const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
        const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
        const levelSpacing = cellSize * 2.5;
        const z = targetZ * levelSpacing;
        
        // Find the closest room to the click position
        let closestRoom = null;
        let minDist = Infinity;
        
        rooms.forEach(room => {
            if (room.z !== targetZ) return; // Only check rooms on the target Z level
            
            const roomWorldX = (room.x - centerX) * cellSize + camera.panX;
            const roomWorldY = (room.y - centerY) * cellSize + camera.panY;
            const proj = project3D(
                roomWorldX,
                roomWorldY,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            const dist = Math.sqrt((mouseX - proj.x) ** 2 + (mouseY - proj.y) ** 2);
            if (dist < minDist) {
                minDist = dist;
                closestRoom = { room, proj, worldX: roomWorldX, worldY: roomWorldY };
            }
        });
        
        if (!closestRoom) {
            // No room found, use center-based calculation
            const centerProj = project3D(
                camera.panX,
                camera.panY,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            const screenDX = mouseX - centerProj.x;
            const screenDY = mouseY - centerProj.y;
            
            // Project test points to calculate scale
            const testXProj = project3D(
                camera.panX + cellSize,
                camera.panY,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            const testYProj = project3D(
                camera.panX,
                camera.panY + cellSize,
                z,
                { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
            );
            
            const worldUnitsPerPixelX = cellSize / Math.max(0.1, Math.abs(testXProj.x - centerProj.x));
            const worldUnitsPerPixelY = cellSize / Math.max(0.1, Math.abs(testYProj.y - centerProj.y));
            
            const worldDX = screenDX * worldUnitsPerPixelX;
            const worldDY = screenDY * worldUnitsPerPixelY;
            
            return {
                x: Math.round(centerX + worldDX / cellSize),
                y: Math.round(centerY + worldDY / cellSize),
                z: targetZ
            };
        }
        
        // Calculate screen offset from closest room
        const screenDX = mouseX - closestRoom.proj.x;
        const screenDY = mouseY - closestRoom.proj.y;
        
        // Project test points near the closest room to calculate scale
        const testXProj = project3D(
            closestRoom.worldX + cellSize,
            closestRoom.worldY,
            z,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        const testYProj = project3D(
            closestRoom.worldX,
            closestRoom.worldY + cellSize,
            z,
            { ...camera, offsetX: canvas.width / 2, offsetY: canvas.height / 2 }
        );
        
        // Calculate how many world units per screen pixel
        const worldUnitsPerPixelX = cellSize / Math.max(0.1, Math.abs(testXProj.x - closestRoom.proj.x));
        const worldUnitsPerPixelY = cellSize / Math.max(0.1, Math.abs(testYProj.y - closestRoom.proj.y));
        
        // Convert screen offset to world offset
        const worldDX = screenDX * worldUnitsPerPixelX;
        const worldDY = screenDY * worldUnitsPerPixelY;
        
        // Convert from world space offset to grid coordinate offset
        const gridDX = worldDX / cellSize;
        const gridDY = worldDY / cellSize;
        
        // Calculate the target grid position
        let targetX = Math.round(closestRoom.room.x + gridDX);
        let targetY = Math.round(closestRoom.room.y + gridDY);
        
        // Check if this position overlaps with an existing room, and if so, find nearest empty space
        const existingCoords = new Set(rooms.filter(r => r.z === targetZ).map(r => `${r.x},${r.y}`));
        const targetKey = `${targetX},${targetY}`;
        
        if (existingCoords.has(targetKey)) {
            // Find nearest empty space in a spiral pattern
            let found = false;
            for (let radius = 1; radius <= 5 && !found; radius++) {
                for (let dx = -radius; dx <= radius && !found; dx++) {
                    for (let dy = -radius; dy <= radius && !found; dy++) {
                        if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                            const testX = targetX + dx;
                            const testY = targetY + dy;
                            const testKey = `${testX},${testY}`;
                            if (!existingCoords.has(testKey)) {
                                targetX = testX;
                                targetY = testY;
                                found = true;
                            }
                        }
                    }
                }
            }
        }
        
        return {
            x: targetX,
            y: targetY,
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
        
        // Right-click to create room at mouse position
        if (e.button === 2) {
            e.preventDefault();
            const worldPos = screenToWorld(mouseX, mouseY, canvas, globalBounds, camera, 0);
            if (worldPos) {
                setRightClickWorldPos(worldPos);
                // Open create room dialog with coordinates pre-filled
                setNewRoomData({
                    roomId: generateRoomId(), // Auto-generate UID
                    name: '',
                    description: '',
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z,
                    items: '',
                    enemies: ''
                });
                setShowCreateRoom(true);
            }
            return;
        }
        
        // Shift+Left-click for panning
        if (e.button === 0 && e.shiftKey) {
            e.preventDefault();
            setIsPanning(true);
            setIsDragging(true);
            setDragStart({ x: mouseX, y: mouseY });
            setDraggedRoom(null);
            return;
        }
        
        const clickedRoom = findRoomAtPosition(mouseX, mouseY, canvas, globalBounds, levels, rooms, camera);
        
        if (clickedRoom) {
            if (e.button === 0 && !e.ctrlKey && !e.shiftKey) { // Left click - select
                setSelectedRoom(clickedRoom);
            } else if (e.button === 0 && (e.ctrlKey || e.metaKey)) { // Ctrl/Cmd + Left click - start drag
                e.preventDefault();
                console.log('Starting drag on room:', clickedRoom.id, clickedRoom);
                setDraggedRoom(clickedRoom);
                setDragStart({ x: mouseX, y: mouseY });
                setDragOffset({ x: 0, y: 0 });
                // Store the initial world position
                setDragStartWorldPos({ x: clickedRoom.x, y: clickedRoom.y, z: clickedRoom.z });
                setIsDragging(true);
            }
        } else {
            // Start camera drag (left click on background)
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
            // Calculate drag offset for room
            const dx = mouseX - dragStart.x;
            const dy = mouseY - dragStart.y;
            setDragOffset({ x: dx, y: dy });
        } else {
            // Check if panning (Shift+left-click only now, right-click is for room creation)
            if (isPanning || (e.buttons === 1 && e.shiftKey)) {
                // Pan the camera
                const dx = mouseX - dragStart.x;
                const dy = mouseY - dragStart.y;
                setCamera(prev => ({
                    ...prev,
                    panX: prev.panX + dx * 1.0,  // Increased sensitivity
                    panY: prev.panY + dy * 1.0
                }));
                setDragStart({ x: mouseX, y: mouseY });
            } else {
                // Rotate camera (left click drag)
                const dx = mouseX - dragStart.x;
                const dy = mouseY - dragStart.y;
                setCamera(prev => {
                    // Allow continuous rotation for Y (no clamping during drag)
                    const newAngleY = prev.angleY + dx * 0.5;
                    
                    // Allow full 180 degree rotation for X
                    const newAngleX = Math.max(-180, Math.min(180, prev.angleX - dy * 0.5));
                    
                    return {
                        ...prev,
                        angleY: newAngleY,
                        angleX: newAngleX
                    };
                });
                setDragStart({ x: mouseX, y: mouseY });
            }
        }
    };

    // Convert screen-space offset to world-space offset accounting for camera rotation
    // Uses a simpler approach: project two nearby points and calculate the difference
    const screenOffsetToWorldOffset = (screenDX, screenDY, worldZ, camera, cellSize, canvasWidth, canvasHeight, centerX, centerY) => {
        // Project the origin point (0, 0) in world space relative to center
        const originProj = project3D(0, 0, worldZ, { ...camera, offsetX: canvasWidth / 2, offsetY: canvasHeight / 2 });
        
        // Calculate what world-space offset corresponds to the screen offset
        // We'll use a small test offset in world space and see how it projects
        const testWorldOffset = 1; // 1 unit in world space
        const testXProj = project3D(testWorldOffset, 0, worldZ, { ...camera, offsetX: canvasWidth / 2, offsetY: canvasHeight / 2 });
        const testYProj = project3D(0, testWorldOffset, worldZ, { ...camera, offsetX: canvasWidth / 2, offsetY: canvasHeight / 2 });
        
        // Calculate how many world units per screen pixel in X and Y directions
        const worldUnitsPerPixelX = testWorldOffset / (testXProj.x - originProj.x);
        const worldUnitsPerPixelY = testWorldOffset / (testYProj.y - originProj.y);
        
        // Convert screen offset to world offset
        const worldDX = screenDX * worldUnitsPerPixelX;
        const worldDY = screenDY * worldUnitsPerPixelY;
        
        // Convert from world units to grid coordinates
        return {
            x: worldDX / cellSize,
            y: worldDY / cellSize
        };
    };

    const handleMouseUp = async (e) => {
        // Reset panning state
        if (isPanning) {
            setIsPanning(false);
        }
        
        console.log('handleMouseUp called', { draggedRoom: !!draggedRoom, isDragging, dragStartWorldPos: !!dragStartWorldPos, dragOffset });
        
        if (draggedRoom && isDragging && dragStartWorldPos) {
            console.log('Drag conditions met, dragOffset:', dragOffset);
            
            // Only update if there was significant movement (lower threshold for testing)
            if (Math.abs(dragOffset.x) > 2 || Math.abs(dragOffset.y) > 2) {
                const canvas = canvasRef.current;
                if (!canvas || !globalBounds) {
                    console.log('Missing canvas or globalBounds');
                    setDraggedRoom(null);
                    setDragOffset({ x: 0, y: 0 });
                    setDragStartWorldPos(null);
                    setIsDragging(false);
                    return;
                }
                
                const centerX = (globalBounds.minX + globalBounds.maxX) / 2;
                const centerY = (globalBounds.minY + globalBounds.maxY) / 2;
                const worldWidth = globalBounds.width;
                const worldHeight = globalBounds.height;
                const maxWorldDim = Math.max(worldWidth, worldHeight, 1);
                const cellSize = Math.min(30, Math.max(10, (Math.min(canvas.width, canvas.height) * 0.6) / maxWorldDim));
                const levelSpacing = cellSize * 2.5;
                const z = dragStartWorldPos.z * levelSpacing;
                
                // Convert screen-space drag offset to world-space offset
                // This properly accounts for camera rotation
                const worldOffset = screenOffsetToWorldOffset(
                    dragOffset.x,
                    dragOffset.y,
                    z,
                    camera,
                    cellSize,
                    canvas.width,
                    canvas.height,
                    centerX,
                    centerY
                );
                
                // Calculate new world position from initial position + offset
                const newX = Math.round(dragStartWorldPos.x + worldOffset.x);
                const newY = Math.round(dragStartWorldPos.y + worldOffset.y);
                
                console.log('Moving room:', {
                    initial: dragStartWorldPos,
                    dragOffset,
                    camera: { angleX: camera.angleX, angleY: camera.angleY },
                    worldOffset,
                    newPos: { x: newX, y: newY, z: dragStartWorldPos.z }
                });
                
                const success = await updateRoomCoordinates(
                    draggedRoom.id,
                    newX,
                    newY,
                    dragStartWorldPos.z
                );
                
                if (!success) {
                    console.log('Failed to update room coordinates');
                } else {
                    console.log('Room coordinates updated successfully');
                }
            } else {
                console.log('Drag offset too small:', dragOffset);
            }
        }
        
        setDraggedRoom(null);
        setDragOffset({ x: 0, y: 0 });
        setDragStartWorldPos(null);
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
            padding: '0', 
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
            margin: 0,
            display: 'flex',
            flexDirection: 'row'
        }}>
            {/* Left side: Canvas area */}
            <div style={{ 
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                overflow: 'hidden'
            }}>
                {/* Top header with controls */}
                <div style={{ 
                    flexShrink: 0,
                    background: '#0f0f1e', 
                    zIndex: 100, 
                    padding: '15px', 
                    boxSizing: 'border-box',
                    borderBottom: '2px solid #16213e'
                }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap' }}>
                    {onBackToGame && (
                        <button 
                            onClick={onBackToGame}
                            style={{ 
                                padding: '8px 16px', 
                                cursor: 'pointer', 
                                background: '#4a9eff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            ← Back to Game
                        </button>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ whiteSpace: 'nowrap' }}>View Angle X: </label>
                        <input
                            type="range"
                            min="-180"
                            max="180"
                            value={camera.angleX}
                            onChange={(e) => setCamera({ ...camera, angleX: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ minWidth: '40px' }}>{camera.angleX}°</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ whiteSpace: 'nowrap' }}>View Angle Y: </label>
                        <input
                            type="range"
                            min="-720"
                            max="720"
                            value={camera.angleY}
                            onChange={(e) => setCamera({ ...camera, angleY: parseInt(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ minWidth: '50px' }}>{Math.round(camera.angleY)}°</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ whiteSpace: 'nowrap' }}>Zoom: </label>
                        <input
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={camera.zoom}
                            onChange={(e) => setCamera({ ...camera, zoom: parseFloat(e.target.value) })}
                            style={{ width: '150px' }}
                        />
                        <span style={{ minWidth: '40px' }}>{camera.zoom.toFixed(1)}x</span>
                    </div>
                    {overlaps.length > 0 && (
                        <span style={{ color: 'red', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                            ⚠️ {overlaps.length} overlap(s) detected!
                        </span>
                    )}
                </div>
                
                {/* Room Search */}
                <div style={{ 
                    position: 'relative',
                    marginTop: '10px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label style={{ whiteSpace: 'nowrap', color: '#aaa' }}>🔍 Search Rooms:</label>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowSearchResults(true);
                            }}
                            onFocus={() => {
                                if (searchResults.length > 0) {
                                    setShowSearchResults(true);
                                }
                            }}
                            onBlur={() => {
                                // Delay hiding to allow clicking on results
                                setTimeout(() => setShowSearchResults(false), 200);
                            }}
                            placeholder="Type room name or ID..."
                            style={{ 
                                flex: 1,
                                padding: '8px 12px',
                                background: '#1a1a2e',
                                color: '#fff',
                                border: '1px solid #4a9eff',
                                borderRadius: '4px',
                                fontSize: '14px',
                                minWidth: '200px'
                            }}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSearchResults([]);
                                    setShowSearchResults(false);
                                }}
                                style={{
                                    padding: '8px 12px',
                                    background: '#666',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    
                    {/* Search Results Dropdown */}
                    {showSearchResults && searchResults.length > 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '5px',
                            background: '#1a1a2e',
                            border: '2px solid #4a9eff',
                            borderRadius: '4px',
                            maxHeight: '300px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
                        }}>
                            {searchResults.map((room, idx) => (
                                <div
                                    key={room.id}
                                    onClick={() => {
                                        centerOnRoom(room);
                                        setSearchQuery('');
                                        setShowSearchResults(false);
                                    }}
                                    style={{
                                        padding: '12px',
                                        cursor: 'pointer',
                                        borderBottom: idx < searchResults.length - 1 ? '1px solid #333' : 'none',
                                        background: selectedRoom?.id === room.id ? '#2a4a2a' : 'transparent',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#2a4a4a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = selectedRoom?.id === room.id ? '#2a4a2a' : 'transparent';
                                    }}
                                >
                                    <div style={{ 
                                        fontWeight: 'bold', 
                                        color: '#4a9eff',
                                        fontSize: '14px',
                                        marginBottom: '4px'
                                    }}>
                                        {room.name}
                                    </div>
                                    <div style={{ 
                                        fontSize: '11px', 
                                        color: '#aaa',
                                        marginBottom: '2px'
                                    }}>
                                        ID: {room.id}
                                    </div>
                                    <div style={{ 
                                        fontSize: '11px', 
                                        color: '#888'
                                    }}>
                                        Location: ({room.x}, {room.y}, {room.z})
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {searchQuery && searchResults.length === 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '5px',
                            padding: '12px',
                            background: '#1a1a2e',
                            border: '2px solid #666',
                            borderRadius: '4px',
                            color: '#aaa',
                            fontSize: '14px'
                        }}>
                            No rooms found matching "{searchQuery}"
                        </div>
                    )}
                </div>
                
                {/* Level Visibility Toggle Panel */}
                <div style={{ 
                    background: '#222', 
                    padding: '15px', 
                    borderRadius: '5px',
                    marginBottom: '15px',
                    border: '2px solid #4a9eff'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}>
                        <strong style={{ color: '#4a9eff', fontSize: '16px' }}>Level Visibility:</strong>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', marginRight: '10px' }}>
                            <input
                                type="checkbox"
                                checked={showTerrain}
                                onChange={(e) => setShowTerrain(e.target.checked)}
                                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                            />
                            <span style={{ color: '#aaa', fontSize: '12px' }}>Show Terrain</span>
                        </label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={() => setVisibleLevels(new Set(levels))}
                                style={{ 
                                    padding: '5px 10px', 
                                    fontSize: '12px', 
                                    cursor: 'pointer', 
                                    background: '#4a9eff', 
                                    color: '#fff', 
                                    border: 'none', 
                                    borderRadius: '3px' 
                                }}
                            >
                                Show All
                            </button>
                            <button
                                onClick={() => setVisibleLevels(new Set())}
                                style={{ 
                                    padding: '5px 10px', 
                                    fontSize: '12px', 
                                    cursor: 'pointer', 
                                    background: '#666', 
                                    color: '#fff', 
                                    border: 'none', 
                                    borderRadius: '3px' 
                                }}
                            >
                                Hide All
                            </button>
                        </div>
                    </div>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                        gap: '8px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        padding: '5px'
                    }}>
                        {levels.map((level) => {
                            const isVisible = visibleLevels.has(level);
                            let levelName;
                            if (level === 0) {
                                levelName = 'Ground';
                            } else if (level > 0) {
                                levelName = level <= 7 ? `Level +${level}` : `Mountain +${level}`;
                            } else {
                                levelName = `Underground ${level}`;
                            }
                            const roomCount = roomsByLevel[level]?.length || 0;
                            
                            return (
                                <label
                                    key={level}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '8px',
                                        background: isVisible ? '#2a4a2a' : '#4a2a2a',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        border: `2px solid ${isVisible ? '#4aff4a' : '#666'}`,
                                        userSelect: 'none'
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isVisible}
                                        onChange={(e) => {
                                            const newVisible = new Set(visibleLevels);
                                            if (e.target.checked) {
                                                newVisible.add(level);
                                            } else {
                                                newVisible.delete(level);
                                            }
                                            setVisibleLevels(newVisible);
                                        }}
                                        style={{
                                            width: '18px',
                                            height: '18px',
                                            cursor: 'pointer',
                                            accentColor: '#4a9eff',
                                            flexShrink: 0
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ 
                                            fontWeight: 'bold', 
                                            color: isVisible ? '#4aff4a' : '#aaa',
                                            fontSize: '13px'
                                        }}>
                                            {levelName}
                                        </div>
                                        <div style={{ 
                                            fontSize: '11px', 
                                            color: '#888' 
                                        }}>
                                            Z={level} • {roomCount} rooms
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
                
                </div>
                
                {/* Canvas */}
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                    <canvas
                        ref={canvasRef}
                        style={{
                            width: '100%',
                            height: '100%',
                            minHeight: '400px',
                            background: '#0a0a1a',
                            border: '2px solid #16213e',
                            borderRadius: '5px',
                            cursor: isDragging ? 'grabbing' : 'grab',
                            display: 'block',
                            boxSizing: 'border-box'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onContextMenu={(e) => {
                            e.preventDefault(); // Prevent context menu, right-click is used for creating rooms
                        }}
                    />
                </div>

                {/* Bottom action buttons */}
                <div style={{ 
                    flexShrink: 0,
                    padding: '15px',
                    background: '#0f0f1e',
                    borderTop: '2px solid #16213e'
                }}>
                    {overlaps.length > 0 && (
                        <div style={{ 
                            marginBottom: '15px', 
                            background: '#ff4444', 
                            padding: '8px', 
                            borderRadius: '5px',
                            maxHeight: showOverlaps ? '300px' : 'auto',
                            overflow: showOverlaps ? 'auto' : 'hidden'
                        }}>
                            <div 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    marginBottom: showOverlaps ? '8px' : '0'
                                }}
                                onClick={() => setShowOverlaps(!showOverlaps)}
                            >
                                <strong>⚠️ {overlaps.length} Overlap(s) Detected (Click to {showOverlaps ? 'hide' : 'show'})</strong>
                                <span style={{ fontSize: '12px' }}>{showOverlaps ? '▼' : '▶'}</span>
                            </div>
                            {showOverlaps && (
                                <div style={{ fontSize: '12px', maxHeight: '250px', overflowY: 'auto' }}>
                                    {overlaps.map((ov, idx) => (
                                        <div key={idx} style={{ marginTop: '5px', padding: '4px', background: 'rgba(0,0,0,0.2)', borderRadius: '3px' }}>
                                            <strong>{ov.coordinate}:</strong> {ov.rooms.map(r => r.name || r.id).join(', ')}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button 
                            onClick={() => {
                                const newRoomId = generateRoomId();
                                if (selectedRoom) {
                                    setNewRoomData({
                                        roomId: newRoomId,
                                        name: '',
                                        description: '',
                                        x: selectedRoom.x,
                                        y: selectedRoom.y,
                                        z: selectedRoom.z,
                                        items: '',
                                        enemies: ''
                                    });
                                } else {
                                    setNewRoomData({
                                        roomId: newRoomId,
                                        name: '',
                                        description: '',
                                        x: 0,
                                        y: 0,
                                        z: 0,
                                        items: '',
                                        enemies: ''
                                    });
                                }
                                setShowCreateRoom(true);
                            }}
                            style={{ padding: '10px 20px', cursor: 'pointer', background: '#4aff4a', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
                        >
                            ➕ Create New Room
                        </button>
                        <button 
                            onClick={loadMapData}
                            style={{ padding: '10px 20px', cursor: 'pointer', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '4px' }}
                        >
                            Refresh
                        </button>
                        <button 
                            onClick={loadOverlaps}
                            style={{ padding: '10px 20px', cursor: 'pointer', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '4px' }}
                        >
                            Check Overlaps
                        </button>
                        {overlaps.length > 0 && (
                            <button 
                                onClick={async () => {
                                    if (confirm(`This will remove ${overlaps.length} overlapping rooms. Continue?`)) {
                                        try {
                                            // Call cleanup script via API or directly
                                            const response = await fetch(`${API_BASE}/cleanup-overlaps`, { method: 'POST' });
                                            const data = await response.json();
                                            if (data.success) {
                                                alert(`Cleaned up ${data.removedCount || overlaps.length} overlapping rooms`);
                                                await loadMapData();
                                                loadOverlaps();
                                            } else {
                                                alert(`Error: ${data.error || 'Failed to cleanup overlaps'}`);
                                            }
                                        } catch (err) {
                                            alert(`Error: ${err.message}`);
                                        }
                                    }
                                }}
                                style={{ padding: '10px 20px', cursor: 'pointer', background: '#ff6b6b', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
                            >
                                🧹 Cleanup Overlaps
                            </button>
                        )}
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
                            style={{ padding: '10px 20px', cursor: 'pointer', background: '#ff6b6b', color: '#fff', border: 'none', borderRadius: '4px' }}
                        >
                            Cleanup Non-Adjacent Exits
                        </button>
                    </div>
                </div>
            </div>

            {/* Create Room Modal */}
            {showCreateRoom && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10000
                }}>
                    <div style={{
                        background: '#1a1a2e',
                        border: '2px solid #4a9eff',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '500px',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}>
                        <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#4a9eff' }}>Create New Room</h2>
                        {rightClickWorldPos && (
                            <div style={{ 
                                marginBottom: '15px', 
                                padding: '10px', 
                                background: '#4a2a4a', 
                                borderRadius: '4px',
                                border: '1px solid #ff4aff'
                            }}>
                                <div style={{ fontSize: '12px', color: '#ff4aff', marginBottom: '5px' }}>
                                    🖱️ Right-clicked at: ({rightClickWorldPos.x}, {rightClickWorldPos.y}, {rightClickWorldPos.z})
                                </div>
                            </div>
                        )}
                        <div style={{ 
                            marginBottom: '15px', 
                            padding: '10px', 
                            background: '#2a4a2a', 
                            borderRadius: '4px',
                            border: '1px solid #4aff4a'
                        }}>
                            <div style={{ fontSize: '12px', color: '#4aff4a', marginBottom: '5px' }}>
                                ✓ Room ID auto-generated
                            </div>
                            <div style={{ fontSize: '11px', color: '#aaa', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                                {newRoomData.roomId}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Room Name (required):</label>
                                <input
                                    type="text"
                                    value={newRoomData.name}
                                    onChange={(e) => setNewRoomData({ ...newRoomData, name: e.target.value })}
                                    placeholder="e.g., New Location"
                                    style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Description:</label>
                                <textarea
                                    value={newRoomData.description}
                                    onChange={(e) => setNewRoomData({ ...newRoomData, description: e.target.value })}
                                    placeholder="Room description..."
                                    rows={4}
                                    style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px', fontFamily: 'monospace' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>X:</label>
                                    <input
                                        type="number"
                                        value={newRoomData.x}
                                        onChange={(e) => setNewRoomData({ ...newRoomData, x: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Y:</label>
                                    <input
                                        type="number"
                                        value={newRoomData.y}
                                        onChange={(e) => setNewRoomData({ ...newRoomData, y: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Z:</label>
                                    <input
                                        type="number"
                                        value={newRoomData.z}
                                        onChange={(e) => setNewRoomData({ ...newRoomData, z: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Items (comma-separated):</label>
                                <input
                                    type="text"
                                    value={newRoomData.items}
                                    onChange={(e) => setNewRoomData({ ...newRoomData, items: e.target.value })}
                                    placeholder="e.g., item1, item2"
                                    style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', color: '#aaa' }}>Enemies (comma-separated):</label>
                                <input
                                    type="text"
                                    value={newRoomData.enemies}
                                    onChange={(e) => setNewRoomData({ ...newRoomData, enemies: e.target.value })}
                                    placeholder="e.g., enemy1, enemy2"
                                    style={{ width: '100%', padding: '8px', background: '#111', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <button
                                    onClick={async () => {
                                        if (!newRoomData.name || newRoomData.name.trim() === '') {
                                            alert('Room Name is required!');
                                            return;
                                        }
                                        
                                        // Ensure room ID is generated if somehow missing
                                        if (!newRoomData.roomId || newRoomData.roomId.trim() === '') {
                                            setNewRoomData({ ...newRoomData, roomId: generateRoomId() });
                                            // Wait a tick for state to update
                                            await new Promise(resolve => setTimeout(resolve, 0));
                                        }
                                        
                                        try {
                                            const itemsArray = newRoomData.items ? newRoomData.items.split(',').map(i => i.trim()).filter(i => i) : [];
                                            const enemiesArray = newRoomData.enemies ? newRoomData.enemies.split(',').map(e => e.trim()).filter(e => e) : [];
                                            
                                            const requestBody = {
                                                roomId: newRoomData.roomId || generateRoomId(),
                                                name: newRoomData.name.trim(),
                                                description: newRoomData.description || `You are in ${newRoomData.name}.`,
                                                x: parseInt(newRoomData.x) || 0,
                                                y: parseInt(newRoomData.y) || 0,
                                                z: parseInt(newRoomData.z) || 0,
                                                items: itemsArray,
                                                enemies: enemiesArray
                                            };
                                            
                                            console.log('Creating room with data:', requestBody);
                                            
                                            const response = await fetch(`${API_BASE}/create-room`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(requestBody)
                                            });
                                            
                                            const data = await response.json();
                                            if (data.success) {
                                                const createdRoomName = newRoomData.name;
                                                setShowCreateRoom(false);
                                                setNewRoomData({ roomId: generateRoomId(), name: '', description: '', x: 0, y: 0, z: 0, items: '', enemies: '' });
                                                setRightClickWorldPos(null);
                                                await loadMapData();
                                                // Find and center on the newly created room
                                                const newRooms = await fetch(`${API_BASE}/data`).then(r => r.json());
                                                if (newRooms.success) {
                                                    const createdRoom = newRooms.rooms.find(r => r.id === requestBody.roomId);
                                                    if (createdRoom) {
                                                        centerOnRoom(createdRoom);
                                                    }
                                                }
                                                alert(`Room "${createdRoomName}" created successfully!`);
                                            } else {
                                                alert(`Error: ${data.error || 'Unknown error'}`);
                                            }
                                        } catch (err) {
                                            console.error('Error creating room:', err);
                                            alert(`Error: ${err.message || 'Failed to create room'}`);
                                        }
                                    }}
                                    style={{ 
                                        flex: 1, 
                                        padding: '10px', 
                                        cursor: 'pointer', 
                                        background: '#4aff4a', 
                                        color: '#000', 
                                        border: 'none', 
                                        borderRadius: '4px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Create Room
                                </button>
                                <button
                                    onClick={() => {
                                        setShowCreateRoom(false);
                                        setNewRoomData({ roomId: generateRoomId(), name: '', description: '', x: 0, y: 0, z: 0, items: '', enemies: '' });
                                        setRightClickWorldPos(null);
                                    }}
                                    style={{ 
                                        flex: 1, 
                                        padding: '10px', 
                                        cursor: 'pointer', 
                                        background: '#666', 
                                        color: '#fff', 
                                        border: 'none', 
                                        borderRadius: '4px'
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Right side: Room info panel */}
            <div style={{ 
                width: '400px',
                flexShrink: 0,
                background: '#0f0f1e',
                borderLeft: '2px solid #16213e',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                height: '100vh',
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                {selectedRoom ? (
                    <div style={{ 
                        padding: '15px', 
                        paddingTop: '15px',
                        fontSize: '14px',
                        flex: 1,
                        overflowY: 'auto',
                        overflowX: 'visible',
                        minHeight: 0,
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ marginBottom: '15px', padding: '10px', background: '#333', borderRadius: '4px' }}>
                            <div style={{ marginBottom: '5px' }}>
                                <strong style={{ fontSize: '16px' }}>{selectedRoom.name}</strong>
                            </div>
                            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                                ({selectedRoom.id})
                            </div>
                            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '10px' }}>
                                Coordinates: ({selectedRoom.x}, {selectedRoom.y}, {selectedRoom.z})
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <span style={{ fontSize: '12px', color: '#aaa' }}>Z Level:</span>
                                <button
                                    onClick={async () => {
                                        try {
                                            const response = await fetch(`${API_BASE}/change-z-level`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ roomId: selectedRoom.id, deltaZ: -1 })
                                            });
                                            const data = await response.json();
                                            if (data.success) {
                                                await loadMapData();
                                                const updatedRoom = rooms.find(r => r.id === selectedRoom.id);
                                                if (updatedRoom) setSelectedRoom(updatedRoom);
                                            } else {
                                                alert(`Error: ${data.error}`);
                                            }
                                        } catch (err) {
                                            alert(`Error: ${err.message}`);
                                        }
                                    }}
                                    style={{ 
                                        padding: '5px 10px', 
                                        fontSize: '12px', 
                                        cursor: 'pointer',
                                        background: '#4a9eff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '3px'
                                    }}
                                >
                                    ⬇️ Down
                                </button>
                                <button
                                    onClick={async () => {
                                        try {
                                            const response = await fetch(`${API_BASE}/change-z-level`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ roomId: selectedRoom.id, deltaZ: 1 })
                                            });
                                            const data = await response.json();
                                            if (data.success) {
                                                await loadMapData();
                                                const updatedRoom = rooms.find(r => r.id === selectedRoom.id);
                                                if (updatedRoom) setSelectedRoom(updatedRoom);
                                            } else {
                                                alert(`Error: ${data.error}`);
                                            }
                                        } catch (err) {
                                            alert(`Error: ${err.message}`);
                                        }
                                    }}
                                    style={{ 
                                        padding: '5px 10px', 
                                        fontSize: '12px', 
                                        cursor: 'pointer',
                                        background: '#4a9eff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '3px'
                                    }}
                                >
                                    ⬆️ Up
                                </button>
                            </div>
                            <div style={{ fontSize: '12px', color: '#aaa', marginTop: '5px' }}>
                                Current Exits: {Object.keys(selectedRoom.exits || {}).join(', ') || 'none'}
                            </div>
                            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #555' }}>
                                <button
                                    onClick={async () => {
                                        if (!confirm(`Are you sure you want to delete "${selectedRoom.name}"?\n\nThis will:\n- Remove the room from the world\n- Remove all connections to/from this room\n\nThis action cannot be undone!`)) {
                                            return;
                                        }
                                        
                                        if (!confirm(`FINAL CONFIRMATION: Delete "${selectedRoom.name}"?\n\nType "DELETE" in the next prompt to confirm.`)) {
                                            return;
                                        }
                                        
                                        const confirmText = prompt(`Type "DELETE" to confirm deletion of "${selectedRoom.name}":`);
                                        if (confirmText !== 'DELETE') {
                                            alert('Deletion cancelled. You must type "DELETE" exactly to confirm.');
                                            return;
                                        }
                                        
                                        try {
                                            const response = await fetch(`${API_BASE}/delete-room`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ roomId: selectedRoom.id })
                                            });
                                            const data = await response.json();
                                            if (data.success) {
                                                setSelectedRoom(null);
                                                await loadMapData();
                                                alert(`Room "${selectedRoom.name}" deleted successfully.`);
                                            } else {
                                                alert(`Error: ${data.error}`);
                                            }
                                        } catch (err) {
                                            alert(`Error: ${err.message}`);
                                        }
                                    }}
                                    style={{ 
                                        padding: '8px 16px', 
                                        fontSize: '12px', 
                                        cursor: 'pointer',
                                        background: '#ff4444',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        width: '100%',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    🗑️ Delete Room
                                </button>
                            </div>
                        </div>

                        {/* Adjacent Rooms - Connect/Disconnect */}
                        <div style={{ 
                            marginBottom: '15px', 
                            padding: '10px', 
                            background: '#222', 
                            borderRadius: '4px',
                            border: '2px solid #ff9f40'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <strong style={{ color: '#ff9f40', fontSize: '14px' }}>Adjacent Rooms:</strong>
                            </div>
                            {adjacentRooms.length > 0 ? (
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {adjacentRooms.map((adj, idx) => {
                                        const hasConnection = selectedRoom.exits?.[adj.direction] === adj.room.id;
                                        return (
                                            <div key={idx} style={{ 
                                                display: 'flex', 
                                                justifyContent: 'space-between', 
                                                alignItems: 'center',
                                                padding: '8px',
                                                marginBottom: '5px',
                                                background: hasConnection ? '#2a4a2a' : '#4a2a2a',
                                                borderRadius: '4px',
                                                border: `1px solid ${hasConnection ? '#4aff4a' : '#666'}`
                                            }}>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: '13px' }}>
                                                        {adj.direction.toUpperCase()}: {adj.room.name}
                                                    </div>
                                                    <div style={{ fontSize: '11px', color: '#aaa' }}>
                                                        ({adj.room.x}, {adj.room.y}, {adj.room.z})
                                                    </div>
                                                </div>
                                                <label style={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: '5px', 
                                                    cursor: 'pointer'
                                                }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={hasConnection}
                                                        onChange={async (e) => {
                                                            const enabled = e.target.checked;
                                                            try {
                                                                // Get opposite direction for bidirectional connection
                                                                const oppositeDirs = {
                                                                    'north': 'south', 'south': 'north',
                                                                    'east': 'west', 'west': 'east',
                                                                    'northeast': 'southwest', 'southwest': 'northeast',
                                                                    'northwest': 'southeast', 'southeast': 'northwest',
                                                                    'up': 'down', 'down': 'up'
                                                                };
                                                                const oppositeDir = oppositeDirs[adj.direction];
                                                                
                                                                // Update selected room's exits
                                                                const newExits = enabled 
                                                                    ? { ...selectedRoom.exits, [adj.direction]: adj.room.id }
                                                                    : Object.fromEntries(Object.entries(selectedRoom.exits || {}).filter(([d]) => d !== adj.direction));
                                                                
                                                                const response = await fetch(`${API_BASE}/exits`, {
                                                                    method: 'POST',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    body: JSON.stringify({ 
                                                                        roomId: selectedRoom.id, 
                                                                        exits: newExits
                                                                    })
                                                                });
                                                                const data = await response.json();
                                                                if (data.success) {
                                                                    // Also update the other room's exit (bidirectional)
                                                                    if (oppositeDir) {
                                                                        const otherRoom = rooms.find(r => r.id === adj.room.id);
                                                                        if (otherRoom) {
                                                                            const otherExits = enabled
                                                                                ? { ...otherRoom.exits, [oppositeDir]: selectedRoom.id }
                                                                                : Object.fromEntries(Object.entries(otherRoom.exits || {}).filter(([d]) => d !== oppositeDir));
                                                                            
                                                                            await fetch(`${API_BASE}/exits`, {
                                                                                method: 'POST',
                                                                                headers: { 'Content-Type': 'application/json' },
                                                                                body: JSON.stringify({ 
                                                                                    roomId: adj.room.id, 
                                                                                    exits: otherExits
                                                                                })
                                                                            });
                                                                        }
                                                                    }
                                                                    await loadMapData();
                                                                }
                                                            } catch (err) {
                                                                alert(`Error: ${err.message}`);
                                                            }
                                                        }}
                                                        style={{
                                                            width: '18px',
                                                            height: '18px',
                                                            cursor: 'pointer',
                                                            accentColor: '#ff9f40'
                                                        }}
                                                    />
                                                    <span style={{ fontSize: '12px', color: hasConnection ? '#4aff4a' : '#ff4a4a' }}>
                                                        {hasConnection ? 'Connected' : 'Not Connected'}
                                                    </span>
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div style={{ color: '#888', fontSize: '12px', fontStyle: 'italic' }}>
                                    No adjacent rooms found.
                                </div>
                            )}
                        </div>

                        {/* Exit Configuration - Locked/Hidden Doors */}
                        {Object.keys(selectedRoom.exits || {}).length > 0 && (
                            <div style={{ 
                                marginBottom: '15px', 
                                padding: '10px', 
                                background: '#222', 
                                borderRadius: '4px',
                                border: '2px solid #9f40ff'
                            }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <strong style={{ color: '#9f40ff', fontSize: '14px' }}>Exit Configuration:</strong>
                                </div>
                                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                    {Object.entries(selectedRoom.exits || {}).map(([direction, targetRoomId]) => {
                                        const exitConfig = selectedRoom.exitConfig?.[direction] || {};
                                        const isLocked = exitConfig.locked || false;
                                        const isHidden = exitConfig.hidden || false;
                                        const requiredKey = exitConfig.requiredKey || '';
                                        
                                        return (
                                            <div key={direction} style={{ 
                                                marginBottom: '10px', 
                                                padding: '8px', 
                                                background: '#333', 
                                                borderRadius: '4px',
                                                border: '1px solid #555'
                                            }}>
                                                <div style={{ marginBottom: '5px', fontWeight: 'bold', color: '#9f40ff' }}>
                                                    {direction.toUpperCase()} → {rooms.find(r => r.id === targetRoomId)?.name || targetRoomId}
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={isLocked}
                                                            onChange={async (e) => {
                                                                const newConfig = {
                                                                    ...exitConfig,
                                                                    locked: e.target.checked,
                                                                    hidden: isHidden,
                                                                    requiredKey: requiredKey
                                                                };
                                                                if (!e.target.checked && !isHidden && !requiredKey) {
                                                                    // Remove config if nothing is set
                                                                    await updateExitConfig(selectedRoom.id, direction, null);
                                                                } else {
                                                                    await updateExitConfig(selectedRoom.id, direction, newConfig);
                                                                }
                                                            }}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                        <span>🔒 Locked</span>
                                                    </label>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={isHidden}
                                                            onChange={async (e) => {
                                                                const newConfig = {
                                                                    ...exitConfig,
                                                                    locked: isLocked,
                                                                    hidden: e.target.checked,
                                                                    requiredKey: requiredKey
                                                                };
                                                                if (!isLocked && !e.target.checked && !requiredKey) {
                                                                    await updateExitConfig(selectedRoom.id, direction, null);
                                                                } else {
                                                                    await updateExitConfig(selectedRoom.id, direction, newConfig);
                                                                }
                                                            }}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                        <span>👁️ Hidden</span>
                                                    </label>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                                                        <label>Key:</label>
                                                        <input
                                                            type="text"
                                                            value={requiredKey}
                                                            placeholder="item_id (e.g., moria_key)"
                                                            onChange={async (e) => {
                                                                const newKey = e.target.value.trim();
                                                                const newConfig = {
                                                                    ...exitConfig,
                                                                    locked: isLocked,
                                                                    hidden: isHidden,
                                                                    requiredKey: newKey
                                                                };
                                                                if (!isLocked && !isHidden && !newKey) {
                                                                    await updateExitConfig(selectedRoom.id, direction, null);
                                                                } else {
                                                                    await updateExitConfig(selectedRoom.id, direction, newConfig);
                                                                }
                                                            }}
                                                            style={{ 
                                                                flex: 1, 
                                                                padding: '4px', 
                                                                background: '#111', 
                                                                color: '#fff', 
                                                                border: '1px solid #444',
                                                                borderRadius: '3px',
                                                                fontSize: '11px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Description Editor */}
                        <div style={{ marginBottom: '15px', padding: '10px', background: '#222', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <strong>Description:</strong>
                                {!editingDescription ? (
                                    <button
                                        onClick={() => {
                                            setEditDescription(selectedRoom.description || '');
                                            setEditingDescription(true);
                                        }}
                                        style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer' }}
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    <div>
                                        <button
                                            onClick={async () => {
                                                const success = await updateRoomData(selectedRoom.id, editDescription, undefined);
                                                if (success) {
                                                    setEditingDescription(false);
                                                }
                                            }}
                                            style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', marginRight: '5px', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '3px' }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditingDescription(false);
                                                setEditDescription('');
                                            }}
                                            style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', background: '#666', color: '#fff', border: 'none', borderRadius: '3px' }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                            {editingDescription ? (
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    style={{ 
                                        width: '100%', 
                                        minHeight: '100px', 
                                        padding: '8px', 
                                        background: '#111', 
                                        color: '#fff', 
                                        border: '1px solid #444',
                                        borderRadius: '4px',
                                        fontFamily: 'monospace',
                                        fontSize: '12px'
                                    }}
                                />
                            ) : (
                                <div style={{ color: '#aaa', fontSize: '12px', maxHeight: '100px', overflowY: 'auto' }}>
                                    {selectedRoom.description || 'No description'}
                                </div>
                            )}
                        </div>

                        {/* Items Editor */}
                        <div style={{ marginBottom: '15px', padding: '10px', background: '#222', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <strong>Items:</strong>
                                {!editingItems ? (
                                    <button
                                        onClick={() => {
                                            setEditItems((selectedRoom.items || []).join(', '));
                                            setEditingItems(true);
                                        }}
                                        style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer' }}
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    <div>
                                        <button
                                            onClick={async () => {
                                                const itemsArray = editItems.split(',').map(i => i.trim()).filter(i => i);
                                                const success = await updateRoomData(selectedRoom.id, undefined, itemsArray);
                                                if (success) {
                                                    setEditingItems(false);
                                                    setEditItems('');
                                                }
                                            }}
                                            style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', marginRight: '5px', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '3px' }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditingItems(false);
                                                setEditItems('');
                                            }}
                                            style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', background: '#666', color: '#fff', border: 'none', borderRadius: '3px' }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                            {editingItems ? (
                                <input
                                    type="text"
                                    value={editItems}
                                    onChange={(e) => setEditItems(e.target.value)}
                                    placeholder="Comma-separated item IDs (e.g., walking_stick, lembas_bread)"
                                    style={{ 
                                        width: '100%', 
                                        padding: '8px', 
                                        background: '#111', 
                                        color: '#fff', 
                                        border: '1px solid #444',
                                        borderRadius: '4px',
                                        fontFamily: 'monospace',
                                        fontSize: '12px'
                                    }}
                                />
                            ) : (
                                <div style={{ color: '#aaa', fontSize: '12px' }}>
                                    {(selectedRoom.items || []).length > 0 ? selectedRoom.items.join(', ') : 'No items'}
                                </div>
                            )}
                        </div>

                        {/* Vertical Connections */}
                        <div style={{ 
                            marginBottom: '15px', 
                            padding: '10px', 
                            background: '#222', 
                            borderRadius: '4px',
                            border: '2px solid #4a9eff',
                            position: 'relative'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <strong style={{ color: '#4a9eff', fontSize: '14px' }}>Vertical Connections:</strong>
                                <button
                                    onClick={() => {
                                        console.log('Refresh button clicked for room:', selectedRoom.id);
                                        loadVerticalNeighbors(selectedRoom.id);
                                    }}
                                    style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '3px' }}
                                >
                                    Refresh
                                </button>
                            </div>
                            <div style={{ fontSize: '11px', color: '#aaa', marginBottom: '8px' }}>
                                Room at ({selectedRoom.x}, {selectedRoom.y}, {selectedRoom.z}) - Looking for rooms at same X/Y, different Z
                                <br />
                                <span style={{ color: '#4a9eff' }}>Found {verticalNeighbors.length} vertical neighbors</span>
                            </div>
                            {verticalNeighbors.length > 0 ? (
                                <div style={{ border: '2px solid #4a9eff', padding: '10px', borderRadius: '4px' }}>
                                    <div style={{ color: '#4a9eff', fontSize: '14px', marginBottom: '10px', fontWeight: 'bold', textAlign: 'center' }}>
                                        ✓ Found {verticalNeighbors.length} vertical neighbors - CHECKBOXES BELOW:
                                    </div>
                                    {verticalNeighbors.map((neighbor, idx) => {
                                        const hasConnection = selectedRoom.exits?.[neighbor.direction] === neighbor.id;
                                        console.log(`Rendering neighbor ${idx}:`, neighbor.id, 'hasConnection:', hasConnection, 'exits:', selectedRoom.exits);
                                    let levelName;
                                    if (neighbor.z === 0) {
                                        levelName = 'Ground';
                                    } else if (neighbor.z > 0) {
                                        levelName = neighbor.z <= 7 ? `Level +${neighbor.z}` : `Mountain +${neighbor.z}`;
                                    } else {
                                        levelName = `Underground ${neighbor.z}`;
                                    }
                                    
                                    return (
                                        <div key={`neighbor-${idx}`} style={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            padding: '10px',
                                            marginBottom: '8px',
                                            background: hasConnection ? '#2a4a2a' : '#4a2a2a',
                                            borderRadius: '4px',
                                            border: '1px solid #666',
                                            minHeight: '50px'
                                        }}>
                                            <div style={{ flex: 1 }}>
                                                <strong style={{ fontSize: '14px' }}>{neighbor.direction === 'up' ? '↑ UP' : '↓ DOWN'}</strong> 
                                                <br />
                                                <span style={{ fontSize: '12px' }}>{neighbor.name}</span>
                                                <br />
                                                <span style={{ fontSize: '10px', color: '#aaa' }}>({levelName}) at ({neighbor.x || '?'}, {neighbor.y || '?'}, {neighbor.z})</span>
                                            </div>
                                            <label style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '8px', 
                                                cursor: 'pointer',
                                                userSelect: 'none',
                                                padding: '4px 8px',
                                                background: hasConnection ? '#1a4a1a' : '#3a1a1a',
                                                borderRadius: '4px',
                                                border: '1px solid #555'
                                            }}>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const newState = !hasConnection;
                                                        console.log('Button clicked - toggling connection:', neighbor.direction, neighbor.id, 'from', hasConnection, 'to', newState);
                                                        toggleVerticalConnection(
                                                            selectedRoom.id,
                                                            neighbor.direction,
                                                            neighbor.id,
                                                            newState
                                                        );
                                                    }}
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        cursor: 'pointer',
                                                        backgroundColor: hasConnection ? '#4aff4a' : '#ff4a4a',
                                                        border: '2px solid #fff',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        color: '#000',
                                                        flexShrink: 0,
                                                        marginRight: '8px'
                                                    }}
                                                    title={hasConnection ? 'Click to disconnect' : 'Click to connect'}
                                                >
                                                    {hasConnection ? '✓' : '○'}
                                                </button>
                                                <input
                                                    type="checkbox"
                                                    checked={hasConnection}
                                                    onChange={(e) => {
                                                        console.log('Checkbox toggled:', neighbor.direction, neighbor.id, e.target.checked);
                                                        toggleVerticalConnection(
                                                            selectedRoom.id,
                                                            neighbor.direction,
                                                            neighbor.id,
                                                            e.target.checked
                                                        );
                                                    }}
                                                    style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        cursor: 'pointer',
                                                        accentColor: '#4a9eff',
                                                        flexShrink: 0,
                                                        marginRight: '8px'
                                                    }}
                                                />
                                                <span 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const newState = !hasConnection;
                                                        toggleVerticalConnection(
                                                            selectedRoom.id,
                                                            neighbor.direction,
                                                            neighbor.id,
                                                            newState
                                                        );
                                                    }}
                                                    style={{ 
                                                        fontSize: '13px', 
                                                        fontWeight: 'bold', 
                                                        color: hasConnection ? '#4aff4a' : '#ff4a4a',
                                                        cursor: 'pointer',
                                                        textDecoration: 'underline'
                                                    }}
                                                >
                                                    {hasConnection ? '✓ CONNECTED (click to disconnect)' : '○ NOT CONNECTED (click to connect)'}
                                                </span>
                                            </label>
                                        </div>
                                    );
                                    })}
                                </div>
                            ) : (
                                <div style={{ color: '#888', fontSize: '12px', fontStyle: 'italic' }}>
                                    No rooms found at the same x/y coordinates on different levels.
                                    <br />
                                    <span style={{ fontSize: '10px', color: '#666' }}>
                                        (Checked {verticalNeighbors.length} neighbors)
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{ 
                        padding: '20px', 
                        color: '#888', 
                        textAlign: 'center',
                        fontSize: '14px'
                    }}>
                        <div style={{ marginBottom: '10px' }}>👆</div>
                        <div>Select a room to view and edit its properties</div>
                    </div>
                )}
            </div>
        </div>
    );
};

