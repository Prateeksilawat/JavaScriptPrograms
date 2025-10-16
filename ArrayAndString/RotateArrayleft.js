////RotateArrayLeft

// function RotateArrayLeft(nums,k){
//  let n = nums.length
//  k = k % n

//  for(let step = 0 ; step < k ; step++){
//     let first = nums[0]

//     for (let i=0 ; i<n-1 ; i++){
//         nums[i] = nums[i+1]
//     }
//     nums[n-1] = first
//  }
//  return nums
// }
// let nums =[1,2,3,4,5]
// let k  = 3

// console.log(RotateArrayLeft(nums,k));

// const RotateArrayLeft = (nums,k) =>{
//     let n = nums.length
//      k = k % n

//      for(let step = 0 ; step < k ; step ++){

//         let first = nums[0]

//         for(let i = 0 ; i < n -1 ; i++){
//              nums[i] = nums[i+1]
//         }
//         nums[n-1] = first
//      }
//      return nums
// }

// let nums =[1,2,3,4,5]
// let k  = 1

// console.log(RotateArrayLeft(nums,k));

// Optimal Solution
const RotateArrayLeft = (nums, k) => {
  let n = nums.length;
  if (n === 0) {
    return nums;
  }
  k = k % n;

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
//   // Step 1: reverse first k elements
//   reverse(nums, 0, k - 1);
//   // Step 2: reverse remaining elements
//   reverse(nums, k, n - 1);
//   // Step 3: reverse entire array
//   reverse(nums, 0, n - 1);

console.log("Original:", [...nums]);

  // Step 1: reverse first k elements
  reverse(nums, 0, k - 1);
  console.log("After Step 1 (reverse first k elements):", [...nums]);

  // Step 2: reverse remaining elements
  reverse(nums, k, n - 1);
  console.log("After Step 2 (reverse remaining elements):", [...nums]);

  // Step 3: reverse entire array
  reverse(nums, 0, n - 1);
  console.log("After Step 3 (reverse whole array):", [...nums]);

  return nums;
};
let nums = [1, 2, 3, 4, 5];
let k = 2;

console.log(RotateArrayLeft(nums, k));
