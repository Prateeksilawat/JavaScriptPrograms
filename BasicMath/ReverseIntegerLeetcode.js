//Given a signed 32-bit integer x, return x with its digits reversed.
//  If reversing x causes the value to go outside the signed
//  32-bit integer range [-231, 231 - 1], then return 0.
// Example 1:
// Input: x = 123
// Output: 321
const reverse = (x) => {

    if(x<0) return -1 * reverse(-x)

        const solution = (x+"").split('').reverse().join('')

        const reversedNumber = Number(solution);
         // Check for overflow (32-bit signed integer range)
    if (reversedNumber > Math.pow(2, 31) - 1 || reversedNumber < Math.pow(-2, 31))
         {
        return 0;
    }

    return reversedNumber;
}

let x = 123
console.log(reverse(x))