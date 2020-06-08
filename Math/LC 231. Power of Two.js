/**
 * @param {number} n
 * @return {boolean}
 */
 
var divisionByTwo = function(n){
    if(n == 0) return false;
    while(n > 1){
        const rem = n % 2;  
        if(rem == 0){
            n = n / 2;    
        }else{
            return false;
        }
    }
    return (n==1?true:false);
}
var bitManipulation = function(n){
  return n > 0 && ((n & (n-1)) == 0);
}
var isPowerOfTwo = function(n) {
    return bitManipulation(n);
};
