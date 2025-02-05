function sumOfNaturalNumbersRecursion(N) {
    // Base case: when N reaches 0, the sum is 0
    if (N === 0) {
        return 0;
    }
    // Recursive case: sum of N is N + sum of (N-1)
    return N + sumOfNaturalNumbersRecursion(N - 1);
}

// Example usage
const N = 10;
console.log(`Sum of first ${N} natural numbers using recursion is:`, sumOfNaturalNumbersRecursion(N)); // Output: 55
