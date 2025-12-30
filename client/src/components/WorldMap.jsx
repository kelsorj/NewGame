// WorldMap Component - Shows a text-based map of visited areas
import { useMemo, useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001/api/map';

export const WorldMap = ({ playerState }) => {
    const [roomCoordinates, setRoomCoordinates] = useState({});
    const [roomNames, setRoomNames] = useState({});

    // Load room coordinates from the map editor API
    useEffect(() => {
        const loadCoordinates = async () => {
            try {
                const response = await fetch(`${API_BASE}/data`);
                const data = await response.json();
                if (data.success && data.rooms) {
                    const coords = {};
                    const names = {};
                    data.rooms.forEach(room => {
                        coords[room.id] = { x: room.x, y: room.y, z: room.z };
                        names[room.id] = room.name;
                    });
                    setRoomCoordinates(coords);
                    setRoomNames(names);
                }
            } catch (err) {
                console.error('Error loading map coordinates:', err);
            }
        };
        loadCoordinates();
    }, []);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms || Object.keys(roomCoordinates).length === 0) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                if (!coord) return null;
                return { 
                    ...coord, 
                    id: roomId,
                    name: roomNames[roomId] || roomId
                };
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms, roomCoordinates, roomNames]);

    const gridLayout = useMemo(() => {
        if (visitedCoords.length === 0) return null;

        const xs = visitedCoords.map(r => r.x);
        const ys = visitedCoords.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        // Calculate grid dimensions with some padding
        const width = maxX - minX + 1;
        const height = maxY - minY + 1;

        return {
            minX,
            minY,
            width,
            height,
            rooms: visitedCoords
        };
    }, [visitedCoords]);

    if (!gridLayout) {
        return (
            <div className="world-map">
                <div className="map-header">🗺️  World Map</div>
                <div className="map-content empty">Explore to reveal the map...</div>
            </div>
        );
    }

    return (
        <div className="world-map">
            <div className="map-header">🗺️  World Map</div>
            <div className="map-container">
                <div
                    className="map-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridLayout.width}, 40px)`,
                        gridTemplateRows: `repeat(${gridLayout.height}, 40px)`,
                        gap: '4px',
                        padding: '10px',
                        position: 'relative'
                    }}
                >
                    {/* Render grid slots */}
                    {Array.from({ length: gridLayout.height }).map((_, row) => (
                        Array.from({ length: gridLayout.width }).map((_, col) => {
                            const currentX = gridLayout.minX + col;
                            const currentY = gridLayout.minY + (gridLayout.height - 1 - row); // Invert Y for N/S display

                            const room = gridLayout.rooms.find(r => r.x === currentX && r.y === currentY);
                            const isCurrent = room?.id === playerState?.currentRoom;

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    className={`map-slot ${room ? 'has-room' : 'empty'} ${isCurrent ? 'is-current' : ''}`}
                                    title={room ? room.name : `(${currentX}, ${currentY})`}
                                >
                                    {isCurrent && <span className="player-marker">📍</span>}
                                    {!isCurrent && room && <span className="room-marker">·</span>}
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
            <div className="map-footer text-muted">
                Showing {visitedCoords.length} discovered locations
            </div>
        </div>
    );
};
