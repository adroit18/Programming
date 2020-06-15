/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let alGraph = {}; 
    for(let i = 0; i<flights.length; i++){
        const[from, to, cost] = flights[i];
        if(alGraph[from]){
            alGraph[from].push([to,cost]);
        }else{
            alGraph[from] = [[to,cost]];
        }
    }
    const cost =  util(alGraph,src,dst,K,1,Infinity,0);
    return cost == Infinity ? -1 : cost;
};

var util = function(alGraph,src,dst,K,currStep = 1,minCost,costTillHere){
    const availableChild = alGraph[src] || [];
    for(let i = 0; i < availableChild.length; i+=1){
        const [newSrc, cost] = availableChild[i];
        if(currStep + 1 > K+2 || costTillHere + cost > minCost) continue;
        let calCost = (currStep + 1 <= K+2 && newSrc == dst) ?(costTillHere + cost):util(alGraph,newSrc,dst,K,currStep + 1,minCost,costTillHere + cost);
        minCost = Math.min(calCost,minCost);
    }
    return minCost;
}