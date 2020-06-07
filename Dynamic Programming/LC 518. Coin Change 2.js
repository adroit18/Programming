// https://leetcode.com/problems/coin-change-2/

var using2D = function(amount, coins){
    const numberOfCoins = coins.length;

    let dp = Array(numberOfCoins).fill(0).map((val)=>Array(amount+1).fill(0));

    for(let i = 0; i < numberOfCoins; i+=1){
        dp[i][0]  = 1;
    }

    for(let i = 0; i< numberOfCoins; i+=1){
        for(let j = 1; j<=amount; j+=1){
            if(j >= coins[i]){
                dp[i][j] = dp[i][j-coins[i]] + (dp[i-1] ? dp[i-1][j] : 0);
            }else{  
               dp[i][j] = (dp[i-1] ? dp[i-1][j] : 0);
            }
        }
    }
    return dp[numberOfCoins-1][amount];
};
var using1D = function(amount, coins){
    const numberOfCoins = coins.length;

    let dp = Array(amount+1).fill(0);
    dp[0] = 1;
    for(let i = 0; i< numberOfCoins; i+=1){
        for(let j = 1; j<=amount; j+=1){
            if(j >= coins[i]){
                dp[j] += dp[j-coins[i]];
            }
        }
    }
    return dp[dp.length -1];
};
var change = function(amount, coins) {
    const numberOfCoins = coins.length;
    if(amount == 0) return 1;
    if(numberOfCoins == 0) return 0;

    return using1D(amount, coins);
};