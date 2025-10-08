//ProductOfArrayExceptSelf

function productExceptSelf(nums){
    
    let n = nums.length
    let left = []
    let right = []
    let result = []

    //step 1 Build left[] -> product of all element on the left of
     left [0] = 1
     for(let i = 1; i <  n ; i++){
        left[i]= left[i-1] * nums[i-1]
     }

     //step 2 Build Right[] -> product of all element on the Right of
     right [n-1] = 1
     for(let i = n-2 ; i >= 0 ; i-- ){
        right[i] = right[i+1] * nums[i+1]
     }

     // Step 3 Multiply left * Right
     for(let i = 0 ; i< n ;i++){
        result[i] = left[i]*right[i]
     }
     return result
}

let nums = [1,2,3,4]
console.log(productExceptSelf(nums));
