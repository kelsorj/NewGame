# Middle Earth Adventure

A multiplayer text-based adventure game set in Middle Earth. Explore mysterious lands, battle fearsome enemies, solve ancient puzzles, and collect legendary treasures with friends in real-time.

## Features

✨ **Rich World**: 35+ locations across Middle Earth (The Shire, Rivendell, Weathertop, and more)  
⚔️ **Combat System**: Turn-based battles against 20+ enemy types  
🎒 **Inventory & Equipment**: Collect and use items, weapons, and armor  
🧩 **Puzzles**: Solve 10+ riddles and challenges based on Tolkien lore  
👥 **Multiplayer**: Play with friends in real-time via WebSocket  
🎨 **Retro UI**: Beautiful terminal-style interface with glowing effects  

## Quick Start

### Installation

```bash
# Install all dependencies
npm run install:all
```

### Running the Game

```bash
# Terminal 1: Start the server
cd server && npm run dev

# Terminal 2: Start the client
cd client && npm run dev
```

The game will open in your browser at `http://localhost:3000`

## Game Commands

### Navigation
- `look` or `l` - Examine your surroundings
- `go <direction>` - Move (north/south/east/west/up/down)
- `n`, `s`, `e`, `w` - Direction shortcuts

### Inventory
- `inventory` or `i` - View inventory
- `take <item>` - Pick up an item
- `drop <item>` - Drop an item
- `use <item>` - Use or equip an item
- `examine <item>` - Get item details

### Combat
- `attack <enemy>` - Start combat or attack
- `flee` - Attempt to escape from combat

### Puzzles
- `solve <puzzle> <answer>` - Attempt puzzle solution
- `puzzles` - Show puzzle progress

### Character
- `stats` - View character stats
- `help` - Show all commands

## Architecture

```
NewGame/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks (WebSocket)
│   │   ├── App.jsx      # Main app
│   │   └── App.css      # Retro terminal styling
│   └── package.json
│
├── server/              # Node.js backend
│   ├── src/
│   │   ├── engine/      # Game systems
│   │   ├── data/        # Game content
│   │   ├── websocket/   # Multiplayer
│   │   ├── state/       # Game state
│   │   └── index.js     # Server entry
│   ├── tests/           # Unit tests
│   └── package.json
│
└── package.json         # Root workspace config
```

## Testing

```bash
# Run all tests
npm test

# Run server tests only
npm run test:server

# Run tests in watch mode
cd server && npm run test:watch
```

## Game Content

### Regions
- **The Shire**: Peaceful starting area with Bag End, Hobbiton, Green Dragon Inn
- **Bree & Weathertop**: Human settlements and ancient ruins
- **Old Forest**: Mysterious woodland with Old Man Willow and Tom Bombadil
- **Trollshaws**: Wild lands with troll caves
- **Rivendell**: Elven sanctuary with healing and legendary items

### Enemies
Wild Wolves, Orcs, Goblins, Barrow-wights, Ringwraiths, Trolls, Spiders, Wargs, and more!

### Legendary Items
- **Sting**: Bilbo's glowing elven blade
- **Orcrist**: The Goblin-cleaver
- **Mithril Mail**: Lighter than silk, harder than dragon-scales  
- **Lembas Bread**: Elven waybread
- **Athelas**: Kingsfoil healing herb

### Puzzles
- Riddles from The Hobbit
- Gateway of Moria ("speak friend and enter")
- Ancient tower inscriptions
- Elven lore challenges

## Multiplayer

- Multiple players can connect simultaneously
- See other players in the same room
- Real-time notifications when players arrive/leave
- Shared game world

## Development

### Adding New Content

**New Room:**
```javascript
// server/src/data/rooms.js
new_location: {
  name: "Location Name",
  description: "Description...",
  exits: { north: 'other_room' },
  items: ['item1'],
  enemies: ['enemy_type']
}
```

**New Enemy:**
```javascript
// server/src/data/enemies.js
enemy_name: {
  name: "Display Name",
  description: "Description...",
  hp: 50,
  attack: 10,
  defense: 5,
  exp: 30,
  loot: ['item1', 'item2']
}
```

**New Puzzle:**
```javascript
// server/src/data/puzzles.js
puzzle_id: {
  name: "Puzzle Name",
  description: "Puzzle text...",
  solutionType: "exact", // or "contains"
  solution: "answer",
  rewards: { items: ['reward'], exp: 50 }
}
```

### Map Editor

The game includes a visual 3D Map Editor for manipulating rooms and connections.

**Accessing the Editor:**
1. Start both client and server (`npm run dev` in both folders).
2. Open your browser to `http://localhost:3000/?editor=true`.

**Features:**
- **Visual Layout**: View valid room coordinates in a 3D grid.
- **Drag & Drop**: Move rooms to new coordinates (x, y, z).
- **Auto-Connect**: Adjacent rooms automatically form connections (can be toggled).
- **Data Persistence**: Changes are saved to `scripts/linear-world-connections.json`.

**Note**: The editor modifies the coordinate system used to generate the map. It does not directly modify the text descriptions in `rooms.js`.

## Technologies

- **Frontend**: React, Vite, WebSocket
- **Backend**: Node.js, Express, ws
- **Testing**: Jest
- **Styling**: CSS with retro terminal theme

## License

MIT

## Credits

Inspired by J.R.R. Tolkien's Middle Earth and classic text adventures like Zork.

---

**Enjoy your adventure through Middle Earth!** 🏔️
