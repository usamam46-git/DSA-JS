//Queue questions


// class Queue {
//   constructor() {
//     this.queue = [];
//   }

// enqueue(val) {
//     this.queue.push(val)
// }

// dequeue() {
//     if (this.queue.length === 0) {
//         return null
//     }
//     return this.queue.shift()
// }

//   peek() {
//     if(this.queue.length === 0){
//         return null
//     }
//     return this.queue[0]
//   }
// }


// class Queue {
//     constructor() {
//         this.queue = []
//     }
//     enqueue(val) {
//         this.queue.push(val)
//     }

//     dequeue() {
//         if (this.queue.length === 0) {
//             return null
//         }
//         return this.queue.shift()
//     }
//     isEmpty() {
//         this.queue.length === 0 ? false : true
//     }
// }


// Circular Queue Using Arrays
// Implement a circular queue using an array . A circular queue is a linear data structure that follows the First-In-First-Out (FIFO) principle 
// but connects the last position back to the first position, forming a circle. This design allows for efficient utilization of space, especially when the queue is full and elements are dequeued.

// Your task is to create a CircularQueue class with the following methods:

// enqueue(value): Adds an element to the rear of the queue. If the queue is full, it should overwrite the oldest element.

// dequeue(): Removes and returns the front element of the queue. If the queue is empty, it should return null.

// isEmpty(): Returns true if the queue is empty; otherwise, returns false.

// isFull(): Returns true if the queue is full; otherwise, returns false.

// peek(): Returns the front element without removing it. If the queue is empty, it should return null.



// const queue = new CircularQueue(3);
// console.log(queue.isEmpty()); // Output: true
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.isFull()); // Output: true
// console.log(queue.peek());   // Output: 1
// console.log(queue.dequeue()); // Output: 1
// queue.enqueue(4);
// console.log(queue.peek());   // O

// class CircularQueue {
//     constructor(size) {
//       this.queue = new Array(size)

//     }

//     enqueue(val) {
//         this.queue.push(val)
//     }

//     dequeue() {
//         if (this.queue.length === 0) {
//             return null
//         }
//         return this.queue.shift()
//     }

//     peek() {
//         if (this.queue.length === 0) {
//             return null
//         }
//         return this.queue[0]
//     }

//     isEmpty() {
//         if (this.queue.length === 0) {
//             return true
//         } else {
//             return false
//         }
//     }

//     isFull() {
//         // Return true if the queue is full
//     }

// }


// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// function reverseQueue(queue) {
//   let reversed = queue.items.reverse()
//   queue.items = reversed
//   return queue
// }



// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// // console.log(queue)

// const reversedQueue = reverseQueue(queue);
// console.log(reversedQueue.dequeue()); // Output: 3
// console.log(reversedQueue.dequeue()); // Output: 2
// console.log(reversedQueue.dequeue()); // Output: 1




// class Queue {
//   constructor(maxSize) {
//     this.items = []
//     this.maxSize = maxSize
//   }

//   enqueue(element) {
//     if (this.items.length === this.maxSize) {
//       throw new Error("Queue Overflow")
//     }
//     this.items.push(element)
//   }

//   dequeue() {
//     if (this.items.length === 0) {
//       throw new Error("Queue Underflow")
//     }
//     return this.items.shift()
//   }

//   isEmpty() {
//     return this.items.length === 0
//   }

//   isFull() {
//     return this.items.length === this.maxSize
//   }

//   size() {
//     return this.items.length
//   }
// }



// Merge Two Queues
// Merge two queues into a single queue. A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front. You will implement a function that takes two queues as input and returns a new queue containing all elements from both input queues.

// Requirements:

// Implement the mergeQueues function that accepts two queues as parameters.

// The function should return a new queue containing all elements from both input queues.

// Do not modify the original input queues.



// Example

// const queue1 = new Queue();
// queue1.enqueue(1);
// queue1.enqueue(2);
// queue1.enqueue(3);

// const queue2 = new Queue();
// queue2.enqueue(4);
// queue2.enqueue(5);

// const mergedQueue = mergeQueues(queue1, queue2);

// console.log(mergedQueue.size()); // Output: 5
// console.log(mergedQueue.dequeue()); // Output: 1
// console.log(mergedQueue.dequeue()); // Output: 2
// console.log(mergedQueue.dequeue()); // Output: 3
// console.log(mergedQueue.dequeue()); // Output: 4
// console.log(mergedQueue.dequeue()); // Output: 5


// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             throw new Error("Queue Underflow")
//         }
//         return this.items.shift();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length
//     }
// }

// function mergeQueues(queue1, queue2) {
//     for (let i = 0; i < queue2.items.length; i++) {
//         queue1.items.push(queue2.items[i])
//     }
//     return queue1
// }

// const queue1 = new Queue();
// queue1.enqueue(1);
// queue1.enqueue(2);
// queue1.enqueue(3);
// // console.log(queue1)

// const queue2 = new Queue();
// queue2.enqueue(4);
// queue2.enqueue(5);
// // console.log(queue2)

// const mergedQueue = mergeQueues(queue1, queue2);
// console.log(mergedQueue)








// Reverse a Queue
// Implement a function to reverse the elements of a queue. A queue follows the First-In-First-Out (FIFO) principle, meaning elements are added at the rear and removed from the front. Reversing a queue will change the order of elements so that the first element becomes the last, the second becomes the second last, and so on.

// Your task is to create a function reverseQueue(queue) that takes a queue as input and returns a new queue with the elements in reverse order.



// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// const reversedQueue = reverseQueue(queue);
// console.log(reversedQueue.dequeue()); // Output: 3
// console.log(reversedQueue.dequeue()); // Output: 2
// console.log(reversedQueue.dequeue()); // Output: 1



// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// function reverseQueue(queue) {
//   let tempQueue = new queue()
//   let reversed = tempQueue.items.reverse()
//   return reversed
// }


// Implement Stack using Queues
// A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, where elements are added and removed from the same end, known as the top. Implement a stack using two queues. The stack should support the following operations:

// push(element): Add an element to the top of the stack.

// pop(): Remove and return the top element of the stack.

// peek(): Return the top element of the stack without removing it.

// isEmpty(): Check if the stack is empty.

// Example


class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}


class Stack {
  constructor() {
    this.q1 = new Queue()
    this.q2 = new Queue()
  }

  push(element) {
    this.q2.enqueue(element)

    while (!this.q1.isEmpty()) {
      this.q2.enqueue(this.q1.dequeue())
    }
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error 
    }
    return this.q1.dequeue()
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error
    }
    return this.q1.peek()
  }

  isEmpty() {
    return this.q1.isEmpty()
  }
}









