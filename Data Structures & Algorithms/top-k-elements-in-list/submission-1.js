class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}
        for(let n of nums){
            freq[n] = freq[n] + 1 || 1
        }
        let rank = [...new Set (nums)].sort((a,b) => freq[b] - freq[a] )
        return rank.slice(0,k)
    }
}
