// let arr = [1,2,3,4,5,6,7,8]
//Finding 1 out of this will be the easiest case. This will be represented as greek letter Omega(Best case)
//Finding 4 out of this will be an average case. So in greek letter, it will be represented as big Heta.
//The worst case would be to find 8 of it because being placed in the end. This will be represented as Big O in greek letter

//We are always going to look at the worst case Big O

//O(1) Contant time complexity
function multiplyNumbers(n){
   return n*n
}

// console.log(multiplyNumbers(5))

//O(n) Linear time complexity
// function printItem(n){
//     for (let i = 0; i <= n; i++) {
//         console.log(i)
//     }
// }
// printItem(10)


// O(2n) Drop Contant  -> Means we can drop the contant which is 2 here. Contants can vary from devices to devices.
// A n approaches to infinity. Contstant factors are not really a big deal. 
// In Big O we remove constant factors. Makes algorithms easier to compare with each other.
// function printItem(n){
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
//     for (let j = 0; j < n; j++) {
//         console.log(j);
        
//     }
// }
// printItem(10)


// O(n*2) Quadratic time complexity
// This is performing 100 operations n*2
// In the similar manner, if we add another loop inside, lets say k, It will perform operations 1000 number of times. n*3 basically.
// But it doesn't matter how much, we are still going to write this as O(n*2)
// Generally considered inefficient as compared to O(n) times complexity.

// function printItem(n){
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i,j);
//         }
//     }
// }
// printItem(10)


//O(n*2 + n) Below is an example for the time complexity where we can drop the n
//Because this n is not going to affect the n*2 so we can easily drop that non dominant.
//This will make it easy for us when we are measuring time complexity for a function.
// function printItem(n){
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i,j);
//         }
//     }
//     for (let k = 0; k < n; k++) {
//         console.log(k)
        
//     }
// }
// printItem(10)


//O(log n) Logarithmic expression 
//Very efficient because less number of operations
let array = [1,2,3,4,5,6,7,8]
//Dividing it into parts will be total three number of steps for these 8 numbers. 
//Less number of operations as compared to others. Graph in notes for demonstartion.



//The complexity for this function below will be O(a+b). We can't write it as O(2n) because both a and b variables can be different.
//This basically means "Do this and when you are done with that. Do the next one"
// function printItem(a , b){
//     for (let i = 0; i < a; i++) {
//         console.log(i)
//     }
//     for (let j = 0; j < b; j++) {
//         console.log(j);
        
//     }
// }
// printItem(10)


//Similarly below is the example for O(a*b). Nested loop. That basicaly means "Do this while you are doing that."

// function printItem(a, b){
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             console.log(i,j);
//         }
//     }
// }
// printItem(10)



//Here below it will called as O(1) not O(2n) or O(n*2) space complexity because it will be linear. Execution for function will be done once.
function pairSumSequence(n){
    let total = 0
    for (let i = 0; i <= n; i++) {
       total = total + pairSum(i, i+1)
    }
    return total
}

function pairSum(a,b){
    return(a + b)
}

console.log(pairSumSequence(3))










