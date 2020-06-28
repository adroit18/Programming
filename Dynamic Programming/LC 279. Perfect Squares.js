/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = Array(n+1).fill(0);
    dp[0] = 0;
    
    let currNum = 1;
    let sqNum = currNum * currNum;
    
    while( sqNum <= n ){
        for(let i = 1; i <= n ; i++){
            if(i>= sqNum) {
            dp[i] = (dp[i] != 0) ? Math.min(dp[i],1 + dp[i - sqNum]) : 1 + dp[i - sqNum];
            }  
        }
        currNum +=  1;
        sqNum = currNum * currNum;
    }
    return dp[dp.length - 1];
};