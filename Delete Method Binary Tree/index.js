// //Step 1 Find the node
// //step 2 Find deepest node
// //Step 3 Set deepest node's value to current node.
// //Step 4 Delete deepest node

// deleteDeepestNode(){
//     if (this.root === null) {
//         return
//     }
//     let queue = [this.root]
//     let previousNode, presentNode = null
//     while (queue.length > 0) {
//         previousNode = presentNode
//         presentNode = queue.shift()
//         if (presentNode.left === null) {
//             previousNode.right = null
//             return
//         } else if (presentNode.right === null) {
//             presentNode.left = null
//             return
//         }
//         if (presentNode.left !== null) {
//             queue.push(presentNode.left)
//         }
//         if (presentNode.right !== null) {
//             queue.push(presentNode.right)
//         }
//     }
// }

// deleteNode(value){
//         if(this.root === null) return false

//         let queue = [this.root]
//         let nodeToDelete = null
//         let lastNode = null

//         while (queue.length > 0) {
//             lastNode  = queue.shift()
//             if(lastNode.value === value){
//                 nodeToDelete = lastNode
//             }
//             if (lastNode.left !== null) {
//                 queue.push(lastNode.left)
//             }
//             if(lastNode.right !== null){
//                 queue.push(lastNode.right)
//             }
//         }
//         if(nodeToDelete !== null){
//             nodeToDelete.value = lastNode.value
//             this.deleteDeepestNode()
//             return true
//         }

//         return false
// }

let arr = [1,2,3,4,5,6]
let min = Math.min(...arr)
console.log(arr.indexOf(min))