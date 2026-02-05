//Problem 1: Check if a Number is Prime

//Brute Force Approach
//Time complexity O(n)
function CheckNumberIsPrime (num){
  if(num === 0 || num === 1) {
    console.log(`Number ${num} is not Prime`)
    return
  }
    for(let i = 2 ;i< num -1 ; i++){

        if(num % i === 0){
            console.log(`Number ${num} is not Prime`)
            return 
        }
    }
 
console.log( `Number ${num} is Prime`)    
}
CheckNumberIsPrime(28)

//Optimal Approch
//Time complexity O(√n)
function CheckNumberIsPrime (num){
  if(num === 0 || num === 1) {
    console.log(`Number ${num} is not Prime`)
    return
  }
    for(let i = 2 ;i*i <= num  ; i++){

        if(num % i === 0){
            console.log(`Number ${num} is not Prime`)
            return 
        }
    }
 
console.log( `Number ${num} is Prime`)    
}
CheckNumberIsPrime(28)