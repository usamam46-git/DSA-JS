// // function recursiveFunction(n) {
// //     if (n < 1) {
// //         console.log('n is less than 1')
// //     } else {
// //         recursiveFunction(n - 1)
// //     }
// // }


// // console.log(recursiveFunction(3))


// function factorial(n) {
//     if (n > 0) {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(4))


// // function recursiveFunction(n) {
// //     if (n < 1) {
// //         console.log('n is less than 1')
// //     } else {
// //         recursiveFunction(n - 1)
// //     }
// // }


// // console.log(recursiveFunction(3))


// // function fibonacci(n){
// //     if(n < 0){
// //         return -1
// //     } 
// //     if(n === 0 || n === 1 ){
// //         return n
// //     }
// //     return fibonacci(n - 1) + fibonacci(n-2)
// // }


// // Sum of Digits
// // Create a recursive function that computes the sum of the digits of a given non-negative integer. For example, given the input 1234, the function should return 10 (since 1 + 2 + 3 + 4 = 10).

// // Example



// // console.log(sumOfDigits(1234)); // Output: 10
// // console.log(sumOfDigits(0));    // Output: 0
// // console.log(sumOfDigits(9));    // Output: 9
// // console.log(sumOfDigits(4321)); // Output: 10

// // function sumOfDigits(n) {
// //     if (n === 0) {
// //         return 0
// //     }
// //     return (n % 10) + sumOfDigits(Math.floor(n / 10))
// // }


// function power(base, exp) {
//     // Base case
//     if (exp === 0) {
//         return 1
//     }

//     // Recursive case
//     return base * power(base, exp - 1)
// }


// Reverse a String
// Write a recursive function reverseString(s) that takes a string s as input and returns the reversed string.



// For example:



// reverseString("hello") should return "olleh".

// reverseString("recursion") should return "noisrucer".



// Check if a String is a Palindrome
// Write a recursive function isPalindrome(s) that determines whether a given string s is a palindrome. 
// A string is a palindrome if it reads the same backward as forward (ignoring spaces, punctuation, and case sensitivity).

// Examples:

// isPalindrome("racecar") → true

// isPalindrome("hello") → false

// isPalindrome("A man, a plan, a canal, Panama") → true

// function isPalindrome(s) {
//     if (s <= 1) {
//         return true
//     }
//     if (s[0] !== s[s.length - 1]){
//         return false
//     }
//         return isPalindrome(s.slice(1, (s.length - 1)))
// }



// function reverseString(s) {
//     // Base case
//     if (s === "") {
//         return ""
//     }

//     // Recursive case
//     return s[s.length - 1] + reverseString(s.slice(0, s.length - 1))
// }

// let str = 'Hello'

// console.log(str.split("").reverse().join(""))
