
// const Factorial = (n) => {
 
//     if( n == 0 ) {
//         return 1
//     }

//     return n * Factorial(n-1)

// }

// let N = 5

// console.log(`Factorial ${N} numbers using recursion is:`, Factorial(N))

function Factorial(num){
    let result = 1
    for(i=1;i<=num;i++){
        result = result * i
    }
    return result
}
console.log(Factorial(0))