// WorldMap Component - Shows a 2D grid-based map with auto-scrolling
import { useMemo, useRef, useEffect } from 'react';

// Room coordinates for map display - verified against actual room connections
// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X
const roomCoordinates = {
    bag_end: { x: 50, y: 50, name: 'Bag End' },
    hobbiton_square: { x: 50, y: 49, name: 'Hobbiton Square' },
    green_dragon: { x: 51, y: 49, name: 'The Green Dragon Inn' },
    brandywine_bridge: { x: 50, y: 48, name: 'Brandywine Bridge' },
    bywater: { x: 49, y: 49, name: 'Bywater' },
    tuckborough: { x: 49, y: 50, name: 'Tuckborough' },
    michel_delving: { x: 49, y: 48, name: 'Michel Delving' },
    bree_gate: { x: 51, y: 48, name: 'Bree Gate' },
    old_forest_entrance: { x: 50, y: 47, name: 'Old Forest Entrance' },
    bucklebury: { x: 51, y: 47, name: 'Bucklebury' },
    woody_end: { x: 49, y: 48, name: 'Woody End' },
    tookbank: { x: 49, y: 51, name: 'Tookbank' },
    green_hill_country: { x: 49, y: 49, name: 'Green Hill Country' },
    whitwell: { x: 48, y: 50, name: 'Whitwell' },
    bree_square: { x: 52, y: 48, name: 'Bree Square' },
    mayor_office: { x: 49, y: 48, name: "Mayor's Office" },
    waymeet: { x: 48, y: 47, name: 'Waymeet' },
    havens_approach: { x: 47, y: 49, name: 'Approach to Mithlond' },
    chetwood: { x: 51, y: 47, name: 'Chetwood Forest' },
    scary: { x: 50, y: 48, name: 'Scary' },
    old_forest_depth: { x: 50, y: 46, name: 'Deep in the Old Forest' },
    rushock_bog: { x: 51, y: 48, name: 'Rushock Bog' },
    brandy_hall: { x: 52, y: 47, name: 'Brandy Hall' },
    crickhollow: { x: 51, y: 46, name: 'Crickhollow' },
    stock_road: { x: 49, y: 47, name: 'Stock Road' },
    prancing_pony: { x: 52, y: 48, name: 'The Prancing Pony' },
    bree_east_road: { x: 53, y: 48, name: 'East Road from Bree' },
    combe: { x: 52, y: 47, name: 'Combe' },
    staddle: { x: 51, y: 47, name: 'Staddle' },
    overhill: { x: 49, y: 46, name: 'Overhill' },
    longbottom: { x: 48, y: 47, name: 'Longbottom' },
    grey_havens_docks: { x: 47, y: 49, name: 'Docks of Mithlond' },
    archet: { x: 51, y: 46, name: 'Archet' },
    midgewater_marshes: { x: 54, y: 47, name: 'Midgewater Marshes' },
    old_forest_buckland_entrance: { x: 52, y: 46, name: 'Old Forest - Buckland Entrance' },
    withywindle: { x: 50, y: 45, name: 'The Withywindle' },
    needlehole: { x: 52, y: 48, name: 'Needlehole' },
    buckland_kitchen: { x: 53, y: 47, name: 'Buckland Kitchen' },
    buckland_cellar: { x: 52, y: 46, name: 'Buckland Cellar' },
    marish: { x: 50, y: 47, name: 'The Marish' },
    weathertop_base: { x: 54, y: 47, name: 'Base of Weathertop' },
    fornost_approach: { x: 55, y: 48, name: 'Approach to Fornost' },
    sackville_manor: { x: 48, y: 46, name: 'Sackville Manor' },
    weatherhills: { x: 55, y: 47, name: 'The Weather Hills' },
    bombadil_house: { x: 51, y: 45, name: "Tom Bombadil's House" },
    weathertop_summit: { x: 54, y: 46, name: 'Weathertop Summit' },
    fornost_gates: { x: 56, y: 48, name: 'Fornost Gates' },
    last_bridge: { x: 57, y: 47, name: 'The Last Bridge' },
    old_forest_exit: { x: 52, y: 45, name: 'Old Forest - Eastern Exit' },
    bombadil_garden: { x: 52, y: 45, name: "Tom's Garden" },
    weathertop_approach: { x: 53, y: 46, name: 'Approach to Weathertop' },
    fornost_ruins: { x: 57, y: 48, name: 'Fornost Ruins' },
    fornost_keep: { x: 56, y: 49, name: 'Fornost Keep' },
    trollshaws: { x: 58, y: 47, name: 'The Trollshaws' },
    barrow_downs_approach: { x: 54, y: 45, name: 'Approach to the Barrow-downs' },
    annuminas_approach: { x: 58, y: 48, name: 'Approach to Annúminas' },
    fornost_palace: { x: 57, y: 49, name: 'Fornost Palace' },
    ford_of_bruinen: { x: 59, y: 47, name: 'Ford of Bruinen' },
    troll_cave: { x: 58, y: 48, name: 'Troll Cave' },
    barrow_downs: { x: 55, y: 45, name: 'The Barrow-downs' },
    annuminas_ruins: { x: 59, y: 48, name: 'Annúminas Ruins' },
    rivendell_gates: { x: 60, y: 47, name: 'Gates of Rivendell' },
    barrow_chamber_1: { x: 56, y: 45, name: 'Barrow Chamber - First Mound' },
    barrow_chamber_2: { x: 55, y: 46, name: 'Barrow Chamber - Second Mound' },
    barrow_chamber_3: { x: 55, y: 44, name: 'Barrow Chamber - Third Mound' },
    annuminas_tower: { x: 60, y: 48, name: 'Annúminas Tower' },
    lake_evendim: { x: 59, y: 48, name: 'Lake Evendim' },
    rivendell_hall: { x: 61, y: 47, name: 'Hall of Fire - Rivendell' },
    rivendell_library: { x: 61, y: 48, name: 'Library of Rivendell' },
    rivendell_forge: { x: 61, y: 46, name: 'Rivendell Forge' },
    rivendell_gardens: { x: 62, y: 47, name: 'Gardens of Rivendell' },
    hollin_gate: { x: 61, y: 45, name: 'Hollin Gate' },
    waterfall_walkway: { x: 63, y: 47, name: 'Waterfall Walkway' },
    hall_of_fire_guest: { x: 62, y: 48, name: 'The Hall of Fire' },
    doors_of_durin: { x: 61, y: 44, name: 'Doors of Durin - West Gate of Moria' },
    hidden_flet: { x: 64, y: 47, name: 'Hidden Flet' },
    elrond_study: { x: 62, y: 49, name: "Elrond's Private Study" },
    moria_entrance: { x: 62, y: 44, name: 'First Hall of Moria' },
    twenty_first_hall: { x: 63, y: 44, name: 'Twenty-First Hall' },
    mines_level1: { x: 62, y: 43, name: 'Upper Mines' },
    seventh_level: { x: 63, y: 45, name: 'Seventh Level' },
    durin_throne_hall: { x: 64, y: 44, name: 'Great Hall of Durin' },
    mines_level2: { x: 63, y: 43, name: 'Deep Mines' },
    balin_tomb: { x: 64, y: 45, name: "Chamber of Mazarbul - Balin's Tomb" },
    endless_stair_top: { x: 64, y: 45, name: 'Top of the Endless Stair' },
    goblin_watchtower: { x: 63, y: 46, name: 'Goblin Watchtower' },
    sixth_level: { x: 63, y: 44, name: 'Sixth Level' },
    royal_armory: { x: 65, y: 44, name: 'Royal Armory' },
    hall_of_kings: { x: 64, y: 45, name: 'Hall of Kings' },
    smelting_chambers: { x: 64, y: 43, name: 'Smelting Chambers' },
    the_unending_stair_middle: { x: 64, y: 44, name: 'The Unending Stair - Middle Section' },
    goblin_ward: { x: 64, y: 46, name: 'The Goblin Ward' },
    minas_tirith_houses_of_healing: { x: 65, y: 45, name: 'Houses of Healing' },
    fifth_level: { x: 63, y: 43, name: 'Fifth Level' },
    white_tower: { x: 65, y: 45, name: 'White Tower of Ecthelion' },
    royal_tombs: { x: 64, y: 46, name: 'Royal Tombs of Khazad-dûm' },
    deep_mines_hub: { x: 64, y: 42, name: 'Deep Mines Hub' },
    endless_stair_bottom: { x: 64, y: 43, name: 'Bottom of the Endless Stair' },
    goblin_warren: { x: 65, y: 46, name: 'Goblin Warren' },
    fourth_level: { x: 63, y: 42, name: 'Fourth Level' },
    citadel_guards_hall: { x: 64, y: 45, name: 'Citadel Guards Hall' },
    mithril_depths_1: { x: 65, y: 42, name: 'Mithril Depths - Upper Vein' },
    iron_mines_1: { x: 63, y: 42, name: 'Iron Mines - Level 1' },
    first_level: { x: 64, y: 44, name: 'First Level' },
    third_level: { x: 63, y: 41, name: 'Third Level' },
    mithril_depths_2: { x: 66, y: 42, name: 'Mithril Depths - The Mother Lode' },
    iron_mines_2: { x: 62, y: 42, name: 'Iron Mines - The Pit' },
    minas_tirith_stables: { x: 64, y: 45, name: 'Stables of Minas Tirith' },
    minas_tirith_gates: { x: 70, y: 43, name: 'Gates of Minas Tirith' },
    second_level: { x: 64, y: 45, name: 'Second Level' },
    pelennor_fields: { x: 71, y: 43, name: 'Pelennor Fields' },
    osgiliath_ruins: { x: 72, y: 43, name: 'Ruins of Osgiliath' },
    rath_dinen: { x: 71, y: 44, name: 'Rath Dínen - Street of the Dead' },
    pelargir_port: { x: 71, y: 42, name: 'Port of Pelargir' },
    lossarnach_valleys: { x: 72, y: 44, name: 'Valleys of Lossarnach' },
    morgul_vale: { x: 73, y: 43, name: 'Morgul Vale' },
    ithilien_woods: { x: 72, y: 42, name: 'Woods of Ithilien' },
    house_of_stewards: { x: 72, y: 44, name: 'House of the Stewards' },
    cirith_ungol: { x: 74, y: 43, name: 'Cirith Ungol - Tower of the Spider' },
    morgul_pass: { x: 73, y: 42, name: 'Morgul Pass' },
    minas_morgul_gates: { x: 74, y: 44, name: 'Gates of Minas Morgul' },
    henneth_annun: { x: 72, y: 41, name: 'Henneth Annûn - Window on the West' },
    mordor_plains: { x: 75, y: 43, name: 'Plains of Mordor' },
    shelob_lair: { x: 74, y: 42, name: "Shelob's Lair" },
    minas_morgul_interior: { x: 75, y: 44, name: 'Interior of Minas Morgul' },
    tunnel_exit: { x: 74, y: 43, name: 'Tunnel Exit' },
    black_gate: { x: 76, y: 43, name: 'The Black Gate of Mordor' },
    gorgoroth_plateau: { x: 75, y: 42, name: 'Plateau of Gorgoroth' },
    durthang_fortress: { x: 75, y: 44, name: 'Durthang Fortress' },
    barad_dur_approach: { x: 77, y: 43, name: 'Approach to Barad-dûr' },
    mount_doom_approach: { x: 75, y: 41, name: 'Approach to Mount Doom' },
    barad_dur_base: { x: 78, y: 43, name: 'Base of Barad-dûr' },
    mount_doom_summit: { x: 75, y: 40, name: 'Summit of Mount Doom' },
    barad_dur_chamber: { x: 78, y: 44, name: 'Chamber of the Dark Lord' },
    mount_doom_sammath_naur: { x: 75, y: 39, name: 'Sammath Naur - Chambers of Fire' },
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
