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
var countNodes = function(root) {
    return util(root);
};
var util = function(root, count = 0){
    if(!root){
        return count;
    }
    count = count + 1;
    count = util(root.left, count);
    count = util(root.right, count);
    return count;
}