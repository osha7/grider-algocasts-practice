// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     // debugger
//     for(let row = 0; row < n; row++) {
//         let step = ''
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += '#'
//             } else {
//                 step += ' '
//             }
//         }
//         // console.log each step(each for loop), not the end of the function
//         console.log(step)
//     }
// }

// function steps(n) {
//     // think of as indeces (matrix)
//     // iterating through rows and columns
//     for (let row = 0; row < n; row++) {
//         let stair = ''
//         // if the current column is equal to or less than the current row -> we get a pound
//         // if c is greater than r -> we get a space
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair) 
//         // console.log before you leave original for loop
//     }
// }

function steps(n, row = 0, stair = '') {
//    using recursion: Recursive Solution
    // first establish base case
    if (n === row) {
        return
    } 
    if (n === stair.length) {
        // only recursion:
        console.log(stair)
        steps(n, row + 1)
        // don't call stair bc on next want to call empty stair again
        return
    }
    // if (stair.length <= row) {
    //     stair += '#'
    // } else {
    //     stair += ' '
    // }
    const add = stair.length <= row ? '#' : ' ';
    // still working on same row here:
    steps(n, row, stair + add)
}
    
module.exports = steps;

// https://dev.to/tadea/printing-staircase-in-javascript-56f3

// ******************************************
// recursion:
// ******************************************
// function printNumber(n) {
     // first establish base case
    // ***** n ===0 is the BASE CASE (it's when we exit our function)
//     if (n === 0) {
//         return;
//     } 
//     console.log(n);
//     printNumber(n - 1);
//      ^^this is the recursive step
// }

// Recursion Tips:
// 1.  Figure out the bare minimum pieces of information to represent your problem
//             *bare minimum in example function is the current counter
// 2.  Give reasonable defaults to the bare minimum pieces of the information
//             *if other optional imputs (arguments) make sure you give reasonable info so don't end up in infinite loop
//             ex: function printNumber(n, decrement = 1) ***if you don't put default (here: 1) it will be infinite loop
//             then: printNumber(n - decrement)
// 3.  Check the base case.  Is there any work left to do? if not, return
// 4.  Do some work.  Call your functin again, making sure the arguments have changed in some fashion
//         * whenever we call that function again, CHANGING THE ARGUMENTS IN SOME WAY
//         * the arguments HAVE to change - or infinite.loop