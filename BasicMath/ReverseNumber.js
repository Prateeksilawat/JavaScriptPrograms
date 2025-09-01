
function ReverseNumber(num){

    if(num >=0 && num <= 9){
        return num
    }

    let ReverseNum = 0 
    while(num != 0){
        ReverseNum = ReverseNum * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return ReverseNum
}

console.log(ReverseNumber(5));
console.log(ReverseNumber(123456));
console.log(ReverseNumber(10987654321));