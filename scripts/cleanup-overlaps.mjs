#!/usr/bin/env node

/**
 * Cleanup Overlaps
 * 
 * Removes overlapping rooms from the world connections JSON file.
 * Keeps the first room at each coordinate and removes duplicates.
 */

import { readFileSync, writeFileSync } from 'fs';

console.log('Cleaning up overlaps in world connections...\n');

// Load connections
const connectionData = JSON.parse(readFileSync('scripts/linear-world-connections.json', 'utf8'));
const coordinates = connectionData.coordinates || {};
const exits = connectionData.exits || {};

// Find overlaps
const coordToRooms = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!coordToRooms.has(key)) {
        coordToRooms.set(key, []);
    }
    coordToRooms.get(key).push(roomId);
}

const overlaps = Array.from(coordToRooms.entries())
    .filter(([_, rooms]) => rooms.length > 1);

console.log(`Found ${overlaps.length} overlapping coordinates`);

// Remove duplicates - keep the first room, remove the rest
const roomsToRemove = new Set();
let removedCount = 0;

for (const [coord, rooms] of overlaps) {
    // Keep the first room, mark the rest for removal
    for (let i = 1; i < rooms.length; i++) {
        roomsToRemove.add(rooms[i]);
        removedCount++;
    }
}

console.log(`Removing ${removedCount} duplicate rooms...`);

// Remove overlapping rooms from coordinates and exits
const newCoordinates = {};
const newExits = {};

for (const [roomId, coord] of Object.entries(coordinates)) {
    if (!roomsToRemove.has(roomId)) {
        newCoordinates[roomId] = coord;
    }
}

for (const [roomId, roomExits] of Object.entries(exits)) {
    if (!roomsToRemove.has(roomId)) {
        // Clean up exits that point to removed rooms
        const cleanedExits = {};
        for (const [dir, targetId] of Object.entries(roomExits)) {
            if (!roomsToRemove.has(targetId)) {
                cleanedExits[dir] = targetId;
            }
        }
        if (Object.keys(cleanedExits).length > 0) {
            newExits[roomId] = cleanedExits;
        }
    }
}

// Also clean up exits that reference removed rooms
for (const [roomId, roomExits] of Object.entries(newExits)) {
    const cleanedExits = {};
    for (const [dir, targetId] of Object.entries(roomExits)) {
        if (newCoordinates[targetId]) {
            cleanedExits[dir] = targetId;
        }
    }
    newExits[roomId] = cleanedExits;
}

// Save cleaned data
const output = {
    coordinates: newCoordinates,
    exits: newExits
};

writeFileSync('scripts/linear-world-connections.json', JSON.stringify(output, null, 2));

// Verify no overlaps remain
const verifyCoordToRooms = new Map();
for (const [roomId, coord] of Object.entries(newCoordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!verifyCoordToRooms.has(key)) {
        verifyCoordToRooms.set(key, []);
    }
    verifyCoordToRooms.get(key).push(roomId);
}

const remainingOverlaps = Array.from(verifyCoordToRooms.entries())
    .filter(([_, rooms]) => rooms.length > 1);

console.log(`\n✅ Cleanup complete!`);
console.log(`   Removed: ${removedCount} duplicate rooms`);
console.log(`   Remaining rooms: ${Object.keys(newCoordinates).length}`);
console.log(`   Remaining overlaps: ${remainingOverlaps.length}`);

if (remainingOverlaps.length > 0) {
    console.log(`\n⚠️  Warning: ${remainingOverlaps.length} overlaps still remain:`);
    remainingOverlaps.slice(0, 5).forEach(([coord, rooms]) => {
        console.log(`   ${coord}: ${rooms.join(', ')}`);
    });
}

