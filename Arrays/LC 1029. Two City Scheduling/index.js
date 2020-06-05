/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sorted = [...costs].sort((a,b)=>(Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1])));
    
    let n = costs.length / 2;
    
    let na = 0;
    let nb = 0;
    
    let totalMin = 0;
    
    for(let i = 0 ; i < sorted.length; i++){
        const [a , b] = sorted[i];
        if( (a < b && na < n) || nb  >= n){
            totalMin += a;
            na += 1;
        }else if((a >=b && nb < n) || na >= n){
            totalMin += b;
            nb += 1;
        }        
    }
    return totalMin;
};