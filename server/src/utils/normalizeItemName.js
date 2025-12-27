// Utility to normalize item/enemy names for matching
// Converts user input with spaces to underscore format used in data

export function normalizeItemName(input) {
    if (!input) return '';
    // Convert to lowercase and replace spaces with underscores
    return input.toLowerCase().trim().replace(/\s+/g, '_');
}

// Find matching item/enemy ID from a list of IDs
export function findMatchingId(input, availableIds) {
    if (!input || !availableIds) return null;
    
    const normalized = normalizeItemName(input);
    
    // First try exact match
    if (availableIds.includes(normalized)) {
        return normalized;
    }
    
    // Try case-insensitive match
    const lowerInput = normalized.toLowerCase();
    for (const id of availableIds) {
        if (id.toLowerCase() === lowerInput) {
            return id;
        }
    }
    
    // Try partial match (e.g., "stick" matches "walking_stick")
    const words = normalized.split('_');
    for (const id of availableIds) {
        const idWords = id.toLowerCase().split('_');
        // Check if all words in input are in the ID
        if (words.every(word => idWords.some(idWord => idWord.includes(word) || word.includes(idWord)))) {
            return id;
        }
    }
    
    return null;
}

