import { readFileSync, writeFileSync } from 'fs';

const connections = JSON.parse(readFileSync('scripts/complete-world-connections.json', 'utf8'));
const newExits = connections.newExits;

// Read all room files
const files = [
    'server/src/data/rooms.js',
    'server/src/data/rooms-expansion-batch1.js',
    'server/src/data/rooms-expansion-batch2.js',
    'server/src/data/rooms-expansion-batch3.js',
    'server/src/data/rooms-expansion-batch4.js',
    'server/src/data/rooms-expansion-batch5.js',
    'server/src/data/rooms-expansion-batch6.js'
];

for (const filePath of files) {
    try {
        let content = readFileSync(filePath, 'utf8');
        let updated = false;
        
        for (const [roomId, exits] of Object.entries(newExits)) {
            if (Object.keys(exits).length === 0) continue;
            
            // Build exits string
            const exitPairs = Object.entries(exits).map(([dir, target]) => {
                return `'${dir}': '${target}'`;
            });
            const exitsStr = exitPairs.join(', ');
            
            // Pattern: roomId: { ... exits: { ... } } ...
            const pattern = new RegExp(
                `(\\s+)${roomId}:\\s*\\{[^}]*exits:\\s*\\{[^}]*\\}`,
                's'
            );
            
            if (pattern.test(content)) {
                content = content.replace(pattern, (match) => {
                    return match.replace(/exits:\s*\{[^}]*\}/, `exits: { ${exitsStr} }`);
                });
                updated = true;
            }
        }
        
        if (updated) {
            writeFileSync(filePath, content);
            console.log(`✅ Updated ${filePath}`);
        }
    } catch (err) {
        console.log(`⚠️  ${filePath}: ${err.message}`);
    }
}

console.log('\n✅ All files processed!');

