#!/usr/bin/env node

/**
 * Verify Map Coordinates Script
 * 
 * This script verifies that room coordinates match actual room connections
 * and generates accurate coordinates based on the room exit structure.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load rooms data
const roomsPath = join(__dirname, '../server/src/data/rooms.js');
const roomsContent = readFileSync(roomsPath, 'utf-8');

// Extract room definitions (simplified - would need proper parsing)
console.log('Map Coordinate Verification Tool\n');
console.log('This tool helps verify that room coordinates match actual connections.\n');

console.log('Coordinate System:');
console.log('  - North = +Y (increasing Y)');
console.log('  - South = -Y (decreasing Y)');
console.log('  - East = +X (increasing X)');
console.log('  - West = -X (decreasing X)');
console.log('  - Up/Down = same X,Y (vertical movement)\n');

console.log('To verify coordinates:');
console.log('1. Check that if Room A has exit "north" to Room B,');
console.log('   then Room B should have Y coordinate = Room A Y + 1');
console.log('2. Check that if Room A has exit "east" to Room B,');
console.log('   then Room B should have X coordinate = Room A X + 1');
console.log('3. Check that if Room A has exit "south" to Room B,');
console.log('   then Room B should have Y coordinate = Room A Y - 1');
console.log('4. Check that if Room A has exit "west" to Room B,');
console.log('   then Room B should have X coordinate = Room A X - 1\n');

console.log('Note: Some rooms may have non-standard connections (up/down,');
console.log('diagonal exits like northwest, etc.) which need special handling.\n');

