// WorldMap Component - Shows a 3D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect, useState } from 'react';

// Room coordinates for map display - generated from actual room topology
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
// Z-axis represents vertical levels: Up = +Z, Down = -Z
const roomCoordinates = {
    aldburg: { x: 53, y: 53, z: 1, name: 'Aldburg' },
    amon_hen: { x: 58, y: 54, z: 1, name: 'Amon Hen - Hill of Sight' },
    anduin_approach: { x: 57, y: 55, z: 1, name: 'Anduin River - Lothlórien Quays' },
    anduin_confluence: { x: 57, y: 55, z: 1, name: 'Confluence of Rivers' },
    anduin_midstream: { x: 57, y: 54, z: 1, name: 'Anduin - Midstream' },
    annuminas_approach: { x: 64, y: 56, z: 1, name: 'Approach to Annúminas' },
    annuminas_ruins: { x: 64, y: 55, z: 1, name: 'Annúminas Ruins' },
    annuminas_tower: { x: 65, y: 55, z: 1, name: 'Annúminas Tower' },
    archet: { x: 58, y: 55, z: 1, name: 'Archet' },
    bag_end: { x: 54, y: 53, z: 1, name: 'Bag End' },
    balin_tomb: { x: 68, y: 55, z: 1, name: 'Chamber of Mazarbul - Balin\'s Tomb' },
    barad_dur_approach: { x: 61, y: 58, z: 1, name: 'Approach to Barad-dûr' },
    barad_dur_base: { x: 62, y: 58, z: 1, name: 'Base of Barad-dûr' },
    barad_dur_chamber: { x: 61, y: 58, z: 1, name: 'Chamber of the Dark Lord' },
    barad_dur_throne_room: { x: 61, y: 57, z: 1, name: 'Throne Room of Barad-dûr' },
    barrow_chamber_1: { x: 64, y: 53, z: 1, name: 'Barrow Chamber - First Mound' },
    barrow_chamber_2: { x: 62, y: 53, z: 1, name: 'Barrow Chamber - Second Mound' },
    barrow_chamber_3: { x: 66, y: 55, z: 1, name: 'Barrow Chamber - Third Mound' },
    barrow_downs: { x: 63, y: 52, z: 1, name: 'The Barrow-downs' },
    barrow_downs_approach: { x: 61, y: 55, z: 1, name: 'Approach to the Barrow-downs' },
    black_gate: { x: 60, y: 60, z: 1, name: 'The Black Gate of Mordor' },
    bombadil_garden: { x: 62, y: 56, z: 1, name: 'Tom\'s Garden' },
    bombadil_house: { x: 59, y: 53, z: 1, name: 'Tom Bombadil\'s House' },
    brandy_hall: { x: 60, y: 53, z: 1, name: 'Brandy Hall' },
    brandywine_bridge: { x: 60, y: 57, z: 1, name: 'Brandywine Bridge' },
    bree_east_road: { x: 60, y: 55, z: 1, name: 'East Road from Bree' },
    bree_gate: { x: 61, y: 57, z: 1, name: 'Bree Gate' },
    bree_square: { x: 62, y: 57, z: 1, name: 'Bree Square' },
    bridge_of_khazad_dum: { x: 71, y: 53, z: 1, name: 'Bridge of Khazad-dûm' },
    buckland_cellar: { x: 65, y: 55, z: 1, name: 'Buckland Cellar' },
    buckland_kitchen: { x: 61, y: 52, z: 1, name: 'Buckland Kitchen' },
    bucklebury: { x: 60, y: 54, z: 1, name: 'Bucklebury' },
    bywater: { x: 58, y: 58, z: 1, name: 'Bywater' },
    caras_galadhon: { x: 56, y: 55, z: 1, name: 'Caras Galadhon - City of the Trees' },
    celebrant_banks: { x: 57, y: 54, z: 1, name: 'Banks of the Celebrant' },
    cerin_amroth: { x: 56, y: 56, z: 1, name: 'Cerin Amroth' },
    chetwood: { x: 62, y: 52, z: 1, name: 'Chetwood Forest' },
    cirith_ungol: { x: 59, y: 59, z: 1, name: 'Cirith Ungol - Tower of the Spider' },
    citadel_guards_hall: { x: 72, y: 54, z: 1, name: 'Citadel Guards Hall' },
    combe: { x: 61, y: 57, z: 1, name: 'Combe' },
    crickhollow: { x: 59, y: 54, z: 1, name: 'Crickhollow' },
    dead_city: { x: 53, y: 56, z: 1, name: 'City of the Dead' },
    deep_coomb: { x: 57, y: 53, z: 1, name: 'The Deep Coomb' },
    deep_mines_hub: { x: 71, y: 57, z: 1, name: 'Deep Mines Hub' },
    deeping_stream_upper: { x: 56, y: 53, z: 1, name: 'Upper Deeping Stream' },
    dimholt_road: { x: 54, y: 59, z: 1, name: 'The Dimholt Road' },
    dimrill_dale: { x: 55, y: 56, z: 1, name: 'Dimrill Dale' },
    doors_of_durin: { x: 67, y: 56, z: 1, name: 'Doors of Durin - West Gate of Moria' },
    dunharrow: { x: 53, y: 52, z: 1, name: 'Dunharrow' },
    dunharrow_firtree_grove: { x: 55, y: 53, z: 1, name: 'Fir-tree Grove - Dunharrow' },
    durin_chamber: { x: 69, y: 54, z: 1, name: 'Durin\'s Chamber' },
    durin_throne_hall: { x: 68, y: 53, z: 1, name: 'Great Hall of Durin' },
    durthang_fortress: { x: 60, y: 61, z: 1, name: 'Durthang Fortress' },
    east_emnet: { x: 58, y: 52, z: 1, name: 'East Emnet' },
    east_gate_approach: { x: 56, y: 59, z: 1, name: 'Approach to the East Gate' },
    east_gate_moria: { x: 57, y: 59, z: 1, name: 'East Gate of Moria' },
    eastfold_plains: { x: 53, y: 57, z: 1, name: 'Eastfold Plains' },
    edoras_approach: { x: 59, y: 57, z: 1, name: 'Road to Edoras' },
    edoras_gates: { x: 59, y: 56, z: 1, name: 'Gates of Edoras' },
    elf_path_entrance: { x: 56, y: 57, z: 1, name: 'Entrance to the Elf-path' },
    elrond_study: { x: 65, y: 53, z: 1, name: 'Elrond\'s Private Study' },
    elven_craft_hall: { x: 54, y: 57, z: 1, name: 'Hall of the Galadhrim Craftsmen' },
    endless_stair_bottom: { x: 69, y: 52, z: 1, name: 'Bottom of the Endless Stair' },
    endless_stair_top: { x: 69, y: 54, z: 1, name: 'Top of the Endless Stair' },
    entmoot_circle: { x: 57, y: 58, z: 1, name: 'Entmoot Circle - Derndingle' },
    entwash: { x: 57, y: 60, z: 1, name: 'The Entwash' },
    entwash_delta: { x: 56, y: 56, z: 1, name: 'Entwash Delta' },
    entwash_headwaters: { x: 55, y: 58, z: 1, name: 'Headwaters of the Entwash' },
    erebor_armory: { x: 50, y: 60, z: 1, name: 'The Mountain Armory' },
    erebor_gates: { x: 51, y: 59, z: 1, name: 'Main Gates of Erebor' },
    erebor_great_hall: { x: 51, y: 60, z: 1, name: 'Great Hall of Thráin' },
    erebor_treasury: { x: 52, y: 60, z: 1, name: 'The Treasury of Erebor' },
    fangorn_border: { x: 56, y: 55, z: 1, name: 'Edge of Fangorn Forest' },
    fangorn_depths: { x: 56, y: 60, z: 1, name: 'Deep in Fangorn' },
    fangorn_eaves: { x: 57, y: 56, z: 1, name: 'Eaves of Fangorn' },
    fangorn_hidden_path: { x: 55, y: 57, z: 1, name: 'Hidden Path in Fangorn' },
    fifth_level: { x: 73, y: 57, z: 1, name: 'Fifth Level - Minas Tirith' },
    first_level: { x: 71, y: 56, z: 0, name: 'First Level - Minas Tirith' },
    ford_of_bruinen: { x: 64, y: 54, z: 1, name: 'Ford of Bruinen' },
    fornost_approach: { x: 61, y: 56, z: 1, name: 'Approach to Fornost' },
    fornost_gates: { x: 64, y: 56, z: 1, name: 'Fornost Gates' },
    fornost_keep: { x: 64, y: 56, z: 2, name: 'Fornost Keep' },
    fornost_palace: { x: 64, y: 56, z: 1, name: 'Fornost Palace' },
    fornost_ruins: { x: 64, y: 55, z: 1, name: 'Fornost Ruins' },
    fornost_temple: { x: 62, y: 53, z: 1, name: 'Fornost Temple' },
    fourth_level: { x: 72, y: 56, z: 1, name: 'Fourth Level - Minas Tirith' },
    galadhrm_flet_1: { x: 54, y: 54, z: 1, name: 'Galadhrim Flet - Western Watch' },
    galadriel_court: { x: 55, y: 54, z: 1, name: 'Court of Galadriel' },
    gap_of_rohan: { x: 57, y: 57, z: 1, name: 'Gap of Rohan' },
    glittering_caves: { x: 55, y: 60, z: 1, name: 'Glittering Caves of Aglarond' },
    goblin_ward: { x: 69, y: 57, z: 1, name: 'The Goblin Ward' },
    goblin_warren: { x: 70, y: 55, z: 1, name: 'Goblin Warren' },
    goblin_watchtower: { x: 69, y: 58, z: 1, name: 'Goblin Watchtower' },
    gorgoroth_plateau: { x: 60, y: 58, z: 1, name: 'Plateau of Gorgoroth' },
    green_dragon: { x: 62, y: 60, z: 1, name: 'The Green Dragon Inn' },
    green_hill_country: { x: 59, y: 58, z: 1, name: 'Green Hill Country' },
    grey_havens_docks: { x: 58, y: 55, z: 1, name: 'Docks of Mithlond' },
    hall_of_fire_guest: { x: 64, y: 51, z: 1, name: 'The Hall of Fire' },
    hall_of_kings: { x: 70, y: 54, z: 1, name: 'Hall of Kings' },
    harrowdale: { x: 58, y: 53, z: 1, name: 'Harrowdale' },
    havens_approach: { x: 57, y: 55, z: 1, name: 'Approach to Mithlond' },
    helms_deep_interior: { x: 55, y: 52, z: 1, name: 'Helm\'s Deep' },
    helms_gate: { x: 54, y: 60, z: 1, name: 'Helm\'s Gate' },
    henneth_annun: { x: 57, y: 58, z: 1, name: 'Henneth Annûn - Window on the West' },
    hidden_flet: { x: 70, y: 58, z: 1, name: 'Hidden Flet' },
    hidden_valley_white_mountains: { x: 55, y: 59, z: 1, name: 'Hidden Valley in the White Mountains' },
    hobbiton_square: { x: 61, y: 60, z: 1, name: 'Hobbiton Square' },
    hollin_gate: { x: 66, y: 56, z: 1, name: 'Hollin Gate' },
    hornburg_armory: { x: 56, y: 59, z: 1, name: 'Hornburg Armory' },
    house_of_stewards: { x: 58, y: 60, z: 1, name: 'House of the Stewards' },
    iron_mines_1: { x: 57, y: 61, z: 1, name: 'Iron Mines - Level 1' },
    iron_mines_2: { x: 70, y: 56, z: 1, name: 'Iron Mines - The Pit' },
    isengard_gates: { x: 57, y: 56, z: 1, name: 'Gates of Isengard' },
    ithilien_woods: { x: 56, y: 57, z: 1, name: 'Woods of Ithilien' },
    khazad_dum_chasm_view: { x: 54, y: 55, z: 1, name: 'Chasm Viewpoint' },
    lake_evendim: { x: 64, y: 56, z: 1, name: 'Lake Evendim' },
    lake_town_docks: { x: 56, y: 58, z: 1, name: 'Lake-town Docks' },
    last_bridge: { x: 62, y: 54, z: 1, name: 'The Last Bridge' },
    leaflock_meadow: { x: 55, y: 55, z: 1, name: 'Leaflock\'s Meadow' },
    lonely_mountain_approach: { x: 56, y: 59, z: 1, name: 'Approach to the Lonely Mountain' },
    long_lake_path: { x: 56, y: 57, z: 1, name: 'Path to Long Lake' },
    longbottom: { x: 56, y: 55, z: 1, name: 'Longbottom' },
    lossarnach_valleys: { x: 74, y: 56, z: 1, name: 'Valleys of Lossarnach' },
    lothlorien_border: { x: 56, y: 57, z: 1, name: 'Border of Lothlórien' },
    mallorn_sanctuary: { x: 56, y: 54, z: 1, name: 'The Mallorn Sanctuary' },
    marish: { x: 59, y: 56, z: 1, name: 'The Marish' },
    mayor_office: { x: 58, y: 57, z: 1, name: 'Mayor\'s Office' },
    meduseld: { x: 59, y: 53, z: 1, name: 'Meduseld - The Golden Hall' },
    michel_delving: { x: 59, y: 57, z: 1, name: 'Michel Delving' },
    midgewater_marshes: { x: 64, y: 54, z: 1, name: 'Midgewater Marshes' },
    minas_morgul_gates: { x: 59, y: 60, z: 1, name: 'Gates of Minas Morgul' },
    minas_morgul_interior: { x: 58, y: 59, z: 1, name: 'Interior of Minas Morgul' },
    minas_tirith_gates: { x: 54, y: 58, z: 1, name: 'Gates of Minas Tirith' },
    minas_tirith_houses_of_healing: { x: 71, y: 54, z: 1, name: 'Houses of Healing' },
    minas_tirith_stables: { x: 71, y: 57, z: 0, name: 'Stables of Minas Tirith' },
    mines_level1: { x: 68, y: 55, z: 1, name: 'Upper Mines' },
    mines_level2: { x: 68, y: 54, z: 1, name: 'Deep Mines' },
    mirkwood_depths: { x: 59, y: 59, z: 1, name: 'Mirkwood Depths - Spider Warrens' },
    mirkwood_edge: { x: 58, y: 56, z: 1, name: 'Edge of Mirkwood' },
    mirkwood_path_1: { x: 58, y: 57, z: 1, name: 'Mirkwood Path - The Old Forest Road' },
    mirkwood_path_2: { x: 58, y: 58, z: 1, name: 'Mirkwood Path - The Enchanted Stream' },
    mirror_chamber: { x: 55, y: 55, z: 1, name: 'Chamber of the Mirror' },
    mithril_depths_1: { x: 55, y: 59, z: 1, name: 'Mithril Depths - Upper Vein' },
    mithril_depths_2: { x: 56, y: 60, z: 1, name: 'Mithril Depths - The Mother Lode' },
    mithril_mine: { x: 72, y: 57, z: 1, name: 'The Mithril Vein' },
    mordor_plains: { x: 60, y: 59, z: 1, name: 'Plains of Mordor' },
    morgul_pass: { x: 58, y: 57, z: 1, name: 'Morgul Pass' },
    morgul_vale: { x: 58, y: 59, z: 1, name: 'Morgul Vale' },
    moria_entrance: { x: 68, y: 56, z: 1, name: 'First Hall of Moria' },
    mount_doom_approach: { x: 60, y: 57, z: 1, name: 'Approach to Mount Doom' },
    mount_doom_sammath_naur: { x: 60, y: 55, z: 1, name: 'Sammath Naur - Chambers of Fire' },
    mount_doom_summit: { x: 60, y: 56, z: 1, name: 'Summit of Mount Doom' },
    nameless_tunnels: { x: 73, y: 58, z: 1, name: 'The Nameless Tunnels' },
    needlehole: { x: 58, y: 52, z: 1, name: 'Needlehole' },
    niphredil_meadow: { x: 54, y: 58, z: 1, name: 'Meadow of Niphredil' },
    old_forest_buckland_entrance: { x: 60, y: 52, z: 1, name: 'Old Forest - Buckland Entrance' },
    old_forest_depth: { x: 59, y: 55, z: 1, name: 'Deep in the Old Forest' },
    old_forest_entrance: { x: 60, y: 56, z: 1, name: 'Old Forest Entrance' },
    old_forest_exit: { x: 61, y: 54, z: 1, name: 'Old Forest - Eastern Exit' },
    orthanc_base: { x: 58, y: 56, z: 1, name: 'Base of Orthanc' },
    orthanc_chamber: { x: 57, y: 55, z: 1, name: 'Orthanc - Saruman\'s  Chamber' },
    osgiliath_ruins: { x: 57, y: 58, z: 1, name: 'Ruins of Osgiliath' },
    overhill: { x: 57, y: 54, z: 1, name: 'Overhill' },
    parth_galen: { x: 58, y: 55, z: 1, name: 'Parth Galen' },
    paths_of_dead: { x: 54, y: 56, z: 1, name: 'The Paths of the Dead' },
    pelargir_port: { x: 55, y: 57, z: 1, name: 'Port of Pelargir' },
    pelennor_fields: { x: 56, y: 59, z: 1, name: 'Pelennor Fields' },
    prancing_pony: { x: 62, y: 58, z: 1, name: 'The Prancing Pony' },
    rath_dinen: { x: 57, y: 60, z: 1, name: 'Rath Dínen - Street of the Dead' },
    rauros_falls_approach: { x: 57, y: 53, z: 1, name: 'Approach to Rauros Falls' },
    rhosgobel: { x: 59, y: 60, z: 1, name: 'Rhosgobel - Home of Radagast' },
    rivendell_forge: { x: 66, y: 52, z: 1, name: 'Rivendell Forge' },
    rivendell_gardens: { x: 64, y: 50, z: 1, name: 'Gardens of Rivendell' },
    rivendell_gates: { x: 65, y: 54, z: 1, name: 'Gates of Rivendell' },
    rivendell_guest_house: { x: 66, y: 53, z: 1, name: 'The Guest House' },
    rivendell_hall: { x: 65, y: 52, z: 1, name: 'Hall of Fire - Rivendell' },
    rivendell_library: { x: 64, y: 52, z: 1, name: 'Library of Rivendell' },
    rohan_plains: { x: 58, y: 57, z: 1, name: 'The Plains of Rohan' },
    royal_armory: { x: 69, y: 53, z: 1, name: 'Royal Armory' },
    royal_tombs: { x: 69, y: 55, z: 1, name: 'Royal Tombs of Khazad-dûm' },
    rushock_bog: { x: 61, y: 58, z: 1, name: 'Rushock Bog' },
    sackville_manor: { x: 55, y: 53, z: 1, name: 'Sackville Manor' },
    scary: { x: 60, y: 58, z: 1, name: 'Scary' },
    second_level: { x: 71, y: 56, z: 1, name: 'Second Level - Minas Tirith' },
    seventh_level: { x: 67, y: 55, z: 1, name: 'Seventh Level' },
    shelob_lair: { x: 59, y: 58, z: 1, name: 'Shelob\'s Lair' },
    silverlode_banks: { x: 57, y: 56, z: 1, name: 'Banks of the Silverlode' },
    silverlode_crossing: { x: 56, y: 58, z: 1, name: 'Silverlode Crossing' },
    singing_groves: { x: 55, y: 56, z: 1, name: 'Singing Groves' },
    sixth_level: { x: 72, y: 55, z: 1, name: 'Sixth Level - Minas Tirith' },
    skinbark_grove: { x: 52, y: 55, z: 1, name: 'Skinbark\'s Grove' },
    smelting_chambers: { x: 68, y: 52, z: 1, name: 'Smelting Chambers' },
    snowbourn_banks: { x: 53, y: 59, z: 1, name: 'Banks of the Snowbourn' },
    staddle: { x: 61, y: 59, z: 1, name: 'Staddle' },
    starkhorn_foothills: { x: 54, y: 53, z: 1, name: 'Foothills of the Starkhorn' },
    stock_road: { x: 57, y: 55, z: 1, name: 'Stock Road' },
    the_dark_lake: { x: 72, y: 58, z: 1, name: 'The Dark Lake' },
    the_silent_glade: { x: 57, y: 57, z: 1, name: 'The Silent Glade' },
    the_unending_stair_middle: { x: 70, y: 53, z: 1, name: 'The Unending Stair - Middle Section' },
    third_level: { x: 71, y: 55, z: 1, name: 'Third Level - Minas Tirith' },
    thranduil_halls_gate: { x: 52, y: 56, z: 1, name: 'Gate of the Elven-king' },
    thranduil_halls_interior: { x: 51, y: 55, z: 1, name: 'Thranduil\'s Halls' },
    tookbank: { x: 59, y: 60, z: 1, name: 'Tookbank' },
    treebeard_cellar: { x: 52, y: 54, z: 1, name: 'Treebeard\'s Storage' },
    troll_cave: { x: 62, y: 54, z: 1, name: 'Troll Cave' },
    trollshaws: { x: 63, y: 54, z: 1, name: 'The Trollshaws' },
    tuckborough: { x: 59, y: 59, z: 1, name: 'Tuckborough' },
    tunnel_exit: { x: 56, y: 58, z: 1, name: 'Tunnel Exit' },
    twenty_first_hall: { x: 67, y: 54, z: 1, name: 'Twenty-First Hall' },
    waterfall_walkway: { x: 66, y: 55, z: 1, name: 'Waterfall Walkway' },
    waymeet: { x: 56, y: 54, z: 1, name: 'Waymeet' },
    weatherhills: { x: 65, y: 56, z: 1, name: 'The Weather Hills' },
    weathertop_approach: { x: 60, y: 51, z: 1, name: 'Approach to Weathertop' },
    weathertop_base: { x: 60, y: 52, z: 1, name: 'Base of Weathertop' },
    weathertop_summit: { x: 61, y: 53, z: 1, name: 'Weathertop Summit' },
    wellinghall: { x: 56, y: 55, z: 1, name: 'Wellinghall - Hall of the Ents' },
    west_emnet: { x: 57, y: 59, z: 1, name: 'West Emnet' },
    westfold_plains: { x: 57, y: 58, z: 1, name: 'Westfold Plains' },
    white_tower: { x: 55, y: 58, z: 1, name: 'White Tower of Ecthelion' },
    whitwell: { x: 58, y: 56, z: 1, name: 'Whitwell' },
    withywindle: { x: 58, y: 53, z: 1, name: 'The Withywindle' },
    wold_of_rohan: { x: 58, y: 53, z: 1, name: 'The Wold' },
    woody_end: { x: 54, y: 52, z: 1, name: 'Woody End' },
};

