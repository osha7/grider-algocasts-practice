// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     // debugger
//     let newArray = []
  
//     let array1 = str.split(' ')
    
//     for (let i = 0; i < array1.length; i++) {
//         firstLetter = array1[i].charAt(0).toUpperCase()
//         newString = array1[i].slice(1)
//         newArray.push(firstLetter + newString)
//     }
//     return newArray.join(' ')
    
// }

// function capitalize(str) {

//     const words = []
    
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
    
// }

function capitalize(str) {
    let result = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}


// capitalize('a short sentence')
module.exports = capitalize;
