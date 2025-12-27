// Room System - Manages locations and navigation in Middle Earth
import { formatItem } from '../utils/formatItem.js';

export class RoomSystem {
  constructor(rooms) {
    this.rooms = rooms;
  }

  getRoom(roomId) {
    return this.rooms[roomId];
  }

  getRoomDescription(roomId, playerState) {
    const room = this.rooms[roomId];
    if (!room) return "You are nowhere... this shouldn't happen!";

    let description = `\n📍 ${room.name}\n\n${room.description}\n`;

    // Show exits
    const exits = Object.keys(room.exits || {});
    if (exits.length > 0) {
      description += `\n🚪 Exits: ${exits.join(', ')}`;
    }

    // Show items in room
    if (room.items && room.items.length > 0) {
      const formattedItems = room.items.map(item => formatItem(item)).join(', ');
      description += `\n\n✨ You see: ${formattedItems}`;
    }

    // Show enemies in room
    if (room.enemies && room.enemies.length > 0) {
      const formattedEnemies = room.enemies.map(enemy => formatItem(enemy)).join(', ');
      description += `\n\n⚔️  Enemies: ${formattedEnemies}`;
    }

    // Show other players in room
    const otherPlayers = playerState.playersInRoom || [];
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
