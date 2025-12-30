// Room System - Manages locations and navigation in Middle Earth
import { formatItem } from '../utils/formatItem.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load exits and exit configurations from JSON file
function loadDynamicRooms() {
  try {
    const filePath = path.join(__dirname, '../../../scripts/linear-world-connections.json');
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    return data.roomDefinitions || {};
  } catch (err) {
    console.error('Error loading dynamic rooms:', err);
    return {};
  }
}

function loadExitsFromJSON() {
  try {
    const coordData = JSON.parse(readFileSync(
      path.join(__dirname, '../../../scripts/linear-world-connections.json'),
      'utf8'
    ));
    return {
      exits: coordData.exits || coordData.newExits || {},
      exitConfigs: coordData.exitConfigs || {}
    };
  } catch (err) {
    console.error('Error loading exits/configs from JSON:', err);
    return { exits: {}, exitConfigs: {} };
  }
}

export class RoomSystem {
  constructor(rooms) {
    this.rooms = rooms;
    // Load exits and exitConfig from JSON file and merge into rooms
    const { exits, exitConfigs } = loadExitsFromJSON();
    
    // Load dynamically created rooms from JSON file
    const dynamicRooms = loadDynamicRooms();
    // Merge dynamic rooms into this.rooms (dynamic rooms take precedence)
    Object.assign(this.rooms, dynamicRooms);
    
    // Merge exits from JSON file (JSON takes precedence over hardcoded exits)
    // If a room has exits in JSON, use those. Otherwise, keep the hardcoded exits.
    for (const roomId in this.rooms) {
      if (exits[roomId] && Object.keys(exits[roomId]).length > 0) {
        // JSON has exits for this room - use them
        this.rooms[roomId].exits = exits[roomId];
      }
      // If no exits in JSON, keep the original exits from rooms.js
    }
    
    // Merge exitConfig from JSON file into rooms
    for (const roomId in exitConfigs) {
      if (this.rooms[roomId]) {
        if (!this.rooms[roomId].exitConfig) {
          this.rooms[roomId].exitConfig = {};
        }
        Object.assign(this.rooms[roomId].exitConfig, exitConfigs[roomId]);
      }
    }
  }

  getRoom(roomId) {
    // If room doesn't exist, try reloading dynamic rooms (in case it was just created)
    if (!this.rooms[roomId]) {
      const dynamicRooms = loadDynamicRooms();
      if (dynamicRooms[roomId]) {
        // Merge this new room into our rooms object
        this.rooms[roomId] = dynamicRooms[roomId];
        // Also load exits for this room
        const { exits } = loadExitsFromJSON();
        if (exits[roomId] && Object.keys(exits[roomId]).length > 0) {
          this.rooms[roomId].exits = exits[roomId];
        }
      }
    }
    return this.rooms[roomId];
  }

  getRoomDescription(roomId, playerState, gameState = null) {
    const room = this.rooms[roomId];
    if (!room) return "You are nowhere... this shouldn't happen!";

    let description = `\n📍 ${room.name}\n\n${room.description}\n`;

    // Show exits with locked/hidden status
    const exits = Object.keys(room.exits || {});
    if (exits.length > 0) {
      const exitDescriptions = exits.map(dir => {
        const exitConfig = room.exitConfig?.[dir];
        let exitText = dir;
        
        if (exitConfig) {
          // Check if hidden and not discovered
          if (exitConfig.hidden && !exitConfig.discovered) {
            // Don't show hidden exits unless player has the key
            if (exitConfig.requiredKey && playerState?.inventory?.includes(exitConfig.requiredKey)) {
              exitText = `${dir} (hidden, requires ${exitConfig.requiredKey})`;
            } else {
              return null; // Don't show this exit
            }
          } else if (exitConfig.locked) {
            if (exitConfig.requiredKey) {
              const hasKey = playerState?.inventory?.includes(exitConfig.requiredKey);
              exitText = hasKey 
                ? `${dir} (locked, but you have the key)` 
                : `${dir} (🔒 locked, needs ${exitConfig.requiredKey})`;
            } else {
              exitText = `${dir} (🔒 locked)`;
            }
          } else if (exitConfig.hidden && exitConfig.discovered) {
            exitText = `${dir} (hidden passage)`;
          }
        }
        
        return exitText;
      }).filter(Boolean); // Remove null entries (hidden exits)
      
      if (exitDescriptions.length > 0) {
        description += `\n🚪 Exits: ${exitDescriptions.join(', ')}`;
      }
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

  move(currentRoomId, direction, playerState = null) {
    const room = this.rooms[currentRoomId];
    if (!room) {
      return { success: false, message: "You are nowhere!" };
    }

    // Check for exit configuration (locked/hidden)
    const exitConfig = room.exitConfig?.[direction];
    const nextRoomId = room.exits?.[direction];
    
    if (!nextRoomId) {
      return {
        success: false,
        message: `You can't go ${direction} from here.`
      };
    }

    // Check if exit is hidden (not discovered yet)
    if (exitConfig?.hidden && !exitConfig?.discovered) {
      // Check if player has the key that reveals it
      if (exitConfig.requiredKey && playerState?.inventory?.includes(exitConfig.requiredKey)) {
        // Key reveals the hidden exit
        if (!exitConfig.discovered) {
          exitConfig.discovered = true;
        }
      } else {
        return {
          success: false,
          message: `You can't go ${direction} from here.`
        };
      }
    }

    // Check if exit is locked
    if (exitConfig?.locked) {
      if (!playerState) {
        return {
          success: false,
          message: `The ${direction} exit is locked.`
        };
      }

      // Check if player has the required key
      if (exitConfig.requiredKey) {
        if (!playerState.inventory?.includes(exitConfig.requiredKey)) {
          return {
            success: false,
            message: `The ${direction} exit is locked. You need a ${exitConfig.requiredKey} to unlock it.`
          };
        }
        // Player has the key, allow passage
      } else {
        // Locked but no key specified - just locked
        return {
          success: false,
          message: `The ${direction} exit is locked.`
        };
      }
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
