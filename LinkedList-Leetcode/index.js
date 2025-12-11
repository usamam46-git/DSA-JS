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


 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 

function removeElements(head, val) {
    let current = head
    while (current && current.next) {
        current = current.next
        if(current.val === val){
            current.next = current.next.next
        }
    }
    return current
};