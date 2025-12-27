// WorldMap Component - Shows a text-based map of visited areas
import { useMemo } from 'react';

// Room coordinates for map display (simplified 2D representation)
const roomCoordinates = {
    // The Shire
    bag_end: { x: 5, y: 5, name: 'Bag End' },
    hobbiton_square: { x: 5, y: 4, name: 'Hobbiton' },
    green_dragon: { x: 6, y: 4, name: 'Green Dragon' },
    bywater: { x: 4, y: 4, name: 'Bywater' },
    woody_end: { x: 4, y: 3, name: 'Woody End' },
    brandywine_bridge: { x: 5, y: 3, name: 'Brandywine' },
    stock_road: { x: 4, y: 2, name: 'Stock Road' },
    marish: { x: 3, y: 2, name: 'Marish' },
    old_forest_entrance: { x: 5, y: 2, name: 'Old Forest' },
    old_forest_depth: { x: 5, y: 1, name: 'Deep Forest' },
    withywindle: { x: 6, y: 1, name: 'Withywindle' },
    bombadil_house: { x: 7, y: 1, name: 'Bombadil' },

    // Shire Expansion
    tuckborough: { x: 4, y: 5, name: 'Tuckborough' },
    tookbank: { x: 3, y: 5, name: 'Tookbank' },
    michel_delving: { x: 3, y: 6, name: 'Michel Delving' },
    mayor_office: { x: 3, y: 7, name: 'Mayor Office' },
    waymeet: { x: 3, y: 4, name: 'Waymeet' },
    overhill: { x: 3, y: 3, name: 'Overhill' },
    scary: { x: 4, y: 1, name: 'Scary' },
    needlehole: { x: 2, y: 3, name: 'Needlehole' },
    longbottom: { x: 2, y: 4, name: 'Longbottom' },
    sackville_manor: { x: 1, y: 4, name: 'Sackville' },
    whitwell: { x: 3, y: 5, name: 'Whitwell' },
    rushock_bog: { x: 2, y: 5, name: 'Rushock Bog' },
    green_hill_country: { x: 4, y: 6, name: 'Green Hills' },
    bucklebury: { x: 6, y: 2, name: 'Bucklebury' },
    brandy_hall: { x: 7, y: 2, name: 'Brandy Hall' },
    buckland_kitchen: { x: 8, y: 2, name: 'Kitchen' },
    buckland_cellar: { x: 7, y: 1, name: 'Cellar' },
    crickhollow: { x: 6, y: 1, name: 'Crickhollow' },
    old_forest_buckland_entrance: { x: 6, y: 0, name: 'Buckland Gate' },
    bombadil_garden: { x: 8, y: 1, name: 'Tom Garden' },
    old_forest_exit: { x: 8, y: 0, name: 'Forest Exit' },
    barrow_downs_approach: { x: 9, y: 0, name: 'Barrow Approach' },
    barrow_downs: { x: 10, y: 0, name: 'Barrow-downs' },
    barrow_chamber_1: { x: 11, y: 0, name: 'Barrow 1' },
    barrow_chamber_2: { x: 10, y: 1, name: 'Barrow 2' },
    barrow_chamber_3: { x: 10, y: -1, name: 'Barrow 3' },
    weathertop_approach: { x: 9, y: 1, name: 'Hill Path' },

    // Bree
    bree_gate: { x: 6, y: 3, name: 'Bree Gate' },
    bree_square: { x: 7, y: 3, name: 'Bree' },
    prancing_pony: { x: 7, y: 4, name: 'Prancing Pony' },
    bree_east_road: { x: 8, y: 3, name: 'East Road' },
    weathertop_base: { x: 8, y: 2, name: 'Weathertop' },
    weathertop_summit: { x: 8, y: 1, name: 'Summit' },
    midgewater_marshes: { x: 9, y: 3, name: 'Midgewater' },
    last_bridge: { x: 9, y: 2, name: 'Last Bridge' },
    troll_cave: { x: 9, y: 1, name: 'Troll Cave' },
    ford_of_bruinen: { x: 10, y: 2, name: 'Ford' },

    // Eriador Expansion
    combe: { x: 7, y: 2, name: 'Combe' },
    archet: { x: 6, y: 2, name: 'Archet' },
    staddle: { x: 7, y: 4, name: 'Staddle' },
    fornost_approach: { x: 9, y: 4, name: 'Fornost Way' },
    fornost_gates: { x: 10, y: 4, name: 'Fornost Gate' },
    fornost_ruins: { x: 11, y: 4, name: 'Fornost Ruins' },
    fornost_temple: { x: 12, y: 4, name: 'Fornost Temple' },
    fornost_palace: { x: 11, y: 5, name: 'Fornost Palace' },
    fornost_keep: { x: 10, y: 5, name: 'Fornost Keep' },
    annuminas_approach: { x: 12, y: 5, name: 'Annúminas Way' },
    annuminas_ruins: { x: 13, y: 5, name: 'Annúminas Ruins' },
    annuminas_tower: { x: 14, y: 5, name: 'Annúminas Tower' },
    lake_evendim: { x: 13, y: 4, name: 'Lake Evendim' },

    // Rivendell
    rivendell_gates: { x: 11, y: 2, name: 'Rivendell' },
    rivendell_hall: { x: 12, y: 2, name: 'Hall' },
    rivendell_library: { x: 12, y: 3, name: 'Library' },
    rivendell_forge: { x: 12, y: 1, name: 'Forge' },
    rivendell_gardens: { x: 13, y: 2, name: 'Gardens' },
    hall_of_fire_guest: { x: 13, y: 3, name: 'Hall of Fire' },
    elrond_study: { x: 13, y: 4, name: 'Study' },
    waterfall_walkway: { x: 14, y: 2, name: 'Waterfall' },
    hidden_flet: { x: 15, y: 2, name: 'Flet' },
    rivendell_guest_house: { x: 12, y: 1, name: 'Guest House' },
    hollin_gate: { x: 12, y: 0, name: 'Hollin' },

    // Moria
    doors_of_durin: { x: 12, y: -1, name: 'Doors' },
    moria_entrance: { x: 13, y: -1, name: 'Moria' },
    twenty_first_hall: { x: 14, y: -1, name: '21st Hall' },
    balin_tomb: { x: 14, y: 0, name: 'Balin Tomb' },
    durin_throne_hall: { x: 15, y: -1, name: 'Throne' },
    hall_of_kings: { x: 15, y: 0, name: 'Kings Hall' },
    royal_tombs: { x: 15, y: 1, name: 'Tombs' },
    royal_armory: { x: 16, y: -1, name: 'Armory' },
    smelting_chambers: { x: 15, y: -2, name: 'Smelting' },
    deep_mines_hub: { x: 15, y: -3, name: 'Mine Hub' },
    mithril_depths_1: { x: 16, y: -3, name: 'Mithril 1' },
    mithril_depths_2: { x: 17, y: -3, name: 'Mithril 2' },
    iron_mines_1: { x: 14, y: -3, name: 'Iron 1' },
    iron_mines_2: { x: 13, y: -3, name: 'Iron 2' },
    the_unending_stair_middle: { x: 15, y: -4, name: 'The Stair' },
    goblin_ward: { x: 13, y: 0, name: 'Goblin Ward' },
    goblin_watchtower: { x: 14, y: 1, name: 'Watchtower' },
    khazad_dum_chasm_view: { x: 16, y: 0, name: 'Chasm View' },
    bridge_of_khazad_dum: { x: 17, y: -1, name: 'Bridge' },
    east_gate_moria: { x: 18, y: -1, name: 'East Gate' },
    nameless_tunnels: { x: 17, y: -2, name: 'Tunnels' },
    the_dark_lake: { x: 18, y: -2, name: 'Dark Lake' },

    // Lothlórien
    dimrill_dale: { x: 17, y: 0, name: 'Dimrill' },
    lothlorien_border: { x: 18, y: 0, name: 'Lothlórien' },
    galadhrm_flet_1: { x: 17, y: 2, name: 'Flet 1' },
    cerin_amroth: { x: 18, y: 2, name: 'Cerin Amroth' },
    niphredil_meadow: { x: 17, y: 1, name: 'Meadow' },
    singing_groves: { x: 16, y: 3, name: 'Singing Groves' },
    caras_galadhon: { x: 18, y: 3, name: 'Caras Galadhon' },
    galadriel_court: { x: 18, y: 4, name: 'Galadriel Court' },
    elven_craft_hall: { x: 17, y: 4, name: 'Craft Hall' },
    mallorn_sanctuary: { x: 19, y: 3, name: 'Sanctuary' },
    silverlode_banks: { x: 19, y: 2, name: 'Silverlode' },
    silverlode_crossing: { x: 20, y: 2, name: 'Crossing' },
    celebrant_banks: { x: 19, y: 1, name: 'Celebrant' },
    anduin_confluence: { x: 18, y: 1, name: 'Confluence' },
    anduin_approach: { x: 19, y: 1, name: 'Anduin' },
    anduin_midstream: { x: 20, y: 1, name: 'River' },
    parth_galen: { x: 21, y: 1, name: 'Parth Galen' },
    rauros_falls_approach: { x: 20, y: 0, name: 'Falls' },

    // Fangorn
    fangorn_border: { x: 19, y: -3, name: 'Fangorn Border' },
    fangorn_hidden_path: { x: 19, y: -4, name: 'Hidden Path' },
    fangorn_eaves: { x: 20, y: -4, name: 'Eaves' },
    leaflock_meadow: { x: 21, y: -4, name: 'Leaflock Meadow' },
    the_silent_glade: { x: 18, y: -5, name: 'Silent Glade' },
    wellinghall: { x: 20, y: -5, name: 'Wellinghall' },
    treebeard_cellar: { x: 20, y: -6, name: 'Treebeard Cellar' },
    entmoot_circle: { x: 21, y: -5, name: 'Entmoot' },
    fangorn_depths: { x: 21, y: -6, name: 'Fangorn Depths' },
    skinbark_grove: { x: 22, y: -6, name: 'Skinbark Grove' },
    entwash_headwaters: { x: 21, y: -7, name: 'Entwash Source' },
    entwash: { x: 22, y: -7, name: 'Entwash' },

    // Rohan
    gap_of_rohan: { x: 17, y: -1, name: 'Gap' },
    westfold_plains: { x: 18, y: -1, name: 'Westfold' },
    rohan_plains: { x: 19, y: -1, name: 'Plains' },
    eastfold_plains: { x: 20, y: -1, name: 'Eastfold' },
    entwash_delta: { x: 21, y: -1, name: 'Entwash Delta' },
    west_emnet: { x: 19, y: -2, name: 'West Emnet' },
    wold_of_rohan: { x: 20, y: -2, name: 'The Wold' },
    snowbourn_banks: { x: 20, y: 1, name: 'Snowbourn' },
    edoras_approach: { x: 21, y: 1, name: 'Edoras Road' },
    aldburg: { x: 21, y: 0, name: 'Aldburg' },
    edoras_gates: { x: 21, y: 2, name: 'Gates' },
    meduseld: { x: 21, y: 3, name: 'Meduseld' },
    harrowdale: { x: 20, y: 3, name: 'Harrowdale' },
    starkhorn_foothills: { x: 19, y: 3, name: 'Starkhorn' },
    dimholt_road: { x: 19, y: 4, name: 'Dimholt' },
    dunharrow: { x: 19, y: 5, name: 'Dunharrow' },
    dunharrow_firtree_grove: { x: 20, y: 5, name: 'Fir Grove' },
    hidden_valley_white_mountains: { x: 18, y: 5, name: 'Hidden Valley' },
    paths_of_dead: { x: 18, y: 6, name: 'Paths' },
    dead_city: { x: 17, y: 6, name: 'Dead City' },
    deep_coomb: { x: 18, y: -2, name: 'Deep Coomb' },
    helms_gate: { x: 17, y: -2, name: 'Helm Gate' },
    helms_deep_interior: { x: 16, y: -2, name: 'Helm Deep' },
    hornburg_armory: { x: 16, y: -1, name: 'Armory' },
    deeping_stream_upper: { x: 15, y: -2, name: 'Stream' },
    glittering_caves: { x: 15, y: -3, name: 'Glittering Caves' },
    isengard_gates: { x: 16, y: -3, name: 'Isengard' },
    orthanc_base: { x: 17, y: -3, name: 'Orthanc' },

    // Gondor
    osgiliath_ruins: { x: 22, y: 0, name: 'Osgiliath' },
    pelennor_fields: { x: 21, y: 0, name: 'Pelennor' },
    minas_tirith_gates: { x: 20, y: 0, name: 'Minas Tirith' },
    first_level: { x: 20, y: 1, name: '1st Level' },
    second_level: { x: 20, y: 2, name: '2nd Level' },
    third_level: { x: 20, y: 3, name: '3rd Level' },
    fourth_level: { x: 20, y: 4, name: '4th Level' },
    fifth_level: { x: 20, y: 5, name: '5th Level' },
    sixth_level: { x: 20, y: 6, name: '6th Level' },
    white_tower: { x: 20, y: 7, name: 'Tower' },
    minas_tirith_stables: { x: 19, y: 1, name: 'Stables' },
    minas_tirith_houses_of_healing: { x: 21, y: 6, name: 'Healing' },
    citadel_guards_hall: { x: 21, y: 7, name: 'Citadel Hall' },
    ithilien_woods: { x: 22, y: -1, name: 'Ithilien' },
    henneth_annun: { x: 22, y: -2, name: 'Henneth Annûn' },
    pelargir_port: { x: 21, y: -1, name: 'Pelargir' },
    lossarnach_valleys: { x: 22, y: 1, name: 'Lossarnach' },

    // Mordor
    morgul_vale: { x: 23, y: 0, name: 'Morgul' },
    morgul_pass: { x: 23, y: -1, name: 'Pass' },
    minas_morgul_gates: { x: 24, y: 0, name: 'Morgul Gate' },
    minas_morgul_interior: { x: 25, y: 0, name: 'Morgul City' },
    cirith_ungol: { x: 24, y: -1, name: 'Cirith Ungol' },
    shelob_lair: { x: 24, y: -2, name: 'Shelob' },
    tunnel_exit: { x: 25, y: -1, name: 'Tunnel Exit' },
    mordor_plains: { x: 26, y: -1, name: 'Mordor' },
    durthang_fortress: { x: 26, y: 0, name: 'Durthang' },
    gorgoroth_plateau: { x: 27, y: -1, name: 'Gorgoroth' },
    black_gate: { x: 27, y: 0, name: 'Black Gate' },
    barad_dur_approach: { x: 28, y: -1, name: 'Barad-dûr' },
    barad_dur_base: { x: 29, y: -1, name: 'Tower Base' },
    barad_dur_throne_room: { x: 29, y: 0, name: 'Throne Room' },
    mount_doom_approach: { x: 28, y: -2, name: 'Doom Path' },
    mount_doom_sammath_naur: { x: 29, y: -3, name: 'Sammath Naur' },

    // Grey Havens
    grey_havens_docks: { x: 1, y: 7, name: 'Grey Havens' },
    havens_approach: { x: 2, y: 7, name: 'Havens Road' },

    // Mirkwood
    mirkwood_edge: { x: 21, y: -2, name: 'Mirkwood Edge' },
    mirkwood_path_1: { x: 22, y: -2, name: 'Mirkwood Path' },
    mirkwood_path_2: { x: 23, y: -2, name: 'Enchanted Stream' },
    mirkwood_depths: { x: 24, y: -2, name: 'Spider Warrens' },
    rhosgobel: { x: 24, y: -3, name: 'Rhosgobel' },
    elf_path_entrance: { x: 22, y: -3, name: 'Elf-path' },
    thranduil_halls_gate: { x: 22, y: -4, name: 'Elven-king Gate' },
    thranduil_halls_interior: { x: 22, y: -5, name: 'Thranduil Halls' },
    long_lake_path: { x: 23, y: -5, name: 'Lake Path' },
    lake_town_docks: { x: 24, y: -5, name: 'Lake-town' },

    // Erebor
    lonely_mountain_approach: { x: 24, y: -6, name: 'Erebor Path' },
    erebor_gates: { x: 24, y: -7, name: 'Erebor Gates' },
    erebor_great_hall: { x: 24, y: -8, name: 'Great Hall' },
    erebor_treasury: { x: 25, y: -8, name: 'Treasury' },
    erebor_armory: { x: 23, y: -8, name: 'Armory' }
};

