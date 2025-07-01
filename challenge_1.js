/*
*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
*
*For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*
*Bonus: Can you do this in one pass?
*/

const numsList = [5, 3, 8, 9]

function sumIsK(list, number){
    let sumEqualsK = false
        for(let i = 0; i < list.length; i++){
            for(let j = 0; j < list.length; j++){
                if(list[i] + list[j] === number){
                    sumEqualsK = true
                }
            }   
        }
    return sumEqualsK
}

console.log(sumIsK(numsList, 1)) //false
console.log(sumIsK(numsList, 8)) //true
console.log(sumIsK(numsList, 13)) //true
console.log(sumIsK(numsList, 10)) //true
console.log(sumIsK(numsList, 11)) //true
console.log(sumIsK(numsList, 24)) //false