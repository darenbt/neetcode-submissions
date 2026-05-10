class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let table = {}
        for (let i = 0; i<s.length; i++){
            table[s[i]] = table[s[i]]+1 || 1
        }
        for(let i = 0; i <t.length; i++){
            table[t[i]] -= 1
        }
    return Object.values(table).every(x => x==0)
    }
}
