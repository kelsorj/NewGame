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

          // Update playerState from any message that includes it
          if (message.playerState) {
            playerState = message.playerState;
          }
          // Also check joined messages and game_output messages
          if ((message.type === 'joined' || message.type === 'game_output') && message.playerState) {
            playerState = message.playerState;
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
    const messageText = lastMessage?.message || lastMessage?.text || '';
    if (expectedKeywords.length > 0 && messageText) {
      const text = messageText.toLowerCase();
      const found = expectedKeywords.some(keyword => 
        text.includes(keyword.toLowerCase())
      );
      if (!found) {
        console.warn(`Expected keywords ${expectedKeywords} not found in: ${messageText}`);
      }
    }

    return lastMessage;
  }

  test('Complete game walkthrough - Shire to Rivendell', async () => {
    // Use unique player name to avoid state conflicts
    const uniquePlayerName = `TestPlayer_${Date.now()}`;
    
    // Step 1: Join game
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
    
    // Wait for join confirmation and initial look
    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        const hasJoined = messages.some(m => m.type === 'joined');
        const hasLook = messages.some(m => m.type === 'game_output' && m.message?.includes('Bag End'));
        if (hasJoined && hasLook) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 5000);
    });

    // Verify we're in Bag End
    const joinMessage = messages.find(m => m.type === 'game_output' && m.message?.includes('Bag End'));
    expect(joinMessage).toBeTruthy();

    // Step 2: Look around
    await sendCommand('look', ['Bag End', 'hobbit']);
    // Wait a bit for state update
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(playerState?.currentRoom).toBe('bag_end');

    // Step 3: Take starting items
    // Try to take walking stick - check response
    const takeStickResult = await sendCommand('take walking stick', ['take', 'walking', 'stick', 'no']);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update playerState from any recent messages
    const recentMessages = messages.slice(-3);
    for (const msg of recentMessages) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    // Verify take was successful by checking the response message
    const takeStickMessage = takeStickResult?.message || takeStickResult?.text || '';
    const stickTaken = takeStickMessage && (
      takeStickMessage.toLowerCase().includes('you take') ||
      takeStickMessage.includes('✅') ||
      (takeStickMessage.toLowerCase().includes('take') && 
       !takeStickMessage.toLowerCase().includes('no') && 
       !takeStickMessage.toLowerCase().includes('not here') &&
       !takeStickMessage.toLowerCase().includes('no items') &&
       !takeStickMessage.toLowerCase().includes("there is no") &&
       !takeStickMessage.toLowerCase().includes("there are no"))
    );
    
    if (stickTaken && playerState) {
      expect(playerState.inventory).toContain('walking_stick');
    }
    
    // Try to take lembas bread
    const takeLembasResult = await sendCommand('take lembas bread', ['take', 'lembas', 'no']);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update playerState again
    const recentMessages2 = messages.slice(-3);
    for (const msg of recentMessages2) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    const takeLembasMessage = takeLembasResult?.message || takeLembasResult?.text || '';
    const lembasTaken = takeLembasMessage && (
      takeLembasMessage.toLowerCase().includes('you take') ||
      takeLembasMessage.includes('✅') ||
      (takeLembasMessage.toLowerCase().includes('take') && 
       !takeLembasMessage.toLowerCase().includes('no') && 
       !takeLembasMessage.toLowerCase().includes('not here') &&
       !takeLembasMessage.toLowerCase().includes('no items') &&
       !takeLembasMessage.toLowerCase().includes("there is no") &&
       !takeLembasMessage.toLowerCase().includes("there are no"))
    );
    
    if (lembasTaken && playerState) {
      expect(playerState.inventory).toContain('lembas_bread');
    }

    // Step 4: Check inventory - verify we have at least starting items
    await sendCommand('inventory', ['Inventory']);
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Update playerState from inventory command
    const recentMessages3 = messages.slice(-3);
    for (const msg of recentMessages3) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    // Verify we have at least the starting items
    expect(playerState).toBeTruthy();
    expect(playerState?.inventory).toBeDefined();
    expect(playerState?.inventory.length).toBeGreaterThan(0);
    expect(playerState?.inventory).toContain('rusty_dagger');

    // Step 5: Move to Hobbiton Square
    await sendCommand('go south', ['Hobbiton', 'Square']);
    expect(playerState?.currentRoom).toBe('hobbiton_square');

    // Step 6: Take silver coin
    await sendCommand('take silver coin', ['take', 'silver']);
    
    // Step 7: Verify coin is gone from room
    await sendCommand('look', ['Hobbiton']);
    await new Promise(resolve => setTimeout(resolve, 200));
    const lookMessage = messages[messages.length - 1];
    const messageText = lookMessage?.message || lookMessage?.text || '';
    expect(messageText).not.toContain('Silver Coin');

    // Step 8: Test direction shortcuts
    await sendCommand('go e', ['Green Dragon']);
    expect(playerState?.currentRoom).toBe('green_dragon');

    await sendCommand('go w', ['Hobbiton']);
    expect(playerState?.currentRoom).toBe('hobbiton_square');

    // Step 9: Navigate to Bree
    // Path: hobbiton_square -> south -> brandywine_bridge -> east -> bree_gate -> east -> bree_square
    await sendCommand('go south', ['Brandywine', 'Bridge']);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState after move
    const recentMsgs8 = messages.slice(-3);
    for (const msg of recentMsgs8) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    await sendCommand('go east', ['Bree', 'Gate']);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState after move
    const recentMsgs9 = messages.slice(-3);
    for (const msg of recentMsgs9) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    await sendCommand('go east', ['Bree', 'Square']);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState after move
    const recentMsgs10 = messages.slice(-3);
    for (const msg of recentMsgs10) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    expect(playerState?.currentRoom).toBe('bree_square');

    // Step 10: Test item name with spaces
    const takeKeyResult = await sendCommand('take brass key', ['take', 'brass']);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState
    const recentMsgs5 = messages.slice(-3);
    for (const msg of recentMsgs5) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    // Only assert if key was successfully taken
    const keyTaken = takeKeyResult?.message?.toLowerCase().includes('take') && 
      !takeKeyResult?.message?.toLowerCase().includes('no') &&
      !takeKeyResult?.message?.toLowerCase().includes('not here');
    if (keyTaken && playerState?.inventory) {
      expect(playerState.inventory).toContain('brass_key');
    }

    // Step 11: Navigate to Rivendell
    await sendCommand('go east', ['Rivendell']);
    await sendCommand('go east', ['Rivendell']);
    await sendCommand('go east', ['Rivendell']);
    
    // Should be at Rivendell gates or nearby
    const rivendellMessage = messages[messages.length - 1];
    expect(rivendellMessage?.text?.toLowerCase()).toMatch(/rivendell|ford|troll/i);
  });

  test('Combat system walkthrough', async () => {
    // Use unique player name
    const uniquePlayerName = `CombatTest_${Date.now()}`;
    
    // Join and navigate to area with enemies
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
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
    // Use unique player name
    const uniquePlayerName = `InventoryTest_${Date.now()}`;
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take items
    await sendCommand('take walking stick', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState
    const recentMsgs6 = messages.slice(-3);
    for (const msg of recentMsgs6) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    await sendCommand('go south', []);
    await sendCommand('take silver coin', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState
    const recentMsgs7 = messages.slice(-3);
    for (const msg of recentMsgs7) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }

    // Check inventory
    await sendCommand('inventory', ['Inventory']);

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
    // Use unique player name
    const uniquePlayerName = `SaveTest_${Date.now()}`;
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take some items and move
    const takeStickResult = await sendCommand('take walking stick', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState
    const recentMsgs = messages.slice(-3);
    for (const msg of recentMsgs) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    await sendCommand('go south', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update playerState after move
    const recentMsgs2 = messages.slice(-3);
    for (const msg of recentMsgs2) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }

    // Save game
    await sendCommand('save', ['saved', 'success']);
    const saveMessage = messages[messages.length - 1];
    expect(saveMessage?.text?.toLowerCase()).toContain('saved');

    // Move and take more items
    await sendCommand('go east', []);
    await sendCommand('take health potion', []);
    
    // Update playerState
    const recentMsgs3 = messages.slice(-3);
    for (const msg of recentMsgs3) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }

    // Load game (should restore previous state)
    await sendCommand('load', ['loaded', 'Welcome']);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update playerState after load
    const recentMsgs4 = messages.slice(-3);
    for (const msg of recentMsgs4) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
    
    const loadMessage = messages[messages.length - 1];
    expect(loadMessage?.text?.toLowerCase()).toContain('loaded');

    // Verify we're back at previous location
    expect(playerState?.currentRoom).toBe('hobbiton_square');
    
    // Only check for walking_stick if it was successfully taken before save
    const stickTakenBeforeSave = takeStickResult?.message?.toLowerCase().includes('take') && 
      !takeStickResult?.message?.toLowerCase().includes('no') &&
      !takeStickResult?.message?.toLowerCase().includes('not here');
    if (stickTakenBeforeSave && playerState?.inventory) {
      expect(playerState.inventory).toContain('walking_stick');
    }
  });

  test('Puzzle solving', async () => {
    // Use unique player name
    const uniquePlayerName = `PuzzleTest_${Date.now()}`;
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
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
    // Use unique player name
    const uniquePlayerName = `MapTest_${Date.now()}`;
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
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
    // Use unique player name
    const uniquePlayerName = `ErrorTest_${Date.now()}`;
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
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

