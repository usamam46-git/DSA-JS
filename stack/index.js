// Push Method using Array
// Implement a push in stack using an array implementation. 
// The method takes as a parameter an element and pushes it at the top of the stack maintaining FIFO method.


// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(element) {
//         this.stack.push(element)
//     }
// }


// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     pop() {
//         if(this.stack.length === 0){
//             return null
//         } else {
//             return this.stack.pop()

//         }
//     }
// }



//Push method using linked list
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.length = 0
//     }

//     push(value) {
//         let newNode = new Node(value)
//         if (this.length === 0) {
//             this.top = newNode
//             newNode.next = null
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.length++
//     }
// }


// Pop method for stack 
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.length = 0
//     }

//     push(value) {
//         let newNode = new Node(value)
//         if (this.length === 0) {
//             this.top = newNode
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.length++
//     }

//     pop() {
//         let popped = this.top
//         if (this.length === 0) {
//            return null
//         } else {
//             this.top = popped.next
//             popped.next = null
//         }
//         this.length--
//         return popped
//     }
// }
// Valid Parentheses (LeetCode 20)
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

// Every close bracket has a corresponding open bracket of the same type.



// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true


function isValid(s) {
    class stack {
        constructor() {
            this.items = []
        }
        push(element) {
            this.items.push(element)
        }
        pop() {
            return this.items.pop()
        }
        isEmpty() {
            if (this.items.length === 0) {
                return true
            } else {
                return false
            }
        }
    }
    let newStack = new stack()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            newStack.push(s[i])
        }
        if (this.isEmpty()) {
            return false
        }
        else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            let popped = newStack.pop()
            popped.push
        }

    }
};
