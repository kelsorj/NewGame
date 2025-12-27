// Puzzle System - Manages puzzles and their solutions
export class PuzzleSystem {
    constructor(puzzles) {
        this.puzzles = puzzles;
    }

    getPuzzle(puzzleId) {
        return this.puzzles[puzzleId];
    }

    attemptPuzzle(puzzleId, solution, playerState) {
        const puzzle = this.puzzles[puzzleId];
        if (!puzzle) {
            return { success: false, message: `Unknown puzzle: ${puzzleId}` };
        }

        // Check if already solved
        if (playerState.solvedPuzzles.includes(puzzleId)) {
            return {
                success: false,
                message: "You've already solved this puzzle."
            };
        }

        // Check if player meets requirements
        if (puzzle.requirements) {
            for (const req of puzzle.requirements) {
                if (req.type === 'item' && !playerState.inventory.includes(req.item)) {
                    return {
                        success: false,
                        message: `You need ${req.item} to attempt this puzzle.`
                    };
                }
            }
        }

        // Check solution
        const isCorrect = this.checkSolution(puzzle, solution);

        if (isCorrect) {
            playerState.solvedPuzzles.push(puzzleId);

            let message = `✅ ${puzzle.successMessage || 'Puzzle solved!'}\n`;

            // Give rewards
            if (puzzle.rewards) {
                if (puzzle.rewards.items) {
                    playerState.inventory.push(...puzzle.rewards.items);
                    message += `\n🎁 You receive: ${puzzle.rewards.items.join(', ')}`;
                }
                // Note: Experience is handled by GameEngine.handleSolve to trigger level ups
            }

            return {
                success: true,
                solved: true,
                message
            };
        } else {
            return {
                success: true,
                solved: false,
                message: puzzle.failMessage || '❌ That doesn\'t seem to work...'
            };
        }
    }

    checkSolution(puzzle, solution) {
        if (puzzle.solutionType === 'exact') {
            return solution.toLowerCase() === puzzle.solution.toLowerCase();
        } else if (puzzle.solutionType === 'contains') {
            return puzzle.solution.some(keyword =>
                solution.toLowerCase().includes(keyword.toLowerCase())
            );
        } else if (puzzle.solutionType === 'sequence') {
            return JSON.stringify(solution) === JSON.stringify(puzzle.solution);
        }

        return false;
    }

    getPuzzleDescription(puzzleId, playerState) {
        const puzzle = this.puzzles[puzzleId];
        if (!puzzle) return null;

        if (playerState.solvedPuzzles.includes(puzzleId)) {
            return `✅ [SOLVED] ${puzzle.name}`;
        }

        return `🧩 ${puzzle.name}\n\n${puzzle.description}\n\n${puzzle.hint || ''}`;
    }

    showPuzzleProgress(playerState) {
        const solvedCount = playerState.solvedPuzzles.length;
        const totalCount = Object.keys(this.puzzles).length;

        let output = `🧩 Puzzles Solved: ${solvedCount}/${totalCount}\n\n`;

        for (const puzzleId of playerState.solvedPuzzles) {
            const puzzle = this.puzzles[puzzleId];
            if (puzzle) {
                output += `  ✅ ${puzzle.name}\n`;
            }
        }

        return output;
    }
}
