import { useState, useEffect, useRef, useMemo } from 'react';
import { MapEditor3D } from './MapEditor3D';
import { MapEditor3DCanvas } from './MapEditor3DCanvas';

const API_BASE = 'http://localhost:3001/api/map';

export const MapEditor = () => {
    const [viewMode, setViewMode] = useState('3d-canvas'); // '2d', '3d', or '3d-canvas'
    
    if (viewMode === '3d-canvas') {
        return (
            <div>
                <div style={{ padding: '10px', background: '#1a1a2e', borderBottom: '2px solid #4a9eff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>3D Canvas Map Editor</strong>
                    <div>
                        <button
                            onClick={() => setViewMode('2d')}
                            style={{ padding: '8px 16px', cursor: 'pointer', marginRight: '10px' }}
                        >
                            Switch to 2D View
                        </button>
                        <button
                            onClick={() => setViewMode('3d')}
                            style={{ padding: '8px 16px', cursor: 'pointer' }}
                        >
                            Switch to CSS 3D View
                        </button>
                    </div>
                </div>
                <MapEditor3DCanvas />
            </div>
        );
    }
    
    if (viewMode === '3d') {
        return (
            <div>
                <div style={{ padding: '10px', background: '#1a1a2e', borderBottom: '2px solid #4a9eff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>3D Map Editor (CSS)</strong>
                    <div>
                        <button
                            onClick={() => setViewMode('2d')}
                            style={{ padding: '8px 16px', cursor: 'pointer', marginRight: '10px' }}
                        >
                            Switch to 2D View
                        </button>
                        <button
                            onClick={() => setViewMode('3d-canvas')}
                            style={{ padding: '8px 16px', cursor: 'pointer' }}
                        >
                            Switch to Canvas 3D View
                        </button>
                    </div>
                </div>
                <MapEditor3D />
            </div>
        );
    }

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [overlaps, setOverlaps] = useState([]);
    const [draggedRoom, setDraggedRoom] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const gridRef = useRef(null);

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

    // Filter rooms by level
    const levelRooms = useMemo(() => {
        return rooms.filter(r => r.z === selectedLevel);
    }, [rooms, selectedLevel]);

    // Calculate grid bounds
    const gridLayout = useMemo(() => {
        if (levelRooms.length === 0) return null;

        const xs = levelRooms.map(r => r.x);
        const ys = levelRooms.map(r => r.y);
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
    }, [levelRooms]);

    // Get available levels
    const levels = useMemo(() => {
        const levelSet = new Set(rooms.map(r => r.z));
        return Array.from(levelSet).sort((a, b) => a - b);
    }, [rooms]);

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
                // Reload all map data to get updated exits
                await loadMapData();
                loadOverlaps(); // Refresh overlaps
                
                // Update selected room if it was the one moved
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

    // Handle drag start
    const handleDragStart = (e, room) => {
        e.preventDefault();
        setDraggedRoom(room);
        const rect = gridRef.current?.getBoundingClientRect();
        if (rect) {
            const cellSize = 44; // 40px + 4px gap
            const gridX = room.x - gridLayout.minX;
            const gridY = gridLayout.height - 1 - (room.y - gridLayout.minY);
            const startX = rect.left + gridX * cellSize + cellSize / 2;
            const startY = rect.top + gridY * cellSize + cellSize / 2;
            setDragOffset({
                x: e.clientX - startX,
                y: e.clientY - startY
            });
        }
    };

    // Handle drag
    const handleDrag = (e) => {
        if (!draggedRoom || !gridRef.current || !gridLayout) return;

        const rect = gridRef.current.getBoundingClientRect();
        const cellSize = 44;
        const x = e.clientX - rect.left - dragOffset.x;
        const y = e.clientY - rect.top - dragOffset.y;

        const gridX = Math.round(x / cellSize);
        const gridY = Math.round(y / cellSize);

        const newX = gridLayout.minX + gridX;
        const newY = gridLayout.minY + (gridLayout.height - 1 - gridY);

        // Update visual position immediately
        setRooms(prev => prev.map(r => 
            r.id === draggedRoom.id ? { ...r, x: newX, y: newY } : r
        ));
    };

    // Handle drag end
    const handleDragEnd = async (e) => {
        if (!draggedRoom || !gridLayout) {
            setDraggedRoom(null);
            return;
        }

        const rect = gridRef.current?.getBoundingClientRect();
        if (!rect) {
            setDraggedRoom(null);
            return;
        }

        const cellSize = 44;
        const x = e.clientX - rect.left - dragOffset.x;
        const y = e.clientY - rect.top - dragOffset.y;

        const gridX = Math.round(x / cellSize);
        const gridY = Math.round(y / cellSize);

        const newX = gridLayout.minX + gridX;
        const newY = gridLayout.minY + (gridLayout.height - 1 - gridY);
        const newZ = draggedRoom.z;

        // Check bounds
        if (gridX < 0 || gridX >= gridLayout.width || gridY < 0 || gridY >= gridLayout.height) {
            // Revert
            loadMapData();
            setDraggedRoom(null);
            return;
        }

        // Save new position
        const success = await updateRoomCoordinates(draggedRoom.id, newX, newY, newZ);
        if (!success) {
            // Revert on error
            loadMapData();
        }
        setDraggedRoom(null);
    };

    // Check if room has overlap
    const getRoomOverlap = (room) => {
        return overlaps.find(ov => 
            ov.rooms.some(r => r.id === room.id)
        );
    };

    if (loading) {
        return <div className="map-editor">Loading map data...</div>;
    }

    if (error) {
        return <div className="map-editor">Error: {error}</div>;
    }

    return (
        <div className="map-editor" style={{ padding: '20px', fontFamily: 'monospace' }}>
            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h1>🗺️ World Map Editor</h1>
                    <div>
                        <button
                            onClick={() => setViewMode('3d-canvas')}
                            style={{ padding: '8px 16px', cursor: 'pointer', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '4px', marginRight: '10px' }}
                        >
                            Switch to Canvas 3D View
                        </button>
                        <button
                            onClick={() => setViewMode('3d')}
                            style={{ padding: '8px 16px', cursor: 'pointer', background: '#4a9eff', color: '#fff', border: 'none', borderRadius: '4px' }}
                        >
                            Switch to CSS 3D View
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
                    <label>
                        Level:
                        <select 
                            value={selectedLevel} 
                            onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
                            style={{ marginLeft: '10px', padding: '5px' }}
                        >
                            {levels.map(level => (
                                <option key={level} value={level}>
                                    {level === 0 ? 'Ground' : level > 0 ? `Mountain +${level}` : `Underground ${level}`}
                                </option>
                            ))}
                        </select>
                    </label>
                    <span>
                        {levelRooms.length} rooms on this level
                    </span>
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

            {gridLayout && (
                <div
                    ref={gridRef}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridLayout.width}, 40px)`,
                        gridTemplateRows: `repeat(${gridLayout.height}, 40px)`,
                        gap: '4px',
                        padding: '20px',
                        background: '#1a1a2e',
                        border: '2px solid #16213e',
                        borderRadius: '5px',
                        position: 'relative',
                        minWidth: 'fit-content'
                    }}
                    onMouseMove={handleDrag}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    {Array.from({ length: gridLayout.height }).map((_, row) =>
                        Array.from({ length: gridLayout.width }).map((_, col) => {
                            const currentX = gridLayout.minX + col;
                            const currentY = gridLayout.minY + (gridLayout.height - 1 - row);

                            const room = levelRooms.find(r => r.x === currentX && r.y === currentY);
                            const overlap = room ? getRoomOverlap(room) : null;
                            const isSelected = selectedRoom?.id === room?.id;
                            const isDragged = draggedRoom?.id === room?.id;

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        background: room 
                                            ? (overlap ? '#ff4444' : isSelected ? '#4a9eff' : '#2d5a87')
                                            : '#1a1a2e',
                                        border: room 
                                            ? (isSelected ? '2px solid #fff' : '1px solid #4a9eff')
                                            : '1px solid #16213e',
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
                                        : `(${currentX}, ${currentY}, ${selectedLevel})`
                                    }
                                >
                                    {room && (
                                        <>
                                            {overlap && <span style={{ color: '#fff', fontSize: '20px' }}>⚠️</span>}
                                            {!overlap && <span style={{ color: '#4a9eff', fontSize: '12px' }}>●</span>}
                                        </>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            )}

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
                                alert(`Cleaned up ${data.removedCount} non-adjacent exits`);
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

