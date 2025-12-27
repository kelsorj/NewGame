// SaveManager - handles persisting player state to JSON files
import fs from 'fs';
import path from 'path';

const savesDir = path.resolve(process.cwd(), 'server', 'data', 'saves');

export const SaveManager = {
    ensureDir() {
        if (!fs.existsSync(savesDir)) {
            fs.mkdirSync(savesDir, { recursive: true });
        }
    },
    getFilePath(playerName) {
        // sanitize filename
        const safeName = playerName.replace(/[^a-zA-Z0-9_-]/g, '_');
        return path.join(savesDir, `${safeName}.json`);
    },
    savePlayer(playerName, state) {
        this.ensureDir();
        const filePath = this.getFilePath(playerName);
        try {
            fs.writeFileSync(filePath, JSON.stringify(state, null, 2), 'utf8');
            console.log(`Saved player state for ${playerName}`);
        } catch (err) {
            console.error('Error saving player state:', err);
        }
    },
    loadPlayer(playerName) {
        const filePath = this.getFilePath(playerName);
        if (fs.existsSync(filePath)) {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                const state = JSON.parse(data);
                console.log(`Loaded saved state for ${playerName}`);
                return state;
            } catch (err) {
                console.error('Error loading player state:', err);
                return null;
            }
        }
        return null;
    }
};
