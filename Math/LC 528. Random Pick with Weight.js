/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let sum = 0;
    let lastSum = -1;
    this.cs = w.map((val,index)=>{
        lastSum = sum;        
        sum += val;
        return [lastSum+1, sum];
    })
};
/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const len = this.cs.length;
    let randomNum = Math.ceil(Math.random() * (this.cs[len -1][1]));
    let i = 0;
    let j = len - 1;
    while(i<=j){
        let mid = parseInt(i+(j-i)/2);
        const [start, end] = this.cs[mid];
        if(start <= randomNum && end >= randomNum){
            return mid;
        }else if(start < randomNum && end < randomNum){
            i = mid + 1;
        }else{
            j = mid - 1;
        }
    }
};

//alternate approach linear traversal
// Solution.prototype.pickIndex = function() {
//     let randomNum = Math.ceil(Math.random() * (this.cs[this.cs.length -1][1]));
//     let i = 0;
//     for(i = 0; i<this.cs.length; i+=1){
//         if(this.cs[i][0] <= randomNum && this.cs[i][1] >= randomNum){
//             return i;
//         }
//     }
//     return i-1;
// };

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */