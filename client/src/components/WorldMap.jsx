// WorldMap Component - Shows a 2D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect } from 'react';

// Room coordinates for map display - generated from actual room topology
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
const roomCoordinates = {
    aldburg: { x: 270, y: 65, name: 'Aldburg' },
    amon_hen: { x: 249, y: 54, name: 'Amon Hen - Hill of Sight' },
    anduin_approach: { x: 248, y: 55, name: 'Anduin River - Lothlórien Quays' },
    anduin_confluence: { x: 274, y: 67, name: 'Confluence of Rivers' },
    anduin_midstream: { x: 248, y: 54, name: 'Anduin - Midstream' },
    annuminas_approach: { x: 164, y: 70, name: 'Approach to Annúminas' },
    annuminas_ruins: { x: 164, y: 69, name: 'Annúminas Ruins' },
    annuminas_tower: { x: 165, y: 69, name: 'Annúminas Tower' },
    archet: { x: 54, y: 63, name: 'Archet' },
    bag_end: { x: 50, y: 61, name: 'Bag End' },
    balin_tomb: { x: 244, y: 64, name: 'Chamber of Mazarbul - Balin\'s Tomb' },
    barad_dur_approach: { x: 457, y: 67, name: 'Approach to Barad-dûr' },
    barad_dur_base: { x: 317, y: 68, name: 'Base of Barad-dûr' },
    barad_dur_chamber: { x: 316, y: 68, name: 'Chamber of the Dark Lord' },
    barad_dur_throne_room: { x: 316, y: 67, name: 'Throne Room of Barad-dûr' },
    barrow_chamber_1: { x: 60, y: 61, name: 'Barrow Chamber - First Mound' },
    barrow_chamber_2: { x: 58, y: 61, name: 'Barrow Chamber - Second Mound' },
    barrow_chamber_3: { x: 62, y: 63, name: 'Barrow Chamber - Third Mound' },
    barrow_downs: { x: 59, y: 60, name: 'The Barrow-downs' },
    barrow_downs_approach: { x: 57, y: 63, name: 'Approach to the Barrow-downs' },
    black_gate: { x: 437, y: 67, name: 'The Black Gate of Mordor' },
    bombadil_garden: { x: 58, y: 64, name: 'Tom\'s Garden' },
    bombadil_house: { x: 55, y: 61, name: 'Tom Bombadil\'s House' },
    brandy_hall: { x: 102, y: 67, name: 'Brandy Hall' },
    brandywine_bridge: { x: 56, y: 65, name: 'Brandywine Bridge' },
    bree_east_road: { x: 56, y: 63, name: 'East Road from Bree' },
    bree_gate: { x: 337, y: 67, name: 'Bree Gate' },
    bree_square: { x: 58, y: 65, name: 'Bree Square' },
    bridge_of_khazad_dum: { x: 247, y: 62, name: 'Bridge of Khazad-dûm' },
    buckland_cellar: { x: 61, y: 63, name: 'Buckland Cellar' },
    buckland_kitchen: { x: 57, y: 60, name: 'Buckland Kitchen' },
    bucklebury: { x: 56, y: 62, name: 'Bucklebury' },
    bywater: { x: 54, y: 66, name: 'Bywater' },
    caras_galadhon: { x: 247, y: 55, name: 'Caras Galadhon - City of the Trees' },
    celebrant_banks: { x: 274, y: 66, name: 'Banks of the Celebrant' },
    cerin_amroth: { x: 247, y: 56, name: 'Cerin Amroth' },
    chetwood: { x: 58, y: 60, name: 'Chetwood Forest' },
    cirith_ungol: { x: 250, y: 59, name: 'Cirith Ungol - Tower of the Spider' },
    citadel_guards_hall: { x: 248, y: 63, name: 'Citadel Guards Hall' },
    combe: { x: 57, y: 65, name: 'Combe' },
    crickhollow: { x: 55, y: 62, name: 'Crickhollow' },
    dead_city: { x: 270, y: 68, name: 'City of the Dead' },
    deep_coomb: { x: 274, y: 65, name: 'The Deep Coomb' },
    deep_mines_hub: { x: 247, y: 66, name: 'Deep Mines Hub' },
    deeping_stream_upper: { x: 273, y: 65, name: 'Upper Deeping Stream' },
    dimholt_road: { x: 271, y: 71, name: 'The Dimholt Road' },
    dimrill_dale: { x: 248, y: 59, name: 'Dimrill Dale' },
    doors_of_durin: { x: 243, y: 65, name: 'Doors of Durin - West Gate of Moria' },
    dunharrow: { x: 270, y: 64, name: 'Dunharrow' },
    dunharrow_firtree_grove: { x: 272, y: 65, name: 'Fir-tree Grove - Dunharrow' },
    durin_chamber: { x: 357, y: 67, name: 'Durin\'s Chamber' },
    durin_throne_hall: { x: 244, y: 62, name: 'Great Hall of Durin' },
    durthang_fortress: { x: 251, y: 61, name: 'Durthang Fortress' },
    east_emnet: { x: 275, y: 64, name: 'East Emnet' },
    east_gate_approach: { x: 377, y: 67, name: 'Approach to the East Gate' },
    east_gate_moria: { x: 250, y: 62, name: 'East Gate of Moria' },
    eastfold_plains: { x: 270, y: 69, name: 'Eastfold Plains' },
    edoras_approach: { x: 250, y: 52, name: 'Road to Edoras' },
    edoras_gates: { x: 250, y: 51, name: 'Gates of Edoras' },
    elf_path_entrance: { x: 273, y: 69, name: 'Entrance to the Elf-path' },
    elrond_study: { x: 165, y: 67, name: 'Elrond\'s Private Study' },
    elven_craft_hall: { x: 271, y: 69, name: 'Hall of the Galadhrim Craftsmen' },
    endless_stair_bottom: { x: 245, y: 61, name: 'Bottom of the Endless Stair' },
    endless_stair_top: { x: 245, y: 63, name: 'Top of the Endless Stair' },
    entmoot_circle: { x: 274, y: 70, name: 'Entmoot Circle - Derndingle' },
    entwash: { x: 274, y: 72, name: 'The Entwash' },
    entwash_delta: { x: 273, y: 68, name: 'Entwash Delta' },
    entwash_headwaters: { x: 272, y: 70, name: 'Headwaters of the Entwash' },
    erebor_armory: { x: 267, y: 72, name: 'The Mountain Armory' },
    erebor_gates: { x: 268, y: 71, name: 'Main Gates of Erebor' },
    erebor_great_hall: { x: 268, y: 72, name: 'Great Hall of Thráin' },
    erebor_treasury: { x: 269, y: 72, name: 'The Treasury of Erebor' },
    fangorn_border: { x: 247, y: 50, name: 'Edge of Fangorn Forest' },
    fangorn_depths: { x: 273, y: 72, name: 'Deep in Fangorn' },
    fangorn_eaves: { x: 274, y: 68, name: 'Eaves of Fangorn' },
    fangorn_hidden_path: { x: 272, y: 69, name: 'Hidden Path in Fangorn' },
    fifth_level: { x: 249, y: 66, name: 'Fifth Level - Minas Tirith' },
    first_level: { x: 296, y: 66, name: 'First Level - Minas Tirith' },
    ford_of_bruinen: { x: 164, y: 68, name: 'Ford of Bruinen' },
    fornost_approach: { x: 57, y: 64, name: 'Approach to Fornost' },
    fornost_gates: { x: 60, y: 64, name: 'Fornost Gates' },
    fornost_keep: { x: 186, y: 67, name: 'Fornost Keep' },
    fornost_palace: { x: 142, y: 68, name: 'Fornost Palace' },
    fornost_ruins: { x: 142, y: 67, name: 'Fornost Ruins' },
    fornost_temple: { x: 162, y: 67, name: 'Fornost Temple' },
    fourth_level: { x: 248, y: 65, name: 'Fourth Level - Minas Tirith' },
    galadhrm_flet_1: { x: 271, y: 66, name: 'Galadhrim Flet - Western Watch' },
    galadriel_court: { x: 246, y: 54, name: 'Court of Galadriel' },
    gap_of_rohan: { x: 248, y: 52, name: 'Gap of Rohan' },
    glittering_caves: { x: 272, y: 72, name: 'Glittering Caves of Aglarond' },
    goblin_ward: { x: 245, y: 66, name: 'The Goblin Ward' },
    goblin_warren: { x: 246, y: 64, name: 'Goblin Warren' },
    goblin_watchtower: { x: 245, y: 67, name: 'Goblin Watchtower' },
    gorgoroth_plateau: { x: 251, y: 58, name: 'Plateau of Gorgoroth' },
    green_dragon: { x: 58, y: 68, name: 'The Green Dragon Inn' },
    green_hill_country: { x: 55, y: 66, name: 'Green Hill Country' },
    grey_havens_docks: { x: 275, y: 67, name: 'Docks of Mithlond' },
    hall_of_fire_guest: { x: 164, y: 65, name: 'The Hall of Fire' },
    hall_of_kings: { x: 246, y: 63, name: 'Hall of Kings' },
    harrowdale: { x: 249, y: 53, name: 'Harrowdale' },
    havens_approach: { x: 81, y: 66, name: 'Approach to Mithlond' },
    helms_deep_interior: { x: 272, y: 64, name: 'Helm\'s Deep' },
    helms_gate: { x: 271, y: 72, name: 'Helm\'s Gate' },
    henneth_annun: { x: 248, y: 58, name: 'Henneth Annûn - Window on the West' },
    hidden_flet: { x: 246, y: 67, name: 'Hidden Flet' },
    hidden_valley_white_mountains: { x: 272, y: 71, name: 'Hidden Valley in the White Mountains' },
    hobbiton_square: { x: 57, y: 68, name: 'Hobbiton Square' },
    hollin_gate: { x: 226, y: 68, name: 'Hollin Gate' },
    hornburg_armory: { x: 273, y: 71, name: 'Hornburg Armory' },
    house_of_stewards: { x: 417, y: 67, name: 'House of the Stewards' },
    iron_mines_1: { x: 250, y: 64, name: 'Iron Mines - Level 1' },
    iron_mines_2: { x: 246, y: 65, name: 'Iron Mines - The Pit' },
    isengard_gates: { x: 248, y: 51, name: 'Gates of Isengard' },
    ithilien_woods: { x: 249, y: 60, name: 'Woods of Ithilien' },
    khazad_dum_chasm_view: { x: 271, y: 67, name: 'Chasm Viewpoint' },
    lake_evendim: { x: 206, y: 67, name: 'Lake Evendim' },
    lake_town_docks: { x: 268, y: 69, name: 'Lake-town Docks' },
    last_bridge: { x: 58, y: 62, name: 'The Last Bridge' },
    leaflock_meadow: { x: 272, y: 67, name: 'Leaflock\'s Meadow' },
    lonely_mountain_approach: { x: 268, y: 70, name: 'Approach to the Lonely Mountain' },
    long_lake_path: { x: 268, y: 68, name: 'Path to Long Lake' },
    longbottom: { x: 52, y: 63, name: 'Longbottom' },
    lossarnach_valleys: { x: 250, y: 65, name: 'Valleys of Lossarnach' },
    lothlorien_border: { x: 247, y: 57, name: 'Border of Lothlórien' },
    mallorn_sanctuary: { x: 273, y: 66, name: 'The Mallorn Sanctuary' },
    marish: { x: 55, y: 64, name: 'The Marish' },
    mayor_office: { x: 54, y: 65, name: 'Mayor\'s Office' },
    meduseld: { x: 250, y: 53, name: 'Meduseld - The Golden Hall' },
    michel_delving: { x: 55, y: 65, name: 'Michel Delving' },
    midgewater_marshes: { x: 60, y: 62, name: 'Midgewater Marshes' },
    minas_morgul_gates: { x: 250, y: 60, name: 'Gates of Minas Morgul' },
    minas_morgul_interior: { x: 251, y: 62, name: 'Interior of Minas Morgul' },
    minas_tirith_gates: { x: 247, y: 61, name: 'Gates of Minas Tirith' },
    minas_tirith_houses_of_healing: { x: 247, y: 63, name: 'Houses of Healing' },
    minas_tirith_stables: { x: 296, y: 67, name: 'Stables of Minas Tirith' },
    mines_level1: { x: 397, y: 67, name: 'Upper Mines' },
    mines_level2: { x: 244, y: 63, name: 'Deep Mines' },
    mirkwood_depths: { x: 276, y: 71, name: 'Mirkwood Depths - Spider Warrens' },
    mirkwood_edge: { x: 275, y: 68, name: 'Edge of Mirkwood' },
    mirkwood_path_1: { x: 275, y: 69, name: 'Mirkwood Path - The Old Forest Road' },
    mirkwood_path_2: { x: 275, y: 70, name: 'Mirkwood Path - The Enchanted Stream' },
    mirror_chamber: { x: 246, y: 55, name: 'Chamber of the Mirror' },
    mithril_depths_1: { x: 248, y: 62, name: 'Mithril Depths - Upper Vein' },
    mithril_depths_2: { x: 249, y: 63, name: 'Mithril Depths - The Mother Lode' },
    mithril_mine: { x: 248, y: 66, name: 'The Mithril Vein' },
    mordor_plains: { x: 251, y: 59, name: 'Plains of Mordor' },
    morgul_pass: { x: 249, y: 57, name: 'Morgul Pass' },
    morgul_vale: { x: 249, y: 59, name: 'Morgul Vale' },
    moria_entrance: { x: 244, y: 65, name: 'First Hall of Moria' },
    mount_doom_approach: { x: 251, y: 57, name: 'Approach to Mount Doom' },
    mount_doom_sammath_naur: { x: 251, y: 55, name: 'Sammath Naur - Chambers of Fire' },
    mount_doom_summit: { x: 251, y: 56, name: 'Summit of Mount Doom' },
    nameless_tunnels: { x: 249, y: 67, name: 'The Nameless Tunnels' },
    needlehole: { x: 54, y: 60, name: 'Needlehole' },
    niphredil_meadow: { x: 271, y: 70, name: 'Meadow of Niphredil' },
    old_forest_buckland_entrance: { x: 102, y: 66, name: 'Old Forest - Buckland Entrance' },
    old_forest_depth: { x: 55, y: 63, name: 'Deep in the Old Forest' },
    old_forest_entrance: { x: 56, y: 64, name: 'Old Forest Entrance' },
    old_forest_exit: { x: 57, y: 62, name: 'Old Forest - Eastern Exit' },
    orthanc_base: { x: 249, y: 51, name: 'Base of Orthanc' },
    orthanc_chamber: { x: 248, y: 50, name: 'Orthanc - Saruman\'s  Chamber' },
    osgiliath_ruins: { x: 250, y: 61, name: 'Ruins of Osgiliath' },
    overhill: { x: 53, y: 62, name: 'Overhill' },
    parth_galen: { x: 249, y: 55, name: 'Parth Galen' },
    paths_of_dead: { x: 271, y: 68, name: 'The Paths of the Dead' },
    pelargir_port: { x: 248, y: 60, name: 'Port of Pelargir' },
    pelennor_fields: { x: 249, y: 62, name: 'Pelennor Fields' },
    prancing_pony: { x: 58, y: 66, name: 'The Prancing Pony' },
    rath_dinen: { x: 250, y: 63, name: 'Rath Dínen - Street of the Dead' },
    rauros_falls_approach: { x: 248, y: 53, name: 'Approach to Rauros Falls' },
    rhosgobel: { x: 276, y: 72, name: 'Rhosgobel - Home of Radagast' },
    rivendell_forge: { x: 166, y: 66, name: 'Rivendell Forge' },
    rivendell_gardens: { x: 164, y: 64, name: 'Gardens of Rivendell' },
    rivendell_gates: { x: 165, y: 68, name: 'Gates of Rivendell' },
    rivendell_guest_house: { x: 166, y: 67, name: 'The Guest House' },
    rivendell_hall: { x: 165, y: 66, name: 'Hall of Fire - Rivendell' },
    rivendell_library: { x: 164, y: 66, name: 'Library of Rivendell' },
    rohan_plains: { x: 249, y: 52, name: 'The Plains of Rohan' },
    royal_armory: { x: 245, y: 62, name: 'Royal Armory' },
    royal_tombs: { x: 245, y: 64, name: 'Royal Tombs of Khazad-dûm' },
    rushock_bog: { x: 57, y: 66, name: 'Rushock Bog' },
    sackville_manor: { x: 51, y: 61, name: 'Sackville Manor' },
    scary: { x: 56, y: 66, name: 'Scary' },
    second_level: { x: 247, y: 65, name: 'Second Level - Minas Tirith' },
    seventh_level: { x: 243, y: 64, name: 'Seventh Level' },
    shelob_lair: { x: 250, y: 58, name: 'Shelob\'s Lair' },
    silverlode_banks: { x: 248, y: 56, name: 'Banks of the Silverlode' },
    silverlode_crossing: { x: 273, y: 70, name: 'Silverlode Crossing' },
    singing_groves: { x: 272, y: 68, name: 'Singing Groves' },
    sixth_level: { x: 248, y: 64, name: 'Sixth Level - Minas Tirith' },
    skinbark_grove: { x: 269, y: 67, name: 'Skinbark\'s Grove' },
    smelting_chambers: { x: 244, y: 61, name: 'Smelting Chambers' },
    snowbourn_banks: { x: 270, y: 71, name: 'Banks of the Snowbourn' },
    staddle: { x: 57, y: 67, name: 'Staddle' },
    starkhorn_foothills: { x: 271, y: 65, name: 'Foothills of the Starkhorn' },
    stock_road: { x: 53, y: 63, name: 'Stock Road' },
    the_dark_lake: { x: 248, y: 67, name: 'The Dark Lake' },
    the_silent_glade: { x: 274, y: 69, name: 'The Silent Glade' },
    the_unending_stair_middle: { x: 246, y: 62, name: 'The Unending Stair - Middle Section' },
    third_level: { x: 247, y: 64, name: 'Third Level - Minas Tirith' },
    thranduil_halls_gate: { x: 269, y: 68, name: 'Gate of the Elven-king' },
    thranduil_halls_interior: { x: 268, y: 67, name: 'Thranduil\'s Halls' },
    tookbank: { x: 55, y: 68, name: 'Tookbank' },
    treebeard_cellar: { x: 269, y: 66, name: 'Treebeard\'s Storage' },
    troll_cave: { x: 162, y: 68, name: 'Troll Cave' },
    trollshaws: { x: 163, y: 68, name: 'The Trollshaws' },
    tuckborough: { x: 55, y: 67, name: 'Tuckborough' },
    tunnel_exit: { x: 249, y: 61, name: 'Tunnel Exit' },
    twenty_first_hall: { x: 243, y: 63, name: 'Twenty-First Hall' },
    waterfall_walkway: { x: 226, y: 67, name: 'Waterfall Walkway' },
    waymeet: { x: 52, y: 62, name: 'Waymeet' },
    weatherhills: { x: 61, y: 64, name: 'The Weather Hills' },
    weathertop_approach: { x: 122, y: 67, name: 'Approach to Weathertop' },
    weathertop_base: { x: 56, y: 60, name: 'Base of Weathertop' },
    weathertop_summit: { x: 57, y: 61, name: 'Weathertop Summit' },
    wellinghall: { x: 273, y: 67, name: 'Wellinghall - Hall of the Ents' },
    west_emnet: { x: 274, y: 71, name: 'West Emnet' },
    westfold_plains: { x: 269, y: 69, name: 'Westfold Plains' },
    white_tower: { x: 248, y: 61, name: 'White Tower of Ecthelion' },
    whitwell: { x: 82, y: 67, name: 'Whitwell' },
    withywindle: { x: 54, y: 61, name: 'The Withywindle' },
    wold_of_rohan: { x: 275, y: 65, name: 'The Wold' },
    woody_end: { x: 50, y: 60, name: 'Woody End' },
};

