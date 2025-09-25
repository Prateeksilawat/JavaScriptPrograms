
function SumOfDigit(num){

    if(num < 0) num = - num
    let sum = 0 
    while(num > 0){
        let lastDigit = num%10
        sum = sum + lastDigit
        num = Math.floor(num/10)
    }
    return sum
}

console.log(SumOfDigit(123456789))