# How to View the Test Report

## Quick Access

When you run `npm run test:e2e:report`, Playwright starts a local server. 

**Open your browser and go to:**
```
http://localhost:9323
```

The terminal shows:
```
Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
```

## What You'll See in the Browser

The HTML report includes:

1. **Test Overview**
   - All tests with pass/fail status
   - Duration for each test
   - Click any test to see details

2. **For Each Test** (click to expand):
   - ✅/❌ Status
   - ⏱️ Duration
   - 📸 Screenshots (if test failed)
   - 🎥 Videos (if test failed)
   - 📊 Traces (click "Trace" button)
   - 📝 Console logs
   - 🌐 Network requests
   - 🔍 DOM snapshots

3. **Trace Viewer** (click "Trace" button):
   - Step-by-step execution
   - See exactly what happened at each step
   - View DOM state at each step
   - See network requests
   - View console output

## Why You Don't See Screenshots/Traces

**All your tests are passing!** ✅

Screenshots, videos, and traces are only captured when tests **fail**. This is by design to save disk space.

## To See Debugging Features in Action

### Option 1: Temporarily Break a Test
Edit `e2e/debug-test.spec.js` and uncomment the failing test, then run:
```bash
npm run test:e2e
```

### Option 2: Run with Full Traces
```bash
npm run test:e2e:trace
```
This captures traces for all tests (even passing ones).

### Option 3: Use UI Mode
```bash
npm run test:e2e:ui
```
This shows the browser in real-time as tests run.

## The Report is Interactive!

- **Click any test** to see its details
- **Click "Trace"** to see step-by-step execution
- **Click screenshots** to view full-size images
- **Click videos** to play them
- **Use filters** to find specific tests
- **Search** for test names or content

## Report Location

The report files are in:
```
playwright-report/
  └── index.html  (main report file)
```

You can also open it directly:
```bash
open playwright-report/index.html
```

