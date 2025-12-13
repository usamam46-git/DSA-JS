// function findMissing(arr) {
//     let n = 100
//     let sum = n*(n + 1) / 2
//     let arrSum = arr.reduce((a, b) => ( a + b ), 0)
//     let answer = sum - arrSum
//     return answer
// }

// findMissing([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
//   51, 52, 53, 54, 55, 56, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//   71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//   81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
//   91, 92, 93, 94, 95, 96, 97, 98, 99, 100
// ])


// class linkedList {
//     constructor(value){
//        const newNode = new Node(value)
//        this.head = newNode
//        this.tail = newNode
//        this.length = 1
//     }
// }

// const newLinkedList = new linkedList(10)
// console.log(newLinkedList)


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
//     append(value) {
//         const newNode = new Node(value)
//         if (this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//     }

//     prepend(value) {
//         let newNode = new Node(value)
//         if (this.length == 0) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.length++
//     }

//     insert(value, index) {
//         let newNode = new Node(value)
//         let tempNode = this.head

//         if (index < -1 || index > this.length) {
//             return false
//         } else if (index === -1 || index === this.length) {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         else if (index === 0) {
//             newNode.next = this.head
//             this.head = newNode
//         } else if (this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             for (let i = 0; i < index - 1; i++) {
//                 tempNode = tempNode.next
//             }
//             newNode.next = tempNode.next
//             tempNode.next = newNode
//         }
//         this.length++

//     }

//     toString() {
//         let tempNode = this.head;
//         let result = "";

//         while (tempNode !== null) {
//             result += tempNode.value;
//             if (tempNode.next !== null) {
//                 result += "=>";
//             }
//             tempNode = tempNode.next;
//         }

//         return result;
//     }
//     traverse() {
//         let current = this.head
//         while (current !== null) {
//             current = current.next
//             console.log(current.value)
//         }
//     }

//     get(index) {
//         let current = this.head
//         let order = 0
//         while (current.next !== null) {
//             current = current.next
//             order++
//             if (order === index) {
//                 return current.value
//             }
//         }
//         return null
//     }

//     search(target) {
//         let current = this.head
//         let index = 0
//         while (current !== null) {
//             if (current.value === target) {
//                 return `${index} ${current.value}`
//             }
//             current = current.next
//             index++
//         }
//         return -1
//     }

//     // setValue(target, index){

//     // }
//     popFirst() {
//         let popped = this.head

//         if (popped.next !== null || this.length === 0) {
//             this.head = popped.next
//             return popped
//         } else {
//             return null
//         }
//     }
// }

// const newLinkedList = new linkedList()

// newLinkedList.append(10)
// newLinkedList.append(20)
// newLinkedList.append(30)
// newLinkedList.prepend(100)
// newLinkedList.insert(100, -1)
// let value = newLinkedList.get(2)
// // console.log(value)
// // console.log(newLinkedList)
// const popped = newLinkedList.popFirst()
// console.log(popped)
// console.log(newLinkedList)
// // console.log(stringVersion)


// Remove Duplicates from Sorted List (LeetCode 83)
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.     

// Example 1:

// Input: head = [1,1,2] 
// Output: [1,2] 
// Example 2:   

// Input: head = [1,1,2,3,3] 
// Output: [1,2,3]    


// Constraints:  The number of nodes in the list is in the range [0, 300].

// -100 <= Node.val <= 100

// The list is guaranteed to be sorted in ascending order.   


// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }

// function deleteDuplicates(head) {
//     let current = this.head
//     while (current.next !== null) {
//         current = current.next
//         if(current.value === current.next.value){
//             let tempNode = current.next
//             current.next = tempNode.next
//         }
//     }
// }



// /*
//   For your reference:

//   SinglyLinkedListNode {
//       int data;
//       SinglyLinkedListNode next;}

// function CompareLists(llist1, llist2) {
//     let current1 = llist1.head
//     let current2 = llist2.head
//     let length1 = 0
//     let length2 = 0
//     while (current1.next !== null) {
//         current1 = current1.next
//         length1++
//     }
//     while (current2.next !== null) {
//         current2 = current2.next
//         length2++
//     }
//     if (length1 === length2) {
//         return 1
//     } else {
//         return 0
//     }
// }


// Remove Linked List Elements (LeetCode 203)
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



// Example 1:



// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []


//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//  }


// function removeElements(head, val) {
//     let current = head
//     while (current && current.next) {
//         current = current.next
//         if(current.val === val){
//             current.next = current.next.next
//         }
//     }
//     return current
// };



// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example

// headA refers to 1->3->7-> null  
// headB refers to 1->2->null 
// The new list is 1->1->2->3->7-> null 
// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// SinglyLinkedListNode pointer headA: a reference to the head of a list

// SinglyLinkedListNode pointer headB: a reference to the head of a list

// Returns

// SinglyLinkedListNode pointer: a reference to the head of the merged list   


// const SinglyLinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };


// function mergeLists(head1, head2) {
//     let current1 = head1
//     let current2 = head2
//     while (current1 && current1.next) {
//         current1.next = current2
//         while (current2 && current2.next) {

//         }
//     }
// }


// Palindrome Linked List (LeetCode 234)
// Given the head of a singly linked list, return true if it is a palindrome orfalseotherwise.



// Example 1:



// Input: head = [1,2,2,1]
// Output: true
// Example 2:



// Input: head = [1,2]
// Output: false



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}




function isPalindrome(head) {
    let current = head
    let arr = []
    while(current && current.next !== null){
       arr.push(current.val)
       current = current.next
    }
    let reversedArr = arr.reverse()
    if(arr === reversedArr){
        return true
    }
    else{
        return false
    }
};