class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = []
        for(let i = 0; i<nums.length; i++){
            let p = nums.filter((x,idx) => i!=idx)
            ans.push(p.reduce((t,v) => t*v, 1))
        }
        return ans
    }
}
