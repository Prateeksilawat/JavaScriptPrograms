
const Factorial = (n) => {
 
    if( n == 0 ) {
        return 1
    }

    return n * Factorial(n-1)

}

let N = 5

console.log(`Factorial ${N} numbers using recursion is:`, Factorial(N))