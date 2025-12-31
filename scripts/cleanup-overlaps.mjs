// Clean up any overlapping rooms, keeping the most important one at each position

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const worldDataPath = join(__dirname, 'linear-world-connections.json');
const worldData = JSON.parse(readFileSync(worldDataPath, 'utf-8'));

const coordinates = worldData.coordinates || {};
const exits = worldData.exits || {};

console.log('Cleaning up overlapping rooms...\n');

// Room priority (higher = more important to keep)
function getRoomPriority(roomId) {
    const id = roomId.toLowerCase();
    
    // Key story rooms
    if (id === 'bag_end') return 100;
    if (id.includes('mount_doom')) return 95;
    if (id.includes('barad_dur')) return 95;
    if (id.includes('minas_tirith')) return 90;
    if (id.includes('rivendell')) return 85;
    if (id.includes('moria')) return 80;
    if (id.includes('lorien')) return 80;
    if (id.includes('edoras')) return 75;
    if (id.includes('isengard')) return 75;
    if (id.includes('erebor')) return 70;
    
    // Other named rooms
    if (!id.includes('path_') && !id.includes('road_') && 
        !id.includes('river_') && !id.includes('riverbank_')) {
        return 50;
    }
    
    // Roads are slightly more important than paths
    if (id.includes('road_')) return 20;
    if (id.includes('path_')) return 15;
    
    // Rivers and banks
    if (id.includes('river_') && !id.includes('riverbank')) return 10;
    if (id.includes('riverbank')) return 5;
    
    return 1;
}

// Build coordinate map
const coordMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z || 0}`;
    if (!coordMap.has(key)) {
        coordMap.set(key, []);
    }
    coordMap.get(key).push({ roomId, priority: getRoomPriority(roomId) });
}

// Find and remove overlaps
const roomsToRemove = new Set();
let overlapCount = 0;

for (const [key, roomList] of coordMap.entries()) {
    if (roomList.length > 1) {
        overlapCount++;
        // Sort by priority (highest first)
        roomList.sort((a, b) => b.priority - a.priority);
        
        // Keep the first one, remove the rest
        for (let i = 1; i < roomList.length; i++) {
            roomsToRemove.add(roomList[i].roomId);
        }
    }
}

console.log(`Found ${overlapCount} positions with overlaps`);
console.log(`Removing ${roomsToRemove.size} overlapping rooms\n`);

// Remove rooms
for (const roomId of roomsToRemove) {
    delete coordinates[roomId];
    delete exits[roomId];
    
    // Remove references from other rooms
    for (const [otherRoomId, otherExits] of Object.entries(exits)) {
        if (!otherExits) continue;
        for (const [dir, target] of Object.entries(otherExits)) {
            if (target === roomId) {
                delete otherExits[dir];
            }
        }
    }
}

// Save
worldData.coordinates = coordinates;
worldData.exits = exits;
writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

console.log(`✅ Removed ${roomsToRemove.size} rooms`);
console.log(`✅ Remaining rooms: ${Object.keys(coordinates).length}`);
