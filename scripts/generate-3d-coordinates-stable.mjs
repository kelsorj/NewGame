import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

// Direction vectors
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

const directionPriority = {
    north: 1, south: 1, east: 1, west: 1,
    northeast: 2, northwest: 2, southeast: 2, southwest: 2,
    up: 3, down: 3
};

const coordinates = {};
const roomAtCoord = new Map();
const constraints = [];
const assignedOrder = [];
const distancesFromBagEnd = {}; // Track shortest path distance from bag_end

// Build all constraints
console.log('Building constraint graph...');
for (const [roomId, room] of Object.entries(rooms)) {
    if (!room.exits) continue;
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (!rooms[targetId]) continue;
        const vector = directionVectors[direction];
        if (!vector) continue;
        constraints.push({
            from: roomId,
            to: targetId,
            direction,
            vector,
            priority: directionPriority[direction] || 10
        });
    }
}

constraints.sort((a, b) => a.priority - b.priority);
console.log(`Found ${constraints.length} constraints`);

// Calculate distances from bag_end using BFS
console.log('Calculating distances from bag_end...');
const distQueue = [{ roomId: 'bag_end', dist: 0 }];
const distVisited = new Set(['bag_end']);
distancesFromBagEnd['bag_end'] = 0;

while (distQueue.length > 0) {
    const { roomId, dist } = distQueue.shift();
    const room = rooms[roomId];
    if (!room || !room.exits) continue;
    
    for (const targetId of Object.values(room.exits)) {
        if (!distVisited.has(targetId)) {
            distVisited.add(targetId);
            distancesFromBagEnd[targetId] = dist + 1;
            distQueue.push({ roomId: targetId, dist: dist + 1 });
        }
    }
}

function isCoordAvailable(x, y, z, excludeRoomId = null) {
    const key = `${x},${y},${z}`;
    return !roomAtCoord.has(key) || roomAtCoord.get(key) === excludeRoomId;
}

