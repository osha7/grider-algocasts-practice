// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // for every increase in n -> calculate 1 additional number -> never going to change
// // LINEAR RUNTIME
// // shortcut: have a for loop  - increment up to fixed target 
// // LINEAR RUNTIME
// function fib(n) {
//     // iterative:
//     let newArray = [0, 1]
//     for (let i = 2; i <= n; i++ ) {
//         newArray.push(newArray[i-2] + newArray[i-1])
//     }
//     return newArray[n]
// }

// recursive
// each time a single element is added to a collection,
// processing power required doubles
//  EXPONENTIAL TIME: 2^n
// any Expo Time created is an automatic no-no - ITERATIVE solution is MUCH MORE EFFICIENT
function fib(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n-1) + fib(n-2)
    }
}



module.exports = fib;
