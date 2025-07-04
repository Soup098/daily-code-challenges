/*
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
*/

const intArray = [3, 4, -1, 1, 7, -3, 5, 8, 2, 14, -4, 10]
let swapped = true

while(swapped){//BUBBLE SORT ALGORITHM FTW
    swapped = false
        for(i=0; i<intArray.length; i++){
            if(intArray[i] > intArray[i+1]){
                let temp = intArray[i]
                intArray[i] = intArray[i+1]
                intArray[i+1] = temp
                swapped = true
            }
            
        }
}
    
let missingInt = 0

for(let i=0; i< intArray.length; i++){
    if(intArray[i] > 0 && intArray[i + 1] != intArray[i] + 1){
        missingInt = intArray[i] + 1
        break
    }
}

console.log(missingInt)

//SOLVED