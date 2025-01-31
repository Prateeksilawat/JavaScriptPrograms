const AllDivisors = (num) => {
  
  let divisors = []
  let SqrtN = Math.sqrt(num)

  for(let i=1 ; i<=SqrtN ; i++){
     if(num % i === 0 ){
        divisors.push(i)

        if(i != num/i){
            divisors.push(num/i)
        }
     }
  }
//   console.log(`All Divisors of ${num} ${divisors}`)
  console.log(  divisors)

}

AllDivisors(12)
AllDivisors(36)
AllDivisors(27)
AllDivisors(32)