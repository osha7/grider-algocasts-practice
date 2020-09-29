// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2)
    
//     for (let row = 0; row < n; row++) {
//         let level = ''
        
//         for (let column = 0; column < n + (n - 1); column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }
// const columns = [0, 1, 2, 3, 4]
// const row = 0
// c = columns.length  (total rows working with)
// Math.floor(c / 2)  =>  Math.floor(5 / 2)

// // const columns = [0, 1, 2, 3, 4]
// const row = 1
// c = columns.length  (total rows working with)
// Math.floor(c / 2)  =>  Math.floor(5 / 2) (((column 2)))
// Math.floor(c / 2) + 1  =>  Math.floor(5 / 2) + 1 (((column 3)))
// Math.floor(c / 2) - 1  =>  Math.floor(5 / 2) - 1 (((column 1)))

//  using RECURSION :
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return
    }
    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1)
    }
    // midpoint calculation 
    const midpoint = Math.floor((2 * n - 1) / 2
    )
    let add
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)
}

module.exports = pyramid;
