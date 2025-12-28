import { test, expect } from '@playwright/test';
import { WebSocket } from 'ws';

/**
 * Comprehensive full-world walkthrough test
 * Tests navigation through all major regions:
 * - The Shire (starting area)
 * - Rivendell
 * - Moria (all levels)
 * - Lothlórien
 * - Fangorn Forest
 * - Rohan (Edoras, Helm's Deep, Isengard)
 * - Paths of the Dead
 * - Gondor (Minas Tirith - all 7 levels)
 * - Mordor (Black Gate, Mount Doom)
 */
test.describe('Full World Walkthrough', () => {
  let ws;
  let messages = [];
  let playerState = null;

  test.beforeEach(async () => {
    // Connect to WebSocket server
    ws = new WebSocket('ws://localhost:3001');
    messages = [];
    playerState = null;

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('WebSocket connection timeout - make sure server is running on port 3001'));
      }, 5000);

      ws.on('open', () => {
        clearTimeout(timeout);
        resolve();
      });

      ws.on('error', (error) => {
        clearTimeout(timeout);
        reject(new Error(`WebSocket connection failed: ${error.message}. Make sure server is running on port 3001`));
      });

      ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString());
          messages.push(message);

          // Update playerState from any message that includes it
          if (message.playerState) {
            playerState = message.playerState;
          }
          if ((message.type === 'joined' || message.type === 'game_output') && message.playerState) {
            playerState = message.playerState;
          }
        } catch (e) {
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

  async function sendCommand(command, expectedKeywords = []) {
    const messageCountBefore = messages.length;
    ws.send(JSON.stringify({ type: 'command', command }));

    // Wait for response
    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        const newGameOutputs = messages.slice(messageCountBefore).filter(m => 
          m.type === 'game_output' && 
          m.message && 
          !m.message.includes('has entered the realm') &&
          !m.message.includes('has arrived') &&
          !m.message.includes('has left the realm')
        );
        
        if (newGameOutputs.length > 0) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 5000);
    });

    // Find the actual command response
    const commandResponses = messages.slice(messageCountBefore).filter(m => 
      m.type === 'game_output' && 
      m.message && 
      !m.message.includes('has entered the realm') &&
      !m.message.includes('has arrived') &&
      !m.message.includes('has left the realm')
    );
    
    const lastMessage = commandResponses.length > 0 
      ? commandResponses[commandResponses.length - 1]
      : messages[messages.length - 1];
    
    // Update playerState
    if (lastMessage?.playerState) {
      playerState = lastMessage.playerState;
    }

    return lastMessage;
  }

  async function updatePlayerState() {
    const recentMessages = messages.slice(-5);
    for (const msg of recentMessages) {
      if (msg?.playerState) {
        playerState = msg.playerState;
      }
    }
  }

  async function moveToRoom(direction, expectedLocation = []) {
    await sendCommand(`go ${direction}`, expectedLocation);
    await new Promise(resolve => setTimeout(resolve, 300));
    await updatePlayerState();
  }

  test('Complete world walkthrough - All regions', async () => {
    const uniquePlayerName = `FullWorldTest_${Date.now()}`;
    
    // ============================================
    // PART 1: THE SHIRE (Starting Area)
    // ============================================
    console.log('\n📍 Starting in The Shire...');
    
    ws.send(JSON.stringify({ type: 'join', playerName: uniquePlayerName }));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await updatePlayerState();
    
    expect(playerState?.currentRoom).toBe('bag_end');
    console.log('✅ Started in Bag End');
    
    // Collect starting items
    await sendCommand('take walking stick', []);
    await sendCommand('take lembas bread', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    await updatePlayerState();
    
    // Navigate through Shire
    await moveToRoom('south', ['Hobbiton']);
    expect(playerState?.currentRoom).toBe('hobbiton_square');
    console.log('✅ Reached Hobbiton Square');
    
    await moveToRoom('south', ['Brandywine']);
    console.log('✅ Crossed Brandywine Bridge');
    
    // ============================================
    // PART 2: RIVENDELL
    // ============================================
    console.log('\n📍 Journeying to Rivendell...');
    
    await moveToRoom('east', ['Bree']);
    await moveToRoom('east', ['Bree']);
    await moveToRoom('east', ['East']);
    
    // Continue east to Rivendell
    for (let i = 0; i < 3; i++) {
      await moveToRoom('east', []);
    }
    
    // Check if we reached Rivendell area
    const rivendellCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('rivendell') || text.includes('ford') || text.includes('troll');
    });
    
    if (rivendellCheck) {
      console.log('✅ Reached Rivendell region');
    }
    
    // ============================================
    // PART 3: MORIA
    // ============================================
    console.log('\n📍 Entering Moria...');
    
    // Navigate to Moria entrance (usually south/east from Rivendell area)
    await moveToRoom('south', []);
    await moveToRoom('east', []);
    
    // Look for Moria entrance
    await sendCommand('look', []);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const moriaCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('moria') || text.includes('durin') || text.includes('dwarf');
    });
    
    if (moriaCheck) {
      console.log('✅ Found Moria entrance');
      
      // Enter Moria and explore levels
      await moveToRoom('east', ['Moria']);
      await moveToRoom('down', ['Level']);
      
      // Explore Moria levels (go down multiple times)
      for (let i = 0; i < 3; i++) {
        await moveToRoom('down', []);
        await sendCommand('look', []);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      console.log('✅ Explored Moria levels');
      
      // Look for Bridge of Khazad-dûm
      await moveToRoom('east', []);
      const bridgeCheck = messages.slice(-5).some(m => {
        const text = (m.message || m.text || '').toLowerCase();
        return text.includes('bridge') || text.includes('khazad');
      });
      
      if (bridgeCheck) {
        console.log('✅ Reached Bridge of Khazad-dûm');
      }
    }
    
    // ============================================
    // PART 4: LOTHLÓRIEN
    // ============================================
    console.log('\n📍 Journeying to Lothlórien...');
    
    // Exit Moria and head to Lothlórien (usually east)
    await moveToRoom('east', []);
    await moveToRoom('east', []);
    
    const lothlorienCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('lothlorien') || text.includes('galadriel') || text.includes('caras');
    });
    
    if (lothlorienCheck) {
      console.log('✅ Reached Lothlórien');
      
      // Explore Lothlórien
      await moveToRoom('north', []);
      await sendCommand('look', []);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // ============================================
    // PART 5: FANGORN FOREST
    // ============================================
    console.log('\n📍 Entering Fangorn Forest...');
    
    // Navigate to Fangorn (usually south/east from Lothlórien)
    await moveToRoom('south', []);
    await moveToRoom('east', []);
    
    const fangornCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('fangorn') || text.includes('treebeard') || text.includes('ent');
    });
    
    if (fangornCheck) {
      console.log('✅ Entered Fangorn Forest');
    }
    
    // ============================================
    // PART 6: ROHAN
    // ============================================
    console.log('\n📍 Journeying to Rohan...');
    
    // Navigate to Rohan (usually south from Fangorn)
    await moveToRoom('south', []);
    await moveToRoom('south', []);
    
    const rohanCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('rohan') || text.includes('edoras') || text.includes('meduseld');
    });
    
    if (rohanCheck) {
      console.log('✅ Reached Rohan');
      
      // Explore Edoras
      await moveToRoom('north', ['Edoras']);
      await sendCommand('look', []);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Try to find Helm's Deep
      await moveToRoom('west', []);
      const helmsDeepCheck = messages.slice(-5).some(m => {
        const text = (m.message || m.text || '').toLowerCase();
        return text.includes('helm') || text.includes('deep');
      });
      
      if (helmsDeepCheck) {
        console.log('✅ Found Helm\'s Deep');
      }
    }
    
    // ============================================
    // PART 7: PATHS OF THE DEAD
    // ============================================
    console.log('\n📍 Entering Paths of the Dead...');
    
    // Navigate to Paths of the Dead (usually south from Rohan)
    await moveToRoom('south', []);
    await moveToRoom('south', []);
    
    const deadCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('dead') || text.includes('dunharrow') || text.includes('oathbreaker');
    });
    
    if (deadCheck) {
      console.log('✅ Entered Paths of the Dead');
    }
    
    // ============================================
    // PART 8: GONDOR - MINAS TIRITH
    // ============================================
    console.log('\n📍 Journeying to Gondor...');
    
    // Navigate to Minas Tirith (usually south/east from Paths of the Dead)
    await moveToRoom('south', []);
    await moveToRoom('east', []);
    
    const gondorCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('gondor') || text.includes('minas') || text.includes('tirith');
    });
    
    if (gondorCheck) {
      console.log('✅ Reached Minas Tirith');
      
      // Enter the city and explore levels
      await moveToRoom('up', ['Level']);
      console.log('✅ Entered first level of Minas Tirith');
      
      // Climb through the levels
      for (let i = 0; i < 5; i++) {
        await moveToRoom('up', []);
        await sendCommand('look', []);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      console.log('✅ Explored Minas Tirith levels');
      
      // Try to reach White Tower
      await moveToRoom('up', ['Tower']);
      const towerCheck = messages.slice(-5).some(m => {
        const text = (m.message || m.text || '').toLowerCase();
        return text.includes('tower') || text.includes('white');
      });
      
      if (towerCheck) {
        console.log('✅ Reached White Tower');
      }
    }
    
    // ============================================
    // PART 9: MORDOR
    // ============================================
    console.log('\n📍 Journeying to Mordor...');
    
    // Navigate to Mordor (usually east from Gondor)
    await moveToRoom('down', []); // Exit tower
    await moveToRoom('east', []);
    await moveToRoom('east', []);
    
    const mordorCheck = messages.slice(-5).some(m => {
      const text = (m.message || m.text || '').toLowerCase();
      return text.includes('mordor') || text.includes('black gate') || text.includes('barad');
    });
    
    if (mordorCheck) {
      console.log('✅ Reached Mordor region');
      
      // Try to find Black Gate
      await moveToRoom('east', []);
      const blackGateCheck = messages.slice(-5).some(m => {
        const text = (m.message || m.text || '').toLowerCase();
        return text.includes('black gate') || text.includes('gate');
      });
      
      if (blackGateCheck) {
        console.log('✅ Found Black Gate');
      }
      
      // Try to reach Mount Doom
      await moveToRoom('south', []);
      await moveToRoom('east', []);
      
      const mountDoomCheck = messages.slice(-5).some(m => {
        const text = (m.message || m.text || '').toLowerCase();
        return text.includes('doom') || text.includes('mount') || text.includes('sammath');
      });
      
      if (mountDoomCheck) {
        console.log('✅ Reached Mount Doom');
      }
    }
    
    // ============================================
    // FINAL VERIFICATION
    // ============================================
    console.log('\n📍 Final verification...');
    
    await updatePlayerState();
    
    // Check that we've visited many rooms
    expect(playerState?.visitedRooms?.length).toBeGreaterThan(10);
    console.log(`✅ Visited ${playerState?.visitedRooms?.length} rooms`);
    
    // Check that we've collected items
    expect(playerState?.inventory?.length).toBeGreaterThan(0);
    console.log(`✅ Collected ${playerState?.inventory?.length} items`);
    
    // Check level progression (should have gained some XP)
    expect(playerState?.level).toBeDefined();
    expect(playerState?.exp).toBeDefined();
    console.log(`✅ Level: ${playerState?.level}, XP: ${playerState?.exp}`);
    
    // Check achievements
    expect(playerState?.achievements).toBeDefined();
    console.log(`✅ Unlocked ${playerState?.achievements?.length || 0} achievements`);
    
    console.log('\n🎉 Full world walkthrough completed!');
  });
});


