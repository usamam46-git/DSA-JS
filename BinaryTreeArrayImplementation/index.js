class BinaryTree {
    constructor() {
        this.arr = []
        this.lastUsedIndex = 0
    }
    insert(value) {
        this.arr[this.lastUsedIndex + 1] = value
        this.lastUsedIndex++
    }
    levelOrder() {
        for (let i = 1; i <= this.lastUsedIndex; i++) {
            if (this.arr[i] !== undefined) {
                console.log(arr[i] + "")
            }

        }
    }
    preOrder(index = 1) {
        if (index > this.lastUsedIndex || !this.arr[index]) {
            return
        }
        console.log(this.arr[index])
        this.preOrder(index * 2)
        this.preOrder(index * 2 + 1)
    }
    inOrder(index = 1) {
        if (index > this.lastUsedIndex || !this.arr[index]) {
            return
        }
        this.inOrder(index * 2)
        console.log(this.arr[index])
        this.inOrder(index * 2 + 1)
    }
}


let binaryTree = new BinaryTree()
binaryTree.insert('N1')
binaryTree.insert('N2')
binaryTree.insert('N3')
binaryTree.insert('N4')
binaryTree.insert('N5')
binaryTree.insert('N6')
binaryTree.insert('N7')
console.log(binaryTree.inOrder())