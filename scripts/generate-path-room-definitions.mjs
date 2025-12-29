#!/usr/bin/env node
/**
 * Generate Path Room Definitions from coordinates
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load coordinates
const coordData = JSON.parse(readFileSync(
    path.join(__dirname, 'linear-world-connections.json'),
    'utf8'
));

const coordinates = coordData.coordinates;
const pathRooms = Object.keys(coordinates).filter(r => 
    r.startsWith('path_') || 
    r.startsWith('road_') || 
    r.startsWith('river_') || 
    r.startsWith('riverbank_') || 
    r.startsWith('countryside_') || 
    r.startsWith('filler_')
);

console.log(`Generating definitions for ${pathRooms.length} path/filler rooms...`);

const regionNames = {
    shire: 'Shire', old_forest: 'Old Forest', barrow_downs: 'Barrow Downs',
    bree: 'Bree', weathertop: 'Weathertop', rivendell: 'Rivendell',
    moria: 'Moria', lothlorien: 'Lothlorien', fangorn: 'Fangorn',
    rohan: 'Rohan', mirkwood: 'Mirkwood', erebor: 'Erebor',
    gondor: 'Gondor', minas_tirith: 'Minas Tirith', mordor: 'Mordor'
};

const pathRoomDefinitions = {};

for (const pathRoomId of pathRooms) {
    // Road rooms
    if (pathRoomId.startsWith('road_')) {
        const parts = pathRoomId.split('_');
        if (parts.length >= 4) {
            const fromRegion = parts[1];
            const toRegion = parts[2];
            const fromName = regionNames[fromRegion] || fromRegion;
            const toName = regionNames[toRegion] || toRegion;
            pathRoomDefinitions[pathRoomId] = {
                name: `Road to ${toName}`,
                description: `You are on a well-maintained road between ${fromName} and ${toName}. The path is wide and clear, with markers indicating the way. Travelers and merchants occasionally pass by.`,
                exits: {},
                items: [],
                enemies: []
            };
        }
    }
    // Path rooms
    else if (pathRoomId.startsWith('path_')) {
        const parts = pathRoomId.split('_');
        if (parts.length >= 4) {
            const fromRegion = parts[1];
            const toRegion = parts[2];
            const fromName = regionNames[fromRegion] || fromRegion;
            const toName = regionNames[toRegion] || toRegion;
            pathRoomDefinitions[pathRoomId] = {
                name: `Path to ${toName}`,
                description: `You are on a narrow path between ${fromName} and ${toName}. The trail winds through the landscape, marked by occasional stones and worn by the passage of many feet.`,
                exits: {},
                items: [],
                enemies: []
            };
        }
    }
    // River water (requires boat)
    else if (pathRoomId.startsWith('river_')) {
        const riverParts = pathRoomId.split('_');
        const riverName = riverParts.slice(1, -2).join(' ').replace(/_/g, ' ');
        pathRoomDefinitions[pathRoomId] = {
            name: `${riverName} (Water)`,
            description: `You are on the flowing waters of the ${riverName}. The current is strong, and you need a boat to navigate safely. The riverbanks are visible on either side.`,
            exits: {},
            items: [],
            enemies: [],
            requirements: [
                { type: 'item', item: 'boat' }
            ]
        };
    }
    // River banks (walkable)
    else if (pathRoomId.startsWith('riverbank_')) {
        const bankParts = pathRoomId.split('_');
        const riverName = bankParts.slice(1, -3).join(' ').replace(/_/g, ' ');
        pathRoomDefinitions[pathRoomId] = {
            name: `${riverName} Bank`,
            description: `You are on the bank of the ${riverName}. The water flows steadily nearby, and you can see the opposite shore. A path follows the riverbank, and you can hear the gentle sound of flowing water.`,
            exits: {},
            items: [],
            enemies: []
        };
    }
    // Branch paths (organic connections)
    else if (pathRoomId.startsWith('path_branch_')) {
        pathRoomDefinitions[pathRoomId] = {
            name: 'Winding Path',
            description: 'You are on a winding path that branches through the landscape. The trail curves naturally, following the contours of the land.',
            exits: {},
            items: [],
            enemies: []
        };
    }
    // Countryside rooms
    else if (pathRoomId.startsWith('countryside_')) {
        pathRoomDefinitions[pathRoomId] = {
            name: 'Countryside',
            description: 'You are in the open countryside of Middle Earth. Rolling hills and fields stretch around you, with paths and roads visible in the distance.',
            exits: {},
            items: [],
            enemies: []
        };
    }
    // Fallback
    else {
        pathRoomDefinitions[pathRoomId] = {
            name: 'Road',
            description: 'You are on a road through Middle Earth.',
            exits: {},
            items: [],
            enemies: []
        };
    }
}

// Save to file
const pathRoomsPath = path.join(__dirname, '../server/src/data/path-rooms.js');
const pathRoomsExport = `// Auto-generated path/road rooms
// Generated: ${new Date().toISOString()}
// Total rooms: ${Object.keys(pathRoomDefinitions).length}

export const pathRooms = ${JSON.stringify(pathRoomDefinitions, null, 2)};
`;

writeFileSync(pathRoomsPath, pathRoomsExport, 'utf8');
console.log(`✅ Saved ${Object.keys(pathRoomDefinitions).length} path room definitions to: ${pathRoomsPath}`);

