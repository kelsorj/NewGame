#!/usr/bin/env node

/**
 * REBUILD WORLD FROM STORIES
 * 
 * This script deletes ALL existing rooms and rebuilds the world from scratch
 * based on The Hobbit and The Fellowship of the Ring stories, placing rooms
 * according to the terrain map.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('====================================================================================================');
console.log('REBUILDING WORLD FROM STORIES - THE HOBBIT & THE FELLOWSHIP OF THE RING');
console.log('====================================================================================================\n');

// ====================================================================================================
// STEP 1: DEFINE ALL ROOMS BASED ON THE STORIES
// ====================================================================================================

const storyRooms = {
    // ===== THE SHIRE =====
    bag_end: {
        name: "Bag End",
        description: "You stand in the cozy hobbit-hole of Bag End, the most comfortable dwelling in all the Shire. Round windows set deep in the hillside let in cheerful sunlight that dances across polished wooden floors. The smell of fine pipeweed lingers in the air, mingling with the scent of fresh bread from the kitchen. Shelves line the walls, filled with books, maps, and curiosities from distant lands. A large round green door, painted a cheerful yellow, leads outside to the well-tended garden where flowers bloom in riotous colors.",
        items: ['walking_stick', 'lembas_bread'],
        enemies: [],
        region: 'shire',
        storyLocation: 'hobbiton'
    },
    
    hobbiton_square: {
        name: "Hobbiton Square",
        description: "The central square of Hobbiton, with a market well and several shops. Hobbits go about their daily business, and the smell of fresh bread and pipeweed fills the air.",
        items: [],
        enemies: [],
        region: 'shire',
        storyLocation: 'hobbiton'
    },
    
    // ===== BUCKLAND =====
    buckland_kitchen: {
        name: "Buckland Kitchen",
        description: "A warm kitchen in Brandy Hall, filled with the smells of cooking. The Brandybucks are known for their hospitality.",
        items: ['apple_pie'],
        enemies: [],
        region: 'shire',
        storyLocation: 'buckland'
    },
    
    old_forest_entrance: {
        name: "Old Forest Entrance",
        description: "The edge of the Old Forest, where the trees grow close and dark. The forest seems to watch you with ancient eyes.",
        items: [],
        enemies: ['old_man_willow'],
        region: 'shire',
        storyLocation: 'old_forest'
    },
    
    // ===== BREE =====
    bree_inn: {
        name: "The Prancing Pony",
        description: "A cozy inn in the town of Bree, where travelers from all over Middle-earth gather. The common room is warm and welcoming, with a fire crackling in the hearth.",
        items: ['ale', 'bread'],
        enemies: [],
        region: 'bree',
        storyLocation: 'bree'
    },
    
    bree_town_square: {
        name: "Bree Town Square",
        description: "The central square of Bree, where the Big Folk and Little Folk meet. The town gate stands to the east.",
        items: [],
        enemies: [],
        region: 'bree',
        storyLocation: 'bree'
    },
    
    // ===== WEATHERTOP =====
    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruins of an ancient watchtower on Amon Sûl. The Ringwraiths attacked here. You can see for miles in all directions.",
        items: ['broken_sword'],
        enemies: ['ringwraith'],
        region: 'weathertop',
        storyLocation: 'weathertop'
    },
    
    // ===== RIVENDELL =====
    rivendell_house: {
        name: "The House of Elrond",
        description: "The Last Homely House east of the Sea. Beautiful elven architecture blends with nature. The sound of waterfalls and elven songs fills the air.",
        items: ['elven_sword', 'lembas_bread'],
        enemies: [],
        region: 'rivendell',
        storyLocation: 'rivendell'
    },
    
    rivendell_council: {
        name: "Council of Elrond",
        description: "The chamber where the Fellowship was formed. A great table stands in the center, and maps of Middle-earth line the walls.",
        items: ['map_of_middle_earth'],
        enemies: [],
        region: 'rivendell',
        storyLocation: 'rivendell'
    },
    
    // ===== MISTY MOUNTAINS =====
    misty_mountains_pass: {
        name: "High Pass of the Misty Mountains",
        description: "A treacherous mountain pass. Snow and wind make travel difficult. The path is narrow and dangerous.",
        items: [],
        enemies: ['stone_giant', 'goblin'],
        region: 'misty_mountains',
        storyLocation: 'misty_mountains'
    },
    
    // ===== MORIA =====
    moria_gate: {
        name: "The Doors of Durin",
        description: "The western gate of Moria, carved with elven runes. 'Speak, friend, and enter' is written above. The doors are sealed.",
        items: [],
        enemies: ['watcher_in_the_water'],
        region: 'moria',
        storyLocation: 'moria'
    },
    
    moria_hall: {
        name: "The Great Hall of Moria",
        description: "A vast underground hall, once the greatest city of the dwarves. Now dark and empty, filled with the echoes of a lost civilization.",
        items: ['mithril_ore'],
        enemies: ['orc', 'cave_troll'],
        region: 'moria',
        storyLocation: 'moria'
    },
    
    moria_bridge: {
        name: "The Bridge of Khazad-dûm",
        description: "A narrow stone bridge spanning a chasm. The Balrog of Morgoth waits in the depths below.",
        items: [],
        enemies: ['balrog'],
        region: 'moria',
        storyLocation: 'moria'
    },
    
    // ===== LOTHÓRIEN =====
    lothlorien_forest: {
        name: "The Golden Wood",
        description: "The forest of Lothlórien, where time seems to stand still. The trees are ancient and golden, and elven voices sing in the distance.",
        items: ['lembas_bread', 'elven_cloak'],
        enemies: [],
        region: 'lothlorien',
        storyLocation: 'lothlorien'
    },
    
    caras_galadhon: {
        name: "Caras Galadhon",
        description: "The city of the Galadhrim, built in the treetops. White and golden, it seems to glow with an inner light. The Lady Galadriel dwells here.",
        items: ['phial_of_galadriel', 'elven_rope'],
        enemies: [],
        region: 'lothlorien',
        storyLocation: 'lothlorien'
    },
    
    // ===== ANDUIN RIVER =====
    anduin_river_bank: {
        name: "Anduin River Bank",
        description: "The Great River of Middle-earth. The Fellowship traveled by boat along this river, past the Argonath and into Rauros.",
        items: ['boat'],
        enemies: [],
        region: 'anduin',
        storyLocation: 'anduin'
    },
    
    // ===== ROHAN =====
    rohan_plains: {
        name: "The Plains of Rohan",
        description: "Endless grasslands stretch to the horizon. Wild horses run free across the plains. In the distance, you see smoke rising from settlements.",
        items: ['wild_horse'],
        enemies: ['wild_horse_aggressive'],
        region: 'rohan',
        storyLocation: 'rohan'
    },
    
    edoras_gates: {
        name: "Gates of Edoras",
        description: "The gates of the capital of Rohan. Guards in mail stand watch. Beyond, the city climbs the hill toward the Golden Hall.",
        items: [],
        enemies: [],
        region: 'rohan',
        storyLocation: 'edoras'
    },
    
    meduseld: {
        name: "Meduseld - The Golden Hall",
        description: "The great hall of Théoden King. Pillars of wood support a roof thatched with gold. Long tables line the hall, and banners of the mark hang from the rafters.",
        items: ['rohirric_sword', 'horn_of_rohan'],
        enemies: [],
        region: 'rohan',
        storyLocation: 'edoras'
    },
    
    // ===== GONDOR =====
    minas_tirith_gates: {
        name: "Gates of Minas Tirith",
        description: "The White City, the capital of Gondor. Seven levels rise above the Pelennor Fields. The White Tree stands in the courtyard.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 0
    },
    
    minas_tirith_level_1: {
        name: "First Level of Minas Tirith",
        description: "The lowest level of the White City. Shops and houses line the streets. The gate to the Pelennor Fields is here.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 1
    },
    
    minas_tirith_level_2: {
        name: "Second Level of Minas Tirith",
        description: "The second level, with more houses and a marketplace. The streets are wide and well-maintained.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 2
    },
    
    minas_tirith_level_3: {
        name: "Third Level of Minas Tirith",
        description: "The third level, where many of the city's craftsmen work. The sound of hammers and forges fills the air.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 3
    },
    
    minas_tirith_level_4: {
        name: "Fourth Level of Minas Tirith",
        description: "The fourth level, with gardens and fountains. The houses here are larger and more elegant.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 4
    },
    
    minas_tirith_level_5: {
        name: "Fifth Level of Minas Tirith",
        description: "The fifth level, where the Houses of Healing are located. The air is filled with the scent of herbs and healing.",
        items: ['athelas'],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 5
    },
    
    minas_tirith_level_6: {
        name: "Sixth Level of Minas Tirith",
        description: "The sixth level, with the Citadel's barracks and training grounds. Guards patrol the walls.",
        items: [],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 6
    },
    
    minas_tirith_citadel: {
        name: "The Citadel of Minas Tirith",
        description: "The seventh and highest level, where the White Tree grows and the Steward's Hall stands. The view of the Pelennor Fields is breathtaking.",
        items: ['white_tree_seed'],
        enemies: [],
        region: 'gondor',
        storyLocation: 'minas_tirith',
        zLevel: 7
    },
    
    osgiliath_ruins: {
        name: "Ruins of Osgiliath",
        description: "The ancient capital of Gondor, now in ruins. The Great Bridge spans the Anduin here. The city was destroyed in the war.",
        items: ['ancient_coin'],
        enemies: ['orc', 'nazgul'],
        region: 'gondor',
        storyLocation: 'osgiliath'
    },
    
    // ===== MORDOR =====
    mordor_gate: {
        name: "The Black Gate of Mordor",
        description: "The massive gate that guards the entrance to Mordor. Two great towers stand on either side. The Eye of Sauron watches from Barad-dûr.",
        items: [],
        enemies: ['orc', 'troll', 'nazgul'],
        region: 'mordor',
        storyLocation: 'mordor'
    },
    
    barad_dur: {
        name: "Barad-dûr - The Dark Tower",
        description: "The fortress of Sauron, the Dark Lord. A massive tower of black stone, from which the Eye watches all of Middle-earth. The very air is heavy with evil.",
        items: [],
        enemies: ['sauron', 'nazgul'],
        region: 'mordor',
        storyLocation: 'barad_dur'
    },
    
    mount_doom_approach: {
        name: "Approach to Mount Doom",
        description: "The slopes of Orodruin, the Mountain of Fire. The air is thick with ash and the smell of sulfur. The ground trembles with the mountain's power.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom'
    },
    
    mount_doom_summit: {
        name: "Mount Doom Summit",
        description: "The Crack of Doom, where the One Ring was forged and where it must be destroyed. Fire and lava flow from the depths. The Ring calls to you.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom'
    },
    
    mount_doom_sammath_naur: {
        name: "Sammath Naur - The Chamber of Fire",
        description: "The deepest chamber of Mount Doom, where the Ring was forged. Here, in the heart of the mountain, the Ring can be destroyed. The heat is unbearable.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom',
        zLevel: -1
    }
};

// ====================================================================================================
// STEP 2: PARSE TERRAIN MAP AND FIND LABEL LOCATIONS
// ====================================================================================================

function parseTerrainMap() {
    const terrainPath = path.join(__dirname, 'terrain-map.txt');
    const content = fs.readFileSync(terrainPath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    
    const terrain = [];
    const labels = new Map(); // label name -> array of {x, y} coordinates
    
    for (let y = 0; y < lines.length; y++) {
        const line = lines[y];
        const row = [];
        let x = 0;
        
        while (x < line.length) {
            // Check for label in parentheses
            if (line[x] === '(') {
                const endIdx = line.indexOf(')', x);
                if (endIdx !== -1) {
                    const labelText = line.substring(x + 1, endIdx);
                    const normalizedLabel = labelText.replace(/\s+/g, '_').toLowerCase();
                    
                    if (!labels.has(normalizedLabel)) {
                        labels.set(normalizedLabel, []);
                    }
                    labels.get(normalizedLabel).push({ x, y });
                    
                    // Fill the label area with 'plains'
                    for (let i = x; i <= endIdx; i++) {
                        row.push('plains');
                        x++;
                    }
                    continue;
                }
            }
            
            // Parse terrain character
            const char = line[x];
            if (char === '^') row.push('mountain');
            else if (char === 'f') row.push('forest');
            else if (char === 'h') row.push('hill');
            else if (char === '|') row.push('river');
            else if (char === '*') row.push('hobbit_route');
            else if (char === 'L') row.push('lake');
            else if (char === 'p') row.push('plains');
            else if (char === '=') row.push('road');
            else if (char === 'R') row.push('road');
            else if (char === 'G') row.push('gulf');
            else if (char === 'm') row.push('marsh');
            else if (char === 'C') row.push('coast');
            else if (char === 'O') row.push('ocean');
            else if (char === 'S') row.push('sea');
            else if (char === 'M') row.push('mount_doom');
            else row.push('plains');
            
            x++;
        }
        
        terrain.push(row);
    }
    
    const width = Math.max(...terrain.map(row => row.length));
    const height = terrain.length;
    
    return { terrain, labels, width, height };
}

// Convert ASCII coordinates to game coordinates
function asciiToGame(x, y, width, height) {
    const SCALE_X = 1.0;
    const SCALE_Y = 1.0;
    const OFFSET_X = -width / 2;
    const OFFSET_Y = height / 2;
    
    return {
        x: Math.round((x + OFFSET_X) * SCALE_X),
        y: Math.round((OFFSET_Y - y) * SCALE_Y)
    };
}

// ====================================================================================================
// STEP 3: PLACE ROOMS ON TERRAIN MAP
// ====================================================================================================

function placeRoomsOnTerrain(storyRooms, terrainData) {
    const { terrain, labels, width, height } = terrainData;
    const coordinates = {};
    const occupiedPositions = new Set();
    
    // Map story locations to label names (try multiple variations)
    // Note: Labels in terrain map are normalized (spaces -> underscores, lowercase)
    const locationToLabel = {
        'hobbiton': ['hobbiton', 'the_shire'],
        'buckland': ['buckland'],
        'bree': ['bree'],
        'weathertop': ['amun_sul', 'weather_hills'],
        'rivendell': ['rivendell'],
        'misty_mountains': ['mount_gundabad', 'grey_mountains'],
        'moria': ['gate_of_moria', 'moria'],
        'lothlorien': ['galadon', 'dol_guldur'], // Galadon is near Lothlórien
        'anduin': ['river_anduin', 'river_andorn', 'anduin'],
        'rohan': ['rohan', 'edoras'],
        'edoras': ['edoras', 'rohan'],
        'minas_tirith': ['minas_tirith', 'gondor'],
        'osgiliath': ['osgiliath'],
        'mordor': ['the_dark_tower', 'mordor'],
        'barad_dur': ['the_dark_tower', 'barad_dur'],
        'mount_doom': ['mount_doom'],
        'old_forest': ['buckland', 'old_forest']
    };
    
    console.log('Placing rooms on terrain map...\n');
    
    // Place each room
    for (const [roomId, room] of Object.entries(storyRooms)) {
        const storyLoc = room.storyLocation;
        const labelName = locationToLabel[storyLoc];
        
        let placed = false;
        
        // Try to find label location (try all label variations)
        const labelVariations = locationToLabel[storyLoc] || [labelName];
        for (const tryLabel of labelVariations) {
            if (labels.has(tryLabel)) {
                const labelCoords = labels.get(tryLabel);
                if (labelCoords.length > 0) {
                    const labelCoord = labelCoords[0];
                    const gameCoord = asciiToGame(labelCoord.x, labelCoord.y, width, height);
                    
                    // For Minas Tirith levels, adjust Y based on zLevel
                    if (room.zLevel !== undefined) {
                        gameCoord.y -= room.zLevel; // Stack vertically
                    }
                    
                    const key = `${gameCoord.x},${gameCoord.y},${room.zLevel || 0}`;
                    
                    if (!occupiedPositions.has(key)) {
                        coordinates[roomId] = {
                            x: gameCoord.x,
                            y: gameCoord.y,
                            z: room.zLevel || 0
                        };
                        occupiedPositions.add(key);
                        placed = true;
                        console.log(`  Placed ${roomId} at (${gameCoord.x}, ${gameCoord.y}, ${room.zLevel || 0}) - ${tryLabel}`);
                        break;
                    }
                }
            }
        }
        
        // If not placed, try to place near related rooms
        if (!placed) {
            let nearbyRoom = null;
            
            // Special cases: place near related rooms
            if (roomId === 'mount_doom_summit' && coordinates['mount_doom_approach']) {
                nearbyRoom = coordinates['mount_doom_approach'];
            } else if (roomId === 'meduseld' && coordinates['edoras_gates']) {
                nearbyRoom = coordinates['edoras_gates'];
            } else if (roomId === 'old_forest_entrance' && coordinates['buckland_kitchen']) {
                nearbyRoom = coordinates['buckland_kitchen'];
            } else {
                // Find a room from the same region
                for (const [otherId, otherRoom] of Object.entries(storyRooms)) {
                    if (otherRoom.region === room.region && coordinates[otherId]) {
                        nearbyRoom = coordinates[otherId];
                        break;
                    }
                }
            }
            
            if (nearbyRoom) {
                // Place directly adjacent
                const offsets = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
                let found = false;
                for (const [dx, dy] of offsets) {
                    const testX = nearbyRoom.x + dx;
                    const testY = nearbyRoom.y + dy;
                    const key = `${testX},${testY},${room.zLevel || 0}`;
                    if (!occupiedPositions.has(key)) {
                        coordinates[roomId] = {
                            x: testX,
                            y: testY,
                            z: room.zLevel || 0
                        };
                        occupiedPositions.add(key);
                        found = true;
                        console.log(`  Placed ${roomId} at (${testX}, ${testY}, ${room.zLevel || 0}) - near related room`);
                        break;
                    }
                }
                placed = found;
            }
        }
        
        // Final fallback: use region-based defaults
        if (!placed) {
            const regionDefaults = {
                'shire': { x: -162, y: 44 },
                'bree': { x: -122, y: 44 },
                'weathertop': { x: -105, y: 47 },
                'rivendell': { x: -23, y: 48 },
                'misty_mountains': { x: -12, y: 84 },
                'moria': { x: -59, y: 21 },
                'lothlorien': { x: 7, y: 10 },
                'anduin': { x: -95, y: -31 },
                'rohan': { x: -25, y: -22 },
                'gondor': { x: 67, y: -52 },
                'mordor': { x: 102, y: -43 }
            };
            
            const defaultLoc = regionDefaults[room.region] || { x: 0, y: 0 };
            // Try to find an empty spot near the default
            let found = false;
            for (let offset = 0; offset < 20 && !found; offset++) {
                const testX = defaultLoc.x + (offset % 5) - 2;
                const testY = defaultLoc.y + Math.floor(offset / 5) - 2;
                const key = `${testX},${testY},${room.zLevel || 0}`;
                if (!occupiedPositions.has(key)) {
                    coordinates[roomId] = {
                        x: testX,
                        y: testY,
                        z: room.zLevel || 0
                    };
                    occupiedPositions.add(key);
                    found = true;
                    console.log(`  Placed ${roomId} at (${testX}, ${testY}, ${room.zLevel || 0}) - region default`);
                }
            }
        }
    }
    
    return coordinates;
}

// ====================================================================================================
// STEP 4: CREATE CONNECTIONS BETWEEN ROOMS
// ====================================================================================================

function createConnections(storyRooms, coordinates) {
    const exits = {};
    
    // Define story path connections
    const connections = [
        // Shire
        ['bag_end', 'hobbiton_square', 'east'],
        ['hobbiton_square', 'buckland_kitchen', 'east'],
        ['buckland_kitchen', 'old_forest_entrance', 'east'],
        
        // To Bree
        ['old_forest_entrance', 'bree_inn', 'east'],
        ['bree_inn', 'bree_town_square', 'east'],
        
        // To Weathertop
        ['bree_town_square', 'weathertop_summit', 'east'],
        
        // To Rivendell
        ['weathertop_summit', 'rivendell_house', 'east'],
        ['rivendell_house', 'rivendell_council', 'up'],
        
        // To Moria
        ['rivendell_council', 'misty_mountains_pass', 'east'],
        ['misty_mountains_pass', 'moria_gate', 'east'],
        ['moria_gate', 'moria_hall', 'east'],
        ['moria_hall', 'moria_bridge', 'east'],
        
        // To Lothlórien
        ['moria_bridge', 'lothlorien_forest', 'east'],
        ['lothlorien_forest', 'caras_galadhon', 'east'],
        
        // To Anduin
        ['caras_galadhon', 'anduin_river_bank', 'south'],
        
        // To Rohan
        ['anduin_river_bank', 'rohan_plains', 'south'],
        ['rohan_plains', 'edoras_gates', 'south'],
        ['edoras_gates', 'meduseld', 'up'],
        
        // To Gondor
        ['meduseld', 'minas_tirith_gates', 'south'],
        ['minas_tirith_gates', 'minas_tirith_level_1', 'up'],
        ['minas_tirith_level_1', 'minas_tirith_level_2', 'up'],
        ['minas_tirith_level_2', 'minas_tirith_level_3', 'up'],
        ['minas_tirith_level_3', 'minas_tirith_level_4', 'up'],
        ['minas_tirith_level_4', 'minas_tirith_level_5', 'up'],
        ['minas_tirith_level_5', 'minas_tirith_level_6', 'up'],
        ['minas_tirith_level_6', 'minas_tirith_citadel', 'up'],
        ['minas_tirith_gates', 'osgiliath_ruins', 'east'],
        
        // To Mordor
        ['osgiliath_ruins', 'mordor_gate', 'east'],
        ['mordor_gate', 'barad_dur', 'east'],
        ['barad_dur', 'mount_doom_approach', 'east'],
        ['mount_doom_approach', 'mount_doom_summit', 'up'],
        ['mount_doom_summit', 'mount_doom_sammath_naur', 'down']
    ];
    
    // Create bidirectional connections
    for (const [from, to, direction] of connections) {
        if (!coordinates[from] || !coordinates[to]) continue;
        
        if (!exits[from]) exits[from] = {};
        exits[from][direction] = to;
        
        // Create reverse connection
        const opposites = {
            'north': 'south', 'south': 'north',
            'east': 'west', 'west': 'east',
            'up': 'down', 'down': 'up',
            'northeast': 'southwest', 'southwest': 'northeast',
            'northwest': 'southeast', 'southeast': 'northwest'
        };
        
        if (!exits[to]) exits[to] = {};
        exits[to][opposites[direction] || 'west'] = from;
    }
    
    return exits;
}

// ====================================================================================================
// STEP 5: SAVE EVERYTHING
// ====================================================================================================

function saveWorld(storyRooms, coordinates, exits) {
    console.log('\nSaving world data...\n');
    
    // Build room definitions for the JSON file
    const roomDefinitions = {};
    for (const [roomId, room] of Object.entries(storyRooms)) {
        roomDefinitions[roomId] = {
            name: room.name,
            description: room.description,
            items: room.items || [],
            enemies: room.enemies || [],
            exits: exits[roomId] || {}
        };
    }
    
    // Save everything to linear-world-connections.json (this is what the server reads)
    const coordsPath = path.join(__dirname, 'linear-world-connections.json');
    const coordsData = {
        coordinates,
        exits,
        roomDefinitions, // This is what RoomSystem.loadDynamicRooms() looks for
        stats: {
            totalRooms: Object.keys(storyRooms).length,
            generatedAt: new Date().toISOString()
        }
    };
    fs.writeFileSync(coordsPath, JSON.stringify(coordsData, null, 2));
    console.log(`  Saved coordinates and room definitions to ${coordsPath}`);
    
    // Also save to dynamic-rooms.json as backup
    const roomsPath = path.join(__dirname, '../server/src/data/dynamic-rooms.json');
    fs.writeFileSync(roomsPath, JSON.stringify(roomDefinitions, null, 2));
    console.log(`  Saved room definitions backup to ${roomsPath}`);
    
    console.log('\n====================================================================================================');
    console.log('WORLD REBUILD COMPLETE');
    console.log('====================================================================================================');
    console.log(`Total rooms created: ${Object.keys(storyRooms).length}`);
    console.log(`Total connections: ${Object.values(exits).reduce((sum, e) => sum + Object.keys(e).length, 0)}`);
    console.log('\nThe server will automatically load these rooms from linear-world-connections.json');
    console.log('Dynamic rooms take precedence over rooms.js, so these will be used in the game.');
    console.log('====================================================================================================\n');
}

// ====================================================================================================
// MAIN EXECUTION
// ====================================================================================================

try {
    // Parse terrain map
    console.log('Step 1: Parsing terrain map...');
    const terrainData = parseTerrainMap();
    console.log(`  Terrain map: ${terrainData.width}x${terrainData.height}`);
    console.log(`  Found ${terrainData.labels.size} labeled locations\n`);
    
    // Place rooms
    console.log('Step 2: Placing rooms on terrain map...');
    const coordinates = placeRoomsOnTerrain(storyRooms, terrainData);
    console.log(`  Placed ${Object.keys(coordinates).length} rooms\n`);
    
    // Create connections
    console.log('Step 3: Creating connections between rooms...');
    const exits = createConnections(storyRooms, coordinates);
    console.log(`  Created connections for ${Object.keys(exits).length} rooms\n`);
    
    // Save everything
    console.log('Step 4: Saving world data...');
    saveWorld(storyRooms, coordinates, exits);
    
} catch (error) {
    console.error('Error rebuilding world:', error);
    process.exit(1);
}

