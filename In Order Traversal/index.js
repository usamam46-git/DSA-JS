
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();

            if (node.left === null) {
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }

            if (node.right === null) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.right);
            }
        }
    }

    // preOrder() {
    //    if(this.root === null){
    //     return
    //    }
    //    let stack = [this.root]
    //    while (stack.length > 0) {
    //     let node = stack.pop()
    //     console.log(node.value.value)
    //     if(node.right !== null){
    //         stack.push(node.right)
    //     }
    //     if(node.left !== null){
    //         stack.push(node.left)
    //     }
    //    }

    // }
    //using recursive approach
    preOrder(node = this.root){
       if(node !== null){
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
       }
    }

    //Inorder traversal using recursive approach

    inOrder(node = this.root){
        if(node !== null){
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
}
