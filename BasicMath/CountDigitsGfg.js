//Given a positive integer n, count the number of digits in n that divide n evenly
//  (i.e., without leaving a remainder). Return the total number of such digits.
// A digit d of n divides n evenly if the remainder when n is divided by d is 0
//  (n % d == 0).
// Digits of n should be checked individually. If a digit is 0, it should be 
// ignored because division by 0 is undefined.
function CountDigits(n) {
  let count = 0;
  let temp = n;

  while (temp > 0) {
    //get last digit
    let digit = temp % 10;
    //remove the last digit
    temp = Math.floor(temp / 10);

    if (digit !== 0 && n % digit === 0) {
      count++;
    }
  }
  return count;
}
let n = 2446;
console.log(CountDigits(n));
