// WorldMap Component - Shows a 3D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect, useState } from 'react';

// Load coordinates from map editor's JSON file
async function loadRoomCoordinates() {
    try {
        const response = await fetch('http://localhost:3001/api/map/data');
        const data = await response.json();
        if (data.success && data.rooms) {
            const coords = {};
            data.rooms.forEach(room => {
                coords[room.id] = {
                    x: room.x,
                    y: room.y,
                    z: room.z,
                    name: room.name,
                    exits: room.exits || {}
                };
            });
            return coords;
        }
    } catch (err) {
        console.error('Error loading room coordinates:', err);
    }
    return {};
}

// Fallback hardcoded coordinates (will be replaced by loaded data)
const fallbackRoomCoordinates = {
    aldburg: { x: 9, y: 5, z: 0, name: 'Aldburg' },
    amon_hen: { x: 21, y: 16, z: 0, name: 'Amon Hen - Hill of Sight' },
    anduin_approach: { x: 6, y: 0, z: 0, name: 'Anduin River - Lothlórien Quays' },
    anduin_confluence: { x: 16, y: 7, z: 0, name: 'Confluence of Rivers' },
    anduin_midstream: { x: 19, y: 15, z: 0, name: 'Anduin - Midstream' },
    annuminas_approach: { x: 15, y: 11, z: 0, name: 'Approach to Annúminas' },
    annuminas_ruins: { x: 15, y: 12, z: 0, name: 'Annúminas Ruins' },
    annuminas_tower: { x: 15, y: 13, z: 0, name: 'Annúminas Tower' },
    archet: { x: 9, y: 12, z: 0, name: 'Archet' },
    bag_end: { x: 0, y: 0, z: 0, name: 'Bag End' },
    balin_tomb: { x: 1, y: 2, z: -1, name: 'Chamber of Mazarbul - Balin\'s Tomb' },
    barad_dur_approach: { x: 8, y: 7, z: 0, name: 'Approach to Barad-dûr' },
    barad_dur_base: { x: 9, y: 7, z: 0, name: 'Base of Barad-dûr' },
    barad_dur_chamber: { x: 17, y: 16, z: 0, name: 'Chamber of the Dark Lord' },
    barad_dur_throne_room: { x: 8, y: 10, z: 0, name: 'Throne Room of Barad-dûr' },
    barrow_chamber_1: { x: 12, y: 13, z: 0, name: 'Barrow Chamber - First Mound' },
    barrow_chamber_2: { x: 11, y: 13, z: 0, name: 'Barrow Chamber - Second Mound' },
    barrow_chamber_3: { x: 10, y: 13, z: 0, name: 'Barrow Chamber - Third Mound' },
    barrow_downs: { x: 13, y: 13, z: 0, name: 'The Barrow-downs' },
    barrow_downs_approach: { x: 13, y: 12, z: 0, name: 'Approach to the Barrow-downs' },
    black_gate: { x: 7, y: 7, z: 0, name: 'The Black Gate of Mordor' },
    bombadil_garden: { x: 13, y: 11, z: 0, name: 'Tom\'s Garden' },
    bombadil_house: { x: 1, y: -1, z: 0, name: 'Tom Bombadil\'s House' },
    brandy_hall: { x: 13, y: 10, z: 0, name: 'Brandy Hall' },
    brandywine_bridge: { x: 17, y: 18, z: 0, name: 'Brandywine Bridge' },
    bree_east_road: { x: 5, y: 2, z: 0, name: 'East Road from Bree' },
    bree_gate: { x: 5, y: 0, z: 0, name: 'Bree Gate' },
    bree_square: { x: 5, y: 1, z: 0, name: 'Bree Square' },
    bridge_of_khazad_dum: { x: -1, y: 1, z: -1, name: 'Bridge of Khazad-dûm' },
    buckland_cellar: { x: 4, y: 3, z: 0, name: 'Buckland Cellar' },
    buckland_kitchen: { x: 4, y: 2, z: 0, name: 'Buckland Kitchen' },
    bucklebury: { x: 13, y: 9, z: 0, name: 'Bucklebury' },
    bywater: { x: 1, y: 4, z: 0, name: 'Bywater' },
    caras_galadhon: { x: 2, y: -3, z: 0, name: 'Caras Galadhon - City of the Trees' },
    celebrant_banks: { x: 15, y: 7, z: 0, name: 'Banks of the Celebrant' },
    cerin_amroth: { x: 1, y: -3, z: 0, name: 'Cerin Amroth' },
    chetwood: { x: 4, y: -1, z: 0, name: 'Chetwood Forest' },
    cirith_ungol: { x: 6, y: 8, z: 0, name: 'Cirith Ungol - Tower of the Spider' },
    citadel_guards_hall: { x: 5, y: 5, z: 0, name: 'Citadel Guards Hall' },
    combe: { x: 9, y: 13, z: 0, name: 'Combe' },
    crickhollow: { x: 4, y: 4, z: 0, name: 'Crickhollow' },
    dead_city: { x: 21, y: 18, z: 0, name: 'City of the Dead' },
    deep_coomb: { x: 16, y: 13, z: 0, name: 'The Deep Coomb' },
    deep_mines_hub: { x: 12, y: 8, z: 0, name: 'Deep Mines Hub' },
    deeping_stream_upper: { x: 17, y: 11, z: 0, name: 'Upper Deeping Stream' },
    dimholt_road: { x: 18, y: 11, z: 0, name: 'The Dimholt Road' },
    dimrill_dale: { x: 8, y: 11, z: 1, name: 'Dimrill Dale' },
    doors_of_durin: { x: 3, y: 0, z: -1, name: 'Doors of Durin - West Gate of Moria' },
    dunharrow: { x: 12, y: 0, z: 0, name: 'Dunharrow' },
    dunharrow_firtree_grove: { x: 7, y: 5, z: 0, name: 'Fir-tree Grove - Dunharrow' },
    durin_chamber: { x: 0, y: 2, z: -1, name: 'Durin\'s Chamber' },
    durin_throne_hall: { x: 3, y: -2, z: -1, name: 'Great Hall of Durin' },
    durthang_fortress: { x: 7, y: 10, z: 0, name: 'Durthang Fortress' },
    east_emnet: { x: 12, y: 4, z: 0, name: 'East Emnet' },
    east_gate_approach: { x: 6, y: 11, z: 0, name: 'Approach to the East Gate' },
    east_gate_moria: { x: -1, y: 0, z: -1, name: 'East Gate of Moria' },
    eastfold_plains: { x: 18, y: 9, z: 0, name: 'Eastfold Plains' },
    edoras_approach: { x: 8, y: 0, z: 0, name: 'Road to Edoras' },
    edoras_gates: { x: 9, y: 0, z: 0, name: 'Gates of Edoras' },
    elf_path_entrance: { x: 7, y: 2, z: 0, name: 'Entrance to the Elf-path' },
    elrond_study: { x: 13, y: 14, z: 0, name: 'Elrond\'s Private Study' },
    elven_craft_hall: { x: 14, y: 9, z: 0, name: 'Hall of the Galadhrim Craftsmen' },
    endless_stair_bottom: { x: -1, y: -2, z: -1, name: 'Bottom of the Endless Stair' },
    endless_stair_top: { x: -1, y: -1, z: -1, name: 'Top of the Endless Stair' },
    entmoot_circle: { x: 6, y: 3, z: 0, name: 'Entmoot Circle - Derndingle' },
    entwash: { x: 11, y: 2, z: 0, name: 'The Entwash' },
    entwash_delta: { x: 7, y: 3, z: 0, name: 'Entwash Delta' },
    entwash_headwaters: { x: 5, y: 4, z: 0, name: 'Headwaters of the Entwash' },
    erebor_armory: { x: 9, y: 11, z: 1, name: 'The Mountain Armory' },
    erebor_gates: { x: 11, y: 10, z: 1, name: 'Main Gates of Erebor' },
    erebor_great_hall: { x: 20, y: 18, z: 0, name: 'Great Hall of Thráin' },
    erebor_treasury: { x: 10, y: 11, z: 1, name: 'The Treasury of Erebor' },
    fangorn_border: { x: 8, y: 1, z: 0, name: 'Edge of Fangorn Forest' },
    fangorn_depths: { x: 10, y: 1, z: 0, name: 'Deep in Fangorn' },
    fangorn_eaves: { x: 9, y: 1, z: 0, name: 'Eaves of Fangorn' },
    fangorn_hidden_path: { x: 6, y: 1, z: 0, name: 'Hidden Path in Fangorn' },
    fifth_level: { x: 6, y: 5, z: 0, name: 'Fifth Level - Minas Tirith' },
    first_level: { x: -4, y: -2, z: 0, name: 'First Level - Minas Tirith' },
    ford_of_bruinen: { x: -1, y: 0, z: 0, name: 'Ford of Bruinen' },
    fornost_approach: { x: 9, y: 9, z: 0, name: 'Approach to Fornost' },
    fornost_gates: { x: -2, y: 3, z: 0, name: 'Fornost Gates' },
    fornost_keep: { x: 15, y: 10, z: 0, name: 'Fornost Keep' },
    fornost_palace: { x: 14, y: 10, z: 0, name: 'Fornost Palace' },
    fornost_ruins: { x: 1, y: 1, z: 0, name: 'Fornost Ruins' },
    fornost_temple: { x: 12, y: 10, z: 0, name: 'Fornost Temple' },
    fourth_level: { x: -4, y: -5, z: 0, name: 'Fourth Level - Minas Tirith' },
    galadhrm_flet_1: { x: 4, y: 8, z: 0, name: 'Galadhrim Flet - Western Watch' },
    galadriel_court: { x: 3, y: -3, z: 0, name: 'Court of Galadriel' },
    gap_of_rohan: { x: 8, y: 3, z: 0, name: 'Gap of Rohan' },
    glittering_caves: { x: 21, y: 19, z: 0, name: 'Glittering Caves of Aglarond' },
    goblin_ward: { x: 16, y: 11, z: 0, name: 'The Goblin Ward' },
    goblin_warren: { x: 16, y: 15, z: 0, name: 'Goblin Warren' },
    goblin_watchtower: { x: 16, y: 12, z: 0, name: 'Goblin Watchtower' },
    gorgoroth_plateau: { x: 10, y: 10, z: 0, name: 'Plateau of Gorgoroth' },
    green_dragon: { x: 19, y: 18, z: 0, name: 'The Green Dragon Inn' },
    green_hill_country: { x: 12, y: 9, z: 0, name: 'Green Hill Country' },
    grey_havens_docks: { x: 18, y: 14, z: 0, name: 'Docks of Mithlond' },
    hall_of_fire_guest: { x: 14, y: 14, z: 0, name: 'The Hall of Fire' },
    hall_of_kings: { x: 11, y: 11, z: 0, name: 'Hall of Kings' },
    harrowdale: { x: 11, y: 0, z: 0, name: 'Harrowdale' },
    havens_approach: { x: 19, y: 14, z: 0, name: 'Approach to Mithlond' },
    helms_deep_interior: { x: 12, y: 3, z: 0, name: 'Helm\'s Deep' },
    helms_gate: { x: 12, y: 2, z: 0, name: 'Helm\'s Gate' },
    henneth_annun: { x: 4, y: 10, z: 0, name: 'Henneth Annûn - Window on the West' },
    hidden_flet: { x: 11, y: 14, z: 0, name: 'Hidden Flet' },
    hidden_valley_white_mountains: { x: 11, y: 8, z: 1, name: 'Hidden Valley in the White Mountains' },
    hobbiton_square: { x: 2, y: 4, z: 0, name: 'Hobbiton Square' },
    hollin_gate: { x: 3, y: -2, z: 0, name: 'Hollin Gate' },
    hornburg_armory: { x: 17, y: 12, z: 0, name: 'Hornburg Armory' },
    house_of_stewards: { x: 10, y: 7, z: 0, name: 'House of the Stewards' },
    iron_mines_1: { x: 15, y: 8, z: 0, name: 'Iron Mines - Level 1' },
    iron_mines_2: { x: 15, y: 9, z: 0, name: 'Iron Mines - The Pit' },
    isengard_gates: { x: 20, y: 19, z: 0, name: 'Gates of Isengard' },
    ithilien_woods: { x: 4, y: 9, z: 0, name: 'Woods of Ithilien' },
    khazad_dum_chasm_view: { x: 14, y: 12, z: 0, name: 'Chasm Viewpoint' },
    lake_evendim: { x: 15, y: 14, z: 0, name: 'Lake Evendim' },
    lake_town_docks: { x: 20, y: 17, z: 0, name: 'Lake-town Docks' },
    last_bridge: { x: -1, y: 1, z: 0, name: 'The Last Bridge' },
    leaflock_meadow: { x: 18, y: 7, z: 0, name: 'Leaflock\'s Meadow' },
    lonely_mountain_approach: { x: 11, y: 9, z: 1, name: 'Approach to the Lonely Mountain' },
    long_lake_path: { x: 20, y: 16, z: 0, name: 'Path to Long Lake' },
    longbottom: { x: 7, y: 8, z: 0, name: 'Longbottom' },
    lossarnach_valleys: { x: 9, y: 4, z: 0, name: 'Valleys of Lossarnach' },
    lothlorien_border: { x: 0, y: -3, z: 0, name: 'Border of Lothlórien' },
    mallorn_sanctuary: { x: 14, y: 7, z: 0, name: 'The Mallorn Sanctuary' },
    marish: { x: 16, y: 17, z: 0, name: 'The Marish' },
    mayor_office: { x: 8, y: 11, z: 0, name: 'Mayor\'s Office' },
    meduseld: { x: 10, y: 0, z: 0, name: 'Meduseld - The Golden Hall' },
    michel_delving: { x: 3, y: 0, z: 0, name: 'Michel Delving' },
    midgewater_marshes: { x: 3, y: 3, z: 0, name: 'Midgewater Marshes' },
    minas_morgul_gates: { x: 10, y: 8, z: 0, name: 'Gates of Minas Morgul' },
    minas_morgul_interior: { x: 10, y: 9, z: 0, name: 'Interior of Minas Morgul' },
    minas_tirith_gates: { x: 9, y: 6, z: 0, name: 'Gates of Minas Tirith' },
    minas_tirith_houses_of_healing: { x: 16, y: 14, z: 0, name: 'Houses of Healing' },
    minas_tirith_stables: { x: 10, y: 4, z: 0, name: 'Stables of Minas Tirith' },
    mines_level1: { x: 17, y: 15, z: 0, name: 'Upper Mines' },
    mines_level2: { x: 18, y: 15, z: 0, name: 'Deep Mines' },
    mirkwood_depths: { x: 11, y: 5, z: 0, name: 'Mirkwood Depths - Spider Warrens' },
    mirkwood_edge: { x: 11, y: 3, z: 0, name: 'Edge of Mirkwood' },
    mirkwood_path_1: { x: 0, y: 3, z: 0, name: 'Mirkwood Path - The Old Forest Road' },
    mirkwood_path_2: { x: 11, y: 4, z: 0, name: 'Mirkwood Path - The Enchanted Stream' },
    mirror_chamber: { x: 4, y: -2, z: 0, name: 'Chamber of the Mirror' },
    mithril_depths_1: { x: 13, y: 8, z: 0, name: 'Mithril Depths - Upper Vein' },
    mithril_depths_2: { x: 14, y: 8, z: 0, name: 'Mithril Depths - The Mother Lode' },
    mithril_mine: { x: -1, y: 2, z: -1, name: 'The Mithril Vein' },
    mordor_plains: { x: 6, y: 6, z: 0, name: 'Plains of Mordor' },
    morgul_pass: { x: 6, y: 9, z: 0, name: 'Morgul Pass' },
    morgul_vale: { x: 6, y: 10, z: 0, name: 'Morgul Vale' },
    moria_entrance: { x: 3, y: 1, z: -1, name: 'First Hall of Moria' },
    mount_doom_approach: { x: 11, y: 7, z: 0, name: 'Approach to Mount Doom' },
    mount_doom_sammath_naur: { x: 9, y: 10, z: 0, name: 'Sammath Naur - Chambers of Fire' },
    mount_doom_summit: { x: 11, y: 8, z: 0, name: 'Summit of Mount Doom' },
    nameless_tunnels: { x: 4, y: 6, z: 0, name: 'The Nameless Tunnels' },
    needlehole: { x: 7, y: 9, z: 0, name: 'Needlehole' },
    niphredil_meadow: { x: 14, y: 11, z: 0, name: 'Meadow of Niphredil' },
    old_forest_buckland_entrance: { x: 3, y: 4, z: 0, name: 'Old Forest - Buckland Entrance' },
    old_forest_depth: { x: 0, y: 1, z: 0, name: 'Deep in the Old Forest' },
    old_forest_entrance: { x: 0, y: 2, z: 0, name: 'Old Forest Entrance' },
    old_forest_exit: { x: 0, y: 4, z: 0, name: 'Old Forest - Eastern Exit' },
    orthanc_base: { x: 19, y: 19, z: 0, name: 'Base of Orthanc' },
    orthanc_chamber: { x: 18, y: 19, z: 0, name: 'Orthanc - Saruman\'s  Chamber' },
    osgiliath_ruins: { x: 7, y: 6, z: 0, name: 'Ruins of Osgiliath' },
    overhill: { x: 4, y: 1, z: 0, name: 'Overhill' },
    parth_galen: { x: 21, y: 15, z: 0, name: 'Parth Galen' },
    paths_of_dead: { x: 12, y: 1, z: 0, name: 'The Paths of the Dead' },
    pelargir_port: { x: 17, y: 14, z: 0, name: 'Port of Pelargir' },
    pelennor_fields: { x: 8, y: 6, z: 0, name: 'Pelennor Fields' },
    prancing_pony: { x: 16, y: 16, z: 0, name: 'The Prancing Pony' },
    rath_dinen: { x: 17, y: 19, z: 0, name: 'Rath Dínen - Street of the Dead' },
    rauros_falls_approach: { x: 21, y: 17, z: 0, name: 'Approach to Rauros Falls' },
    rhosgobel: { x: 20, y: 14, z: 0, name: 'Rhosgobel - Home of Radagast' },
    rivendell_forge: { x: 2, y: -2, z: 0, name: 'Rivendell Forge' },
    rivendell_gardens: { x: -1, y: 2, z: 0, name: 'Gardens of Rivendell' },
    rivendell_gates: { x: -1, y: -1, z: 0, name: 'Gates of Rivendell' },
    rivendell_guest_house: { x: 11, y: 12, z: 0, name: 'The Guest House' },
    rivendell_hall: { x: -10, y: -11, z: 0, name: 'Hall of Fire - Rivendell' },
    rivendell_library: { x: 1, y: -2, z: 0, name: 'Library of Rivendell' },
    rohan_plains: { x: 8, y: 2, z: 0, name: 'The Plains of Rohan' },
    royal_armory: { x: 11, y: 10, z: 0, name: 'Royal Armory' },
    royal_tombs: { x: 3, y: -1, z: -1, name: 'Royal Tombs of Khazad-dûm' },
    rushock_bog: { x: 11, y: 9, z: 0, name: 'Rushock Bog' },
    sackville_manor: { x: 8, y: 8, z: 0, name: 'Sackville Manor' },
    scary: { x: 7, y: 11, z: 0, name: 'Scary' },
    second_level: { x: -4, y: -3, z: 0, name: 'Second Level - Minas Tirith' },
    seventh_level: { x: 7, y: 1, z: 0, name: 'Seventh Level' },
    shelob_lair: { x: 6, y: 7, z: 0, name: 'Shelob\'s Lair' },
    silverlode_banks: { x: 5, y: -1, z: 0, name: 'Banks of the Silverlode' },
    silverlode_crossing: { x: -1, y: -2, z: 0, name: 'Silverlode Crossing' },
    singing_groves: { x: 4, y: 5, z: 0, name: 'Singing Groves' },
    sixth_level: { x: 8, y: 4, z: 0, name: 'Sixth Level - Minas Tirith' },
    skinbark_grove: { x: 17, y: 7, z: 0, name: 'Skinbark\'s Grove' },
    smelting_chambers: { x: 1, y: 2, z: 0, name: 'Smelting Chambers' },
    snowbourn_banks: { x: 8, y: 5, z: 0, name: 'Banks of the Snowbourn' },
    staddle: { x: 9, y: 11, z: 0, name: 'Staddle' },
    starkhorn_foothills: { x: 18, y: 10, z: 0, name: 'Foothills of the Starkhorn' },
    stock_road: { x: 16, y: 18, z: 0, name: 'Stock Road' },
    the_dark_lake: { x: 4, y: 7, z: 0, name: 'The Dark Lake' },
    the_silent_glade: { x: 6, y: 2, z: 0, name: 'The Silent Glade' },
    the_unending_stair_middle: { x: 16, y: 10, z: 0, name: 'The Unending Stair - Middle Section' },
    third_level: { x: -4, y: -4, z: 0, name: 'Third Level - Minas Tirith' },
    thranduil_halls_gate: { x: 20, y: 15, z: 0, name: 'Gate of the Elven-king' },
    thranduil_halls_interior: { x: 10, y: 5, z: 0, name: 'Thranduil\'s Halls' },
    tookbank: { x: 2, y: 0, z: 0, name: 'Tookbank' },
    treebeard_cellar: { x: 6, y: 4, z: 0, name: 'Treebeard\'s Storage' },
    troll_cave: { x: -1, y: 3, z: 0, name: 'Troll Cave' },
    trollshaws: { x: 1, y: 3, z: 0, name: 'The Trollshaws' },
    tuckborough: { x: 1, y: 0, z: 0, name: 'Tuckborough' },
    tunnel_exit: { x: 17, y: 17, z: 0, name: 'Tunnel Exit' },
    twenty_first_hall: { x: 2, y: 2, z: -1, name: 'Twenty-First Hall' },
    waterfall_walkway: { x: 12, y: 14, z: 0, name: 'Waterfall Walkway' },
    waymeet: { x: 4, y: 0, z: 0, name: 'Waymeet' },
    weatherhills: { x: 2, y: 3, z: 0, name: 'The Weather Hills' },
    weathertop_approach: { x: 2, y: -1, z: 0, name: 'Approach to Weathertop' },
    weathertop_base: { x: 5, y: 3, z: 0, name: 'Base of Weathertop' },
    weathertop_summit: { x: 3, y: -1, z: 0, name: 'Weathertop Summit' },
    wellinghall: { x: 11, y: 1, z: 0, name: 'Wellinghall - Hall of the Ents' },
    west_emnet: { x: 7, y: 4, z: 0, name: 'West Emnet' },
    westfold_plains: { x: 18, y: 8, z: 0, name: 'Westfold Plains' },
    white_tower: { x: 10, y: 6, z: 0, name: 'White Tower of Ecthelion' },
    whitwell: { x: 9, y: 8, z: 0, name: 'Whitwell' },
    withywindle: { x: 0, y: -1, z: 0, name: 'The Withywindle' },
    wold_of_rohan: { x: 14, y: 13, z: 0, name: 'The Wold' },
    woody_end: { x: 18, y: 18, z: 0, name: 'Woody End' },
};

