// Room System - Manages locations and navigation in Middle Earth
import { formatItem } from '../utils/formatItem.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load exits from the map editor's JSON file
function loadExitsFromMapEditor() {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));
        return coordData.newExits || {};
    } catch (err) {
        console.error('Error loading exits from map editor:', err);
        return {};
    }
}

export class RoomSystem {
  constructor(rooms) {
    // Load exits from map editor and merge with room data
    const editorExits = loadExitsFromMapEditor();
    
    // Create a merged rooms object with updated exits
    this.rooms = {};
    for (const [roomId, room] of Object.entries(rooms)) {
        this.rooms[roomId] = {
            ...room,
            // Use exits from editor if available, otherwise use original exits
            exits: editorExits[roomId] || room.exits || {}
        };
    }
  }

  getRoom(roomId) {
    return this.rooms[roomId];
  }

  getRoomDescription(roomId, playerState, gameState = null) {
    const room = this.rooms[roomId];
    if (!room) return "You are nowhere... this shouldn't happen!";

    let description = `\n📍 ${room.name}\n\n${room.description}\n`;

    // Show exits
    const exits = Object.keys(room.exits || {});
    if (exits.length > 0) {
      description += `\n🚪 Exits: ${exits.join(', ')}`;
    }

    // Get current room state (items/enemies that are actually present)
    let currentItems = room.items || [];
    let currentEnemies = room.enemies || [];
    
    if (gameState) {
      const roomState = gameState.getRoomState(roomId, room.items || [], room.enemies || []);
      currentItems = roomState.items;
      currentEnemies = roomState.enemies;
    }

    // Show items in room
    if (currentItems && currentItems.length > 0) {
      const formattedItems = currentItems.map(item => formatItem(item)).join(', ');
      description += `\n\n✨ You see: ${formattedItems}`;
    }

    // Show enemies in room
    if (currentEnemies && currentEnemies.length > 0) {
      const formattedEnemies = currentEnemies.map(enemy => formatItem(enemy)).join(', ');
      description += `\n\n⚔️  Enemies: ${formattedEnemies}`;
    }

    // Show other players in room
    const otherPlayers = playerState?.playersInRoom || [];
    if (otherPlayers.length > 0) {
      description += `\n\n👥 Players here: ${otherPlayers.join(', ')}`;
    }

    return description;
  }

  move(currentRoomId, direction) {
    const room = this.rooms[currentRoomId];
    if (!room) {
      return { success: false, message: "You are nowhere!" };
    }

    const nextRoomId = room.exits?.[direction];
    if (!nextRoomId) {
      return {
        success: false,
        message: `You can't go ${direction} from here.`
      };
    }

    const nextRoom = this.rooms[nextRoomId];
    return {
      success: true,
      roomId: nextRoomId,
      message: `You travel ${direction}...`
    };
  }

  canEnterRoom(roomId, playerState) {
    const room = this.rooms[roomId];
    if (!room) return false;

    // Check if room has requirements
    if (room.requirements) {
      for (const req of room.requirements) {
        if (req.type === 'item' && !playerState.inventory.includes(req.item)) {
          return false;
        }
        if (req.type === 'puzzle' && !playerState.solvedPuzzles.includes(req.puzzle)) {
          return false;
        }
      }
    }

    return true;
  }
}
