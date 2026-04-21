class Node {
    constructor(value) {
        this.value = value
    }
}

class Tree {
    constructor() {
        this.root = null
        this.children = []
    }
    addChild(childNode) {
        this.children.push(childNode)
    }
    removeChild(childNode) {
        let index = this.children.indexOf(childNode)
        if (index !== -1) {
            this.children.splice(index, 1)
        }
    }

    delete() {
        let location = this.search(value)
        if(location === -1){
            return false
        } else {
            this.arr[location] = this.arr[this.lastUsedIndex]
            this.arr.pop()
            this.lastUsedIndex--
            return true
        }
    }
}


let tree = new Tree()
let newNode = new Node(12)
let two = new Node(13)
let three = new Node(14)
let four = new Node(15)
tree.addChild(newNode)
tree.addChild(two)
tree.addChild(three)
tree.addChild(four)

console.log(tree.removeChild(four))



