// Maximum Subarray Problem (Kadane’s Algorithm)

function MaxSubArray(nums){
   
  let maxSum = nums[0]
  let currentSum = 0

  for(let i=0 ;i<nums.length;i++){

    currentSum =  currentSum + nums[i]
    maxSum = Math.max(currentSum,maxSum)

    if(currentSum < 0){
        currentSum = 0
    }
  }
  return maxSum
     
}

let nums = [2,-5,6,-2,-3,1,5,-6]
console.log(MaxSubArray(nums));// output -> 7

// Also show which subarray gives max sum
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let currentSum = 0;
//   let start = 0, end = 0, tempStart = 0;

//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       start = tempStart;
//       end = i;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//       tempStart = i + 1;
//     }
//   }

//   return { maxSum, subarray: nums.slice(start, end + 1) };
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// //  Output: { maxSum: 6, subarray: [4, -1, 2, 1] }

