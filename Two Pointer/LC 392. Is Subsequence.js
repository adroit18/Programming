/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; let j = 0;
    let slen = s.length;
    let tlen = t.length;
    while(i < slen && j < tlen){
        if(s[i] == t[j]){
            i++;j++;
        }else{
            j++;
        }
    }
    if(i == slen) return true;
    return false;
};