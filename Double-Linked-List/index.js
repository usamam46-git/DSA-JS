// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
    
//     toString() {
//         let tempNode = this.head;
//         let result = '';
//         while (tempNode) {
//             result += tempNode.value;
//             if (tempNode.next) result += ' <-> ';
//             tempNode = tempNode.next;
//         }
//         return result;
//     }

 

//     append(value) {
//         let newNode = new Node(value)
//         if(this.length === 0){
//             this.head = newNode
//             this.tail = newNode
//         } else{
//             let tempNode = this.tail
//             this.tail = newNode
//             tempNode.next = newNode
//             newNode.prev = tempNode
//             newNode.next = null
//         }
//         this.length++
//     }
// }



//Doing Prepend
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     prepend(value) {
//         let newNode = new Node(value)
//         if(this.length === 0){
//             this.head = newNode
//             this.tail = newNode
//         } else {
//          let tempNode = this.head
//          this.head = newNode
//          newNode.next = tempNode
//          tempNode.prev = newNode
//          newNode.prev = null
//         }
//         this.length++
//     }
// }

