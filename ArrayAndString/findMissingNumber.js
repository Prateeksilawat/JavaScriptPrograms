//findMissingNumber

//Problem Statement -> Given an array containing n distinct numbers taken from the range [0, n],
// find the one number that is missing from the array.


//Brute Force Solution
function findMissingNumber(Nums) {
  let n = Nums.length;

  for (let i = 0; i <= n; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (Nums[j] === i) {
        found = true;
        break;
      }
    }
    if(!found) return i
  }
}

// let Nums = [3, 0, 1];
let Nums = [9,6,4,2,3,5,7,0,1];
console.log(`Missing Number is ${findMissingNumber(Nums)}`);
//Time Complexity O(n²)
// space Complexity O(1)


//Optimal Solution
const findMissingnumber = (Nums) => {
    
    let n = Nums.length
    let totalSum = (n*(n+1))/2
    let arrSum = 0

    for(let i = 0 ; i<n ;i++){
        arrSum = arrSum + nums[i]
    }
    return totalSum - arrSum
}

let nums = [9,6,4,8,3,5,7,0,1];
console.log(`Missing Number is ${findMissingnumber(nums)}`);
//Time Complexity O(n)
// space Complexity O(1)