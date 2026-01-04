import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load coordinates
const coordFile = path.join(__dirname, 'linear-world-connections.json');
const data = JSON.parse(readFileSync(coordFile, 'utf8'));
const coordinates = data.coordinates || {};

console.log(`Loaded ${Object.keys(coordinates).length} rooms`);

// Find all overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) {
        overlapMap.set(key, []);
    }
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries())
    .filter(([_, rooms]) => rooms.length > 1)
    .map(([coord, rooms]) => ({
        coord: coord.split(',').map(Number),
        rooms
    }));

console.log(`Found ${overlaps.length} overlapping coordinates`);

// Create a set of all occupied coordinates for quick lookup
const occupied = new Set();
for (const [roomId, coord] of Object.entries(coordinates)) {
    occupied.add(`${coord.x},${coord.y},${coord.z}`);
}

// Function to find nearest empty space within maxDistance
function findNearestEmptySpace(startX, startY, startZ, maxDistance = 20) {
    // Try spiral pattern outward from start position
    for (let dist = 1; dist <= maxDistance; dist++) {
        // Try all positions at this distance
        for (let dx = -dist; dx <= dist; dx++) {
            for (let dy = -dist; dy <= dist; dy++) {
                for (let dz = -dist; dz <= dist; dz++) {
                    // Only check positions at exactly this distance (manhattan distance)
                    const manhattanDist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
                    if (manhattanDist !== dist) continue;
                    
                    const x = startX + dx;
                    const y = startY + dy;
                    const z = startZ + dz;
                    const key = `${x},${y},${z}`;
                    
                    if (!occupied.has(key)) {
                        return { x, y, z };
                    }
                }
            }
        }
    }
    return null; // No space found within maxDistance
}

// Track statistics
let totalMoved = 0;
let totalOverlaps = 0;
const movedRooms = [];

// Process each overlap
for (const overlap of overlaps) {
    const [x, y, z] = overlap.coord;
    const rooms = overlap.rooms;
    
    totalOverlaps += rooms.length;
    
    console.log(`\nFixing overlap at (${x},${y},${z}) with ${rooms.length} rooms: ${rooms.join(', ')}`);
    
    // Keep the first room at the original position, move the rest
    for (let i = 1; i < rooms.length; i++) {
        const roomId = rooms[i];
        const originalCoord = coordinates[roomId];
        
        // Find nearest empty space
        const newCoord = findNearestEmptySpace(x, y, z, 20);
        
        if (newCoord) {
            // Remove old position from occupied set
            occupied.delete(`${originalCoord.x},${originalCoord.y},${originalCoord.z}`);
            
            // Update coordinates
            coordinates[roomId] = newCoord;
            
            // Add new position to occupied set
            occupied.add(`${newCoord.x},${newCoord.y},${newCoord.z}`);
            
            const distance = Math.abs(newCoord.x - x) + Math.abs(newCoord.y - y) + Math.abs(newCoord.z - z);
            console.log(`  Moved ${roomId} from (${originalCoord.x},${originalCoord.y},${originalCoord.z}) to (${newCoord.x},${newCoord.y},${newCoord.z}) - distance: ${distance}`);
            
            totalMoved++;
            movedRooms.push({
                roomId,
                from: originalCoord,
                to: newCoord,
                distance
            });
        } else {
            console.log(`  ⚠️  WARNING: Could not find empty space within 20 squares for ${roomId}`);
        }
    }
}

// Verify no overlaps remain
const finalOverlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!finalOverlapMap.has(key)) {
        finalOverlapMap.set(key, []);
    }
    finalOverlapMap.get(key).push(roomId);
}

const remainingOverlaps = Array.from(finalOverlapMap.entries())
    .filter(([_, rooms]) => rooms.length > 1);

if (remainingOverlaps.length > 0) {
    console.log(`\n⚠️  WARNING: ${remainingOverlaps.length} overlaps still remain after fixing:`);
    for (const [coord, rooms] of remainingOverlaps) {
        console.log(`  ${coord}: ${rooms.join(', ')}`);
    }
} else {
    console.log(`\n✅ All overlaps fixed!`);
}

// Save updated coordinates
data.coordinates = coordinates;
writeFileSync(coordFile, JSON.stringify(data, null, 2), 'utf8');

console.log(`\n📊 Summary:`);
console.log(`  Total overlaps found: ${overlaps.length}`);
console.log(`  Total rooms in overlaps: ${totalOverlaps}`);
console.log(`  Rooms moved: ${totalMoved}`);
console.log(`  Remaining overlaps: ${remainingOverlaps.length}`);
console.log(`\n✅ Coordinates saved to ${coordFile}`);

