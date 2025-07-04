
const numsArray =[4, 8, 2, 9, 7]

let totalProduct = numsArray.reduce((acc, val) => acc * val, 1)

let resultsArray = numsArray.map(num => totalProduct / num)

console.log(resultsArray)