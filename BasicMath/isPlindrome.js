function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;  // Return false if characters don't match
        }
        start++;  // Move towards the center from the left
        end--;    // Move towards the center from the right
    }

    return true;  // Return true if all characters match
}

const str = "madam";
const result = isPalindrome(str);
console.log(result);  // Output: true


