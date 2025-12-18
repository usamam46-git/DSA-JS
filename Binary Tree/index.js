// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Tree {
//     constructor() {
//         this.root = null
//     }
//     insert() {
//         if (this.root === null) {
          
//         }
//     }
// }


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

    preOrder() {
       if(this.root === null){
        return
       }
       let stack = [this.root]
       while (stack.length > 0) {
        let node = stack.pop()
        console.log(node.value.value)
        if(node.right !== null){
            stack.push(node.right)
        }
        if(node.left !== null){
            stack.push(node.left)
        }
       }
    }
}

let node = new Node('N1')
let node2 = new Node('N2')
let node3 = new Node('N3')
let node4 = new Node('N4')


let tree = new BinaryTree()
tree.insert(node)
tree.insert(node2)
tree.insert(node3)
tree.insert(node4)

console.log(tree.preOrder())