// Terrain detection based on room name and ID
function getTerrainType(roomId, roomName) {
    const name = roomName.toLowerCase();
    const id = roomId.toLowerCase();

    // Mountains
    if (name.includes('mountain') || name.includes('peak') || name.includes('summit') ||
        name.includes('moria') || name.includes('erebor') || name.includes('khazad') ||
        id.includes('mountain') || id.includes('mines') || id.includes('endless_stair')) {
        return 'mountain';
    }

    // Forests
    if (name.includes('forest') || name.includes('wood') || name.includes('tree') ||
        name.includes('fangorn') || name.includes('lothlórien') || name.includes('galadhon') ||
        name.includes('mirkwood') || id.includes('forest') || id.includes('fangorn')) {
        return 'forest';
    }

    // Cities/Fortresses
    if (name.includes('city') || name.includes('gates') || name.includes('hall') ||
        name.includes('tower') || name.includes('fortress') || name.includes('citadel') ||
        name.includes('minas') || name.includes('edoras') || name.includes('rivendell') ||
        id.includes('citadel') || id.includes('palace') || id.includes('throne')) {
        return 'city';
    }

    // Villages (Shire)
    if (name.includes('hobbit') || name.includes('shire') || name.includes('bag end') ||
        name.includes('bree') || name.includes('bywater') || name.includes('michel') ||
        id.includes('bag_end') || id.includes('hobbiton') || id.includes('bywater') ||
        id.includes('tuckborough') || id.includes('brandywine')) {
        return 'village';
    }

    // Dark/Evil places
    if (name.includes('mordor') || name.includes('barad') || name.includes('barrow') ||
        name.includes('dark') || name.includes('dead') || name.includes('ungol') ||
        name.includes('morgul') || name.includes('black gate') || name.includes('sauron') ||
        id.includes('barad_dur') || id.includes('mordor') || id.includes('barrow')) {
        return 'dark';
    }

    // Water
    if (name.includes('river') || name.includes('ford') || name.includes('bridge') ||
        name.includes('water') || name.includes('anduin') || name.includes('brandywine') ||
        id.includes('river') || id.includes('ford') || id.includes('anduin')) {
        return 'water';
    }

    // Caves/Underground
    if (name.includes('cave') || name.includes('mine') || name.includes('chamber') ||
        name.includes('tomb') || name.includes('underground') || name.includes('depths') ||
        id.includes('cave') || id.includes('mines') || id.includes('chamber')) {
        return 'cave';
    }

    return 'plains'; // Default
}

