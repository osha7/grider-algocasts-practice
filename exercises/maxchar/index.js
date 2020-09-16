// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}
    let max = 0 
    let maxChar = '' 
    //  maxchar is the character  with max quantity

    //  for...of loop is used to iterate through array or string
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1
    }
    console.log(chars)

    // for...in loop is used to iterate through actual object (key: value) pairs
    // remember to iterate through object use the one that DOESN'T start with o..., but in...  for...in
    for (let char in chars) {
        if (chars[char] > max) {
            // if chars at this particular index is greater than the max,
            // we are going to update 1. max and 2. maxChar
            max = chars[char]
            maxChar = char
        }
    }
    return maxChar
}

// function maxChar(str) {
//     let charMap = {}

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
// }

module.exports = maxChar;
