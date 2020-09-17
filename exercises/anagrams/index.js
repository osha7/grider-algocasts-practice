// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// --------------------------------------------------------
// doesn't work:
// function anagrams(stringA, stringB) {
//     // .replace(/[^\w]/g, "") will remove any special characters and spaces
//     const newA = stringA.replace(/[^\w]/g, "").toLowerCase()
//     const newB = stringB.replace(/[^\w]/g, "").toLowerCase()

//     const newAChars = {}
//     const newBChars = {}

//     for (let char of newA) {
//         newAChars[char] = newAChars[char] + 1 || 1
//     }
    
//     for (let char of newB) {
//         newBChars[char] = newBChars[char] + 1 || 1
//     }

//    console.log (newAChars === newBChars)

// //    return string.charAt(0).toUpperCase() + string.slice(1);
// // if (newAChars === newBChars) {
//     // return ('True')
//     // } else {
//     //     return ('False')
//     // }
//     // }

//     debugger
// }

// anagrams('RAIL! SAFETY!', 'fairy tales')
// --------------------------------------------------------
// const obj = {
//     a: 1,
//     b: 1, 
//     c: 1
// }

// // Object.keys(obj) 
// // returns array of keys from all of our obj
// Object.keys(obj).length

// function buildCharMap(str){
//     const charMap = {}

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return (false);
//     } 
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return (false)
//         }
//     }
//     return (true)
// }
// --------------------------------------------------------
// const numbers = [10,30, 5, -90, 10000]
// numbers.sort()  ==> [-90, 5, 10, 30, 10000]

// const letters = ['z', 'c', 'b', 'd', 'y']
// letters.sort = ["b", "c", "d", "y", "z"]

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return (cleanString(stringA) === cleanString(stringB))
}
// --------------------------------------------------------

module.exports = anagrams;


