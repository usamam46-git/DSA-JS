class BinaryTree {
    constructor(){
        this.arr = []
        this.lastUsedIndex = 0
    }
    insert(value){
       this.arr[this.lastUsedIndex + 1] = value
       this.lastUsedIndex++
    }
    levelOrder(){
        for (let i = 1; i <= this.lastUsedIndex; i++) {
            if(this.arr[i] !== undefined){
                console.log(arr[i] + "")
            }
            
        }
    }
}


let binaryTree = new BinaryTree()
console.log(binaryTree)