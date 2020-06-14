/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length == 0){
        return [];
    }
    nums.sort((a,b)=>a-b);
    let i = 0;
    let j = 0;
    let prev = Array(nums.length).fill(0);
    let maxLen = Array(nums.length).fill(0);
    let maxIndex = 0;
    let max = -Infinity;
    
    for(let i = 0; i < nums.length; i+=1){
        for(let j = 0; j < i; j+=1){
            if(nums[i] % nums[j] == 0 || nums[j] % nums[i] == 0){
                if(maxLen[j] + 1 > maxLen[i]){
                    prev[i] = j;
                    maxLen[i]  = maxLen[j] + 1;
                    if(maxLen[j] + 1 > max){
                        max = maxLen[i];
                        maxIndex = i;
                    }
                }
            }
        }
    }
    let k = maxIndex;
    let out = [];
    while(k > 0){
        out.push(nums[k]); 
        k = prev[k];
    }
    if(nums[k] % out[out.length-1] == 0 || out[out.length-1] % nums[k]  == 0){
        out.push(nums[k]);
    }
    return (out.length <= 0) ? [nums[0]] : out.reverse();
};
