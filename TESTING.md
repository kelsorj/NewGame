# Testing Guide

## Quick Start

```bash
# Run all tests (unit + E2E)
npm run test:all

# Run only E2E tests
npm run test:e2e

# View test report
npm run test:e2e:report
```

## Understanding Test Results

### When Tests Pass
- ✅ **Green checkmarks** = Test passed
- No screenshots/traces captured (only captured on failure)
- HTML report still generated with test results

### When Tests Fail
- ❌ **Red X marks** = Test failed
- **Screenshots** automatically captured
- **Videos** automatically captured  
- **Traces** automatically captured
- All artifacts viewable in HTML report

## Viewing Debug Information

### HTML Report (Recommended)
```bash
npm run test:e2e:report
```

**Then open your browser to:** `http://localhost:9323`

The HTML report shows:
- ✅/❌ Test status
- 📸 Screenshots (click to view)
- 🎥 Videos (click to play)
- 📊 Traces (click "Trace" button for step-by-step view)
- 📝 Console logs
- 🌐 Network requests
- ⏱️ Timing information

### Direct File Access
```bash
# View screenshots
open test-results/

# View HTML report
open playwright-report/index.html
```

## Debugging Options

### 1. Interactive UI Mode
```bash
npm run test:e2e:ui
```
- See browser in real-time
- Step through tests
- Inspect elements
- Best for developing new tests

### 2. Debug Mode
```bash
npm run test:e2e:debug
```
- Opens Playwright Inspector
- Step-by-step execution
- Breakpoints support
- Best for fixing failing tests

### 3. Full Trace Capture
```bash
npm run test:e2e:trace
```
- Captures full traces for ALL tests
- Useful when you need detailed debugging
- Larger file sizes

### 4. Headed Mode (See Browser)
```bash
npm run test:e2e:headed
```
- Watch tests run in real browser
- Useful for visual debugging

## Test Artifacts Location

```
test-results/
  ├── results.json              # Test results in JSON format
  ├── junit.xml                 # JUnit format (for CI)
  └── [test-name]/              # Per-test artifacts
      ├── screenshot.png        # Screenshot on failure
      ├── video.webm            # Video on failure
      └── trace.zip             # Trace file

playwright-report/
  └── index.html                # Interactive HTML report
```

## Why No Screenshots/Traces?

If you don't see screenshots or traces:

1. **All tests passed** ✅
   - Screenshots/traces only captured on failure
   - This is normal and good!

2. **To see debugging features**:
   - Temporarily make a test fail
   - Or run: `npm run test:e2e:trace` to capture all traces

3. **Check HTML report**:
   ```bash
   npm run test:e2e:report
   ```
   Even passing tests show in the report

## CI/CD Integration

Tests run automatically on:
- Push to main/develop
- Pull requests
- Manual workflow dispatch

Artifacts (screenshots, traces, videos) are uploaded to GitHub Actions and can be downloaded from the Actions tab.

## Tips

1. **Always check the HTML report** after running tests
2. **Use UI mode** when writing new tests
3. **Use debug mode** when fixing failing tests
4. **Traces show everything** - network, console, DOM snapshots
5. **Screenshots are instant** - see exactly what failed

