/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let newPeople = [...people];
    newPeople.sort((a,b)=>{
        if(a[0] == b[0]){
            return a[1] - b[1];
        }else{
            return b[0] - a[0];
        }
    });
    let out = [];
    for(let i = 0; i< newPeople.length; i+=1){
        if(out[newPeople[i][1]]){
            out = [...out.slice(0,newPeople[i][1]),newPeople[i], ...out.slice(newPeople[i][1])]
        }else{
            out[newPeople[i][1]] = newPeople[i];     
        }
    }
    return out;
};