export const WorldMap = ({ playerState }) => {
    const mapContainerRef = useRef(null);
    const currentRoomRef = useRef(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms]);

    // Get all unique Z levels (floors)
    const levels = useMemo(() => {
        const levelSet = new Set(visitedCoords.map(r => r.z));
        return Array.from(levelSet).sort((a, b) => a - b);
    }, [visitedCoords]);

    // Auto-detect current level if not manually selected
    const currentLevel = useMemo(() => {
        if (selectedLevel !== null) return selectedLevel;
        if (!playerState?.currentRoom) return levels[0] || 0;
        const currentRoom = roomCoordinates[playerState.currentRoom];
        return currentRoom ? currentRoom.z : levels[0] || 0;
    }, [selectedLevel, playerState?.currentRoom, levels]);

    // Filter rooms for current level
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

        // Calculate grid dimensions
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

    // Auto-scroll to keep current room in view
    useEffect(() => {
        if (!playerState?.currentRoom || !gridLayout || !currentRoomRef.current || !mapContainerRef.current) {
            return;
        }

        const currentRoom = gridLayout.rooms.find(r => r.id === playerState.currentRoom);
        if (!currentRoom) return;

        // Scroll the current room into view with smooth behavior
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
                        minWidth: 'fit-content'
                    }}
                >
                    {/* Render grid slots */}
                    {Array.from({ length: gridLayout.height }).map((_, row) => (
                        Array.from({ length: gridLayout.width }).map((_, col) => {
                            const currentX = gridLayout.minX + col;
                            const currentY = gridLayout.minY + (gridLayout.height - 1 - row); // Invert Y for N/S display

                            const room = gridLayout.rooms.find(r => r.x === currentX && r.y === currentY);
                            const isCurrent = room?.id === playerState?.currentRoom;

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    ref={isCurrent ? currentRoomRef : null}
                                    className={`map-slot ${room ? 'has-room' : 'empty'} ${isCurrent ? 'is-current' : ''}`}
                                    title={room ? room.name : `(${currentX}, ${currentY}, ${currentLevel})`}
                                >
                                    {isCurrent && <span className="player-marker">📍</span>}
                                    {!isCurrent && room && <span className="room-marker">·</span>}
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
