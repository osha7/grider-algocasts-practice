// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// ----------------------------------------------------

function palindrome(str) {
    debugger
let newString = str.split('').reverse().join('')
if (newString === str) {
    return true
} else {
    return false
}
}

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     return reversed === str 
// }

// function palindrome(str) {
//     // every() array helper
//     // array.every((val) => val > 5);  [0, 10,14] =>// false, true, true
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }



// palindrome('abba abba') 

module.exports = palindrome;
