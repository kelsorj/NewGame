# World Expansion - Instructions for Merging

## Current Status
- **Original rooms**: 106
- **Batch 1 rooms**: 60 (Shire & Eriador expansion)
- **Total after Batch 1**: 166
- **Remaining needed**: 152 rooms (to reach 318 total)

## How to Merge Batch 1

1. **Open** `server/src/data/rooms.js`

2. **Find the end of the rooms object** (before the closing `};`)

3. **Add the new rooms** from `rooms-expansion-batch1.js`:
   ```javascript
   // After the last existing room, add:
   
   // THE SHIRE EXPANSION
   ...shireExpansion,  // This will add all 60 rooms at once
   ```

   OR manually copy each room definition into the appropriate section.

4. **Update connections** - Make sure existing rooms connect to new ones:
   - `hobbiton_square` should connect to `tuckborough` (add `west: 'tuckborough'` or similar)
   - `bree_square` should connect to `combe` (add appropriate exit)
   - `barrow_downs` (if exists) should connect to new barrow chambers

5. **Test connectivity**:
   ```bash
   npm run dev:server
   # Then test navigation in game
   ```

## Next Batches (To Be Generated)

- **Batch 2**: Rivendell & Moria Expansion (~40 rooms)
- **Batch 3**: Lothlórien & Fangorn Expansion (~30 rooms)  
- **Batch 4**: Rohan Expansion (~30 rooms)
- **Batch 5**: Gondor & Mordor Expansion (~30 rooms)
- **Batch 6**: New Regions (Mirkwood, Erebor, etc.) (~30 rooms)

## Testing Checklist

After merging each batch:
- [ ] Server starts without errors
- [ ] Can navigate to new rooms
- [ ] Items spawn correctly
- [ ] Enemies appear correctly
- [ ] No broken connections
- [ ] Save/load works
- [ ] Run E2E tests: `npm run test:e2e`

## Notes

- All new rooms follow the existing format
- Items and enemies use existing IDs (or new ones need to be added to items.js/enemies.js)
- Descriptions are lore-accurate to Middle Earth
- Rooms are properly connected to existing world

## Quick Merge Command

If you want to merge automatically (backup first!):
```bash
# Backup
cp server/src/data/rooms.js server/src/data/rooms.js.backup

# Then manually edit rooms.js to add the new rooms
```

