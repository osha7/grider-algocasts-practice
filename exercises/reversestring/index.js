// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// --------------------------------------------------

// function reverse(str) {
//     let splitString = str.split("")
//     let reverseArray = splitString.reverse()
//     let joinArray = reverseArray.join("")
//     return joinArray
// }

// function reverse(str) {
//     let arr = str.split('')
//     arr.reverse()
//     return arr.join('')
// }

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

function reverse(str) {
    let reversed = ''
    // for of loop introduced ES2015
    // better than for (i=0; i < str.length; i++)
    for (let character of str) {
        reversed = character + reversed
        // debugger
    }
    return reversed
}

// function reverse(str) {
//     // reduce helper ES5.1
//     // reduce takes 2 arguments (arrow function, starting initial value for function(empty string here))
//     // return str.split('').reduce((reversed, character) => {
//     //     return character + reversed
//     // }, '')
//     // debugger  - node inspect index.js - repl - 
//     return str.split('').reduce((rev, char) => char + rev, '')
// }

// manual function call invokes the function for debugger:
// reverse('asdf')

module.exports = reverse;
