import fs from 'fs';
import path from 'path';

const dataDir = '/Users/kelsorj/Desktop/NewGame/server/src/data';

function updateRoomExit(file, roomId, dir, targetId) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the room block
    const roomRegex = new RegExp(`(${roomId}:\\s*{[\\s\\S]*?exits:\\s*{)([\\s\\S]*?)(})`, 'g');

    content = content.replace(roomRegex, (match, prefix, exits, suffix) => {
        // Check if exit already exists
        const exitRegex = new RegExp(`${dir}:\\s*['"]${targetId}['"]`);
        if (exitRegex.test(exits)) return match;

        // Add the exit
        let newExits = exits.trim();
        if (newExits && !newExits.endsWith(',')) newExits += ',';
        newExits += ` ${dir}: '${targetId}'`;

        return `${prefix}\n            ${newExits}\n        ${suffix}`;
    });

    fs.writeFileSync(filePath, content);
}

// BREE & SHIRE GATEWAYS
updateRoomExit('rooms.js', 'hobbiton_square', 'southwest', 'michel_delving');
updateRoomExit('rooms-expansion-batch1.js', 'michel_delving', 'northeast', 'hobbiton_square');
updateRoomExit('rooms.js', 'bree_east_road', 'north', 'fornost_approach');
updateRoomExit('rooms-expansion-batch1.js', 'fornost_approach', 'south', 'bree_east_road');

// ASHMERE TYPOS
updateRoomExit('rooms-expansion-batch2.js', 'rivendell_hall', 'south', 'rivendell_forge'); // Fix missing link

// BRIDGE CONNECTIONS
updateRoomExit('rooms.js', 'brandywine_bridge', 'east', 'bucklebury');
updateRoomExit('rooms-expansion-batch1.js', 'bucklebury', 'west', 'brandywine_bridge');

// OLD FOREST LINKS
updateRoomExit('rooms.js', 'withywindle', 'north', 'old_forest_depth');
updateRoomExit('rooms.js', 'old_forest_depth', 'south', 'withywindle');
updateRoomExit('rooms-expansion-batch1.js', 'old_forest_buckland_entrance', 'south', 'old_forest_depth');
updateRoomExit('rooms.js', 'old_forest_depth', 'north', 'old_forest_buckland_entrance');

// MORE SHIRE LINKS
updateRoomExit('rooms-expansion-batch1.js', 'green_hill_country', 'south', 'crickhollow');
updateRoomExit('rooms-expansion-batch1.js', 'crickhollow', 'north', 'green_hill_country');

// This is just a sample, I'll add more in the next turn if needed but these cover the major ones reported by user.
console.log('Applied key topological fixes.');
