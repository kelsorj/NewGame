#!/usr/bin/env node

/**
 * COMPREHENSIVE WORLD GENERATOR
 * 
 * Generates 1000s of rooms based on The Hobbit and The Lord of the Rings,
 * including underground levels (Moria, Rivendell, etc.) and tower/mountain levels.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('====================================================================================================');
console.log('GENERATING COMPREHENSIVE MIDDLE-EARTH WORLD');
console.log('Based on The Hobbit & The Lord of the Rings');
console.log('====================================================================================================\n');

// ====================================================================================================
// ROOM GENERATORS BY REGION
// ====================================================================================================

function generateShireRooms() {
    const rooms = {};
    
    // Bag End and surrounding areas
    rooms.bag_end = {
        name: "Bag End",
        description: "You stand in the cozy hobbit-hole of Bag End, the most comfortable dwelling in all the Shire. Round windows set deep in the hillside let in cheerful sunlight that dances across polished wooden floors. The smell of fine pipeweed lingers in the air, mingling with the scent of fresh bread from the kitchen.",
        items: ['walking_stick', 'lembas_bread'],
        enemies: [],
        region: 'shire',
        storyLocation: 'hobbiton',
        z: 0
    };
    
    // Generate Hobbiton rooms
    const hobbitonRooms = [
        'hobbiton_square', 'hobbiton_market', 'hobbiton_inn', 'hobbiton_smial_1', 'hobbiton_smial_2',
        'hobbiton_smial_3', 'hobbiton_smial_4', 'hobbiton_smial_5', 'hobbiton_garden_1', 'hobbiton_garden_2',
        'hobbiton_road_east', 'hobbiton_road_west', 'hobbiton_road_north', 'hobbiton_road_south'
    ];
    
    for (const roomId of hobbitonRooms) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A location in Hobbiton, the heart of the Shire.`,
            items: [],
            enemies: [],
            region: 'shire',
            storyLocation: 'hobbiton',
            z: 0
        };
    }
    
    // Buckland rooms
    const bucklandRooms = [
        'buckland_kitchen', 'buckland_hall', 'buckland_cellar', 'buckland_guest_room_1',
        'buckland_guest_room_2', 'buckland_guest_room_3', 'buckland_library', 'buckland_pantry',
        'buckland_entrance', 'buckland_garden', 'buckland_courtyard'
    ];
    
    for (const roomId of bucklandRooms) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A room in Brandy Hall, the great smial of the Brandybucks.`,
            items: roomId.includes('pantry') ? ['apple_pie', 'bread'] : [],
            enemies: [],
            region: 'shire',
            storyLocation: 'buckland',
            z: roomId.includes('cellar') ? -1 : 0
        };
    }
    
    // Old Forest rooms
    for (let i = 1; i <= 20; i++) {
        rooms[`old_forest_path_${i}`] = {
            name: `Old Forest Path ${i}`,
            description: `A twisting path through the ancient Old Forest. The trees seem to watch you, and paths shift mysteriously.`,
            items: i === 10 ? ['ancient_acorn'] : [],
            enemies: i % 5 === 0 ? ['huorn'] : [],
            region: 'shire',
            storyLocation: 'old_forest',
            z: 0
        };
    }
    
    rooms.old_man_willow = {
        name: "Old Man Willow",
        description: "A massive, ancient willow tree that dominates a clearing. Its branches trail in dark water, and an overwhelming drowsiness creeps over you.",
        items: [],
        enemies: ['old_man_willow'],
        region: 'shire',
        storyLocation: 'old_forest',
        z: 0
    };
    
    // More Shire locations
    const shireLocations = [
        'tuckborough', 'bywater', 'michel_delving', 'stock', 'scary', 'hobbiton_road',
        'shire_farm_1', 'shire_farm_2', 'shire_farm_3', 'shire_inn', 'shire_market'
    ];
    
    for (const roomId of shireLocations) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A peaceful location in the Shire.`,
            items: [],
            enemies: [],
            region: 'shire',
            storyLocation: 'shire',
            z: 0
        };
    }
    
    return rooms;
}

function generateBreeRooms() {
    const rooms = {};
    
    // Bree town rooms
    const breeRooms = [
        'bree_inn_common_room', 'bree_inn_kitchen', 'bree_inn_stable', 'bree_inn_room_1',
        'bree_inn_room_2', 'bree_inn_room_3', 'bree_inn_cellar', 'bree_town_square',
        'bree_market', 'bree_house_1', 'bree_house_2', 'bree_house_3', 'bree_house_4',
        'bree_house_5', 'bree_gate_east', 'bree_gate_west', 'bree_road_north', 'bree_road_south'
    ];
    
    for (const roomId of breeRooms) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A location in Bree, where Big Folk and Little Folk meet.`,
            items: roomId.includes('inn') && roomId.includes('common') ? ['ale', 'bread'] : [],
            enemies: [],
            region: 'bree',
            storyLocation: 'bree',
            z: roomId.includes('cellar') ? -1 : 0
        };
    }
    
    return rooms;
}

function generateRivendellRooms() {
    const rooms = {};
    
    // Rivendell - ground level
    const rivendellGround = [
        'rivendell_entrance', 'rivendell_courtyard', 'rivendell_garden_1', 'rivendell_garden_2',
        'rivendell_garden_3', 'rivendell_house_main', 'rivendell_house_guest_wing',
        'rivendell_house_kitchen', 'rivendell_house_library', 'rivendell_house_healing_room',
        'rivendell_council_chamber', 'rivendell_balcony', 'rivendell_waterfall_view',
        'rivendell_bridge_1', 'rivendell_bridge_2', 'rivendell_path_1', 'rivendell_path_2',
        'rivendell_path_3', 'rivendell_path_4', 'rivendell_path_5'
    ];
    
    for (const roomId of rivendellGround) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A beautiful location in Rivendell, the Last Homely House. Elven architecture blends seamlessly with nature.`,
            items: roomId.includes('healing') ? ['athelas'] : roomId.includes('library') ? ['ancient_tome'] : [],
            enemies: [],
            region: 'rivendell',
            storyLocation: 'rivendell',
            z: 0
        };
    }
    
    // Rivendell - underground levels (many rooms)
    for (let level = 1; level <= 8; level++) {
        for (let room = 1; room <= 20; room++) {
            const roomId = `rivendell_underground_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Rivendell Underground Level ${level} - Room ${room}`,
                description: `An underground chamber in Rivendell. Ancient elven carvings cover the walls, and a soft light emanates from crystals embedded in the ceiling.`,
                items: room % 7 === 0 ? ['elven_crystal'] : [],
                enemies: [],
                region: 'rivendell',
                storyLocation: 'rivendell',
                z: -level
            };
        }
    }
    
    // Rivendell - upper levels (towers)
    for (let level = 1; level <= 3; level++) {
        for (let room = 1; room <= 8; room++) {
            const roomId = `rivendell_tower_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Rivendell Tower Level ${level} - Room ${room}`,
                description: `A high chamber in one of Rivendell's towers. The view of the valley is breathtaking.`,
                items: [],
                enemies: [],
                region: 'rivendell',
                storyLocation: 'rivendell',
                z: level
            };
        }
    }
    
    return rooms;
}

function generateMoriaRooms() {
    const rooms = {};
    
    // Moria - The Doors of Durin
    rooms.moria_gate_outside = {
        name: "Outside the Doors of Durin",
        description: "The western gate of Moria, carved with elven runes. 'Speak, friend, and enter' is written above.",
        items: [],
        enemies: ['watcher_in_the_water'],
        region: 'moria',
        storyLocation: 'moria',
        z: 0
    };
    
    rooms.moria_gate = {
        name: "The Doors of Durin",
        description: "The great gate of Moria. The doors are sealed, but you can see the vast darkness beyond.",
        items: [],
        enemies: [],
        region: 'moria',
        storyLocation: 'moria',
        z: 0
    };
    
    // Moria - Main halls (ground level, z=0)
    const moriaMainHalls = [
        'moria_first_hall', 'moria_second_hall', 'moria_third_hall', 'moria_fourth_hall',
        'moria_great_hall', 'moria_chamber_of_mazarbul', 'moria_bridge_chamber',
        'moria_east_gate', 'moria_crossroads', 'moria_guard_room_1', 'moria_guard_room_2',
        'moria_guard_room_3', 'moria_storage_room_1', 'moria_storage_room_2',
        'moria_workshop_1', 'moria_workshop_2', 'moria_forge_1', 'moria_forge_2'
    ];
    
    for (const roomId of moriaMainHalls) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A vast underground hall in Moria, once the greatest city of the dwarves. Now dark and empty, filled with echoes of a lost civilization.`,
            items: roomId.includes('forge') ? ['mithril_ore'] : roomId.includes('storage') ? ['ancient_dwarf_coin'] : [],
            enemies: roomId.includes('guard') ? ['orc'] : [],
            region: 'moria',
            storyLocation: 'moria',
            z: 0
        };
    }
    
    // Moria - Deep levels (z = -1 to -15, hundreds of rooms)
    for (let level = 1; level <= 15; level++) {
        // Each level has many rooms - Moria is HUGE
        const roomsPerLevel = level === 1 ? 40 : level <= 5 ? 35 : level <= 10 ? 30 : 25;
        
        for (let room = 1; room <= roomsPerLevel; room++) {
            const roomId = `moria_deep_level_${level}_chamber_${room}`;
            const roomTypes = ['hall', 'chamber', 'tunnel', 'cavern', 'mine', 'forge', 'treasury', 'tomb'];
            const roomType = roomTypes[room % roomTypes.length];
            
            rooms[roomId] = {
                name: `Moria Deep Level ${level} - ${roomType.charAt(0).toUpperCase() + roomType.slice(1)} ${room}`,
                description: `A deep chamber in the mines of Moria, level ${level}. The darkness is absolute, broken only by your torch. Ancient dwarf carvings cover the walls, telling stories of a lost age.`,
                items: roomType === 'treasury' ? ['dwarf_gold', 'precious_gem'] : roomType === 'mine' ? ['mithril_ore'] : [],
                enemies: level <= 3 ? (room % 3 === 0 ? ['orc'] : []) : level <= 7 ? (room % 2 === 0 ? ['orc', 'cave_troll'] : ['orc']) : (room % 4 === 0 ? ['balrog'] : ['orc']),
                region: 'moria',
                storyLocation: 'moria',
                z: -level
            };
        }
    }
    
    // Moria - Bridge of Khazad-dûm
    rooms.moria_bridge = {
        name: "The Bridge of Khazad-dûm",
        description: "A narrow stone bridge spanning a chasm. The Balrog of Morgoth waits in the depths below. Fire and shadow fill the air.",
        items: [],
        enemies: ['balrog'],
        region: 'moria',
        storyLocation: 'moria',
        z: 0
    };
    
    // Moria - Upper levels (z = 1 to 3, watchtowers)
    for (let level = 1; level <= 3; level++) {
        for (let room = 1; room <= 5; room++) {
            const roomId = `moria_watchtower_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Moria Watchtower Level ${level} - Room ${room}`,
                description: `A watchtower chamber high above the main halls of Moria.`,
                items: [],
                enemies: [],
                region: 'moria',
                storyLocation: 'moria',
                z: level
            };
        }
    }
    
    return rooms;
}

function generateLothlorienRooms() {
    const rooms = {};
    
    // Lothlórien - ground level
    const lothlorienGround = [
        'lothlorien_entrance', 'lothlorien_forest_path_1', 'lothlorien_forest_path_2',
        'lothlorien_forest_path_3', 'lothlorien_forest_path_4', 'lothlorien_forest_path_5',
        'lothlorien_forest_path_6', 'lothlorien_forest_path_7', 'lothlorien_forest_path_8',
        'lothlorien_forest_path_9', 'lothlorien_forest_path_10', 'lothlorien_clearing_1',
        'lothlorien_clearing_2', 'lothlorien_clearing_3', 'lothlorien_stream_1',
        'lothlorien_stream_2', 'lothlorien_nimrodel'
    ];
    
    for (const roomId of lothlorienGround) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `The Golden Wood of Lothlórien, where time seems to stand still. The trees are ancient and golden, and elven voices sing in the distance.`,
            items: roomId.includes('nimrodel') ? ['lembas_bread'] : [],
            enemies: [],
            region: 'lothlorien',
            storyLocation: 'lothlorien',
            z: 0
        };
    }
    
    // Caras Galadhon - tree city (many levels)
    for (let level = 1; level <= 20; level++) {
        const roomsPerLevel = level <= 5 ? 15 : level <= 10 ? 12 : level <= 15 ? 10 : 8;
        for (let room = 1; room <= roomsPerLevel; room++) {
            const roomId = `caras_galadhon_level_${level}_room_${room}`;
            const roomTypes = ['platform', 'chamber', 'hall', 'garden', 'library', 'workshop'];
            const roomType = roomTypes[room % roomTypes.length];
            
            rooms[roomId] = {
                name: `Caras Galadhon Level ${level} - ${roomType.charAt(0).toUpperCase() + roomType.slice(1)} ${room}`,
                description: `A ${roomType} in the tree-city of Caras Galadhon, level ${level}. Built in the treetops, it seems to glow with an inner light.`,
                items: roomType === 'garden' ? ['lembas_bread'] : roomType === 'library' ? ['elven_tome'] : [],
                enemies: [],
                region: 'lothlorien',
                storyLocation: 'lothlorien',
                z: level
            };
        }
    }
    
    // Galadriel's chamber
    rooms.galadriel_chamber = {
        name: "Galadriel's Chamber",
        description: "The chamber of the Lady Galadriel. A mirror stands in the center, and the air shimmers with power.",
        items: ['phial_of_galadriel', 'elven_rope'],
        enemies: [],
        region: 'lothlorien',
        storyLocation: 'lothlorien',
        z: 20
    };
    
    return rooms;
}

function generateRohanRooms() {
    const rooms = {};
    
    // Rohan plains
    for (let i = 1; i <= 30; i++) {
        rooms[`rohan_plains_${i}`] = {
            name: `Rohan Plains ${i}`,
            description: `Endless grasslands stretch to the horizon. Wild horses run free across the plains.`,
            items: i % 5 === 0 ? ['wild_horse'] : [],
            enemies: i % 7 === 0 ? ['wild_horse_aggressive'] : [],
            region: 'rohan',
            storyLocation: 'rohan',
            z: 0
        };
    }
    
    // Edoras
    const edorasRooms = [
        'edoras_gates', 'edoras_entrance', 'edoras_street_1', 'edoras_street_2',
        'edoras_street_3', 'edoras_house_1', 'edoras_house_2', 'edoras_house_3',
        'edoras_house_4', 'edoras_house_5', 'edoras_stable_1', 'edoras_stable_2',
        'edoras_market', 'edoras_inn', 'edoras_blacksmith'
    ];
    
    for (const roomId of edorasRooms) {
        rooms[roomId] = {
            name: roomId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `A location in Edoras, the capital of Rohan. The city climbs a hill toward the Golden Hall.`,
            items: [],
            enemies: [],
            region: 'rohan',
            storyLocation: 'edoras',
            z: 0
        };
    }
    
    // Meduseld - multiple levels
    for (let level = 1; level <= 5; level++) {
        for (let room = 1; room <= 8; room++) {
            const roomId = `meduseld_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Meduseld Level ${level} - Room ${room}`,
                description: `A chamber in the Golden Hall of Meduseld, level ${level}. Pillars of wood support a roof thatched with gold.`,
                items: level === 1 && room === 1 ? ['rohirric_sword', 'horn_of_rohan'] : [],
                enemies: [],
                region: 'rohan',
                storyLocation: 'edoras',
                z: level
            };
        }
    }
    
    // Helm's Deep
    for (let i = 1; i <= 25; i++) {
        rooms[`helms_deep_${i}`] = {
            name: `Helm's Deep ${i}`,
            description: `A location in Helm's Deep, the great fortress of Rohan.`,
            items: [],
            enemies: [],
            region: 'rohan',
            storyLocation: 'helms_deep',
            z: 0
        };
    }
    
    return rooms;
}

function generateGondorRooms() {
    const rooms = {};
    
    // Minas Tirith - all 7 levels, many rooms per level
    for (let level = 0; level <= 7; level++) {
        const roomsPerLevel = level === 0 ? 20 : level <= 3 ? 25 : level <= 5 ? 20 : 15;
        
        for (let room = 1; room <= roomsPerLevel; room++) {
            const roomId = `minas_tirith_level_${level}_room_${room}`;
            const roomTypes = level === 0 ? ['gate', 'courtyard', 'street', 'house', 'shop', 'stable'] :
                            level === 5 ? ['healing_room', 'herb_garden', 'ward', 'chamber'] :
                            level === 7 ? ['citadel', 'throne_room', 'council_chamber', 'balcony'] :
                            ['street', 'house', 'shop', 'workshop', 'barracks'];
            const roomType = roomTypes[room % roomTypes.length];
            
            rooms[roomId] = {
                name: `Minas Tirith Level ${level} - ${roomType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} ${room}`,
                description: level === 0 ? `The gates and first level of Minas Tirith, the White City.` :
                            level === 5 ? `The Houses of Healing on the fifth level. The air is filled with the scent of herbs.` :
                            level === 7 ? `The Citadel, the highest level of Minas Tirith. The White Tree grows here.` :
                            `A location on level ${level} of Minas Tirith.`,
                items: level === 5 && roomType === 'healing_room' ? ['athelas'] : level === 7 && room === 1 ? ['white_tree_seed'] : [],
                enemies: [],
                region: 'gondor',
                storyLocation: 'minas_tirith',
                z: level
            };
        }
    }
    
    // Osgiliath - ruins
    for (let i = 1; i <= 40; i++) {
        rooms[`osgiliath_ruin_${i}`] = {
            name: `Osgiliath Ruins ${i}`,
            description: `The ruins of Osgiliath, the ancient capital of Gondor. Destroyed in the war, now a place of desolation.`,
            items: i % 10 === 0 ? ['ancient_coin'] : [],
            enemies: i % 3 === 0 ? ['orc'] : i % 7 === 0 ? ['nazgul'] : [],
            region: 'gondor',
            storyLocation: 'osgiliath',
            z: 0
        };
    }
    
    // Osgiliath - underground (sewers, cellars)
    for (let level = 1; level <= 3; level++) {
        for (let room = 1; room <= 15; room++) {
            const roomId = `osgiliath_underground_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Osgiliath Underground Level ${level} - Room ${room}`,
                description: `An underground chamber in the ruins of Osgiliath. Water drips from the ceiling, and the air is heavy with decay.`,
                items: [],
                enemies: ['orc'],
                region: 'gondor',
                storyLocation: 'osgiliath',
                z: -level
            };
        }
    }
    
    return rooms;
}

function generateMordorRooms() {
    const rooms = {};
    
    // Black Gate
    rooms.mordor_black_gate = {
        name: "The Black Gate of Mordor",
        description: "The massive gate that guards the entrance to Mordor. Two great towers stand on either side. The Eye of Sauron watches from Barad-dûr.",
        items: [],
        enemies: ['orc', 'troll', 'nazgul'],
        region: 'mordor',
        storyLocation: 'mordor',
        z: 0
    };
    
    // Mordor wasteland
    for (let i = 1; i <= 50; i++) {
        rooms[`mordor_wasteland_${i}`] = {
            name: `Mordor Wasteland ${i}`,
            description: `A desolate wasteland in Mordor. Ash covers the ground, and the air is heavy with the stench of evil.`,
            items: [],
            enemies: i % 5 === 0 ? ['orc'] : i % 10 === 0 ? ['troll'] : [],
            region: 'mordor',
            storyLocation: 'mordor',
            z: 0
        };
    }
    
    // Barad-dûr - the Dark Tower (many levels)
    for (let level = 1; level <= 20; level++) {
        const roomsPerLevel = level <= 10 ? 12 : 8;
        for (let room = 1; room <= roomsPerLevel; room++) {
            const roomId = `barad_dur_level_${level}_chamber_${room}`;
            rooms[roomId] = {
                name: `Barad-dûr Level ${level} - Chamber ${room}`,
                description: `A dark chamber in the fortress of Sauron, level ${level}. The very air is heavy with evil, and the Eye watches all.`,
                items: [],
                enemies: level <= 5 ? ['orc'] : level <= 15 ? ['orc', 'nazgul'] : ['sauron', 'nazgul'],
                region: 'mordor',
                storyLocation: 'barad_dur',
                z: level
            };
        }
    }
    
    // Mount Doom - approach and paths
    for (let i = 1; i <= 20; i++) {
        rooms[`mount_doom_path_${i}`] = {
            name: `Mount Doom Path ${i}`,
            description: `A treacherous path up the slopes of Orodruin, the Mountain of Fire. The air is thick with ash and sulfur.`,
            items: [],
            enemies: i % 7 === 0 ? ['gollum'] : [],
            region: 'mordor',
            storyLocation: 'mount_doom',
            z: 0
        };
    }
    
    rooms.mount_doom_approach = {
        name: "Approach to Mount Doom",
        description: "The slopes of Orodruin. The ground trembles with the mountain's power, and fire glows in the distance.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom',
        z: 0
    };
    
    // Mount Doom - summit and interior (multiple levels going down)
    rooms.mount_doom_summit = {
        name: "Mount Doom Summit",
        description: "The Crack of Doom, where the One Ring was forged. Fire and lava flow from the depths. The Ring calls to you.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom',
        z: 0
    };
    
    // Mount Doom interior - going down into the mountain
    for (let level = 1; level <= 8; level++) {
        for (let room = 1; room <= 15; room++) {
            const roomId = `mount_doom_interior_level_${level}_chamber_${room}`;
            rooms[roomId] = {
                name: `Mount Doom Interior Level ${level} - Chamber ${room}`,
                description: `A chamber deep within Mount Doom, level ${level}. The heat is unbearable, and lava flows through channels in the floor.`,
                items: [],
                enemies: level === 5 && room === 10 ? ['gollum'] : [],
                region: 'mordor',
                storyLocation: 'mount_doom',
                z: -level
            };
        }
    }
    
    rooms.mount_doom_sammath_naur = {
        name: "Sammath Naur - The Chamber of Fire",
        description: "The deepest chamber of Mount Doom, where the Ring was forged. Here, in the heart of the mountain, the Ring can be destroyed. The heat is unbearable, and fire rages all around.",
        items: [],
        enemies: ['gollum'],
        region: 'mordor',
        storyLocation: 'mount_doom',
        z: -6
    };
    
    return rooms;
}

function generateHobbitRooms() {
    const rooms = {};
    
    // Locations from The Hobbit
    // The Lonely Mountain (Erebor)
    for (let i = 1; i <= 30; i++) {
        rooms[`erebor_hall_${i}`] = {
            name: `Erebor Hall ${i}`,
            description: `A great hall in the Lonely Mountain, the ancient kingdom of the dwarves under the mountain.`,
            items: i % 10 === 0 ? ['dwarf_gold', 'precious_gem'] : [],
            enemies: [],
            region: 'erebor',
            storyLocation: 'erebor',
            z: 0
        };
    }
    
    // Erebor - underground levels
    for (let level = 1; level <= 10; level++) {
        for (let room = 1; room <= 20; room++) {
            const roomId = `erebor_underground_level_${level}_chamber_${room}`;
            rooms[roomId] = {
                name: `Erebor Underground Level ${level} - Chamber ${room}`,
                description: `A deep chamber in the mines of Erebor, level ${level}.`,
                items: room % 5 === 0 ? ['mithril_ore'] : [],
                enemies: [],
                region: 'erebor',
                storyLocation: 'erebor',
                z: -level
            };
        }
    }
    
    // Dale
    for (let i = 1; i <= 25; i++) {
        rooms[`dale_${i}`] = {
            name: `Dale ${i}`,
            description: `A location in Dale, the town at the foot of the Lonely Mountain.`,
            items: [],
            enemies: [],
            region: 'dale',
            storyLocation: 'dale',
            z: 0
        };
    }
    
    // Lake-town (Esgaroth)
    for (let i = 1; i <= 30; i++) {
        rooms[`lake_town_${i}`] = {
            name: `Lake-town ${i}`,
            description: `A location in Lake-town, built on the Long Lake.`,
            items: [],
            enemies: [],
            region: 'lake_town',
            storyLocation: 'lake_town',
            z: 0
        };
    }
    
    // Mirkwood
    for (let i = 1; i <= 40; i++) {
        rooms[`mirkwood_path_${i}`] = {
            name: `Mirkwood Path ${i}`,
            description: `A path through the dark forest of Mirkwood. The trees are ancient and twisted, and strange creatures lurk in the shadows.`,
            items: [],
            enemies: i % 6 === 0 ? ['spider'] : i % 10 === 0 ? ['wood_elf'] : [],
            region: 'mirkwood',
            storyLocation: 'mirkwood',
            z: 0
        };
    }
    
    // Elvenking's Halls (underground)
    for (let level = 1; level <= 5; level++) {
        for (let room = 1; room <= 15; room++) {
            const roomId = `elvenking_halls_level_${level}_room_${room}`;
            rooms[roomId] = {
                name: `Elvenking's Halls Level ${level} - Room ${room}`,
                description: `A chamber in the underground halls of the Elvenking.`,
                items: [],
                enemies: [],
                region: 'mirkwood',
                storyLocation: 'elvenking_halls',
                z: -level
            };
        }
    }
    
    // Misty Mountains (from The Hobbit)
    for (let i = 1; i <= 35; i++) {
        rooms[`misty_mountains_path_${i}`] = {
            name: `Misty Mountains Path ${i}`,
            description: `A treacherous path through the Misty Mountains.`,
            items: [],
            enemies: i % 5 === 0 ? ['stone_giant'] : i % 8 === 0 ? ['goblin'] : [],
            region: 'misty_mountains',
            storyLocation: 'misty_mountains',
            z: 0
        };
    }
    
    // Goblin tunnels
    for (let level = 1; level <= 5; level++) {
        for (let room = 1; room <= 20; room++) {
            const roomId = `goblin_tunnels_level_${level}_chamber_${room}`;
            rooms[roomId] = {
                name: `Goblin Tunnels Level ${level} - Chamber ${room}`,
                description: `A dark, foul-smelling tunnel in the goblin caves.`,
                items: [],
                enemies: ['goblin'],
                region: 'misty_mountains',
                storyLocation: 'goblin_tunnels',
                z: -level
            };
        }
    }
    
    return rooms;
}

function generatePathRooms() {
    const rooms = {};
    
    // Path from Shire to Bree
    for (let i = 1; i <= 15; i++) {
        rooms[`path_shire_to_bree_${i}`] = {
            name: `Road to Bree ${i}`,
            description: `A well-traveled road through the Shire, heading toward Bree.`,
            items: [],
            enemies: [],
            region: 'shire',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Bree to Weathertop
    for (let i = 1; i <= 20; i++) {
        rooms[`path_bree_to_weathertop_${i}`] = {
            name: `Road to Weathertop ${i}`,
            description: `A road heading east from Bree. The land becomes wilder and more dangerous.`,
            items: [],
            enemies: i % 5 === 0 ? ['ringwraith'] : [],
            region: 'weathertop',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Weathertop
    rooms.weathertop_summit = {
        name: "Weathertop Summit",
        description: "The ruins of an ancient watchtower on Amon Sûl. The Ringwraiths attacked here. You can see for miles in all directions.",
        items: ['broken_sword'],
        enemies: ['ringwraith'],
        region: 'weathertop',
        storyLocation: 'weathertop',
        z: 0
    };
    
    // Path from Weathertop to Rivendell
    for (let i = 1; i <= 25; i++) {
        rooms[`path_weathertop_to_rivendell_${i}`] = {
            name: `Path to Rivendell ${i}`,
            description: `A path through the wild lands, heading toward Rivendell.`,
            items: [],
            enemies: [],
            region: 'rivendell',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Rivendell to Moria
    for (let i = 1; i <= 20; i++) {
        rooms[`path_rivendell_to_moria_${i}`] = {
            name: `Path to Moria ${i}`,
            description: `A path through the Misty Mountains, heading toward Moria.`,
            items: [],
            enemies: i % 4 === 0 ? ['stone_giant'] : [],
            region: 'misty_mountains',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Moria to Lothlórien
    for (let i = 1; i <= 15; i++) {
        rooms[`path_moria_to_lothlorien_${i}`] = {
            name: `Path to Lothlórien ${i}`,
            description: `A path through the woods, heading toward the Golden Wood.`,
            items: [],
            enemies: [],
            region: 'lothlorien',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Lothlórien to Rohan
    for (let i = 1; i <= 30; i++) {
        rooms[`path_lothlorien_to_rohan_${i}`] = {
            name: `Path to Rohan ${i}`,
            description: `A path through the lands, heading toward Rohan.`,
            items: [],
            enemies: [],
            region: 'rohan',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Rohan to Gondor
    for (let i = 1; i <= 25; i++) {
        rooms[`path_rohan_to_gondor_${i}`] = {
            name: `Path to Gondor ${i}`,
            description: `A path heading south toward Gondor.`,
            items: [],
            enemies: [],
            region: 'gondor',
            storyLocation: 'path',
            z: 0
        };
    }
    
    // Path from Gondor to Mordor
    for (let i = 1; i <= 30; i++) {
        rooms[`path_gondor_to_mordor_${i}`] = {
            name: `Path to Mordor ${i}`,
            description: `A dangerous path heading toward Mordor. The land becomes desolate and evil.`,
            items: [],
            enemies: i % 5 === 0 ? ['orc'] : [],
            region: 'mordor',
            storyLocation: 'path',
            z: 0
        };
    }
    
    return rooms;
}

// ====================================================================================================
// MAIN GENERATION FUNCTION
// ====================================================================================================

function generateAllRooms() {
    console.log('Generating rooms from all regions...\n');
    
    let allRooms = {};
    
    // Generate rooms from each region
    console.log('  Generating Shire rooms...');
    Object.assign(allRooms, generateShireRooms());
    console.log(`    Created ${Object.keys(generateShireRooms()).length} Shire rooms`);
    
    console.log('  Generating Bree rooms...');
    Object.assign(allRooms, generateBreeRooms());
    console.log(`    Created ${Object.keys(generateBreeRooms()).length} Bree rooms`);
    
    console.log('  Generating Rivendell rooms...');
    Object.assign(allRooms, generateRivendellRooms());
    console.log(`    Created ${Object.keys(generateRivendellRooms()).length} Rivendell rooms`);
    
    console.log('  Generating Moria rooms...');
    Object.assign(allRooms, generateMoriaRooms());
    console.log(`    Created ${Object.keys(generateMoriaRooms()).length} Moria rooms`);
    
    console.log('  Generating Lothlórien rooms...');
    Object.assign(allRooms, generateLothlorienRooms());
    console.log(`    Created ${Object.keys(generateLothlorienRooms()).length} Lothlórien rooms`);
    
    console.log('  Generating Rohan rooms...');
    Object.assign(allRooms, generateRohanRooms());
    console.log(`    Created ${Object.keys(generateRohanRooms()).length} Rohan rooms`);
    
    console.log('  Generating Gondor rooms...');
    Object.assign(allRooms, generateGondorRooms());
    console.log(`    Created ${Object.keys(generateGondorRooms()).length} Gondor rooms`);
    
    console.log('  Generating Mordor rooms...');
    Object.assign(allRooms, generateMordorRooms());
    console.log(`    Created ${Object.keys(generateMordorRooms()).length} Mordor rooms`);
    
    console.log('  Generating Hobbit rooms...');
    Object.assign(allRooms, generateHobbitRooms());
    console.log(`    Created ${Object.keys(generateHobbitRooms()).length} Hobbit rooms`);
    
    console.log('  Generating path rooms...');
    Object.assign(allRooms, generatePathRooms());
    console.log(`    Created ${Object.keys(generatePathRooms()).length} path rooms`);
    
    console.log(`\nTotal rooms generated: ${Object.keys(allRooms).length}\n`);
    
    return allRooms;
}

// ====================================================================================================
// TERRAIN MAP PARSING
// ====================================================================================================

function parseTerrainMap() {
    const terrainPath = path.join(__dirname, 'terrain-map.txt');
    const content = fs.readFileSync(terrainPath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    
    const terrain = [];
    const labels = new Map();
    
    for (let y = 0; y < lines.length; y++) {
        const line = lines[y];
        const row = [];
        let x = 0;
        
        while (x < line.length) {
            if (line[x] === '(') {
                const endIdx = line.indexOf(')', x);
                if (endIdx !== -1) {
                    const labelText = line.substring(x + 1, endIdx);
                    const normalizedLabel = labelText.replace(/\s+/g, '_').toLowerCase();
                    
                    if (!labels.has(normalizedLabel)) {
                        labels.set(normalizedLabel, []);
                    }
                    labels.get(normalizedLabel).push({ x, y });
                    
                    for (let i = x; i <= endIdx; i++) {
                        row.push('plains');
                        x++;
                    }
                    continue;
                }
            }
            
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
// PLACE ROOMS ON TERRAIN
// ====================================================================================================

function placeRoomsOnTerrain(allRooms, terrainData) {
    const { terrain, labels, width, height } = terrainData;
    const coordinates = {};
    const occupiedPositions = new Set();
    
    const locationToLabel = {
        'hobbiton': ['hobbiton', 'the_shire'],
        'buckland': ['buckland'],
        'bree': ['bree'],
        'weathertop': ['amun_sul', 'weather_hills'],
        'rivendell': ['rivendell'],
        'moria': ['gate_of_moria', 'moria'],
        'lothlorien': ['galadon', 'dol_guldur'],
        'rohan': ['rohan', 'edoras'],
        'edoras': ['edoras', 'rohan'],
        'minas_tirith': ['minas_tirith', 'gondor'],
        'osgiliath': ['osgiliath'],
        'mordor': ['the_dark_tower', 'mordor'],
        'barad_dur': ['the_dark_tower', 'barad_dur'],
        'mount_doom': ['mount_doom'],
        'old_forest': ['buckland', 'old_forest'],
        'path': [], // Paths don't have labels
        'erebor': ['the_lonely_mountain', 'dale'],
        'dale': ['dale'],
        'lake_town': ['esgaroth_upon_the_long_lake'],
        'mirkwood': ['mirkwood'],
        'elvenking_halls': ['elven_king\'s_halls'],
        'goblin_tunnels': ['mount_gundabad']
    };
    
    console.log('Placing rooms on terrain map...\n');
    
    // Group rooms by story location for batch placement
    const roomsByLocation = {};
    for (const [roomId, room] of Object.entries(allRooms)) {
        const loc = room.storyLocation;
        if (!roomsByLocation[loc]) roomsByLocation[loc] = [];
        roomsByLocation[loc].push({ roomId, room });
    }
    
    // Place rooms by location
    for (const [storyLoc, roomList] of Object.entries(roomsByLocation)) {
        const labelVariations = locationToLabel[storyLoc] || [];
        let baseCoord = null;
        
        // Find base coordinate from label
        for (const tryLabel of labelVariations) {
            if (labels.has(tryLabel)) {
                const labelCoords = labels.get(tryLabel);
                if (labelCoords.length > 0) {
                    const labelCoord = labelCoords[0];
                    baseCoord = asciiToGame(labelCoord.x, labelCoord.y, width, height);
                    break;
                }
            }
        }
        
        // If no label found, use region defaults
        if (!baseCoord) {
            const regionDefaults = {
                'shire': { x: -162, y: 44 },
                'bree': { x: -122, y: 44 },
                'weathertop': { x: -105, y: 47 },
                'rivendell': { x: -23, y: 48 },
                'moria': { x: -59, y: 21 },
                'lothlorien': { x: 7, y: 10 },
                'rohan': { x: -25, y: -22 },
                'edoras': { x: -19, y: -33 },
                'gondor': { x: 67, y: -52 },
                'minas_tirith': { x: 67, y: -52 },
                'osgiliath': { x: 79, y: -54 },
                'mordor': { x: 102, y: -43 },
                'mount_doom': { x: 102, y: -43 },
                'barad_dur': { x: 135, y: -45 },
                'old_forest': { x: -147, y: 48 },
                'path': { x: 0, y: 0 },
                'erebor': { x: -151, y: 46 },
                'dale': { x: -151, y: 46 },
                'lake_town': { x: -128, y: 46 },
                'mirkwood': { x: 7, y: 10 },
                'elvenking_halls': { x: 7, y: 10 },
                'goblin_tunnels': { x: -12, y: 84 }
            };
            baseCoord = regionDefaults[storyLoc] || { x: 0, y: 0 };
        }
        
        // Place all rooms from this location
        let placedCount = 0;
        let spiralRadius = 0;
        let angle = 0;
        
        for (const { roomId, room } of roomList) {
            let placed = false;
            let attempts = 0;
            
            while (!placed && attempts < 1000) {
                // Use spiral pattern for placement
                const dx = Math.round(Math.cos(angle) * spiralRadius);
                const dy = Math.round(Math.sin(angle) * spiralRadius);
                
                const testX = baseCoord.x + dx;
                const testY = baseCoord.y + dy + (room.z || 0); // Adjust for z-level
                const key = `${testX},${testY},${room.z || 0}`;
                
                if (!occupiedPositions.has(key)) {
                    coordinates[roomId] = {
                        x: testX,
                        y: testY,
                        z: room.z || 0
                    };
                    occupiedPositions.add(key);
                    placed = true;
                    placedCount++;
                }
                
                angle += 0.5;
                if (angle >= Math.PI * 2) {
                    angle = 0;
                    spiralRadius += 1;
                }
                attempts++;
            }
        }
        
        if (placedCount > 0) {
            console.log(`  Placed ${placedCount} / ${roomList.length} rooms at ${storyLoc}`);
        }
    }
    
    return coordinates;
}

// ====================================================================================================
// CREATE CONNECTIONS
// ====================================================================================================

function createConnections(allRooms, coordinates) {
    const exits = {};
    
    // Helper to create bidirectional connection
    function connect(from, to, direction) {
        if (!coordinates[from] || !coordinates[to]) return;
        
        if (!exits[from]) exits[from] = {};
        exits[from][direction] = to;
        
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
    
    // Connect rooms within same story location (adjacent connections)
    const roomsByLocation = {};
    for (const [roomId, room] of Object.entries(allRooms)) {
        const loc = room.storyLocation;
        if (!roomsByLocation[loc]) roomsByLocation[loc] = [];
        roomsByLocation[loc].push(roomId);
    }
    
    // Create connections within each location
    for (const [loc, roomIds] of Object.entries(roomsByLocation)) {
        for (let i = 0; i < roomIds.length - 1; i++) {
            connect(roomIds[i], roomIds[i + 1], 'east');
        }
    }
    
    // Connect main story path
    const mainPath = [
        ['bag_end', 'hobbiton_square', 'east'],
        ['hobbiton_square', 'buckland_kitchen', 'east'],
        ['buckland_kitchen', 'old_forest_entrance', 'east'],
        ['old_forest_entrance', 'path_shire_to_bree_1', 'east'],
        ['path_shire_to_bree_15', 'bree_inn_common_room', 'east'],
        ['bree_inn_common_room', 'path_bree_to_weathertop_1', 'east'],
        ['path_bree_to_weathertop_20', 'weathertop_summit', 'east'],
        ['weathertop_summit', 'path_weathertop_to_rivendell_1', 'east'],
        ['path_weathertop_to_rivendell_25', 'rivendell_entrance', 'east'],
        ['rivendell_entrance', 'path_rivendell_to_moria_1', 'east'],
        ['path_rivendell_to_moria_20', 'moria_gate_outside', 'east'],
        ['moria_gate_outside', 'moria_gate', 'east'],
        ['moria_gate', 'moria_first_hall', 'east'],
        ['moria_first_hall', 'moria_bridge', 'east'],
        ['moria_bridge', 'path_moria_to_lothlorien_1', 'east'],
        ['path_moria_to_lothlorien_15', 'lothlorien_entrance', 'east'],
        ['lothlorien_entrance', 'path_lothlorien_to_rohan_1', 'south'],
        ['path_lothlorien_to_rohan_30', 'rohan_plains_1', 'south'],
        ['rohan_plains_30', 'edoras_gates', 'south'],
        ['edoras_gates', 'meduseld_level_1_room_1', 'up'],
        ['meduseld_level_5_room_8', 'path_rohan_to_gondor_1', 'south'],
        ['path_rohan_to_gondor_25', 'minas_tirith_level_0_room_1', 'south'],
        ['minas_tirith_level_0_room_1', 'osgiliath_ruin_1', 'east'],
        ['osgiliath_ruin_40', 'path_gondor_to_mordor_1', 'east'],
        ['path_gondor_to_mordor_30', 'mordor_black_gate', 'east'],
        ['mordor_black_gate', 'mordor_wasteland_1', 'east'],
        ['mordor_wasteland_50', 'mount_doom_path_1', 'east'],
        ['mount_doom_path_20', 'mount_doom_approach', 'up'],
        ['mount_doom_approach', 'mount_doom_summit', 'up'],
        ['mount_doom_summit', 'mount_doom_interior_level_1_chamber_1', 'down']
    ];
    
    for (const [from, to, dir] of mainPath) {
        connect(from, to, dir);
    }
    
    // Connect vertical levels (up/down)
    for (const [roomId, room] of Object.entries(allRooms)) {
        if (room.z !== 0 && room.z !== undefined) {
            // Find rooms at same x,y but different z
            const coord = coordinates[roomId];
            if (coord) {
                for (const [otherId, otherCoord] of Object.entries(coordinates)) {
                    if (otherId !== roomId && 
                        otherCoord.x === coord.x && 
                        otherCoord.y === coord.y &&
                        Math.abs(otherCoord.z - coord.z) === 1) {
                        if (otherCoord.z > coord.z) {
                            connect(roomId, otherId, 'up');
                        } else {
                            connect(roomId, otherId, 'down');
                        }
                    }
                }
            }
        }
    }
    
    return exits;
}

// ====================================================================================================
// SAVE WORLD
// ====================================================================================================

function saveWorld(allRooms, coordinates, exits) {
    console.log('\nSaving world data...\n');
    
    const roomDefinitions = {};
    for (const [roomId, room] of Object.entries(allRooms)) {
        roomDefinitions[roomId] = {
            name: room.name,
            description: room.description,
            items: room.items || [],
            enemies: room.enemies || [],
            exits: exits[roomId] || {}
        };
    }
    
    const coordsPath = path.join(__dirname, 'linear-world-connections.json');
    const coordsData = {
        coordinates,
        exits,
        roomDefinitions,
        stats: {
            totalRooms: Object.keys(allRooms).length,
            generatedAt: new Date().toISOString()
        }
    };
    fs.writeFileSync(coordsPath, JSON.stringify(coordsData, null, 2));
    console.log(`  Saved to ${coordsPath}`);
    
    const roomsPath = path.join(__dirname, '../server/src/data/dynamic-rooms.json');
    fs.writeFileSync(roomsPath, JSON.stringify(roomDefinitions, null, 2));
    console.log(`  Saved backup to ${roomsPath}`);
    
    console.log('\n====================================================================================================');
    console.log('WORLD GENERATION COMPLETE');
    console.log('====================================================================================================');
    console.log(`Total rooms created: ${Object.keys(allRooms).length}`);
    console.log(`Total coordinates: ${Object.keys(coordinates).length}`);
    console.log(`Total connections: ${Object.values(exits).reduce((sum, e) => sum + Object.keys(e).length, 0)}`);
    
    // Count by z-level
    const byZ = {};
    for (const coord of Object.values(coordinates)) {
        const z = coord.z || 0;
        byZ[z] = (byZ[z] || 0) + 1;
    }
    console.log('\nRooms by Z-level:');
    for (const [z, count] of Object.entries(byZ).sort((a, b) => Number(a[0]) - Number(b[0]))) {
        console.log(`  Z = ${z}: ${count} rooms`);
    }
    
    console.log('\n====================================================================================================\n');
}

// ====================================================================================================
// MAIN EXECUTION
// ====================================================================================================

try {
    console.log('Step 1: Parsing terrain map...');
    const terrainData = parseTerrainMap();
    console.log(`  Terrain map: ${terrainData.width}x${terrainData.height}`);
    console.log(`  Found ${terrainData.labels.size} labeled locations\n`);
    
    console.log('Step 2: Generating all rooms...');
    const allRooms = generateAllRooms();
    
    console.log('Step 3: Placing rooms on terrain map...');
    const coordinates = placeRoomsOnTerrain(allRooms, terrainData);
    console.log(`  Placed ${Object.keys(coordinates).length} rooms\n`);
    
    console.log('Step 4: Creating connections...');
    const exits = createConnections(allRooms, coordinates);
    console.log(`  Created connections for ${Object.keys(exits).length} rooms\n`);
    
    console.log('Step 5: Saving world data...');
    saveWorld(allRooms, coordinates, exits);
    
} catch (error) {
    console.error('Error generating world:', error);
    process.exit(1);
}

