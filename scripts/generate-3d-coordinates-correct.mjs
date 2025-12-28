import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

// Direction vectors - these MUST match the coordinate system
const directionVectors = {
    north: { x: 0, y: 1, z: 0 },
    south: { x: 0, y: -1, z: 0 },
    east: { x: 1, y: 0, z: 0 },
    west: { x: -1, y: 0, z: 0 },
    northeast: { x: 1, y: 1, z: 0 },
    northwest: { x: -1, y: 1, z: 0 },
    southeast: { x: 1, y: -1, z: 0 },
    southwest: { x: -1, y: -1, z: 0 },
    up: { x: 0, y: 0, z: 1 },
    down: { x: 0, y: 0, z: -1 }
};

// Start from bag_end at (0, 0, 0)
const coordinates = {};
const coordMap = new Map(); // Track which room is at each coordinate
const roomAtCoord = new Map(); // Reverse lookup: coord -> roomId
const constraints = []; // List of all exit constraints
const assignedOrder = []; // Track order of assignment for priority

// Build constraint list from all room exits
console.log('Building constraint graph...');
for (const [roomId, room] of Object.entries(rooms)) {
    if (!room.exits) continue;
    
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (!rooms[targetId]) continue;
        const vector = directionVectors[direction];
        if (!vector) continue; // Skip unknown directions
        
        constraints.push({
            from: roomId,
            to: targetId,
            direction,
            vector
        });
    }
}

console.log(`Found ${constraints.length} exit constraints`);

// Function to check if a coordinate is available
function isCoordAvailable(x, y, z, excludeRoomId = null) {
    const key = `${x},${y},${z}`;
    const existing = roomAtCoord.get(key);
    return !existing || existing === excludeRoomId;
}

// Function to find nearest available coordinate
function findNearestAvailable(targetX, targetY, targetZ, excludeRoomId = null, maxRadius = 5) {
    // Try exact coordinate first
    if (isCoordAvailable(targetX, targetY, targetZ, excludeRoomId)) {
        return { x: targetX, y: targetY, z: targetZ };
    }
    
    // Spiral search outward
    for (let radius = 1; radius <= maxRadius; radius++) {
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
                if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                    const testX = targetX + dx;
                    const testY = targetY + dy;
                    const testZ = targetZ;
                    
                    if (isCoordAvailable(testX, testY, testZ, excludeRoomId)) {
                        return { x: testX, y: testY, z: testZ };
                    }
                }
            }
        }
    }
    
    // Fallback - use target even if occupied (will cause overlap but at least assigned)
    return { x: targetX, y: targetY, z: targetZ };
}

// Assign coordinate to a room
function assignCoordinate(roomId, x, y, z, force = false) {
    const key = `${x},${y},${z}`;
    const existing = roomAtCoord.get(key);
    
    if (existing && existing !== roomId && !force) {
        // Coordinate is taken - find alternative
        const alt = findNearestAvailable(x, y, z, roomId);
        x = alt.x;
        y = alt.y;
        z = alt.z;
        const altKey = `${x},${y},${z}`;
        
        // Remove old assignment if exists
        if (coordinates[roomId]) {
            const oldKey = `${coordinates[roomId].x},${coordinates[roomId].y},${coordinates[roomId].z}`;
            roomAtCoord.delete(oldKey);
        }
        
        coordinates[roomId] = { x, y, z };
        roomAtCoord.set(altKey, roomId);
        return { x, y, z, adjusted: true };
    } else {
        // Remove old assignment if exists
        if (coordinates[roomId]) {
            const oldKey = `${coordinates[roomId].x},${coordinates[roomId].y},${coordinates[roomId].z}`;
            if (roomAtCoord.get(oldKey) === roomId) {
                roomAtCoord.delete(oldKey);
            }
        }
        
        coordinates[roomId] = { x, y, z };
        roomAtCoord.set(key, roomId);
        return { x, y, z, adjusted: false };
    }
}

// Phase 1: Assign coordinates from bag_end using BFS, strictly following directions
console.log('Phase 1: Assigning coordinates from bag_end...');
const queue = [{ roomId: 'bag_end', coord: { x: 0, y: 0, z: 0 }, priority: 0 }];
const visited = new Set(['bag_end']);

assignCoordinate('bag_end', 0, 0, 0);
assignedOrder.push('bag_end');

while (queue.length > 0) {
    const { roomId, coord, priority } = queue.shift();
    const room = rooms[roomId];
    if (!room || !room.exits) continue;
    
    const currentCoord = coordinates[roomId];
    
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (visited.has(targetId)) continue;
        
        const vector = directionVectors[direction];
        if (!vector) continue;
        
        const targetX = currentCoord.x + vector.x;
        const targetY = currentCoord.y + vector.y;
        const targetZ = currentCoord.z + vector.z;
        
        const result = assignCoordinate(targetId, targetX, targetY, targetZ);
        
        if (!result.adjusted) {
            // Perfect placement - add to queue
            visited.add(targetId);
            assignedOrder.push(targetId);
            queue.push({ roomId: targetId, coord: coordinates[targetId], priority: priority + 1 });
        } else {
            // Had to adjust - still add but mark as adjusted
            visited.add(targetId);
            assignedOrder.push(targetId);
            queue.push({ roomId: targetId, coord: coordinates[targetId], priority: priority + 1 });
        }
    }
}

console.log(`Assigned ${Object.keys(coordinates).length} rooms in phase 1`);

