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

//     append(value) {
//         const newNode = new Node(value);
//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//    reverseTraverse() {
//     let tempNode = this.tail;
//     while (tempNode !== null) {
//         console.log(tempNode.value);
//         tempNode = tempNode.prev;
//     }
// }

// }

//Pop First


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

//     append(value) {
//         const newNode = new Node(value);
//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//     popFirst() {
//        if(this.length === 0){
//         return null
//        }
//        if(this.length === 1){
//         this.head = null
//         this.tail = null
//         this.length--
//         return popped
//        } else {
//         let popped = this.head
//         this.head = popped.next
//         popped.next.prev = null
//         popped.next = null
//         return popped
//        }
//     }
// }


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        // TO DO
    }
}






