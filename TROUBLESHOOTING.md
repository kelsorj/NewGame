# Troubleshooting Playwright Tests

## WebSocket Connection Issues

### Error: `EPERM` (Permission Denied)

If you're getting `EPERM` errors when connecting to WebSocket:

1. **Check if server is actually running:**
   ```bash
   npm run test:e2e:check
   curl http://localhost:3001/health
   ```

2. **Restart the server:**
   ```bash
   # Stop the server (Ctrl+C), then:
   npm run dev:server
   ```

3. **Check server logs:**
   - Look for "New WebSocket connection" messages
   - If you don't see these, connections aren't reaching the server

4. **Test WebSocket connection:**
   ```bash
   npm run test:e2e:ws-check
   ```

5. **Check for firewall/security software:**
   - macOS might be blocking WebSocket connections
   - Check System Preferences > Security & Privacy > Firewall

6. **Try a different port:**
   - If port 3001 is blocked, try setting `PORT=3002`:
   ```bash
   PORT=3002 npm run dev:server
   ```
   Then update tests to use port 3002.

### Server Running But Tests Failing

If the server health check passes but tests fail:

1. **Verify WebSocket endpoint:**
   - The WebSocket should be on the same port as HTTP
   - URL: `ws://localhost:3001`

2. **Check server console:**
   - You should see "New WebSocket connection" when tests run
   - If not, the WebSocket server might not be properly initialized

3. **Restart everything:**
   ```bash
   # Kill all processes
   lsof -ti:3001 | xargs kill -9
   lsof -ti:3000 | xargs kill -9
   
   # Restart
   npm run dev
   ```

### Common Issues

#### "WebSocket connection timeout"
- Server isn't running or not accepting connections
- Solution: Start server with `npm run dev:server`

#### "ECONNREFUSED"
- Server isn't running
- Solution: Start the server

#### "EPERM"
- Permission issue (macOS security, firewall, etc.)
- Solution: Check firewall settings, try restarting server

#### Tests pass locally but fail in CI
- CI environment needs servers started automatically
- Solution: Use `webServer` config in `playwright.config.js` for CI

## Getting Help

If issues persist:

1. Check server logs for errors
2. Run `npm run test:e2e:ws-check` to test WebSocket connectivity
3. Verify both HTTP and WebSocket are working:
   ```bash
   curl http://localhost:3001/health
   npm run test:e2e:ws-check
   ```

