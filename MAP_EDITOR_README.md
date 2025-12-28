# World Map Editor

A visual editor for editing the world map coordinates and connections.

## Accessing the Editor

### Option 1: Direct URL (Development)
Once the client is running, navigate to:
```
http://localhost:3000/src/editor.html
```

### Option 2: Add to Main App
You can add a link/button in the main app to access the editor, or modify `App.jsx` to show the editor based on a route or query parameter.

## Features

- **Visual Grid Display**: See all rooms on a grid by level (Ground, Underground, Mountain)
- **Drag and Drop**: Click and drag rooms to new positions
- **Overlap Detection**: Automatically highlights rooms that share the same coordinates
- **Room Selection**: Click on a room to see its details (name, coordinates, exits)
- **Level Selection**: Switch between different Z-levels (Ground, Underground, Mountain)
- **Real-time Updates**: Changes are saved immediately to the coordinate file

## How to Use

1. **Start the server**: `npm run dev:server` (or your server start command)
2. **Start the client**: `npm run dev` (in the client directory)
3. **Open the editor**: Navigate to the editor URL
4. **Select a level**: Use the dropdown to choose Ground, Underground, or Mountain
5. **Move rooms**: Click and drag any room to a new position
6. **Check overlaps**: The editor automatically highlights overlapping rooms in red
7. **View details**: Click on a room to see its information

## API Endpoints

The editor uses these backend endpoints:

- `GET /api/map/data` - Get all rooms with coordinates
- `POST /api/map/coordinates` - Update a room's coordinates
- `POST /api/map/exits` - Update a room's exits
- `GET /api/map/overlaps` - Get list of coordinate overlaps

## Applying Changes

After making edits in the editor:

1. Changes are saved to `scripts/linear-world-connections.json`
2. To apply changes to the actual room files, run:
   ```bash
   node scripts/apply-linear-world.mjs
   ```
3. Restart your server to load the updated connections

## Troubleshooting

- **Can't see rooms**: Make sure the server is running and the API endpoints are accessible
- **Overlaps not showing**: Click "Check Overlaps" button to refresh
- **Changes not saving**: Check browser console for errors, verify server is running
- **CORS errors**: Make sure CORS is enabled in the server (it should be by default)

## Notes

- The editor only modifies coordinates, not room descriptions or other properties
- Exits/connections are preserved when moving rooms
- Always check for overlaps before applying changes to room files
- Make backups before making major changes!

