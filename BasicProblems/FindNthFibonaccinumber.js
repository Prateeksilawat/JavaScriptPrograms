// FindNthFibonacciNumber

function findNthFibonacciNumber(n) {
    let prev = 0
    let curr = 1

    if(n === 0) return 0;
    for(let i =0 ;i<n-1 ;i++){
        let next = prev+curr
        prev = curr
        curr = next
    }
    return curr
}
console.log(findNthFibonacciNumber(5));

//Time Complexity: O(n)
//Space Complexity: O(1)