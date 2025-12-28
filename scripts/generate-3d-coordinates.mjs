import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

// Direction vectors for horizontal movement
const horizontalVectors = {
    north: { x: 0, y: 1, z: 0 },
    south: { x: 0, y: -1, z: 0 },
    east: { x: 1, y: 0, z: 0 },
    west: { x: -1, y: 0, z: 0 },
    northeast: { x: 1, y: 1, z: 0 },
    northwest: { x: -1, y: 1, z: 0 },
    southeast: { x: 1, y: -1, z: 0 },
    southwest: { x: -1, y: -1, z: 0 }
};

// Vertical movement
const verticalVectors = {
    up: { x: 0, y: 0, z: 1 },
    down: { x: 0, y: 0, z: -1 }
};

// Start from bag_end at (0, 0, 0)
const coordinates = {};
const visited = new Set();

// Process all connected components
const allRoomIds = Object.keys(rooms);
let regionStartX = 0;

for (const startRoomId of allRoomIds) {
    if (visited.has(startRoomId)) continue;

    // Start a new region
    coordinates[startRoomId] = { x: regionStartX, y: 0, z: 0 };
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

            // Check if it's horizontal or vertical movement
            let vector;
            if (horizontalVectors[direction]) {
                vector = horizontalVectors[direction];
            } else if (verticalVectors[direction]) {
                vector = verticalVectors[direction];
            } else {
                continue; // Skip unknown directions
            }

            const newX = currentCoord.x + vector.x;
            const newY = currentCoord.y + vector.y;
            const newZ = currentCoord.z + vector.z;

            coordinates[targetId] = { x: newX, y: newY, z: newZ };
            regionMaxX = Math.max(regionMaxX, newX);

            visited.add(targetId);
            queue.push(targetId);
        }
    }

    // Next region starts 20 units to the right
    regionStartX = regionMaxX + 20;
}

console.log(`Generated 3D coordinates for ${Object.keys(coordinates).length} rooms`);

// Find min/max to normalize to positive coordinates
let minX = 0, maxX = 0, minY = 0, maxY = 0, minZ = 0, maxZ = 0;
for (const coord of Object.values(coordinates)) {
    minX = Math.min(minX, coord.x);
    maxX = Math.max(maxX, coord.x);
    minY = Math.min(minY, coord.y);
    maxY = Math.max(maxY, coord.y);
    minZ = Math.min(minZ, coord.z);
    maxZ = Math.max(maxZ, coord.z);
}

// Shift to positive coordinates starting from (50, 50, 0)
const offsetX = 50 - minX;
const offsetY = 50 - minY;
const offsetZ = 0 - minZ;

for (const [id, coord] of Object.entries(coordinates)) {
    coord.x += offsetX;
    coord.y += offsetY;
    coord.z += offsetZ;
}

console.log(`Map bounds: X(${50} to ${maxX + offsetX}), Y(${50} to ${maxY + offsetY}), Z(${0 + offsetZ} to ${maxZ + offsetZ})`);

// Generate the WorldMap.jsx content with 3D support
let output = `// WorldMap Component - Shows a 3D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect, useState } from 'react';

// Room coordinates for map display - generated from actual room topology
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
// Z-axis represents vertical levels: Up = +Z, Down = -Z
const roomCoordinates = {
`;

// Sort by room ID for consistency
const sortedIds = Object.keys(coordinates).sort();
for (const id of sortedIds) {
    const coord = coordinates[id];
    const room = rooms[id];
    const name = room?.name || id;
    output += `    ${id}: { x: ${coord.x}, y: ${coord.y}, z: ${coord.z}, name: '${name.replace(/'/g, "\\'")}' },\n`;
}

output += `};

export const WorldMap = ({ playerState }) => {
    const mapContainerRef = useRef(null);
    const currentRoomRef = useRef(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms]);

    // Get all unique Z levels (floors)
    const levels = useMemo(() => {
        const levelSet = new Set(visitedCoords.map(r => r.z));
        return Array.from(levelSet).sort((a, b) => a - b);
    }, [visitedCoords]);

    // Auto-detect current level if not manually selected
    const currentLevel = useMemo(() => {
        if (selectedLevel !== null) return selectedLevel;
        if (!playerState?.currentRoom) return levels[0] || 0;
        const currentRoom = roomCoordinates[playerState.currentRoom];
        return currentRoom ? currentRoom.z : levels[0] || 0;
    }, [selectedLevel, playerState?.currentRoom, levels]);

    // Filter rooms for current level
    const levelRooms = useMemo(() => {
        return visitedCoords.filter(r => r.z === currentLevel);
    }, [visitedCoords, currentLevel]);

    const gridLayout = useMemo(() => {
        if (levelRooms.length === 0) return null;

        const xs = levelRooms.map(r => r.x);
        const ys = levelRooms.map(r => r.y);
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
            rooms: levelRooms
        };
    }, [levelRooms]);

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
    const levelName = currentLevel === 0 ? 'Ground Level' : currentLevel > 0 ? \`Level +\${currentLevel}\` : \`Level \${currentLevel}\`;

    return (
        <div className="world-map">
            <div className="map-header">
                <span>🗺️  World Map</span>
                {levels.length > 1 && (
                    <div className="level-selector">
                        <label>Level:</label>
                        <select 
                            value={currentLevel} 
                            onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
                        >
                            {levels.map(level => (
                                <option key={level} value={level}>
                                    {level === 0 ? 'Ground' : level > 0 ? \`+\${level}\` : level}
                                </option>
                            ))}
                        </select>
                        <span className="level-info">({levelName})</span>
                    </div>
                )}
            </div>
            {currentRoom && (
                <div className="map-location-info">
                    📍 {currentRoom.name} ({currentRoom.x}, {currentRoom.y}, {currentRoom.z})
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
                                    title={room ? room.name : \`(\${currentX}, \${currentY}, \${currentLevel})\`}
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
                Showing {levelRooms.length} locations on {levelName}
                {levels.length > 1 && \` (\${visitedCoords.length} total across \${levels.length} levels)\`}
                {currentRoom && \` • Current: \${currentRoom.name}\`}
            </div>
        </div>
    );
};
`;

writeFileSync('client/src/components/WorldMap.jsx', output);
console.log('✅ Generated 3D-enabled client/src/components/WorldMap.jsx');

