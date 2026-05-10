class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some((x,_,a) => a.indexOf(x) != a.lastIndexOf(x))
    }
}
