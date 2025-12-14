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


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class CircularDoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     append(value) {
//         let newNode = new Node(value)
//         if (this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//             newNode.next = newNode
//             newNode.prev = newNode
//         } else {
//             let tempNode = this.tail
//             tempNode.next = newNode
//             newNode.prev = tempNode
//             this.tail = newNode
//             newNode.next = this.head
//             this.head.prev = newNode
//         }
//         this.length++
//     }

//     prepend(value) {
//         let newNode = new Node(value)
//         if (this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//             newNode.next = newNode
//             newNode.prev = newNode
//         } else {
//             let tempNode = this.head
//             newNode.next = tempNode
//             tempNode.prev = newNode
//             this.head = newNode
//             this.tail.next = newNode
//             newNode.prev = this.tail
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

// class CircularDoublyLinkedList {
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
//             newNode.next = newNode;
//             newNode.prev = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.head.prev = newNode;
//             newNode.prev = this.tail;
//             newNode.next = this.head;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//     prepend(value) {
//         const newNode = new Node(value)
//         if (this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//             newNode.next = newNode
//             newNode.prev = newNode
//         } else {
//             this.tail.next = newNode
//             this.head.prev = newNode
//             newNode.prev = this.tail
//             newNode.next = this.head
//             this.head = newNode;
//         }
//         this.length++
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) {
//             return null;
//         }

//         let currentNode;
//         if (index < Math.floor(this.length / 2)) {
//             currentNode = this.head;
//             for (let i = 0; i < index; i++) {
//                 currentNode = currentNode.next;
//             }
//         } else {
//             currentNode = this.tail;
//             for (let i = this.length - 1; i > index; i--) {
//                 currentNode = currentNode.prev;
//             }
//         }

//         return currentNode;
//     }

//     insert(index, value) {
//         if (index < 0 || index > this.length) {
//             return null
//         }
//         if (index === 0) {
//             this.prepend(value)
//         }
//         if (index === this.length) {
//             this.append(value)
//         } else {
//             let newNode = new Node(value)
//             let tempNode = this.get(index - 1)
//             newNode.next = tempNode.next
//             newNode.prev = tempNode
//             tempNode.next = newNode
//             tempNode.next.prev = newNode
//         }
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
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            this.tail.next = newNode;
            this.head.prev = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode;
        if (index < Math.floor(this.length / 2)) {
            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }

        return currentNode;
    }

    popFirst() {
        if (this.length === 0) {
            return null;
        }
    
        const poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            poppedNode.next = null;
            poppedNode.prev = null;
            this.head.prev = this.tail;
            this.tail.next = this.head;  
        }
        this.length--;
        return poppedNode;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
    
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            poppedNode.next = null;
            poppedNode.prev = null;
            this.tail.next = this.head;
            this.head.prev = this.tail;
            
        }
        this.length--;
        return poppedNode;
    }

    delete(index) {
        if(index === 0){
            this.popFirst()
        }
        if(index === this.length){
            this.pop()
        } else {
            let deleted = this.get(index)
            deleted.prev.next = deleted.next
            deleted.next.prev = deleted.prev
        }
    }

}






