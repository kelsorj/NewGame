/**
 * Game Client Helper
 * Utility class for E2E testing that wraps WebSocket communication
 */
import { WebSocket } from 'ws';

export class GameClient {
  constructor(serverUrl = 'ws://localhost:3001') {
    this.serverUrl = serverUrl;
    this.ws = null;
    this.messages = [];
    this.playerState = null;
    this.connected = false;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.serverUrl);

      this.ws.on('open', () => {
        this.connected = true;
        resolve();
      });

      this.ws.on('error', (error) => {
        reject(error);
      });

      this.ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString());
          this.messages.push(message);

          if (message.type === 'player_state') {
            this.playerState = message.state;
          }
        } catch (e) {
          this.messages.push({ type: 'raw', text: data.toString() });
        }
      });

      setTimeout(() => reject(new Error('Connection timeout')), 10000);
    });
  }

  async join(playerName) {
    if (!this.connected) {
      await this.connect();
    }

    return new Promise((resolve) => {
      const messageCountBefore = this.messages.length;
      this.ws.send(JSON.stringify({ type: 'join', playerName }));

      const checkInterval = setInterval(() => {
        if (this.messages.length > messageCountBefore) {
          clearInterval(checkInterval);
          resolve(this.messages[this.messages.length - 1]);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkInterval);
        resolve(null);
      }, 5000);
    });
  }

  async sendCommand(command, timeout = 5000) {
    if (!this.connected) {
      throw new Error('Not connected');
    }

    return new Promise((resolve) => {
      const messageCountBefore = this.messages.length;
      this.ws.send(JSON.stringify({ type: 'command', command }));

      const checkInterval = setInterval(() => {
        if (this.messages.length > messageCountBefore) {
          clearInterval(checkInterval);
          resolve(this.messages[this.messages.length - 1]);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkInterval);
        resolve(this.messages[this.messages.length - 1] || null);
      }, timeout);
    });
  }

  async waitForMessage(predicate, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        const found = this.messages.find(predicate);
        if (found) {
          clearInterval(checkInterval);
          resolve(found);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkInterval);
        reject(new Error('Message timeout'));
      }, timeout);
    });
  }

  getLastMessage() {
    return this.messages[this.messages.length - 1];
  }

  getMessagesByType(type) {
    return this.messages.filter(m => m.type === type);
  }

  close() {
    if (this.ws) {
      this.ws.close();
      this.connected = false;
    }
  }
}

