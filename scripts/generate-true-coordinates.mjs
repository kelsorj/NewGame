import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

// Direction vectors
const directionVectors = {
    north: { x: 0, y: 1 },
    south: { x: 0, y: -1 },
    east: { x: 1, y: 0 },
    west: { x: -1, y: 0 },
    northeast: { x: 1, y: 1 },
    northwest: { x: -1, y: 1 },
    southeast: { x: 1, y: -1 },
    southwest: { x: -1, y: -1 }
};

// Start from bag_end at (0, 0)
const coordinates = {};
const visited = new Set();

// Process all connected components
const allRoomIds = Object.keys(rooms);
let regionStartX = 0;

for (const startRoomId of allRoomIds) {
    if (visited.has(startRoomId)) continue;

    // Start a new region
    coordinates[startRoomId] = { x: regionStartX, y: 0 };
    const queue = [startRoomId];
    visited.add(startRoomId);

    let regionMaxX = regionStartX;

    // BFS to assign coordinates based on exits
    while (queue.length > 0) {
        const currentId = queue.shift();
        const currentRoom = rooms[currentId];
        const currentCoord = coordinates[currentId];

        if (!currentRoom || !currentRoom.exits) continue;

        for (const [direction, targetId] of Object.entries(currentRoom.exits)) {
            if (visited.has(targetId)) continue;

            const vector = directionVectors[direction];
            if (!vector) {
                // Skip up/down - they're vertical, not on the 2D map
                continue;
            }

            const newX = currentCoord.x + vector.x;
            const newY = currentCoord.y + vector.y;

            coordinates[targetId] = { x: newX, y: newY };
            regionMaxX = Math.max(regionMaxX, newX);

            visited.add(targetId);
            queue.push(targetId);
        }
    }

    // Next region starts 20 units to the right
    regionStartX = regionMaxX + 20;
}

console.log(`Generated coordinates for ${Object.keys(coordinates).length} rooms`);

// Find min/max to normalize to positive coordinates
let minX = 0, maxX = 0, minY = 0, maxY = 0;
for (const coord of Object.values(coordinates)) {
    minX = Math.min(minX, coord.x);
    maxX = Math.max(maxX, coord.x);
    minY = Math.min(minY, coord.y);
    maxY = Math.max(maxY, coord.y);
}

// Shift to positive coordinates starting from (50, 50)
const offsetX = 50 - minX;
const offsetY = 50 - minY;

for (const [id, coord] of Object.entries(coordinates)) {
    coord.x += offsetX;
    coord.y += offsetY;
}

console.log(`Map bounds: (${50}, ${50}) to (${maxX + offsetX}, ${maxY + offsetY})`);

// Generate the WorldMap.jsx content
let output = `// WorldMap Component - Shows a 2D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect } from 'react';

// Room coordinates for map display - generated from actual room topology
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
const roomCoordinates = {
`;

// Sort by room ID for consistency
const sortedIds = Object.keys(coordinates).sort();
for (const id of sortedIds) {
    const coord = coordinates[id];
    const room = rooms[id];
    const name = room?.name || id;
    output += `    ${id}: { x: ${coord.x}, y: ${coord.y}, name: '${name.replace(/'/g, "\\'")}' },\n`;
}

output += `};

export const WorldMap = ({ playerState }) => {
    const mapContainerRef = useRef(null);
    const currentRoomRef = useRef(null);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms]);

    const gridLayout = useMemo(() => {
        if (visitedCoords.length === 0) return null;

        const xs = visitedCoords.map(r => r.x);
        const ys = visitedCoords.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        // Calculate grid dimensions
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

    // Auto-scroll to keep current room in view
    useEffect(() => {
        if (!playerState?.currentRoom || !gridLayout || !currentRoomRef.current || !mapContainerRef.current) {
            return;
        }

        const currentRoom = gridLayout.rooms.find(r => r.id === playerState.currentRoom);
        if (!currentRoom) return;

        // Scroll the current room into view with smooth behavior
        currentRoomRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, [playerState?.currentRoom, gridLayout]);

    if (!gridLayout) {
        return (
            <div className="world-map">
                <div className="map-header">🗺️  World Map</div>
                <div className="map-content empty">Explore to reveal the map...</div>
            </div>
        );
    }

    const currentRoom = gridLayout.rooms.find(r => r.id === playerState?.currentRoom);

    return (
        <div className="world-map">
            <div className="map-header">🗺️  World Map</div>
            {currentRoom && (
                <div className="map-location-info">
                    📍 {currentRoom.name} ({currentRoom.x}, {currentRoom.y})
                </div>
            )}
            <div className="map-container" ref={mapContainerRef}>
                <div
                    className="map-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: \`repeat(\${gridLayout.width}, 40px)\`,
                        gridTemplateRows: \`repeat(\${gridLayout.height}, 40px)\`,
                        gap: '4px',
                        padding: '20px',
                        position: 'relative',
                        minWidth: 'fit-content'
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
                                    key={\`\${currentX}-\${currentY}\`}
                                    ref={isCurrent ? currentRoomRef : null}
                                    className={\`map-slot \${room ? 'has-room' : 'empty'} \${isCurrent ? 'is-current' : ''}\`}
                                    title={room ? room.name : \`(\${currentX}, \${currentY})\`}
                                >
                                    {isCurrent && <span className="player-marker">📍</span>}
                                    {!isCurrent && room && <span className="room-marker">·</span>}
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
            <div className="map-footer">
                Showing {visitedCoords.length} discovered locations
                {currentRoom && \` • Current: \${currentRoom.name}\`}
            </div>
        </div>
    );
};
`;

writeFileSync('client/src/components/WorldMap.jsx', output);
console.log('✅ Generated client/src/components/WorldMap.jsx');
