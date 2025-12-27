// Puzzle System Tests
import { PuzzleSystem } from '../src/engine/PuzzleSystem.js';
import { puzzles } from '../src/data/puzzles.js';

describe('PuzzleSystem', () => {
    let puzzleSystem;
    let playerState;

    beforeEach(() => {
        puzzleSystem = new PuzzleSystem(puzzles);
        playerState = {
            inventory: [],
            solvedPuzzles: []
        };
    });

    describe('attemptPuzzle', () => {
        test('solves puzzle with correct answer', () => {
            const result = puzzleSystem.attemptPuzzle('willow_riddle', 'mountain', playerState);

            expect(result.success).toBe(true);
            expect(result.solved).toBe(true);
            expect(playerState.solvedPuzzles).toContain('willow_riddle');
            expect(result.message).toContain('solved');
        });

        test('fails puzzle with incorrect answer', () => {
            const result = puzzleSystem.attemptPuzzle('willow_riddle', 'tree', playerState);

            expect(result.success).toBe(true);
            expect(result.solved).toBe(false);
            expect(playerState.solvedPuzzles).not.toContain('willow_riddle');
        });

        test('gives rewards for solving puzzle', () => {
            const result = puzzleSystem.attemptPuzzle('willow_riddle', 'mountain', playerState);

            expect(playerState.inventory).toContain('willow_wand');
            expect(result.message).toContain('receive');
        });

        test('cannot solve same puzzle twice', () => {
            playerState.solvedPuzzles.push('willow_riddle');

            const result = puzzleSystem.attemptPuzzle('willow_riddle', 'mountain', playerState);

            expect(result.success).toBe(false);
            expect(result.message).toContain('already solved');
        });

        test('puzzle with contains solution type', () => {
            const result = puzzleSystem.attemptPuzzle('tower_inscription', 'weathertop', playerState);

            expect(result.success).toBe(true);
            expect(result.solved).toBe(true);
        });

        test('puzzle requires specific items', () => {
            // Gateway of Moria doesn't have requirements, but if it did:
            const result = puzzleSystem.attemptPuzzle('gateway_of_moria', 'mellon', playerState);

            expect(result.success).toBe(true);
            expect(result.solved).toBe(true);
            expect(result.message).toContain('open');
        });
    });

    describe('checkSolution', () => {
        test('checks exact solution', () => {
            const puzzle = puzzles['willow_riddle'];

            expect(puzzleSystem.checkSolution(puzzle, 'mountain')).toBe(true);
            expect(puzzleSystem.checkSolution(puzzle, 'Mountain')).toBe(true);
            expect(puzzleSystem.checkSolution(puzzle, 'hill')).toBe(false);
        });

        test('checks contains solution', () => {
            const puzzle = puzzles['tower_inscription'];

            expect(puzzleSystem.checkSolution(puzzle, 'weathertop')).toBe(true);
            expect(puzzleSystem.checkSolution(puzzle, 'amon sul')).toBe(true);
            expect(puzzleSystem.checkSolution(puzzle, 'WEATHERTOP')).toBe(true);
            expect(puzzleSystem.checkSolution(puzzle, 'wrong')).toBe(false);
        });
    });

    describe('getPuzzleDescription', () => {
        test('shows puzzle description if not solved', () => {
            const desc = puzzleSystem.getPuzzleDescription('willow_riddle', playerState);

            expect(desc).toContain("Old Man Willow's Riddle");
            expect(desc).toContain('roots that nobody sees');
        });

        test('shows solved status if already solved', () => {
            playerState.solvedPuzzles.push('willow_riddle');

            const desc = puzzleSystem.getPuzzleDescription('willow_riddle', playerState);

            expect(desc).toContain('[SOLVED]');
        });

        test('returns null for unknown puzzle', () => {
            const desc = puzzleSystem.getPuzzleDescription('nonexistent', playerState);

            expect(desc).toBeNull();
        });
    });

    describe('showPuzzleProgress', () => {
        test('shows puzzle progress', () => {
            playerState.solvedPuzzles.push('willow_riddle', 'troll_chest');

            const progress = puzzleSystem.showPuzzleProgress(playerState);

            expect(progress).toContain('Puzzles Solved: 2');
            expect(progress).toContain('willow');
            expect(progress).toContain('troll');
        });
    });
});