function assignCoordinate(roomId, x, y, z, force = false) {
    const key = `${x},${y},${z}`;
    const existing = roomAtCoord.get(key);
    
    if (existing && existing !== roomId && !force) {
        // Find nearby available spot
        for (let r = 1; r <= 3; r++) {
            for (let dx = -r; dx <= r; dx++) {
                for (let dy = -r; dy <= r; dy++) {
                    if (Math.abs(dx) === r || Math.abs(dy) === r) {
                        const testX = x + dx;
                        const testY = y + dy;
                        const testZ = z;
                        const testKey = `${testX},${testY},${testZ}`;
                        if (!roomAtCoord.has(testKey)) {
                            if (coordinates[roomId]) {
                                const oldKey = `${coordinates[roomId].x},${coordinates[roomId].y},${coordinates[roomId].z}`;
                                roomAtCoord.delete(oldKey);
                            }
                            coordinates[roomId] = { x: testX, y: testY, z: testZ };
                            roomAtCoord.set(testKey, roomId);
                            return { x: testX, y: testY, z: testZ, adjusted: true };
                        }
                    }
                }
            }
        }
    }
    
    // Remove old assignment
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

// Phase 1: Initial assignment from bag_end with distance-based priority
console.log('Phase 1: Initial assignment from bag_end...');
const queue = [{ roomId: 'bag_end', depth: 0 }];
const visited = new Set(['bag_end']);

assignCoordinate('bag_end', 0, 0, 0);
assignedOrder.push('bag_end');

while (queue.length > 0) {
    const { roomId } = queue.shift();
    const room = rooms[roomId];
    if (!room || !room.exits) continue;
    
    const currentCoord = coordinates[roomId];
    
    // Process exits in priority order (cardinal first, then by distance)
    const exits = Object.entries(room.exits)
        .map(([dir, targetId]) => ({
            dir,
            targetId,
            priority: directionPriority[dir] || 10,
            distance: distancesFromBagEnd[targetId] || 999
        }))
        .sort((a, b) => {
            if (a.priority !== b.priority) return a.priority - b.priority;
            return a.distance - b.distance;
        });
    
    for (const { dir, targetId } of exits) {
        if (visited.has(targetId)) continue;
        
        const vector = directionVectors[dir];
        if (!vector) continue;
        
        const targetX = currentCoord.x + vector.x;
        const targetY = currentCoord.y + vector.y;
        const targetZ = currentCoord.z + vector.z;
        
        assignCoordinate(targetId, targetX, targetY, targetZ);
        visited.add(targetId);
        assignedOrder.push(targetId);
        queue.push({ roomId: targetId, depth: 0 });
    }
}

// Phase 2: Handle disconnected rooms
let regionStartX = 100;
for (const roomId of Object.keys(rooms)) {
    if (coordinates[roomId]) continue;
    assignCoordinate(roomId, regionStartX, 0, 0);
    assignedOrder.push(roomId);
    regionStartX += 20;
}

console.log(`Assigned ${Object.keys(coordinates).length} rooms`);

// Phase 3: Stable iterative refinement
console.log('Phase 3: Stable iterative refinement...');

// Build constraint groups by target room
const constraintsByTarget = new Map();
for (const constraint of constraints) {
    if (!constraintsByTarget.has(constraint.to)) {
        constraintsByTarget.set(constraint.to, []);
    }
    constraintsByTarget.get(constraint.to).push(constraint);
}

// For each room with multiple constraints, pick the best one to satisfy
function getBestConstraintForRoom(roomId) {
    const roomConstraints = constraintsByTarget.get(roomId) || [];
    if (roomConstraints.length === 0) return null;
    
    // Filter to only constraints where source room is already assigned
    const validConstraints = roomConstraints.filter(c => coordinates[c.from]);
    
    if (validConstraints.length === 0) return null;
    
    // Sort by: priority (cardinal first), then by distance from bag_end (closer = better)
    validConstraints.sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        const aDist = distancesFromBagEnd[a.from] || 999;
        const bDist = distancesFromBagEnd[b.from] || 999;
        return aDist - bDist;
    });
    
    return validConstraints[0];
}

// Multiple refinement passes with stability checks
let lastSatisfaction = 0;
let stableCount = 0;

