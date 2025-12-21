
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
    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    //Inorder traversal using recursive approach

    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }


    // Post Order Traversal using arrays
    postOrder() {
        let stack = []
        let current = this.root
        let lastVisited = null

        while (current !== null || stack.length > 1) {
            if (current !== null) {
                stack.push(current)
                current = current.left
            } else {
                let peekNode = stack[stack.length - 1]
                if (peekNode.right !== null && lastVisited !== peekNode.right) {
                    current = peekNode.right
                } else {
                    console.log(peekNode.value)
                    lastVisited = stack.pop()
                }
            }
        }

    }
}



//Solving Problem 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    toString() {
        const values = [...this.linkedList].map(node => node.value);
        return values.join('\n');
    }

    isEmpty() {
        return this.linkedList.head === null;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.linkedList.head;
        this.linkedList.head = node;
    }

    pop() {
        if (this.isEmpty()) {
            return "There is not any element in the stack";
        } else {
            const nodeValue = this.linkedList.head.value;
            this.linkedList.head = this.linkedList.head.next;
            return nodeValue;
        }
    }
}

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

    postOrder() {
        if (this.root === null) return;

        const stack = new Stack();
        let current = this.root;
        let lastVisitedNode = null;

        while (current !== null || !stack.isEmpty()) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            } else {
                let peekNode = stack.linkedList.head.value; // Access top node without popping
                if (peekNode.right !== null && lastVisitedNode !== peekNode.right) {
                    current = peekNode.right;
                } else {
                    console.log(peekNode.value); // Visit the node
                    lastVisitedNode = stack.pop(); // Remove and set as last visited
                }
            }
        }
    }

    //Recursive Approach

    postOrderRec(node = this.root) {
        if (node !== null) {
            this.postOrderRec(node.left)
            this.postOrderRec(node.right)
            console.log(node.value)
        }
    }

    //Time Complexity O(N)
    //Space Complexity O(N)
}










