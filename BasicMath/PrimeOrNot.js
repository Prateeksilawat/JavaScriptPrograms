// const NumberPrime = (num) => {

//     let count = 0
//     for(let i = 1 ;i<= Math.sqrt(num) ; i++){

//         if(num%i === 0){
//             count++

//             if(num/i != i){
//                 count++
//             }
//         }
//     }

//     if(count === 2){
//         console.log('Number is Prime');

//     }else{
//         console.log('Number is not Prime');

//     }
// }

// NumberPrime(83)
// NumberPrime(73)
// NumberPrime(1)

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
      if (num / i != i) {
        count++;
      }
    }
  }
  if (count === 2) {
    console.log("Is a Prime number");
  } else {
    console.log("Not a prime number");
  }
}

isPrime(101);
