/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(nums, pos1, pos2){
    let temp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = temp;
}
var sortColors = function(nums) {
    let left = 0; 
    let right = nums.length - 1; 
    let mid = 0; 
  
    while (mid <= right) { 
        switch (nums[mid]) { 
        case 0: 
            swap(nums,left,mid); left++; mid++;
            break; 
        case 1: 
            mid++; 
            break; 
        case 2: 
            swap(nums, mid, right--); 
            break; 
        } 
    } 

};
