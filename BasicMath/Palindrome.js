function isPalindrome(num) {
    // If the number is negative, it's not a palindrome
    if (num < 0) {
      return false;
    }
  
    let originalNum = num;
    let reversedNum = 0;
  
    // Reverse the number
    while (num > 0) {
      let lastDigit = num % 10;  // Get the last digit
      reversedNum = reversedNum * 10 + lastDigit; // Build the reversed number
      num = Math.floor(num / 10); // Remove the last digit from the original number
    }
  
    // Compare the original number with the reversed number
    return originalNum === reversedNum;
  }
  
  // Test examples
  console.log(isPalindrome(121));  // true
  console.log(isPalindrome(-121)); // false
  console.log(isPalindrome(10));   // false
  