//Print All Prime Number Btw 1 to n

function isPrime(num) {
   for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printAllPrime(N) {
  let prime = [];
  if (N < 2) {
    console.log("Not a prime");
    return;
  }
  for (let i = 2; i < N; i++) {
    if (isPrime(i)) {
      prime[prime.length] = i;
    }
  }
//   console.log("Prime Total", prime.length);
   console.log("Prime", prime);
}
printAllPrime(100);

//Time Complexity 
// isPrime → O(√n)
//printAllPrimes → O(N√N)