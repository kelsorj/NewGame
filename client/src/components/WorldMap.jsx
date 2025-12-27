// WorldMap Component - Shows a 2D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect } from 'react';

// Room coordinates for map display - verified against actual room connections
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
const roomCoordinates = {
    aldburg: { x: 98, y: 97, name: 'Aldburg' },
    amon_hen: { x: 69, y: 36, name: 'Amon Hen - Hill of Sight' },
    anduin_approach: { x: 68, y: 37, name: 'Anduin River - Lothlórien Quays' },
    anduin_confluence: { x: 102, y: 99, name: 'Confluence of Rivers' },
    anduin_midstream: { x: 68, y: 36, name: 'Anduin - Midstream' },
    annuminas_approach: { x: 68, y: 61, name: 'Approach to Annúminas' },
    annuminas_ruins: { x: 68, y: 60, name: 'Annúminas Ruins' },
    annuminas_tower: { x: 69, y: 60, name: 'Annúminas Tower' },
    archet: { x: 54, y: 52, name: 'Archet' },
    bag_end: { x: 50, y: 50, name: 'Bag End' },
    balin_tomb: { x: 64, y: 46, name: 'Chamber of Mazarbul - Balin\'s Tomb' },
    barad_dur_approach: { x: 82, y: 60, name: 'Approach to Barad-dûr' },
    barad_dur_base: { x: 85, y: 63, name: 'Base of Barad-dûr' },
    barad_dur_chamber: { x: 84, y: 63, name: 'Chamber of the Dark Lord' },
    barad_dur_throne_room: { x: 84, y: 62, name: 'Throne Room of Barad-dûr' },
    barrow_chamber_1: { x: 60, y: 50, name: 'Barrow Chamber - First Mound' },
    barrow_chamber_2: { x: 58, y: 50, name: 'Barrow Chamber - Second Mound' },
    barrow_chamber_3: { x: 62, y: 52, name: 'Barrow Chamber - Third Mound' },
    barrow_downs: { x: 59, y: 49, name: 'The Barrow-downs' },
    barrow_downs_approach: { x: 57, y: 52, name: 'Approach to the Barrow-downs' },
    black_gate: { x: 74, y: 46, name: 'The Black Gate of Mordor' },
    bombadil_garden: { x: 58, y: 53, name: 'Tom\'s Garden' },
    bombadil_house: { x: 55, y: 50, name: 'Tom Bombadil\'s House' },
    brandy_hall: { x: 54, y: 47, name: 'Brandy Hall' },
    brandywine_bridge: { x: 56, y: 54, name: 'Brandywine Bridge' },
    bree_east_road: { x: 56, y: 52, name: 'East Road from Bree' },
    bree_gate: { x: 60, y: 58, name: 'Bree Gate' },
    bree_square: { x: 58, y: 54, name: 'Bree Square' },
    bridge_of_khazad_dum: { x: 67, y: 44, name: 'Bridge of Khazad-dûm' },
    buckland_cellar: { x: 61, y: 52, name: 'Buckland Cellar' },
    buckland_kitchen: { x: 57, y: 49, name: 'Buckland Kitchen' },
    bucklebury: { x: 56, y: 51, name: 'Bucklebury' },
    bywater: { x: 54, y: 55, name: 'Bywater' },
    caras_galadhon: { x: 67, y: 37, name: 'Caras Galadhon - City of the Trees' },
    celebrant_banks: { x: 102, y: 98, name: 'Banks of the Celebrant' },
    cerin_amroth: { x: 67, y: 38, name: 'Cerin Amroth' },
    chetwood: { x: 58, y: 49, name: 'Chetwood Forest' },
    cirith_ungol: { x: 70, y: 41, name: 'Cirith Ungol - Tower of the Spider' },
    citadel_guards_hall: { x: 68, y: 45, name: 'Citadel Guards Hall' },
    combe: { x: 57, y: 54, name: 'Combe' },
    crickhollow: { x: 55, y: 51, name: 'Crickhollow' },
    dead_city: { x: 98, y: 100, name: 'City of the Dead' },
    deep_coomb: { x: 102, y: 97, name: 'The Deep Coomb' },
    deep_mines_hub: { x: 67, y: 48, name: 'Deep Mines Hub' },
    deeping_stream_upper: { x: 101, y: 97, name: 'Upper Deeping Stream' },
    dimholt_road: { x: 99, y: 103, name: 'The Dimholt Road' },
    dimrill_dale: { x: 68, y: 41, name: 'Dimrill Dale' },
    doors_of_durin: { x: 63, y: 47, name: 'Doors of Durin - West Gate of Moria' },
    dunharrow: { x: 98, y: 96, name: 'Dunharrow' },
    dunharrow_firtree_grove: { x: 100, y: 97, name: 'Fir-tree Grove - Dunharrow' },
    durin_chamber: { x: 71, y: 51, name: 'Durin\'s Chamber' },
    durin_throne_hall: { x: 64, y: 44, name: 'Great Hall of Durin' },
    durthang_fortress: { x: 71, y: 43, name: 'Durthang Fortress' },
    east_emnet: { x: 103, y: 96, name: 'East Emnet' },
    east_gate_approach: { x: 66, y: 41, name: 'Approach to the East Gate' },
    east_gate_moria: { x: 70, y: 44, name: 'East Gate of Moria' },
    eastfold_plains: { x: 98, y: 101, name: 'Eastfold Plains' },
    edoras_approach: { x: 70, y: 34, name: 'Road to Edoras' },
    edoras_gates: { x: 70, y: 33, name: 'Gates of Edoras' },
    elf_path_entrance: { x: 101, y: 101, name: 'Entrance to the Elf-path' },
    elrond_study: { x: 69, y: 58, name: 'Elrond\'s Private Study' },
    elven_craft_hall: { x: 99, y: 101, name: 'Hall of the Galadhrim Craftsmen' },
    endless_stair_bottom: { x: 65, y: 43, name: 'Bottom of the Endless Stair' },
    endless_stair_top: { x: 65, y: 45, name: 'Top of the Endless Stair' },
    entmoot_circle: { x: 102, y: 102, name: 'Entmoot Circle - Derndingle' },
    entwash: { x: 102, y: 104, name: 'The Entwash' },
    entwash_delta: { x: 101, y: 100, name: 'Entwash Delta' },
    entwash_headwaters: { x: 100, y: 102, name: 'Headwaters of the Entwash' },
    erebor_armory: { x: 95, y: 104, name: 'The Mountain Armory' },
    erebor_gates: { x: 96, y: 103, name: 'Main Gates of Erebor' },
    erebor_great_hall: { x: 96, y: 104, name: 'Great Hall of Thráin' },
    erebor_treasury: { x: 97, y: 104, name: 'The Treasury of Erebor' },
    fangorn_border: { x: 67, y: 32, name: 'Edge of Fangorn Forest' },
    fangorn_depths: { x: 101, y: 104, name: 'Deep in Fangorn' },
    fangorn_eaves: { x: 102, y: 100, name: 'Eaves of Fangorn' },
    fangorn_hidden_path: { x: 100, y: 101, name: 'Hidden Path in Fangorn' },
    fifth_level: { x: 69, y: 48, name: 'Fifth Level - Minas Tirith' },
    first_level: { x: 62, y: 39, name: 'First Level - Minas Tirith' },
    ford_of_bruinen: { x: 68, y: 59, name: 'Ford of Bruinen' },
    fornost_approach: { x: 57, y: 53, name: 'Approach to Fornost' },
    fornost_gates: { x: 60, y: 53, name: 'Fornost Gates' },
    fornost_keep: { x: 61, y: 55, name: 'Fornost Keep' },
    fornost_palace: { x: 64, y: 58, name: 'Fornost Palace' },
    fornost_ruins: { x: 64, y: 57, name: 'Fornost Ruins' },
    fornost_temple: { x: 66, y: 58, name: 'Fornost Temple' },
    fourth_level: { x: 68, y: 47, name: 'Fourth Level - Minas Tirith' },
    galadhrm_flet_1: { x: 99, y: 98, name: 'Galadhrim Flet - Western Watch' },
    galadriel_court: { x: 66, y: 36, name: 'Court of Galadriel' },
    gap_of_rohan: { x: 68, y: 34, name: 'Gap of Rohan' },
    glittering_caves: { x: 100, y: 104, name: 'Glittering Caves of Aglarond' },
    goblin_ward: { x: 65, y: 48, name: 'The Goblin Ward' },
    goblin_warren: { x: 66, y: 46, name: 'Goblin Warren' },
    goblin_watchtower: { x: 65, y: 49, name: 'Goblin Watchtower' },
    gorgoroth_plateau: { x: 71, y: 40, name: 'Plateau of Gorgoroth' },
    green_dragon: { x: 58, y: 57, name: 'The Green Dragon Inn' },
    green_hill_country: { x: 55, y: 55, name: 'Green Hill Country' },
    grey_havens_docks: { x: 103, y: 99, name: 'Docks of Mithlond' },
    hall_of_fire_guest: { x: 68, y: 56, name: 'The Hall of Fire' },
    hall_of_kings: { x: 66, y: 45, name: 'Hall of Kings' },
    harrowdale: { x: 69, y: 35, name: 'Harrowdale' },
    havens_approach: { x: 59, y: 60, name: 'Approach to Mithlond' },
    helms_deep_interior: { x: 100, y: 96, name: 'Helm\'s Deep' },
    helms_gate: { x: 99, y: 104, name: 'Helm\'s Gate' },
    henneth_annun: { x: 68, y: 40, name: 'Henneth Annûn - Window on the West' },
    hidden_flet: { x: 66, y: 49, name: 'Hidden Flet' },
    hidden_valley_white_mountains: { x: 100, y: 103, name: 'Hidden Valley in the White Mountains' },
    hobbiton_square: { x: 57, y: 57, name: 'Hobbiton Square' },
    hollin_gate: { x: 66, y: 52, name: 'Hollin Gate' },
    hornburg_armory: { x: 101, y: 103, name: 'Hornburg Armory' },
    house_of_stewards: { x: 72, y: 48, name: 'House of the Stewards' },
    iron_mines_1: { x: 70, y: 46, name: 'Iron Mines - Level 1' },
    iron_mines_2: { x: 66, y: 47, name: 'Iron Mines - The Pit' },
    isengard_gates: { x: 68, y: 33, name: 'Gates of Isengard' },
    ithilien_woods: { x: 69, y: 42, name: 'Woods of Ithilien' },
    khazad_dum_chasm_view: { x: 99, y: 99, name: 'Chasm Viewpoint' },
    lake_evendim: { x: 70, y: 62, name: 'Lake Evendim' },
    lake_town_docks: { x: 96, y: 101, name: 'Lake-town Docks' },
    last_bridge: { x: 58, y: 51, name: 'The Last Bridge' },
    leaflock_meadow: { x: 100, y: 99, name: 'Leaflock\'s Meadow' },
    lonely_mountain_approach: { x: 96, y: 102, name: 'Approach to the Lonely Mountain' },
    long_lake_path: { x: 96, y: 100, name: 'Path to Long Lake' },
    longbottom: { x: 52, y: 52, name: 'Longbottom' },
    lossarnach_valleys: { x: 70, y: 47, name: 'Valleys of Lossarnach' },
    lothlorien_border: { x: 67, y: 39, name: 'Border of Lothlórien' },
    mallorn_sanctuary: { x: 101, y: 98, name: 'The Mallorn Sanctuary' },
    marish: { x: 55, y: 53, name: 'The Marish' },
    mayor_office: { x: 54, y: 54, name: 'Mayor\'s Office' },
    meduseld: { x: 70, y: 35, name: 'Meduseld - The Golden Hall' },
    michel_delving: { x: 55, y: 54, name: 'Michel Delving' },
    midgewater_marshes: { x: 60, y: 51, name: 'Midgewater Marshes' },
    minas_morgul_gates: { x: 70, y: 42, name: 'Gates of Minas Morgul' },
    minas_morgul_interior: { x: 71, y: 44, name: 'Interior of Minas Morgul' },
    minas_tirith_gates: { x: 67, y: 43, name: 'Gates of Minas Tirith' },
    minas_tirith_houses_of_healing: { x: 67, y: 45, name: 'Houses of Healing' },
    minas_tirith_stables: { x: 62, y: 40, name: 'Stables of Minas Tirith' },
    mines_level1: { x: 62, y: 43, name: 'Upper Mines' },
    mines_level2: { x: 64, y: 45, name: 'Deep Mines' },
    mirkwood_depths: { x: 104, y: 103, name: 'Mirkwood Depths - Spider Warrens' },
    mirkwood_edge: { x: 103, y: 100, name: 'Edge of Mirkwood' },
    mirkwood_path_1: { x: 103, y: 101, name: 'Mirkwood Path - The Old Forest Road' },
    mirkwood_path_2: { x: 103, y: 102, name: 'Mirkwood Path - The Enchanted Stream' },
    mirror_chamber: { x: 66, y: 37, name: 'Chamber of the Mirror' },
    mithril_depths_1: { x: 68, y: 44, name: 'Mithril Depths - Upper Vein' },
    mithril_depths_2: { x: 69, y: 45, name: 'Mithril Depths - The Mother Lode' },
    mithril_mine: { x: 68, y: 48, name: 'The Mithril Vein' },
    mordor_plains: { x: 71, y: 41, name: 'Plains of Mordor' },
    morgul_pass: { x: 69, y: 39, name: 'Morgul Pass' },
    morgul_vale: { x: 69, y: 41, name: 'Morgul Vale' },
    moria_entrance: { x: 64, y: 47, name: 'First Hall of Moria' },
    mount_doom_approach: { x: 71, y: 39, name: 'Approach to Mount Doom' },
    mount_doom_sammath_naur: { x: 71, y: 37, name: 'Sammath Naur - Chambers of Fire' },
    mount_doom_summit: { x: 71, y: 38, name: 'Summit of Mount Doom' },
    nameless_tunnels: { x: 69, y: 49, name: 'The Nameless Tunnels' },
    needlehole: { x: 54, y: 49, name: 'Needlehole' },
    niphredil_meadow: { x: 99, y: 102, name: 'Meadow of Niphredil' },
    old_forest_buckland_entrance: { x: 54, y: 46, name: 'Old Forest - Buckland Entrance' },
    old_forest_depth: { x: 55, y: 52, name: 'Deep in the Old Forest' },
    old_forest_entrance: { x: 56, y: 53, name: 'Old Forest Entrance' },
    old_forest_exit: { x: 57, y: 51, name: 'Old Forest - Eastern Exit' },
    orthanc_base: { x: 69, y: 33, name: 'Base of Orthanc' },
    orthanc_chamber: { x: 68, y: 32, name: 'Orthanc - Saruman\'s  Chamber' },
    osgiliath_ruins: { x: 70, y: 43, name: 'Ruins of Osgiliath' },
    overhill: { x: 53, y: 51, name: 'Overhill' },
    parth_galen: { x: 69, y: 37, name: 'Parth Galen' },
    paths_of_dead: { x: 99, y: 100, name: 'The Paths of the Dead' },
    pelargir_port: { x: 68, y: 42, name: 'Port of Pelargir' },
    pelennor_fields: { x: 69, y: 44, name: 'Pelennor Fields' },
    prancing_pony: { x: 58, y: 55, name: 'The Prancing Pony' },
    rath_dinen: { x: 70, y: 45, name: 'Rath Dínen - Street of the Dead' },
    rauros_falls_approach: { x: 68, y: 35, name: 'Approach to Rauros Falls' },
    rhosgobel: { x: 104, y: 104, name: 'Rhosgobel - Home of Radagast' },
    rivendell_forge: { x: 70, y: 57, name: 'Rivendell Forge' },
    rivendell_gardens: { x: 68, y: 55, name: 'Gardens of Rivendell' },
    rivendell_gates: { x: 69, y: 59, name: 'Gates of Rivendell' },
    rivendell_guest_house: { x: 70, y: 58, name: 'The Guest House' },
    rivendell_hall: { x: 69, y: 57, name: 'Hall of Fire - Rivendell' },
    rivendell_library: { x: 68, y: 57, name: 'Library of Rivendell' },
    rohan_plains: { x: 69, y: 34, name: 'The Plains of Rohan' },
    royal_armory: { x: 65, y: 44, name: 'Royal Armory' },
    royal_tombs: { x: 65, y: 46, name: 'Royal Tombs of Khazad-dûm' },
    rushock_bog: { x: 57, y: 55, name: 'Rushock Bog' },
    sackville_manor: { x: 51, y: 50, name: 'Sackville Manor' },
    scary: { x: 56, y: 55, name: 'Scary' },
    second_level: { x: 67, y: 47, name: 'Second Level - Minas Tirith' },
    seventh_level: { x: 63, y: 46, name: 'Seventh Level' },
    shelob_lair: { x: 70, y: 40, name: 'Shelob\'s Lair' },
    silverlode_banks: { x: 68, y: 38, name: 'Banks of the Silverlode' },
    silverlode_crossing: { x: 101, y: 102, name: 'Silverlode Crossing' },
    singing_groves: { x: 100, y: 100, name: 'Singing Groves' },
    sixth_level: { x: 68, y: 46, name: 'Sixth Level - Minas Tirith' },
    skinbark_grove: { x: 97, y: 99, name: 'Skinbark\'s Grove' },
    smelting_chambers: { x: 64, y: 43, name: 'Smelting Chambers' },
    snowbourn_banks: { x: 98, y: 103, name: 'Banks of the Snowbourn' },
    staddle: { x: 57, y: 56, name: 'Staddle' },
    starkhorn_foothills: { x: 99, y: 97, name: 'Foothills of the Starkhorn' },
    stock_road: { x: 53, y: 52, name: 'Stock Road' },
    the_dark_lake: { x: 68, y: 49, name: 'The Dark Lake' },
    the_silent_glade: { x: 102, y: 101, name: 'The Silent Glade' },
    the_unending_stair_middle: { x: 66, y: 44, name: 'The Unending Stair - Middle Section' },
    third_level: { x: 67, y: 46, name: 'Third Level - Minas Tirith' },
    thranduil_halls_gate: { x: 97, y: 100, name: 'Gate of the Elven-king' },
    thranduil_halls_interior: { x: 96, y: 99, name: 'Thranduil\'s Halls' },
    tookbank: { x: 55, y: 57, name: 'Tookbank' },
    treebeard_cellar: { x: 97, y: 98, name: 'Treebeard\'s Storage' },
    troll_cave: { x: 66, y: 59, name: 'Troll Cave' },
    trollshaws: { x: 67, y: 59, name: 'The Trollshaws' },
    tuckborough: { x: 55, y: 56, name: 'Tuckborough' },
    tunnel_exit: { x: 69, y: 43, name: 'Tunnel Exit' },
    twenty_first_hall: { x: 63, y: 45, name: 'Twenty-First Hall' },
    waterfall_walkway: { x: 66, y: 51, name: 'Waterfall Walkway' },
    waymeet: { x: 52, y: 51, name: 'Waymeet' },
    weatherhills: { x: 61, y: 53, name: 'The Weather Hills' },
    weathertop_approach: { x: 62, y: 58, name: 'Approach to Weathertop' },
    weathertop_base: { x: 56, y: 49, name: 'Base of Weathertop' },
    weathertop_summit: { x: 57, y: 50, name: 'Weathertop Summit' },
    wellinghall: { x: 101, y: 99, name: 'Wellinghall - Hall of the Ents' },
    west_emnet: { x: 102, y: 103, name: 'West Emnet' },
    westfold_plains: { x: 97, y: 101, name: 'Westfold Plains' },
    white_tower: { x: 68, y: 43, name: 'White Tower of Ecthelion' },
    whitwell: { x: 60, y: 61, name: 'Whitwell' },
    withywindle: { x: 54, y: 50, name: 'The Withywindle' },
    wold_of_rohan: { x: 103, y: 97, name: 'The Wold' },
    woody_end: { x: 50, y: 49, name: 'Woody End' },
};

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

                            return (
                                <div
                                    key={`${currentX}-${currentY}`}
                                    ref={isCurrent ? currentRoomRef : null}
                                    className={`map-slot ${room ? 'has-room' : 'empty'} ${isCurrent ? 'is-current' : ''}`}
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
