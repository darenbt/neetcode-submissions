class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    // 1. Handle empty array edge case
    if (nums.length === 0) return 0;

    // 2. Put all numbers in a Set for O(1) lookups and to remove duplicates
    const numSet = new Set(nums);
    let longestStreak = 0;

    // 3. Iterate through each unique number
    for (const num of numSet) {
        
        // 4. Check if 'num' is the START of a sequence
        // If num - 1 exists, 'num' is in the middle of a sequence, so skip it
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 5. Count how far the sequence goes
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // 6. Update the maximum streak found so far
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
    }
}
