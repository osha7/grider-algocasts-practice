// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     // debugger
//     const chunkedArray = []
//     // let newArray = [...array]
//     let i = 0
//     while (i < array.length) {
//         chunkedArray.push(array.slice(i, size + i))
//         i += size
//     }
//     return chunkedArray
// }


// // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

// function chunk(array, size) {
//     const chunked = []
//     for (let element of array) {
//         const last = chunked[chunked.length - 1]
//         // chunked at chunked.length minus 1 (chunked at index [xyz])
//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked
// }

function chunk(array, size) {
    const chunked = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        // array.slice produces a new array
        index += size 
        // bc we are taking big scoops out of the array instead of 1 each time
    }
    return chunked
}
// const letters = ['a', 'b', 'c', 'd', 'e']
// letters.slice(0, 3) //=> ['a', 'b', 'c'] (up until, but not including element 3 )

module.exports = chunk;
