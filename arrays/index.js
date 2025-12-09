// Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

// Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9].

// Hint: Start from 1 and keep adding 2 until you have n elements.

// let newArr = [] 
// function createOddNumbersArray(n) {
//     for (let i = 1; i <= n; i++) {
//         newArr.push[i+2];
//     }
//     return newArr
// }

// createOddNumbersArray(5)



function reverseArray(arr){
    return arr.reverse()
}

reverseArray([1,2,3,4])

// function reverseArray(arr){
//     return arr.reverse()
// }

// reverseArray([1,2,3,4])


// function reverseArray(arr){
//    for (let i = 0; i < arr.length; i++) {


//    }
// }

// Implement a function modifyArray that takes an array and two additional arguments:

// index – the position where a new element should be added.

// value – the value to insert at the given index.



// This function should add the element at the specified index and return the modified array. If index is out of range, add value at the end.



// Example: modifyArray([10, 20, 30], 1, 15) should return [10, 15, 20, 30].

// function modifyArray(arr,index,value){
//     if(index > (arr.length - 1)){
//         arr.push(value)
//         return arr
//     } else {
//         arr.splice(index,0, value)
//         return arr
//     }
// }

// modifyArray([10, 20, 30], 4, 15)

// Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.

// Example: findMinMax([3, 5, 7, 2, 8]) should return { min: 2, max: 8 }.
// Hint: Use a loop to keep track of the smallest and largest numbers or apply Math.min and Math.max.


// let arr = [1,2,3,4,5,6]
// console.log(Math.min(...arr))


// function findMinMax(arr){
//   return {min: (Math.min(...arr)),
//           max: (Math.max(...arr))
//   }
// }
// findMinMax([3, 5, 7, 2, 8])

// Write a function sumArray that takes an array of numbers and returns the sum of all elements.

// Example: sumArray([5, 10, 15]) should return 30.



// Hint: Use a loop to accumulate the sum or try JavaScript’s reduce method.


// function sumArray(arr) {
//     let sum = arr.reduce((a, b) => (a + b), 0)
//     return sum
// }
// sumArray([5, 10, 15])



// LeetCode 1 - Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// function giveIndices(array, target) {
//     // let newArr = []
//     // array.map((element, index) => {
//     //     if (element + (element[index + 1]) == target){
//     //         newArr.push(element)
//     //         newArr.push(element[index + 1])
//     //         return newArr
//     //     } else {
//     //         return "No indices of sum found!"
//     //     }
//     // })
//     // console.log(array)

//     array.map((element, i) => {
//        let otherNumber = target - element
//        return otherNumber[i]
//     })
// }

// console.log(giveIndices([2,7,11,15], 9))

// function twoSum(nums, target) {
//   let map = {}; // value -> index

//   for (let i = 0; i < nums.length; i++) {
//     let current = nums[i];
//     let complement = target - current;

//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], i];
//     }

//     map[current] = i;
//   }
// }

// twoSum([2,7,11,15], 18)

// function twoSum(nums, target) {
//     const numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
//     return [];
// }
// twoSum([2,7,11,15], 18)