for (let pass = 0; pass < 30; pass++) {
    let improvements = 0;
    
    // Process each room and try to satisfy its best constraint
    const roomsToProcess = Array.from(constraintsByTarget.keys())
        .filter(roomId => coordinates[roomId])
        .sort((a, b) => {
            // Process rooms closer to bag_end first
            const aDist = distancesFromBagEnd[a] || 999;
            const bDist = distancesFromBagEnd[b] || 999;
            return aDist - bDist;
        });
    
    for (const roomId of roomsToProcess) {
        const bestConstraint = getBestConstraintForRoom(roomId);
        if (!bestConstraint) continue;
        
        const fromCoord = coordinates[bestConstraint.from];
        const currentCoord = coordinates[roomId];
        const expectedX = fromCoord.x + bestConstraint.vector.x;
        const expectedY = fromCoord.y + bestConstraint.vector.y;
        const expectedZ = fromCoord.z + bestConstraint.vector.z;
        
        // Check if already satisfied
        if (currentCoord.x === expectedX && 
            currentCoord.y === expectedY && 
            currentCoord.z === expectedZ) {
            continue;
        }
        
        // Try to move to expected position
        if (isCoordAvailable(expectedX, expectedY, expectedZ, roomId)) {
            const oldKey = `${currentCoord.x},${currentCoord.y},${currentCoord.z}`;
            roomAtCoord.delete(oldKey);
            coordinates[roomId] = { x: expectedX, y: expectedY, z: expectedZ };
            roomAtCoord.set(`${expectedX},${expectedY},${expectedZ}`, roomId);
            improvements++;
        } else {
            // Target occupied - try to move blocking room if it has lower priority
            const blockingId = roomAtCoord.get(`${expectedX},${expectedY},${expectedZ}`);
            if (blockingId) {
                const blockingDist = distancesFromBagEnd[blockingId] || 999;
                const roomDist = distancesFromBagEnd[roomId] || 999;
                
                // Move blocking room if it's further from bag_end or has lower priority constraint
                if (blockingDist > roomDist || (bestConstraint.priority === 1 && blockingDist >= roomDist)) {
                    // Find new spot for blocking room
                    for (let r = 1; r <= 3; r++) {
                        let moved = false;
                        for (let dx = -r; dx <= r; dx++) {
                            for (let dy = -r; dy <= r; dy++) {
                                if (Math.abs(dx) === r || Math.abs(dy) === r) {
                                    const newX = expectedX + dx;
                                    const newY = expectedY + dy;
                                    const newZ = expectedZ;
                                    if (isCoordAvailable(newX, newY, newZ, blockingId)) {
                                        const blockCoord = coordinates[blockingId];
                                        const oldKey = `${blockCoord.x},${blockCoord.y},${blockCoord.z}`;
                                        roomAtCoord.delete(oldKey);
                                        coordinates[blockingId] = { x: newX, y: newY, z: newZ };
                                        roomAtCoord.set(`${newX},${newY},${newZ}`, blockingId);
                                        
                                        const oldKey2 = `${currentCoord.x},${currentCoord.y},${currentCoord.z}`;
                                        roomAtCoord.delete(oldKey2);
                                        coordinates[roomId] = { x: expectedX, y: expectedY, z: expectedZ };
                                        roomAtCoord.set(`${expectedX},${expectedY},${expectedZ}`, roomId);
                                        improvements++;
                                        moved = true;
                                        break;
                                    }
                                }
                            }
                            if (moved) break;
                        }
                        if (moved) break;
                    }
                }
            }
        }
    }
    
    // Check satisfaction rate
    let satisfied = 0;
    let total = 0;
    for (const constraint of constraints) {
        if (!coordinates[constraint.from] || !coordinates[constraint.to]) continue;
        total++;
        const from = coordinates[constraint.from];
        const to = coordinates[constraint.to];
        const expected = {
            x: from.x + constraint.vector.x,
            y: from.y + constraint.vector.y,
            z: from.z + constraint.vector.z
        };
        if (to.x === expected.x && to.y === expected.y && to.z === expected.z) {
            satisfied++;
        }
    }
    
    const rate = Math.round(satisfied / total * 100);
    
    if (rate === lastSatisfaction) {
        stableCount++;
        if (stableCount >= 3) {
            console.log(`  Pass ${pass + 1}: ${satisfied}/${total} (${rate}%) - stable, stopping`);
            break;
        }
    } else {
        stableCount = 0;
    }
    
    lastSatisfaction = rate;
    
    if (pass % 5 === 0 || improvements > 0) {
        console.log(`  Pass ${pass + 1}: ${satisfied}/${total} (${rate}%) - ${improvements} improvements`);
    }
    
    if (improvements === 0 && stableCount >= 2) break;
}

// Normalize coordinates
// Normalize coordinates
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

const finalCoords = {};
for (const [id, coord] of Object.entries(coordinates)) {
    finalCoords[id] = {
        x: coord.x + offsetX,
        y: coord.y + offsetY,
        z: coord.z + offsetZ
    };
}

// Final verification
let satisfied = 0;
let total = 0;
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
    }
}

console.log(`\nFinal constraint satisfaction: ${satisfied}/${total} (${Math.round(satisfied/total*100)}%)`);

// Check overlaps
const overlapMap = new Map();
for (const [id, coord] of Object.entries(finalCoords)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(id);
}
const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`\n⚠️  Warning: ${overlaps.length} overlaps remain`);
} else {
    console.log(`\n✅ No overlaps!`);
}

// Generate WorldMap.jsx (same as before)
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
console.log('\n✅ Generated client/src/components/WorldMap.jsx');