export const WorldMap = ({ playerState }) => {
    const mapDisplay = useMemo(() => {
        if (!playerState || !playerState.recentRooms || playerState.recentRooms.length === 0) {
            return '🗺️  Map will appear as you explore...';
        }

        // Get coordinates for recent rooms (last 3-4)
        const recentRooms = playerState.recentRooms.slice(-4);
        const roomCoords = recentRooms
            .map(roomId => {
                const coord = roomCoordinates[roomId];
                return coord ? { ...coord, id: roomId } : null;
            })
            .filter(Boolean);

        if (roomCoords.length === 0) {
            return '🗺️  Map will appear as you explore...';
        }

        // Find bounds
        const xs = roomCoords.map(r => r.x);
        const ys = roomCoords.map(r => r.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        // Add some padding
        const width = maxX - minX + 3;
        const height = maxY - minY + 3;
        const offsetX = minX - 1;
        const offsetY = minY - 1;

        // Create grid
        const grid = Array(height).fill(null).map(() => Array(width).fill(' '));

        // Mark visited rooms
        roomCoords.forEach(room => {
            const x = room.x - offsetX;
            const y = room.y - offsetY;
            if (x >= 0 && x < width && y >= 0 && y < height) {
                // Use first letter of room name or a symbol
                const symbol = room.id === playerState.currentRoom ? '📍' : '·';
                grid[y][x] = symbol;
            }
        });

        // Create text representation
        let mapText = '🗺️  Recent Journey:\n';
        mapText += '━━━━━━━━━━━━━━━━━━\n';

        // Show room names
        roomCoords.forEach((room, index) => {
            const isCurrent = room.id === playerState.currentRoom;
            const marker = isCurrent ? '📍' : '·';
            mapText += `${marker} ${room.name}`;
            if (isCurrent) mapText += ' (You are here)';
            mapText += '\n';
        });

        // Simple path visualization
        if (roomCoords.length > 1) {
            mapText += '\nPath: ';
            mapText += roomCoords.map(r => r.name).join(' → ');
        }

        return mapText;
    }, [playerState]);

    return (
        <div className="world-map">
            <div className="map-header">🗺️  World Map</div>
            <pre className="map-content">{mapDisplay}</pre>
        </div>
    );
};

