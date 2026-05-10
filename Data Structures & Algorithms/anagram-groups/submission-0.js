class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = []
        for(let w of strs){
            let chars = [...w].sort().join('')
            let poss = strs.filter(x => [...x].sort().join('') == chars)
            if(poss.length > 0) {ans.push(poss)}
            strs = strs.filter(x => !poss.includes(x))
            console.log(poss, strs)
        }
        return ans
    }
}
