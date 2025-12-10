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


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    prepend(value) {
        let newNode = new Node(value)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    insert(value, index) {
        let newNode = new Node(value)
        let tempNode = this.head

        if (index < -1 || index > this.length) {
            return false
        } else if (index === -1 || index === this.length) {
            this.tail.next = newNode
            this.tail = newNode
        }
        else if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            for (let i = 0; i < index - 1; i++) {
                tempNode = tempNode.next
            }
            newNode.next = tempNode.next
            tempNode.next = newNode
        }
        this.length++

    }

    toString() {
        let tempNode = this.head;
        let result = "";

        while (tempNode !== null) {
            result += tempNode.value;
            if (tempNode.next !== null) {
                result += "=>";
            }
            tempNode = tempNode.next;
        }

        return result;
    }
}

const newLinkedList = new linkedList()

newLinkedList.append(10)
newLinkedList.append(20)
newLinkedList.append(30)
newLinkedList.prepend(100)
newLinkedList.insert(100, -1)
console.log(newLinkedList)
const stringVersion = newLinkedList.toString()
console.log(stringVersion)


