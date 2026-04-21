class BSTNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return
        }
        let tempNode = this.root
        while(true){
            if(newNode.value < tempNode.value){
                if(tempNode.left === null){
                    tempNode.left = newNode
                    return
                } else {
                    if(tempNode.right === null){
                        tempNode.right = newNode
                        return
                    }
                    tempNode = tempNode.right
                }
            }
        }
    }
}

//Left nodes are less than the parent node and right nodes are greater than the parent node