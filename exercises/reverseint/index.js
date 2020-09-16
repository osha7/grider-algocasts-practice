// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // debugger
    // Math.sign(n) can be only 1 of 2 diff values 1 or -1 depend. on sign of n (positive or negative)
    return Math.sign(n)*parseInt(n.toString().split('').reverse().join(''))
}

// reverseInt(189)

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//     if (n < 0) {
//         return parseInt(reversed) * -1
//     } 
//     return parseInt(reversed)
// }

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//   return parseInt(reversed) * Math.sign(n)
// }


module.exports = reverseInt;
