#!/usr/bin/env node

/**
 * World Expansion Helper Script
 * 
 * This script helps with world expansion by:
 * - Generating room templates
 * - Checking connectivity
 * - Validating room structure
 * - Generating test cases
 */

const fs = require('fs');
const path = require('path');

// Room template generator
function generateRoomTemplate(roomId, name, description, exits = {}, items = [], enemies = []) {
  return `    ${roomId}: {
        name: "${name}",
        description: "${description}",
        exits: ${JSON.stringify(exits, null, 12).replace(/\n/g, '\n        ')},
        items: ${JSON.stringify(items)},
        enemies: ${JSON.stringify(enemies)}
    },`;
}

// Example usage
console.log('Room Template Generator\n');
console.log('Example room:');
console.log(generateRoomTemplate(
  'example_room',
  'Example Room',
  'A sample room for testing.',
  { north: 'other_room', south: 'another_room' },
  ['item1', 'item2'],
  ['enemy1']
));

// Connectivity checker (would need to read rooms.js)
function checkConnectivity(rooms) {
  const issues = [];
  
  for (const [roomId, room] of Object.entries(rooms)) {
    for (const [direction, targetRoom] of Object.entries(room.exits || {})) {
      if (!rooms[targetRoom]) {
        issues.push(`Room "${roomId}" has exit "${direction}" to non-existent room "${targetRoom}"`);
      }
    }
  }
  
  return issues;
}

console.log('\n\nTo use this script:');
console.log('1. Generate room templates for new areas');
console.log('2. Add rooms to rooms.js following the template');
console.log('3. Run connectivity check');
console.log('4. Update tests');