export const WorldMap = ({ playerState }) => {
    const mapContainerRef = useRef(null);
    const currentRoomRef = useRef(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [roomCoordinates, setRoomCoordinates] = useState(fallbackRoomCoordinates);

    // Load coordinates from map editor on mount
    useEffect(() => {
        loadRoomCoordinates().then(coords => {
            if (Object.keys(coords).length > 0) {
                setRoomCoordinates(coords);
            }
        });
    }, []);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms, roomCoordinates]);

    const levels = useMemo(() => {
        const levelSet = new Set(visitedCoords.map(r => r.z));
        return Array.from(levelSet).sort((a, b) => a - b);
    }, [visitedCoords]);

    const currentLevel = useMemo(() => {
        if (selectedLevel !== null) return selectedLevel;
        if (!playerState?.currentRoom) return levels[0] || 0;
        const currentRoom = roomCoordinates[playerState.currentRoom];
        return currentRoom ? currentRoom.z : levels[0] || 0;
    }, [selectedLevel, playerState?.currentRoom, levels, roomCoordinates]);

    const levelRooms = useMemo(() => {
        return visitedCoords.filter(r => r.z === currentLevel);
    }, [visitedCoords, currentLevel]);

    const gridLayout = useMemo(() => {
        if (levelRooms.length === 0) return null;

        const xs = levelRooms.map(r => r.x);
        const ys = levelRooms.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        const width = maxX - minX + 1;
        const height = maxY - minY + 1;

        return {
            minX,
            minY,
            width,
            height,
            rooms: levelRooms
        };
    }, [levelRooms]);

    useEffect(() => {
        if (!playerState?.currentRoom || !gridLayout || !currentRoomRef.current || !mapContainerRef.current) {
            return;
        }

        const currentRoom = gridLayout.rooms.find(r => r.id === playerState.currentRoom);
        if (!currentRoom) return;

        currentRoomRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, [playerState?.currentRoom, gridLayout]);

    if (!gridLayout) {
        return (
            <div className="world-map">
                <div className="map-header">🗺️  World Map</div>
                <div className="map-content empty">Explore to reveal the map...</div>
            </div>
        );
    }

    const currentRoom = gridLayout.rooms.find(r => r.id === playerState?.currentRoom);
    const levelName = currentLevel === 0 ? 'Ground Level' : currentLevel > 0 ? `Level +${currentLevel}` : `Level ${currentLevel}`;

    return (
        <div className="world-map">
            <div className="map-header">
                <span>🗺️  World Map</span>
                {levels.length > 1 && (
                    <div className="level-selector">
                        <label>Level:</label>
                        <select 
                            value={currentLevel} 
                            onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
                        >
                            {levels.map(level => (
                                <option key={level} value={level}>
                                    {level === 0 ? 'Ground' : level > 0 ? `+${level}` : level}
                                </option>
                            ))}
                        </select>
                        <span className="level-info">({levelName})</span>
                    </div>
                )}
            </div>
            {currentRoom && (
                <div className="map-location-info">
                    📍 {currentRoom.name} ({currentRoom.x}, {currentRoom.y}, {currentRoom.z})
                </div>
            )}
            <div className="map-container" ref={mapContainerRef}>
                <div
                    className="map-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridLayout.width}, 40px)`,
                        gridTemplateRows: `repeat(${gridLayout.height}, 40px)`,
                        gap: '4px',
                        padding: '20px',
                        position: 'relative',
                        minWidth: 'fit-content',
                        overflow: 'visible'
                    }}
                >
                    {Array.from({ length: gridLayout.height }).map((_, row) => (
                        Array.from({ length: gridLayout.width }).map((_, col) => {
                            const currentX = gridLayout.minX + col;
                            const currentY = gridLayout.minY + (gridLayout.height - 1 - row);

                            const room = gridLayout.rooms.find(r => r.x === currentX && r.y === currentY);
                            const isCurrent = room?.id === playerState?.currentRoom;
                            
                            // Get exits for this room to show connection indicators
                            const roomExits = room?.exits || {};
                            const exitDirs = Object.keys(roomExits);
                            
                            // Calculate positions for exit indicators (including diagonals)
                            const exitIndicators = [];
                            exitDirs.forEach(dir => {
                                const targetId = roomExits[dir];
                                if (!targetId) return;
                                
                                const targetRoom = roomCoordinates[targetId];
                                if (targetRoom && targetRoom.z === currentLevel) {
                                    const dx = targetRoom.x - currentX;
                                    const dy = targetRoom.y - currentY;
                                    
                                    // Only show if adjacent (including diagonals like northeast)
                                    if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1 && (dx !== 0 || dy !== 0)) {
                                        exitIndicators.push({ dir, dx, dy, targetId });
                                    }
                                }
                            });

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    ref={isCurrent ? currentRoomRef : null}
                                    className={`map-slot ${room ? 'has-room' : 'empty'} ${isCurrent ? 'is-current' : ''}`}
                                    title={room ? `${room.name}${exitDirs.length > 0 ? ` - Exits: ${exitDirs.join(', ')}` : ''}` : `(${currentX}, ${currentY}, ${currentLevel})`}
                                    style={{ position: 'relative', overflow: 'visible' }}
                                >
                                    {isCurrent && <span className="player-marker">📍</span>}
                                    {!isCurrent && room && <span className="room-marker">·</span>}
                                    
                                    {/* Draw connection lines to adjacent rooms (including diagonals) */}
                                    {room && exitIndicators.map(({ dir, dx, dy, targetId }, idx) => {
                                        const angle = Math.atan2(-dy, dx) * 180 / Math.PI; // Negative dy because Y increases downward in screen space
                                        const length = Math.sqrt(dx * dx + dy * dy) * 44; // 40px cell + 4px gap
                                        const centerX = 20; // Center of 40px cell
                                        const centerY = 20;
                                        
                                        return (
                                            <div
                                                key={`${dir}-${targetId}-${idx}`}
                                                style={{
                                                    position: 'absolute',
                                                    left: `${centerX}px`,
                                                    top: `${centerY}px`,
                                                    width: `${length}px`,
                                                    height: '2px',
                                                    background: 'rgba(74, 158, 255, 0.4)',
                                                    transformOrigin: '0 50%',
                                                    transform: `rotate(${angle}deg)`,
                                                    pointerEvents: 'none',
                                                    zIndex: 0
                                                }}
                                                title={`${dir} to ${roomCoordinates[targetId]?.name || targetId}`}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
            <div className="map-footer">
                Showing {levelRooms.length} locations on {levelName}
                {levels.length > 1 && ` (${visitedCoords.length} total across ${levels.length} levels)`}
                {currentRoom && ` • Current: ${currentRoom.name}`}
            </div>
        </div>
    );
};
