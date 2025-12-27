# E2E Testing with Playwright

This directory contains end-to-end tests for the Middle Earth Adventure game using Playwright.

## Setup

```bash
# Install dependencies (includes Playwright)
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug

# Run with full trace capture (for debugging)
npm run test:e2e:trace

# View HTML report (after running tests)
npm run test:e2e:report
# Then open browser to: http://localhost:9323

# Run specific test file
npx playwright test game-walkthrough.spec.js
```

## Viewing Test Results

After running tests, you can view the HTML report:

```bash
npm run test:e2e:report
```

Or open directly:
```bash
open playwright-report/index.html
```

The HTML report includes:
- ✅ Test results with pass/fail status
- 📸 Screenshots (captured on failure)
- 🎥 Videos (captured on failure)
- 📊 Traces (for step-by-step debugging)
- 🔍 Console logs and network requests

## Test Structure

### `game-walkthrough.spec.js`
Comprehensive walkthrough tests that:
- Test complete game flow from start to finish
- Verify navigation, inventory, combat, puzzles
- Test save/load functionality
- Verify map tracking
- Test error handling

### `websocket-client.test.js`
Direct WebSocket API tests:
- Connection handling
- Command processing
- Multiplayer support
- Protocol compliance

### `browser-e2e.spec.js`
Browser-based UI tests:
- User interface interactions
- Visual elements
- Player status updates
- World map display
- Save/load through UI

## Test Coverage

The E2E tests cover:
- ✅ Game initialization and joining
- ✅ Navigation and movement
- ✅ Item management (take, drop, use)
- ✅ Inventory system
- ✅ Combat system
- ✅ Puzzle solving
- ✅ Save/load functionality
- ✅ Map tracking
- ✅ Direction shortcuts
- ✅ Item name normalization (spaces vs underscores)
- ✅ Error handling
- ✅ Multiplayer support
- ✅ UI interactions

## Continuous Integration

Tests run automatically on:
- Push to main/develop branches
- Pull requests
- Manual trigger via workflow_dispatch

Results are uploaded as artifacts and can be viewed in the GitHub Actions tab.

## Debugging Failed Tests

1. **View HTML Report**: 
   ```bash
   npm run test:e2e:report
   # or
   open playwright-report/index.html
   ```
   The report shows screenshots, videos, and traces for failed tests.

2. **Use UI Mode**: 
   ```bash
   npm run test:e2e:ui
   ```
   Interactive mode with live browser and step-by-step execution.

3. **Use Debug Mode**: 
   ```bash
   npm run test:e2e:debug
   ```
   Opens Playwright Inspector for step-by-step debugging.

4. **Run with Full Traces**: 
   ```bash
   npm run test:e2e:trace
   ```
   Captures full traces for all tests (useful for debugging).

5. **View Traces**: 
   ```bash
   npx playwright show-trace test-results/[test-name]/trace.zip
   ```
   Or click "Trace" in the HTML report to view step-by-step execution.

6. **Check Screenshots**: 
   - Screenshots are automatically captured on failure
   - Located in `test-results/[test-name]/`
   - Also viewable in the HTML report

7. **Check Videos**: 
   - Videos are captured on failure
   - Located in `test-results/[test-name]/`
   - Viewable in the HTML report

## Adding New Tests

1. Create a new test file in `e2e/` directory
2. Import test utilities: `import { test, expect } from '@playwright/test'`
3. Use the WebSocket helper or browser automation as needed
4. Follow existing test patterns for consistency

## Best Practices

- Tests should be independent and not rely on execution order
- Use descriptive test names
- Include both positive and negative test cases
- Test edge cases and error conditions
- Keep tests focused on specific functionality
- Use appropriate timeouts for async operations

