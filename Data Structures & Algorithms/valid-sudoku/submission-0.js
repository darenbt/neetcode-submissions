class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const seen = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // 1. Skip empty cells
            if (val === '.') {
                continue;
            }

            // 2. Calculate the 3x3 box index (0 to 8)
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // 3. Create unique identifiers for this placement
            const rowKey = `row-${r}-${val}`;
            const colKey = `col-${c}-${val}`;
            const boxKey = `box-${boxIndex}-${val}`;

            // 4. Check for duplicates
            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                return false; 
            }

            // 5. Save the keys to the tracking Set
            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }

    return true; // No duplicates found anywhere
    }
}