export const WorldMap = ({ playerState }) => {
    const mapContainerRef = useRef(null);
    const currentRoomRef = useRef(null);

    const visitedCoords = useMemo(() => {
        if (!playerState || !playerState.visitedRooms) return [];

        return playerState.visitedRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);
    }, [playerState?.visitedRooms]);

    const gridLayout = useMemo(() => {
        if (visitedCoords.length === 0) return null;

        const xs = visitedCoords.map(r => r.x);
        const ys = visitedCoords.map(r => r.y);
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
            rooms: visitedCoords
        };
    }, [visitedCoords]);

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

    return (
        <div className="world-map">
            <div className="map-header">🗺️  World Map</div>
            {currentRoom && (
                <div className="map-location-info">
                    📍 {currentRoom.name} ({currentRoom.x}, {currentRoom.y})
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
                            const terrainType = room ? getTerrainType(room.id, room.name) : '';

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    ref={isCurrent ? currentRoomRef : null}
                                    className={`map-slot ${room ? 'has-room' : 'empty'} ${isCurrent ? 'is-current' : ''} ${terrainType ? `terrain-${terrainType}` : ''}`}
                                    title={room ? room.name : `(${currentX}, ${currentY})`}
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
                Showing {visitedCoords.length} discovered locations
                {currentRoom && ` • Current: ${currentRoom.name}`}
            </div>
        </div>
    );
};
