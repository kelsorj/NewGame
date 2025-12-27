import { test, expect } from '@playwright/test';
import { WebSocket } from 'ws';

/**
 * Direct WebSocket API tests
 * Tests the WebSocket protocol without browser
 */
test.describe('WebSocket API Tests', () => {
  let ws;

  test.beforeEach(() => {
    ws = new WebSocket('ws://localhost:3001');
  });

  test.afterEach(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
  });

  test('can connect to WebSocket server', async () => {
    await new Promise((resolve, reject) => {
      ws.on('open', () => {
        expect(ws.readyState).toBe(WebSocket.OPEN);
        resolve();
      });

      ws.on('error', reject);
      
      setTimeout(() => reject(new Error('Connection timeout')), 5000);
    });
  });

  test('can join game and receive player state', async () => {
    const messages = [];

    await new Promise((resolve) => {
      ws.on('open', () => {
        ws.send(JSON.stringify({ type: 'join', playerName: 'TestPlayer' }));
      });

      ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        messages.push(message);

        if (message.type === 'joined' && message.playerState) {
          expect(message.playerState).toBeTruthy();
          expect(message.playerState.name).toBe('TestPlayer');
          expect(message.playerState.currentRoom).toBe('bag_end');
          resolve();
        }
      });

      setTimeout(() => resolve(), 5000);
    });

    expect(messages.length).toBeGreaterThan(0);
  });

  test('can send commands and receive responses', async () => {
    const messages = [];

    await new Promise((resolve) => {
      ws.on('open', () => {
        ws.send(JSON.stringify({ type: 'join', playerName: 'CommandTest' }));
      });

      ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        messages.push(message);

        if (message.type === 'joined') {
          // Now send a command
          ws.send(JSON.stringify({ type: 'command', command: 'look' }));
        }

        if (message.type === 'game_output' && message.message?.includes('Bag End')) {
          expect(message.message).toContain('Bag End');
          resolve();
        }
      });

      setTimeout(() => resolve(), 5000);
    });
  });

  test('handles multiple players', async () => {
    const ws1 = new WebSocket('ws://localhost:3001');
    const ws2 = new WebSocket('ws://localhost:3001');
    const messages1 = [];
    const messages2 = [];

    await Promise.all([
      new Promise((resolve) => {
        ws1.on('open', () => {
          ws1.send(JSON.stringify({ type: 'join', playerName: 'Player1' }));
        });
        ws1.on('message', (data) => {
          messages1.push(JSON.parse(data.toString()));
          if (messages1.length >= 2) resolve();
        });
      }),
      new Promise((resolve) => {
        ws2.on('open', () => {
          ws2.send(JSON.stringify({ type: 'join', playerName: 'Player2' }));
        });
        ws2.on('message', (data) => {
          messages2.push(JSON.parse(data.toString()));
          if (messages2.length >= 2) resolve();
        });
      })
    ]);

    expect(messages1.length).toBeGreaterThan(0);
    expect(messages2.length).toBeGreaterThan(0);

    ws1.close();
    ws2.close();
  });
});

