#!/usr/bin/env node
/**
 * Generate Path Room Definitions
 * Creates actual room objects for path/road rooms
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate path room definitions
function generatePathRooms(pathRooms) {
    const pathRoomDefinitions = {};
    
    for (const pathRoomId of pathRooms) {
        // Parse path room ID: path_shire_old_forest_1
        const parts = pathRoomId.split('_');
        if (parts.length >= 4) {
            const fromRegion = parts[1];
            const toRegion = parts[2];
            const index = parts[3];
            
            // Create descriptive name
            const regionNames = {
                shire: 'Shire',
                old_forest: 'Old Forest',
                barrow_downs: 'Barrow Downs',
                bree: 'Bree',
                weathertop: 'Weathertop',
                rivendell: 'Rivendell',
                moria: 'Moria',
                lothlorien: 'Lothlorien',
                fangorn: 'Fangorn',
                rohan: 'Rohan',
                mirkwood: 'Mirkwood',
                erebor: 'Erebor',
                gondor: 'Gondor',
                minas_tirith: 'Minas Tirith',
                mordor: 'Mordor'
            };
            
            const fromName = regionNames[fromRegion] || fromRegion;
            const toName = regionNames[toRegion] || toRegion;
            
            pathRoomDefinitions[pathRoomId] = {
                name: `Road to ${toName}`,
                description: `You are on a well-traveled road between ${fromName} and ${toName}. The path is clear and well-maintained, with markers indicating the way forward and back.`,
                exits: {},
                items: [],
                enemies: []
            };
        } else {
            // Generic path room
            pathRoomDefinitions[pathRoomId] = {
                name: 'Road',
                description: 'You are on a road through Middle Earth. The path stretches ahead and behind you.',
                exits: {},
                items: [],
                enemies: []
            };
        }
    }
    
    return pathRoomDefinitions;
}

// This will be called from the main script
export { generatePathRooms };

