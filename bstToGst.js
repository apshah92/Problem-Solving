/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function sumTree(root) { 
    var sum = 0;
    if(root) {        
        sum += sumTree(root.left);
        sum += root.val;
        sum += sumTree(root.right);
        
        return sum;
    }
    return sum;
}

function convertGst(root,returnValue){
    if(root){
        returnValue = convertGst(root.left,returnValue);
        var temp = returnValue;
        returnValue = returnValue - root.val;
        root.val = temp;
        returnValue = convertGst(root.right,returnValue);
        
    }
    
    return returnValue;
}

var bstToGst = function(root) {
    if(root){
        var sumOfTree = sumTree(root);
        convertGst(root,sumOfTree);        
    }
    return root;
    
};


