#!/usr/bin/env node

/**
 * Robust Topology Aligner
 * 
 * Correctly updates room exits in game data to match map coordinates.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORLD_MAP_PATH = join(__dirname, '../client/src/components/WorldMap.jsx');
const DATA_DIR = join(__dirname, '../server/src/data');

const directionDeltas = {
    'north': { x: 0, y: 1 },
    'south': { x: 0, y: -1 },
    'east': { x: 1, y: 0 },
    'west': { x: -1, y: 0 },
    'northeast': { x: 1, y: 1 },
    'northwest': { x: -1, y: 1 },
    'southeast': { x: 1, y: -1 },
    'southwest': { x: -1, y: -1 }
};

// 1. Load coordinates from WorldMap.jsx
const worldMapContent = readFileSync(WORLD_MAP_PATH, 'utf-8');
const coordMatch = worldMapContent.match(/const roomCoordinates = \{([\s\S]*?)\};/);
const coordinates = {};
const coordToRoom = {}; // key: "x,y", value: roomId

const coordLines = coordMatch[1].split('\n').filter(line => line.trim() && !line.trim().startsWith('//'));
coordLines.forEach(line => {
    const match = line.match(/(\w+):\s*\{\s*x:\s*(-?\d+),\s*y:\s*(-?\d+)/);
    if (match) {
        const [, id, xStr, yStr] = match;
        const x = parseInt(xStr);
        const y = parseInt(yStr);
        coordinates[id] = { x, y };
        const key = `${x},${y}`;
        if (!coordToRoom[key]) coordToRoom[key] = [];
        coordToRoom[key].push(id);
    }
});

console.log(`Loaded ${Object.keys(coordinates).length} coordinates.`);

// 2. Load all rooms to build the new topology
const allRooms = {};
const dataFiles = readdirSync(DATA_DIR).filter(f => f.startsWith('rooms') && f.endsWith('.js'));
for (const file of dataFiles) {
    const module = await import(join(DATA_DIR, file));
    const exports = Object.values(module);
    for (const exp of exports) {
        if (typeof exp === 'object' && exp !== null) {
            Object.assign(allRooms, exp);
        }
    }
}

// 3. Process each file
for (const file of dataFiles) {
    const path = join(DATA_DIR, file);
    let content = readFileSync(path, 'utf-8');
    let lines = content.split('\n');
    let modified = false;

    // Scan lines for room definitions and exits
    let currentRoomId = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Match room start: "id: {" or "    id: {"
        const roomMatch = line.match(/^(\s{0,4})(\w+):\s*\{/);
        if (roomMatch) {
            currentRoomId = roomMatch[2];
            continue;
        }

        // Match end of room: "    }"
        const endMatch = line.match(/^\s{4}\},?$/);
        if (endMatch) {
            currentRoomId = null;
            continue;
        }

        // Match exits: "        exits: { ... },"
        if (currentRoomId && line.includes('exits:')) {
            const coord = coordinates[currentRoomId];
            if (!coord) continue;

            const oldRoom = allRooms[currentRoomId];
            const newExits = {};

            // Check neighbors
            for (const [dir, delta] of Object.entries(directionDeltas)) {
                const targetX = coord.x + delta.x;
                const targetY = coord.y + delta.y;
                const targetKey = `${targetX},${targetY}`;

                const possible = coordToRoom[targetKey];
                if (possible && possible.length > 0) {
                    // Bias towards existing exit if it matches one of the possible rooms at coordinate
                    let targetId = possible[0];
                    if (oldRoom.exits && oldRoom.exits[dir] && possible.includes(oldRoom.exits[dir])) {
                        targetId = oldRoom.exits[dir];
                    }
                    newExits[dir] = targetId;
                }
            }

            // Preserve up/down
            if (oldRoom.exits?.up) newExits.up = oldRoom.exits.up;
            if (oldRoom.exits?.down) newExits.down = oldRoom.exits.down;

            // Generate new exits string
            const pairs = Object.entries(newExits).map(([d, t]) => `${d}: '${t}'`);
            const newLine = line.replace(/exits:\s*\{[\s\S]*?\}/, `exits: { ${pairs.join(', ')} }`);

            if (lines[i] !== newLine) {
                lines[i] = newLine;
                modified = true;
            }
        }
    }

    if (modified) {
        writeFileSync(path, lines.join('\n'), 'utf-8');
        console.log(`Updated ${file}`);
    }
}

console.log('✅ Topology alignment complete!');
