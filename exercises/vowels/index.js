// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     // debugger
//     const vowelArray = ['a', 'e', 'i', 'o', 'u']
//     let counter = 0

//     for (let letter of str.toLowerCase()) {
//         if (vowelArray.includes(letter)) {
//             counter++
//         }
//     }
//     return counter
// }

// function vowels(str) {
//     const checker = 'aeiou'
//     let count = 0

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
    // [] string contains any character inside these square brackets, let us know
    // g = make sure we don't stop at first match inside string
    // i = insensitive - case insensitive
    // match = returns array of all matches found, or null (if none found)
}

// vowels('Hi There!')
module.exports = vowels;
