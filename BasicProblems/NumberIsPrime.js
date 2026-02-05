//Problem 1: Check if a Number is Prime

function CheckNumberIsPrime (num){
  if(num === 0 || num === 1) return false
    for(let i = 2 ;i< num -1 ; i++){

        if(num % i === 0){
            return false
        }
    }
    return true
    
}

console.log(CheckNumberIsPrime(5));