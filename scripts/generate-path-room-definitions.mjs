#!/usr/bin/env node

/**
 * Generate Path Room Definitions
 * 
 * Reads the linear-world-connections.json file and generates
 * path room definitions for any rooms that don't exist in rooms.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { rooms } from '../server/src/data/rooms.js';

console.log('Generating path room definitions...\n');

// Load connections
const connectionData = JSON.parse(readFileSync('scripts/linear-world-connections.json', 'utf8'));
const coordinates = connectionData.coordinates || {};
const exits = connectionData.exits || {};

// Find all room IDs in coordinates that don't exist in rooms.js
// Note: We need to check all room files, not just the main rooms.js
const existingRoomIds = new Set(Object.keys(rooms));
const pathRoomIds = Object.keys(coordinates).filter(id => !existingRoomIds.has(id));

console.log(`Found ${pathRoomIds.length} path/filler rooms to generate definitions for...`);

// Generate path room definitions
const pathRooms = {};

for (const roomId of pathRoomIds) {
    // Determine room type from ID
    let name = 'Path';
    let description = 'You are on a narrow path. The trail winds through the landscape, marked by occasional stones and worn by the passage of many feet.';
    
    if (roomId.startsWith('road_')) {
        name = 'Road';
        description = 'You are on a well-maintained road. The surface is smooth and wide, clearly designed for travel. Wheel ruts mark the passage of many carts and wagons.';
    } else if (roomId.startsWith('path_')) {
        name = 'Path';
        description = 'You are on a narrow path. The trail winds through the landscape, marked by occasional stones and worn by the passage of many feet.';
    } else if (roomId.startsWith('river_')) {
        name = 'River';
        description = 'You are on a flowing river. The water moves steadily, and you need a boat to navigate safely.';
    } else if (roomId.startsWith('riverbank_')) {
        name = 'Riverbank';
        description = 'You stand on the bank of a river. The water flows nearby, and you can walk along the shore without needing a boat.';
    } else if (roomId.startsWith('branch_path_')) {
        name = 'Branch Path';
        description = 'You are on a small branch path that connects to larger routes. The trail is less traveled but still clear.';
    }
    
    // Check if this is a river room (requires boat)
    const requirements = [];
    if (roomId.startsWith('river_') && !roomId.startsWith('riverbank_')) {
        requirements.push({ type: 'item', item: 'boat' });
    }
    
    pathRooms[roomId] = {
        name,
        description,
        exits: exits[roomId] || {},
        items: [],
        enemies: [],
        ...(requirements.length > 0 ? { requirements } : {})
    };
}

// Generate the file content
const fileContent = `// Auto-generated path/road rooms
// Generated: ${new Date().toISOString()}
// Total rooms: ${Object.keys(pathRooms).length}

export const pathRooms = ${JSON.stringify(pathRooms, null, 2)};
`;

writeFileSync('server/src/data/path-rooms.js', fileContent);

console.log(`✅ Saved ${Object.keys(pathRooms).length} path room definitions to: server/src/data/path-rooms.js`);

