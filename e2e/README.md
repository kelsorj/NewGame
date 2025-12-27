# E2E Testing Guide

## ⚠️ IMPORTANT: Start Servers First!

**All tests require the game servers to be running.** The tests will check if servers are running and give you helpful error messages if they're not.

## Quick Start

1. **Start the servers** (in a separate terminal):
   ```bash
   npm run dev
   ```

2. **Wait for servers to be ready** - you should see:
   - `🌐 Server running on localhost:3001`
   - Client dev server running on `http://localhost:3000`

3. **Run the tests**:
   ```bash
   npm run test:e2e
   ```

## Prerequisites

### Start the Servers

In a separate terminal, run:

```bash
# Start both server and client
npm run dev

# Or start them separately:
# Terminal 1: npm run dev:server  (runs on port 3001)
# Terminal 2: npm run dev:client  (runs on port 3000)
```

Wait for both servers to be ready:
- Server should show: `🌐 Server running on localhost:3001`
- Client should show: `Local: http://localhost:3000`

### Verify Servers Are Running

```bash
# Check server health
curl http://localhost:3001/health

# Check if ports are in use
lsof -ti:3001  # Should show a process ID
lsof -ti:3000  # Should show a process ID
```

## Running Tests

Once servers are running:

```bash
# Run all E2E tests
npm run test:e2e

# Run specific test suites
npm run test:e2e -- --grep "WebSocket API Tests"
npm run test:e2e -- --grep "Game Walkthrough"
npm run test:e2e -- --grep "Browser E2E Tests"

# Run with UI mode (interactive)
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed

# Debug mode
npm run test:e2e:debug
```

## Test Suites

### WebSocket API Tests
- Direct WebSocket protocol tests (no browser)
- Tests connection, join, commands, multiple players

### Browser E2E Tests
- Full browser automation tests
- Tests UI interactions, forms, displays

### Game Walkthrough Tests
- Complete game flow from start to finish
- Tests navigation, items, combat, puzzles, save/load

## Troubleshooting

### "WebSocket connection failed" or "EPERM" error
- **Solution 1**: Restart the server - it may need to be restarted after code changes
  ```bash
  # Stop the server (Ctrl+C), then:
  npm run dev:server
  ```

- **Solution 2**: Test WebSocket connection directly
  ```bash
  npm run test:e2e:ws-check
  ```
  This will tell you if WebSocket connections are working.

- **Solution 3**: Check if server is running
  ```bash
  curl http://localhost:3001/health
  npm run test:e2e:check
  ```

### "Process from config.webServer was not able to start"
- **Solution**: This is normal if servers are already running
- The config is set to reuse existing servers

### Tests timeout
- **Solution**: Make sure both servers are fully started before running tests
- Wait for startup messages before running tests

### Port already in use
- **Solution**: Kill existing processes or use different ports
- `lsof -ti:3001 | xargs kill -9` (be careful!)

## Viewing Test Results

```bash
# View HTML report
npm run test:e2e:report

# Open report in browser
npm run test:e2e:report:file
```

## CI/CD

For CI environments, the tests will automatically start servers using the `webServer` configuration in `playwright.config.js`.