// Phase 2: Fix remaining rooms that weren't reachable from bag_end
console.log('Phase 2: Assigning disconnected rooms...');
let regionStartX = 100;
for (const roomId of Object.keys(rooms)) {
    if (coordinates[roomId]) continue;
    
    const coord = findNearestAvailable(regionStartX, 0, 0);
    assignCoordinate(roomId, coord.x, coord.y, coord.z);
    assignedOrder.push(roomId);
    regionStartX += 20;
}

// Phase 3: Iterative refinement - try to satisfy constraints better
console.log('Phase 3: Refining coordinates to satisfy constraints...');
let iterations = 0;
const maxIterations = 10;
let improvements = 1;

while (improvements > 0 && iterations < maxIterations) {
    improvements = 0;
    iterations++;
    
    // Sort constraints by priority (earlier assigned rooms first)
    const sortedConstraints = constraints
        .filter(c => coordinates[c.from] && coordinates[c.to])
        .sort((a, b) => {
            const aFromIdx = assignedOrder.indexOf(a.from);
            const bFromIdx = assignedOrder.indexOf(b.from);
            return aFromIdx - bFromIdx;
        });
    
    for (const constraint of sortedConstraints) {
        const fromCoord = coordinates[constraint.from];
        if (!fromCoord) continue;
        
        const expectedX = fromCoord.x + constraint.vector.x;
        const expectedY = fromCoord.y + constraint.vector.y;
        const expectedZ = fromCoord.z + constraint.vector.z;
        
        const currentCoord = coordinates[constraint.to];
        if (!currentCoord) continue;
        
        // Check if constraint is satisfied
        if (currentCoord.x === expectedX && 
            currentCoord.y === expectedY && 
            currentCoord.z === expectedZ) {
            continue; // Already satisfied
        }
        
        // Try to move the target room to satisfy constraint
        const fromPriority = assignedOrder.indexOf(constraint.from);
        const toPriority = assignedOrder.indexOf(constraint.to);
        
        // Only move if target was assigned later (lower priority)
        if (toPriority > fromPriority) {
            // Check if we can move it
            if (isCoordAvailable(expectedX, expectedY, expectedZ, constraint.to)) {
                // Remove old assignment
                const oldKey = `${currentCoord.x},${currentCoord.y},${currentCoord.z}`;
                roomAtCoord.delete(oldKey);
                
                // Assign new coordinate
                coordinates[constraint.to] = { x: expectedX, y: expectedY, z: expectedZ };
                const newKey = `${expectedX},${expectedY},${expectedZ}`;
                roomAtCoord.set(newKey, constraint.to);
                improvements++;
            }
        }
    }
    
    if (improvements > 0) {
        console.log(`  Iteration ${iterations}: Improved ${improvements} constraints`);
    }
}

// Normalize to positive coordinates
let minX = 0, maxX = 0, minY = 0, maxY = 0, minZ = 0, maxZ = 0;
for (const coord of Object.values(coordinates)) {
    minX = Math.min(minX, coord.x);
    maxX = Math.max(maxX, coord.x);
    minY = Math.min(minY, coord.y);
    maxY = Math.max(maxY, coord.y);
    minZ = Math.min(minZ, coord.z);
    maxZ = Math.max(maxZ, coord.z);
}

const offsetX = 50 - minX;
const offsetY = 50 - minY;
const offsetZ = 0 - minZ;

// Apply offsets
const finalCoords = {};
for (const [id, coord] of Object.entries(coordinates)) {
    finalCoords[id] = {
        x: coord.x + offsetX,
        y: coord.y + offsetY,
        z: coord.z + offsetZ
    };
}

// Verify constraint satisfaction
console.log('Verifying constraint satisfaction...');
let satisfied = 0;
let total = 0;
const mismatches = [];

for (const constraint of constraints) {
    if (!finalCoords[constraint.from] || !finalCoords[constraint.to]) continue;
    total++;
    
    const from = finalCoords[constraint.from];
    const to = finalCoords[constraint.to];
    const expected = {
        x: from.x + constraint.vector.x,
        y: from.y + constraint.vector.y,
        z: from.z + constraint.vector.z
    };
    
    if (to.x === expected.x && to.y === expected.y && to.z === expected.z) {
        satisfied++;
    } else {
        mismatches.push({
            from: constraint.from,
            to: constraint.to,
            direction: constraint.direction,
            expected,
            actual: to
        });
    }
}

console.log(`Constraint satisfaction: ${satisfied}/${total} (${Math.round(satisfied/total*100)}%)`);
if (mismatches.length > 0 && mismatches.length <= 20) {
    console.log('\nSample mismatches:');
    mismatches.slice(0, 5).forEach(m => {
        console.log(`  ${rooms[m.from].name} -> ${m.direction} -> ${rooms[m.to].name}`);
        console.log(`    Expected: (${m.expected.x}, ${m.expected.y}, ${m.expected.z})`);
        console.log(`    Actual: (${m.actual.x}, ${m.actual.y}, ${m.actual.z})`);
    });
}

// Check for overlaps
const overlapMap = new Map();
for (const [id, coord] of Object.entries(finalCoords)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) {
        overlapMap.set(key, []);
    }
    overlapMap.get(key).push(id);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`\n⚠️  Warning: ${overlaps.length} coordinate overlaps remain`);
} else {
    console.log('\n✅ No coordinate overlaps!');
}

// Generate WorldMap.jsx
let output = `// WorldMap Component - Shows a 3D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect, useState } from 'react';

// Room coordinates for map display - generated from actual room topology
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
// Z-axis represents vertical levels: Up = +Z, Down = -Z
const roomCoordinates = {
`;

const sortedIds = Object.keys(finalCoords).sort();
for (const id of sortedIds) {
    const coord = finalCoords[id];
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
console.log('\n✅ Generated client/src/components/WorldMap.jsx with constraint-based coordinates');

