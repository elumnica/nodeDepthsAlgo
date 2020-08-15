/*

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes a Binary Tree and returns the sum
of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None/null.


*/

//Solution One 
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
function nodeDepths(root) {
    let sumofDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.lrngth > 0){
        const {node, depth} = stack.pop();
        if (node === null) continue;
        sumofdepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }
    return sumofDepths;
  }


// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }




  //Solution Two
  //Average case: when the tree is balanced
  //O(n) time | O(h) space - where is n is the number of nodes in
  // the Binary Tree and h is the height of the Binary Tree

  function nodeDepths(root, depth = 0){
      if (root === null) return 0;
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
  }

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }