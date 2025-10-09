//RotateArrayRight

// function RotateRight(nums,k){
//   let n = nums.length
//    k = k % n

//    for( let step = 0 ; step < k; step++){
//       let last = nums[n-1]

//       for(let i = n-1 ; i > 0 ; i --){
//          nums[i] = nums[i-1]
//       }
//       nums[0] = last
//    }
//    return nums
// }

// optimal approch

function RotateRight(nums, k) {
  let n = nums.length
  if (n === 0) return nums;

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
  //Reverse the entire array
  reverse(nums, 0, n - 1);
  //Reverse the first k elements
  reverse(nums, 0, k - 1);
  //Reverse the remaining n − k elements
  reverse(nums, k, n - 1);

  return nums
}

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;

console.log(RotateRight(nums, k));

//Time Complexity
// O(n) Each element is reversed at most twice

//Space Complexity	O(1)	In-place swapping, no extra array
