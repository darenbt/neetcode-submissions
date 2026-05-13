class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // For each string, append its length, a delimiter, and the string itself
        // Example: ["neet", "code"] -> "4#neet4#code"
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            // Find the delimiter to determine where the length number ends
            while (str[j] !== '#') {
                j++;
            }

            // Extract the length and move the pointer past the '#'
            const length = parseInt(str.substring(i, j), 10);
            i = j + 1;

            // Read exactly 'length' characters for the original string
            res.push(str.substring(i, i + length));
            
            // Move the pointer to the start of the next encoded segment
            i += length;
        }

        return res;
    }
}