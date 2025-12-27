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
    
    // Rivendell
    rivendell_gates: { x: 11, y: 2, name: 'Rivendell' },
    rivendell_hall: { x: 12, y: 2, name: 'Hall' },
    rivendell_library: { x: 12, y: 3, name: 'Library' },
    rivendell_forge: { x: 12, y: 1, name: 'Forge' },
    hollin_gate: { x: 12, y: 0, name: 'Hollin' },
    
    // Moria
    doors_of_durin: { x: 12, y: -1, name: 'Doors' },
    moria_entrance: { x: 13, y: -1, name: 'Moria' },
    twenty_first_hall: { x: 14, y: -1, name: '21st Hall' },
    balin_tomb: { x: 15, y: -1, name: 'Balin Tomb' },
    bridge_of_khazad_dum: { x: 16, y: -1, name: 'Bridge' },
    east_gate_moria: { x: 17, y: -1, name: 'East Gate' },
    
    // Lothlórien
    dimrill_dale: { x: 17, y: 0, name: 'Dimrill' },
    lothlorien_border: { x: 17, y: 1, name: 'Lothlórien' },
    cerin_amroth: { x: 17, y: 2, name: 'Cerin Amroth' },
    caras_galadhon: { x: 17, y: 3, name: 'Caras' },
    galadriel_court: { x: 17, y: 4, name: 'Galadriel' },
    
    // Anduin
    anduin_approach: { x: 18, y: 2, name: 'Anduin' },
    anduin_midstream: { x: 18, y: 1, name: 'River' },
    parth_galen: { x: 19, y: 2, name: 'Parth Galen' },
    rauros_falls_approach: { x: 18, y: 0, name: 'Falls' },
    
    // Rohan
    gap_of_rohan: { x: 18, y: -1, name: 'Gap' },
    rohan_plains: { x: 19, y: -1, name: 'Plains' },
    edoras_approach: { x: 20, y: -1, name: 'Edoras' },
    edoras_gates: { x: 20, y: 0, name: 'Gates' },
    meduseld: { x: 20, y: 1, name: 'Meduseld' },
    harrowdale: { x: 19, y: 1, name: 'Harrowdale' },
    dunharrow: { x: 19, y: 2, name: 'Dunharrow' },
    paths_of_dead: { x: 18, y: 2, name: 'Paths' },
    dead_city: { x: 17, y: 2, name: 'Dead City' },
    helms_gate: { x: 19, y: -2, name: 'Helm Gate' },
    helms_deep_interior: { x: 18, y: -2, name: 'Helm Deep' },
    isengard_gates: { x: 18, y: -3, name: 'Isengard' },
    orthanc_base: { x: 19, y: -3, name: 'Orthanc' },
    
    // Fangorn
    fangorn_border: { x: 19, y: -4, name: 'Fangorn' },
    fangorn_eaves: { x: 20, y: -4, name: 'Eaves' },
    fangorn_depths: { x: 19, y: -5, name: 'Depths' },
    wellinghall: { x: 20, y: -5, name: 'Wellinghall' },
    
    // Gondor
    osgiliath_ruins: { x: 21, y: 0, name: 'Osgiliath' },
    pelennor_fields: { x: 20, y: 0, name: 'Pelennor' },
    minas_tirith_gates: { x: 19, y: 0, name: 'Minas Tirith' },
    first_level: { x: 19, y: 1, name: '1st Level' },
    second_level: { x: 19, y: 2, name: '2nd Level' },
    third_level: { x: 19, y: 3, name: '3rd Level' },
    fourth_level: { x: 19, y: 4, name: '4th Level' },
    fifth_level: { x: 19, y: 5, name: '5th Level' },
    sixth_level: { x: 19, y: 6, name: '6th Level' },
    white_tower: { x: 19, y: 7, name: 'Tower' },
    
    // Mordor
    morgul_vale: { x: 22, y: 0, name: 'Morgul' },
    morgul_pass: { x: 22, y: -1, name: 'Pass' },
    cirith_ungol: { x: 23, y: 0, name: 'Cirith Ungol' },
    shelob_lair: { x: 23, y: -1, name: 'Shelob' },
    mordor_plains: { x: 24, y: 0, name: 'Mordor' },
    black_gate: { x: 25, y: 0, name: 'Black Gate' },
    barad_dur_approach: { x: 26, y: 0, name: 'Barad-dûr' },
    barad_dur_base: { x: 27, y: 0, name: 'Tower Base' },
    mount_doom_approach: { x: 25, y: -1, name: 'Doom' },
    mount_doom_summit: { x: 25, y: -2, name: 'Summit' }
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

