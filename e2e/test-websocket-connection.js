/**
 * Simple script to test WebSocket connection
 * Run this to verify WebSocket connectivity before running tests
 */
const { WebSocket } = require('ws');

console.log('🔍 Testing WebSocket connection to ws://localhost:3001...\n');

const ws = new WebSocket('ws://localhost:3001');

ws.on('open', () => {
  console.log('✅ WebSocket connection successful!');
  console.log('✅ Server is accepting WebSocket connections\n');
  ws.close();
  process.exit(0);
});

ws.on('error', (error) => {
  console.error('❌ WebSocket connection failed!');
  console.error(`   Error: ${error.message || 'Unknown error'}`);
  console.error(`   Code: ${error.code || 'N/A'}\n`);
  
  if (error.code === 'EPERM') {
    console.error('💡 This might be a permission issue.');
    console.error('   Try restarting the server: npm run dev:server\n');
  } else if (error.code === 'ECONNREFUSED') {
    console.error('💡 Server is not running or not accepting connections.');
    console.error('   Start the server: npm run dev:server\n');
  }
  
  process.exit(1);
});

setTimeout(() => {
  console.error('❌ Connection timeout (5 seconds)');
  console.error('   Make sure the server is running: npm run dev:server\n');
  process.exit(1);
}, 5000);

