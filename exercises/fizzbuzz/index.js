// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// ------------------------------------
// doesn't work:
// function fizzBuzz(n) {
//     // const numberArray = [1..n]
//     debugger
//     // const numberArray = Array.from(Array(n).keys())
//     const numberArray = Array.from({length: 10}, (_, i) => i + 1)
//     for (let i of numberArray) {
//         if (i%3 === 0 && i%5 === 0) {
//             console.log ("fizzbuzz")
//         } else if (i%3 === 0) {
//             console.log ("fizz")
//         } else if (i%5 === 0) {
//             console.log ("buzz")
//         } else {
//             console.log (i)
//         }
//     }
// }
// fizzBuzz(100)

// modulo operator : determine remainder of number during division
// 10 % 3  //=> 1 (remainder is 1)

function fizzBuzz(n) {
    //    specifically start at 1
        for (i = 1; i <= n; i++) {
            if (i%3 === 0 && i%5 === 0) {
                // or if (i%15 === 0) {
                console.log ("fizzbuzz")
            } else if (i%3 === 0) {
                console.log ("fizz")
            } else if (i%5 === 0) {
                console.log ("buzz")
            } else {
                console.log (i)
            }
        }
    }


module.exports = fizzBuzz;
