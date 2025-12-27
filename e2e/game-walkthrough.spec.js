import { test, expect } from '@playwright/test';
import { WebSocket } from 'ws';

/**
 * Comprehensive game walkthrough test
 * Tests the entire game flow from start to finish
 */
test.describe('Game Walkthrough', () => {
  let ws;
  let messages = [];
  let playerState = null;

  test.beforeEach(async () => {
    // Connect to WebSocket server
    ws = new WebSocket('ws://localhost:3001');
    messages = [];
    playerState = null;

    return new Promise((resolve, reject) => {
      ws.on('open', () => {
        resolve();
      });

      ws.on('error', (error) => {
        reject(error);
      });

      ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString());
          messages.push(message);

          if (message.type === 'player_state') {
            playerState = message.state;
          }
        } catch (e) {
          // Non-JSON message
          messages.push({ type: 'raw', text: data.toString() });
        }
      });
    });
  });

  test.afterEach(() => {
    if (ws) {
      ws.close();
    }
  });

  /**
   * Helper to send a command and wait for response
   */
  async function sendCommand(command, expectedKeywords = []) {
    const messageCountBefore = messages.length;
    ws.send(JSON.stringify({ type: 'command', command }));

    // Wait for response (with timeout)
    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (messages.length > messageCountBefore) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 5000);
    });

    // Check if we got expected keywords
    const lastMessage = messages[messages.length - 1];
    if (expectedKeywords.length > 0 && lastMessage?.text) {
      const text = lastMessage.text.toLowerCase();
      const found = expectedKeywords.some(keyword => 
        text.includes(keyword.toLowerCase())
      );
      if (!found) {
        console.warn(`Expected keywords ${expectedKeywords} not found in: ${lastMessage.text}`);
      }
    }

    return lastMessage;
  }

  test('Complete game walkthrough - Shire to Rivendell', async () => {
    // Step 1: Join game
    ws.send(JSON.stringify({ type: 'join', playerName: 'TestPlayer' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Verify we're in Bag End
    const joinMessage = messages.find(m => m.type === 'game_output' || m.text?.includes('Bag End'));
    expect(joinMessage).toBeTruthy();

    // Step 2: Look around
    await sendCommand('look', ['Bag End', 'hobbit']);
    expect(playerState?.currentRoom).toBe('bag_end');

    // Step 3: Take starting items
    await sendCommand('take walking stick', ['take', 'walking']);
    await sendCommand('take lembas bread', ['take', 'lembas']);

    // Step 4: Check inventory
    await sendCommand('inventory', ['Inventory', 'Walking Stick', 'Lembas']);
    expect(playerState?.inventory).toContain('walking_stick');
    expect(playerState?.inventory).toContain('lembas_bread');

    // Step 5: Move to Hobbiton Square
    await sendCommand('go south', ['Hobbiton', 'Square']);
    expect(playerState?.currentRoom).toBe('hobbiton_square');

    // Step 6: Take silver coin
    await sendCommand('take silver coin', ['take', 'silver']);
    
    // Step 7: Verify coin is gone from room
    await sendCommand('look', ['Hobbiton']);
    const lookMessage = messages[messages.length - 1];
    expect(lookMessage?.text).not.toContain('Silver Coin');

    // Step 8: Test direction shortcuts
    await sendCommand('go e', ['Green Dragon']);
    expect(playerState?.currentRoom).toBe('green_dragon');

    await sendCommand('go w', ['Hobbiton']);
    expect(playerState?.currentRoom).toBe('hobbiton_square');

    // Step 9: Navigate to Bree
    await sendCommand('go east', ['Bree']);
    await sendCommand('go east', ['Bree']);
    expect(playerState?.currentRoom).toBe('bree_square');

    // Step 10: Test item name with spaces
    await sendCommand('take brass key', ['take', 'brass']);
    expect(playerState?.inventory).toContain('brass_key');

    // Step 11: Navigate to Rivendell
    await sendCommand('go east', ['Rivendell']);
    await sendCommand('go east', ['Rivendell']);
    await sendCommand('go east', ['Rivendell']);
    
    // Should be at Rivendell gates or nearby
    const rivendellMessage = messages[messages.length - 1];
    expect(rivendellMessage?.text?.toLowerCase()).toMatch(/rivendell|ford|troll/i);
  });

  test('Combat system walkthrough', async () => {
    // Join and navigate to area with enemies
    ws.send(JSON.stringify({ type: 'join', playerName: 'CombatTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Navigate to area with enemies (Woody End has wild_wolf)
    await sendCommand('go south', []);
    await sendCommand('go south', []);
    await sendCommand('go west', []);
    await sendCommand('go south', []);

    // Look for enemies
    await sendCommand('look', ['Wolf', 'Enemies']);

    // Attack enemy
    await sendCommand('attack wild wolf', ['Combat', 'attack', 'wolf']);
    
    // Continue combat
    await sendCommand('attack', ['damage', 'strike']);

    // Check if combat resolved (either victory or flee)
    const combatMessages = messages.slice(-5);
    const hasCombatResult = combatMessages.some(m => 
      m.text?.includes('Victory') || 
      m.text?.includes('defeated') ||
      m.text?.includes('flee')
    );
    expect(hasCombatResult).toBeTruthy();
  });

  test('Inventory and item management', async () => {
    ws.send(JSON.stringify({ type: 'join', playerName: 'InventoryTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take items
    await sendCommand('take walking stick', []);
    await sendCommand('go south', []);
    await sendCommand('take silver coin', []);

    // Check inventory
    await sendCommand('inventory', ['Inventory', 'Walking Stick', 'Silver Coin']);

    // Use item
    await sendCommand('use lembas bread', ['heal', 'HP', 'recover']);

    // Drop item
    await sendCommand('drop silver coin', ['drop', 'silver']);
    
    // Verify it's back in room
    await sendCommand('look', ['Silver Coin']);

    // Take it again
    await sendCommand('take silver coin', ['take']);
  });

  test('Save and load functionality', async () => {
    ws.send(JSON.stringify({ type: 'join', playerName: 'SaveTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take some items and move
    await sendCommand('take walking stick', []);
    await sendCommand('go south', []);

    // Save game
    await sendCommand('save', ['saved', 'success']);
    const saveMessage = messages[messages.length - 1];
    expect(saveMessage?.text?.toLowerCase()).toContain('saved');

    // Move and take more items
    await sendCommand('go east', []);
    await sendCommand('take health potion', []);

    // Load game (should restore previous state)
    await sendCommand('load', ['loaded', 'Welcome']);
    const loadMessage = messages[messages.length - 1];
    expect(loadMessage?.text?.toLowerCase()).toContain('loaded');

    // Verify we're back at previous location
    expect(playerState?.currentRoom).toBe('hobbiton_square');
    expect(playerState?.inventory).toContain('walking_stick');
  });

  test('Puzzle solving', async () => {
    ws.send(JSON.stringify({ type: 'join', playerName: 'PuzzleTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Navigate to area with puzzle (Old Forest - Willow Riddle)
    await sendCommand('go south', []);
    await sendCommand('go south', []);
    await sendCommand('go south', []);

    // Try to solve puzzle
    await sendCommand('solve willow riddle mountain', ['solved', 'correct', 'willow']);
    
    // Check if puzzle was solved
    const puzzleMessages = messages.slice(-3);
    const hasSuccess = puzzleMessages.some(m => 
      m.text?.includes('solved') || 
      m.text?.includes('correct') ||
      m.text?.includes('✅')
    );
    expect(hasSuccess).toBeTruthy();
  });

  test('Map tracking', async () => {
    ws.send(JSON.stringify({ type: 'join', playerName: 'MapTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Move through several rooms
    await sendCommand('go south', []);
    await sendCommand('go east', []);
    await sendCommand('go west', []);
    await sendCommand('go south', []);

    // Verify visited rooms are tracked
    expect(playerState?.visitedRooms?.length).toBeGreaterThan(1);
    expect(playerState?.recentRooms?.length).toBeGreaterThan(0);
    expect(playerState?.recentRooms?.length).toBeLessThanOrEqual(4);
  });

  test('Error handling and invalid commands', async () => {
    ws.send(JSON.stringify({ type: 'join', playerName: 'ErrorTest' }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Invalid command
    await sendCommand('invalidcommand123', ['understand', 'help']);
    
    // Invalid direction
    await sendCommand('go invalid', ['can\'t', 'direction']);
    
    // Take non-existent item
    await sendCommand('take nonexistent item', ['no', 'here']);
    
    // Use item not in inventory
    await sendCommand('use nonexistent', ['don\'t have']);
  });
});

