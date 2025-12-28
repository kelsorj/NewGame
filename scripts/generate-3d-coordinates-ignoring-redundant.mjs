import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

// List of redundant diagonal connections to ignore during coordinate generation
// These have alternative paths using cardinal directions
const IGNORE_CONNECTIONS = new Set([
    'bucklebury:northwest:fornost_gates',
    'buckland_cellar:northwest:fornost_gates',
    'fornost_gates:southeast:buckland_cellar',
    'fornost_temple:northeast:trollshaws',
    'annuminas_approach:southeast:annuminas_tower',
    'mithril_depths_1:southeast:tunnel_exit',
    'mithril_depths_2:northeast:iron_mines_1',
    'mithril_depths_2:southeast:east_gate_moria',
    'iron_mines_1:southwest:mithril_depths_2',
    'khazad_dum_chasm_view:northeast:singing_groves',
    'khazad_dum_chasm_view:northwest:dead_city',
    'singing_groves:southeast:wellinghall',
    'singing_groves:southwest:khazad_dum_chasm_view',
    'celebrant_banks:northeast:grey_havens_docks',
    'anduin_confluence:northeast:mirkwood_edge',
    'anduin_confluence:northwest:entwash_delta',
    'skinbark_grove:northeast:dead_city',
    'skinbark_grove:northwest:long_lake_path',
    'leaflock_meadow:northeast:entwash_delta',
    'leaflock_meadow:northwest:paths_of_dead',
    'westfold_plains:southeast:rohan_plains',
    'eastfold_plains:southwest:rohan_plains',
    'entwash_delta:southeast:anduin_confluence',
    'entwash_delta:southwest:leaflock_meadow',
    'ithilien_woods:northeast:osgiliath_ruins',
    // Add more as needed - this is a subset
]);

function shouldIgnoreConnection(from, direction, to) {
    return IGNORE_CONNECTIONS.has(`${from}:${direction}:${to}`);
}

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
const distancesFromBagEnd = {};

// Build constraints (excluding ignored connections)
console.log('Building constraint graph (ignoring redundant diagonals)...');
for (const [roomId, room] of Object.entries(rooms)) {
    if (!room.exits) continue;
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (!rooms[targetId]) continue;
        
        // Skip ignored connections
        if (shouldIgnoreConnection(roomId, direction, targetId)) {
            continue;
        }
        
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
console.log(`Found ${constraints.length} constraints (ignored ${Object.keys(rooms).reduce((sum, id) => {
    const room = rooms[id];
    if (!room.exits) return sum;
    return sum + Object.entries(room.exits).filter(([dir, to]) => 
        shouldIgnoreConnection(id, dir, to)
    ).length;
}, 0)} redundant diagonals)`);

// Calculate distances from bag_end
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

// Phase 1: Initial assignment from bag_end
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
    
    // Process exits in priority order, skipping ignored connections
    const exits = Object.entries(room.exits)
        .filter(([dir, targetId]) => !shouldIgnoreConnection(roomId, dir, targetId))
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

// Phase 3: Stable iterative refinement (same as before)
console.log('Phase 3: Stable iterative refinement...');

const constraintsByTarget = new Map();
for (const constraint of constraints) {
    if (!constraintsByTarget.has(constraint.to)) {
        constraintsByTarget.set(constraint.to, []);
    }
    constraintsByTarget.get(constraint.to).push(constraint);
}

function getBestConstraintForRoom(roomId) {
    const roomConstraints = constraintsByTarget.get(roomId) || [];
    const validConstraints = roomConstraints.filter(c => coordinates[c.from]);
    if (validConstraints.length === 0) return null;
    
    validConstraints.sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        const aDist = distancesFromBagEnd[a.from] || 999;
        const bDist = distancesFromBagEnd[b.from] || 999;
        return aDist - bDist;
    });
    
    return validConstraints[0];
}

let lastSatisfaction = 0;
let stableCount = 0;

for (let pass = 0; pass < 30; pass++) {
    let improvements = 0;
    
    const roomsToProcess = Array.from(constraintsByTarget.keys())
        .filter(roomId => coordinates[roomId])
        .sort((a, b) => {
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
        
        if (currentCoord.x === expectedX && 
            currentCoord.y === expectedY && 
            currentCoord.z === expectedZ) {
            continue;
        }
        
        if (isCoordAvailable(expectedX, expectedY, expectedZ, roomId)) {
            const oldKey = `${currentCoord.x},${currentCoord.y},${currentCoord.z}`;
            roomAtCoord.delete(oldKey);
            coordinates[roomId] = { x: expectedX, y: expectedY, z: expectedZ };
            roomAtCoord.set(`${expectedX},${expectedY},${expectedZ}`, roomId);
            improvements++;
        } else {
            const blockingId = roomAtCoord.get(`${expectedX},${expectedY},${expectedZ}`);
            if (blockingId) {
                const blockingDist = distancesFromBagEnd[blockingId] || 999;
                const roomDist = distancesFromBagEnd[roomId] || 999;
                
                if (blockingDist > roomDist || (bestConstraint.priority === 1 && blockingDist >= roomDist)) {
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

// Generate WorldMap.jsx (same template as before - truncated for brevity)
// ... (same output generation code as the stable version)

console.log('\n✅ Generated coordinates ignoring redundant diagonals');
console.log('Note: These connections still exist for navigation, but are ignored for coordinate generation.');

