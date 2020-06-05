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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let newRoot = root;
    util(newRoot);
    return newRoot;
};

var util = function(rootNow){
    if(!rootNow) return ;
    util(rootNow.left);
    util(rootNow.right);
    let temp = rootNow.left;
    rootNow.left = rootNow.right;
    rootNow.right = temp;
}
