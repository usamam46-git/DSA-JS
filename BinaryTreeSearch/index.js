//Search using level order traversal

// search(){
//     if (this.root === null) return
//     let queue = [this.root]
//     while (queue.length > 0) {
//         let node = queue.shift()
//         if (node.value === value) {
//             return true
//         }
//         if (node.left !== null) {
//             queue.push(node.left)
//         }
//         if (node.right !== null) {
//             queue.push(node.right)
//         }

//     }
//     return false
// }