# PM2 Setup Guide

This project is configured to run with PM2 (Process Manager 2) for production deployment.

## Quick Start

### Start the game with PM2:
```bash
npm run pm2:start
```

Or directly:
```bash
pm2 start ecosystem.config.js
```

### Other useful commands:

**Stop all processes:**
```bash
npm run pm2:stop
# or
pm2 stop ecosystem.config.js
```

**Restart all processes:**
```bash
npm run pm2:restart
# or
pm2 restart ecosystem.config.js
```

**View status:**
```bash
npm run pm2:status
# or
pm2 status
```

**View logs:**
```bash
npm run pm2:logs
# or
pm2 logs
```

**View detailed monitoring:**
```bash
npm run pm2:monit
# or
pm2 monit
```

**Delete all processes:**
```bash
npm run pm2:delete
# or
pm2 delete ecosystem.config.js
```

## What's Running

The PM2 configuration runs two processes:

1. **game-server** - The backend server (port 3001)
   - Runs: `npm run start --workspace=server`
   - Logs: `./logs/server-*.log`

2. **game-client** - The frontend Vite dev server (port 3000)
   - Runs: `npm run dev --workspace=client`
   - Logs: `./logs/client-*.log`

## Production Setup

For production, you may want to:

1. Build the client first:
   ```bash
   npm run build --workspace=client
   ```

2. Modify `ecosystem.config.js` to serve the built client files instead of running the dev server.

3. Or configure the server to serve static files from `client/dist`.

## Auto-start on System Boot

To make PM2 start automatically on system reboot:

```bash
pm2 startup
pm2 save
```

This will generate and run a startup script for your system.

## Logs

All logs are stored in the `./logs/` directory:
- `server-error.log` - Server error logs
- `server-out.log` - Server output logs
- `server-combined.log` - Server combined logs
- `client-error.log` - Client error logs
- `client-out.log` - Client output logs
- `client-combined.log` - Client combined logs

