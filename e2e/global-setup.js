/**
 * Global setup for Playwright tests
 * Checks if servers are running before tests start
 */
import http from 'http';

async function checkServer(port, name) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/health`, { timeout: 2000 }, (res) => {
      resolve(res.statusCode === 200);
    });

    req.on('error', (err) => {
      console.error(`Error checking ${name} on port ${port}:`, err.message);
      resolve(false);
    });
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function checkWebSocket(port) {
  return new Promise((resolve) => {
    // Simple check - if HTTP works, WebSocket should work too
    // The actual WebSocket connection will be tested in the tests
    resolve(true);
  });
}

export default async function globalSetup() {
  console.log('\n🔍 Checking if game servers are running...\n');

  const serverRunning = await checkServer(3001, 'Server');
  const clientRunning = await checkServer(3000, 'Client');

  if (!serverRunning || !clientRunning) {
    console.error('❌ Servers are not running!\n');
    console.error('Please start the servers before running tests:');
    console.error('  npm run dev\n');
    console.error('Or start them separately:');
    console.error('  Terminal 1: npm run dev:server');
    console.error('  Terminal 2: npm run dev:client\n');
    console.error('Then wait for both to be ready before running tests.\n');
    
    // Don't fail - let tests fail with better error messages
    // process.exit(1);
  } else {
    console.log('✅ Servers are running!\n');
  }
}

