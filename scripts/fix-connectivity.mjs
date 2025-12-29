#!/usr/bin/env node
/**
 * Fix connectivity - connect any unreachable rooms
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import rooms
const roomsPath = path.join(__dirname, '../server/src/data/rooms.js');
const roomsModule = await import(`file://${roomsPath}`);
const { rooms } = roomsModule;

// Load current connections
const connectionsPath = path.join(__dirname, 'linear-world-connections.json');
const data = JSON.parse(readFileSync(connectionsPath, 'utf8'));
const coordinates = data.coordinates;
const exits = data.newExits;

function distance(room1, room2) {
    const c1 = coordinates[room1];
    const c2 = coordinates[room2];
    if (!c1 || !c2) return Infinity;
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const dz = c2.z - c1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function getDirection(room1, room2) {
    const c1 = coordinates[room1];
    const c2 = coordinates[room2];
    if (!c1 || !c2) return null;
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const dz = c2.z - c1.z;
    if (dx === 0 && dy === 0) {
        if (dz === 1) return 'up';
        if (dz === -1) return 'down';
    }
    if (dz === 0) {
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (Math.abs(angle) < 22.5 || Math.abs(angle) > 157.5) return dx > 0 ? 'east' : 'west';
        if (Math.abs(angle - 90) < 22.5 || Math.abs(angle + 90) < 22.5) return dy > 0 ? 'south' : 'north';
        if (angle > 22.5 && angle < 67.5) return 'southeast';
        if (angle > 67.5 && angle < 112.5) return 'south';
        if (angle > 112.5 && angle < 157.5) return 'southwest';
        if (angle < -22.5 && angle > -67.5) return 'northeast';
        if (angle < -67.5 && angle > -112.5) return 'north';
        if (angle < -112.5 && angle > -157.5) return 'northwest';
    }
    return null;
}

// Check connectivity
const visited = new Set();
const queue = [Object.keys(rooms)[0]];
visited.add(queue[0]);

while (queue.length > 0) {
    const current = queue.shift();
    const currentExits = exits[current] || {};
    for (const targetId of Object.values(currentExits)) {
        if (!visited.has(targetId)) {
            visited.add(targetId);
            queue.push(targetId);
        }
    }
}

const totalRooms = Object.keys(rooms).length;
const unreachable = Array.from(Object.keys(rooms)).filter(r => !visited.has(r));

console.log(`Total rooms: ${totalRooms}`);
console.log(`Reachable: ${visited.size}`);
console.log(`Unreachable: ${unreachable.length}`);

if (unreachable.length > 0) {
    console.log(`Unreachable rooms: ${unreachable.join(', ')}`);
    
    // Connect each unreachable room
    for (const unreachableRoom of unreachable) {
        let nearestReachable = null;
        let minDist = Infinity;
        
        for (const reachableRoom of visited) {
            const dist = distance(unreachableRoom, reachableRoom);
            if (dist < minDist) {
                minDist = dist;
                nearestReachable = reachableRoom;
            }
        }
        
        if (nearestReachable) {
            const dir = getDirection(nearestReachable, unreachableRoom);
            if (dir) {
                if (!exits[nearestReachable]) exits[nearestReachable] = {};
                exits[nearestReachable][dir] = unreachableRoom;
                
                const reverseDir = {
                    'north': 'south', 'south': 'north',
                    'east': 'west', 'west': 'east',
                    'northeast': 'southwest', 'southwest': 'northeast',
                    'northwest': 'southeast', 'southeast': 'northwest',
                    'up': 'down', 'down': 'up'
                }[dir];
                if (reverseDir) {
                    if (!exits[unreachableRoom]) exits[unreachableRoom] = {};
                    exits[unreachableRoom][reverseDir] = nearestReachable;
                }
                console.log(`Connected ${unreachableRoom} to ${nearestReachable} via ${dir}`);
            }
        }
    }
    
    // Save updated exits
    data.newExits = exits;
    writeFileSync(connectionsPath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Updated connections saved!');
} else {
    console.log('✅ All rooms are connected!');
}

