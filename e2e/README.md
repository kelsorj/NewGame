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

# Run specific test file
npx playwright test game-walkthrough.spec.js
```

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

1. **View HTML Report**: After tests run, open `playwright-report/index.html`
2. **Use UI Mode**: `npm run test:e2e:ui` for interactive debugging
3. **Use Debug Mode**: `npm run test:e2e:debug` to step through tests
4. **Check Screenshots**: Failed tests automatically capture screenshots
5. **View Traces**: Use `npx playwright show-trace trace.zip` to see detailed execution

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

