
// Fibonacci Series


function fibonacii(n){
    let res= []
   let prev = 0
   let curr = 1 

   for(let i = 0  ; i< n ; i++){
    res.push(prev)

    let next = prev + curr
    prev = curr
    curr = next
   }
   return res
}

console.log(fibonacii(7))