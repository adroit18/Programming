/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let level = 1;
    let store = [];
    let maxDia = 0;
    if(!root) return maxDia;
    maxDia = 1;
    maxDia = util(root,store,level,1, maxDia);
    return maxDia;
};
/* DFS approach with taking an array for all leftmost visited values first storing 
them in array names store and subtracting current val index from it */
var util = function(root,store,level,currInd, maxDia){
    if(!root) return maxDia;
    if(!store[level]){
        store[level] = currInd;
    }else{
        let dia = Math.abs(store[level] - currInd) + 1;
        if(dia > maxDia){
            maxDia = dia;
        }
    }
    maxDia = util(root.left,store,level+1, (2*currInd), maxDia );
    maxDia = util(root.right,store,level+1, ((2*currInd)+1), maxDia );

    return maxDia;   
}
/* BFS APPROACH 
var widthOfBinaryTree = function(root) {
  if(!root) return;
  let queue = [[root,1,0]];
  let arr = {};
  let maxDiff = 0;
  while(queue.length > 0){
    let [curr,index,level] = queue.shift();
    
    if(!curr)break;
  
    if(arr[level]){
      const [start,end] = arr[level];
      if(index < start){
        arr[level][0] = index
      }
      else if(index > end){
        arr[level][1] = index
      }
      const currDiff = (arr[level][1]-arr[level][0])
      if(maxDiff < currDiff){
        maxDiff = currDiff;
      }

    }
    else{
      arr[level] = [index,index]
    }
    
    if(curr.left||curr.right){
      level = level + 1;
      if(curr.left){
        queue.push([curr.left,(index*2),level]);
      }
      if(curr.right){
        queue.push([curr.right,((index*2)+1),level]);
      }
    }
    
  }
  return (maxDiff+1)
};
*/
