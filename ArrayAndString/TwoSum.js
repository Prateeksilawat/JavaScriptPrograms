
//Brute force

// function twoSum(nums,target){

//     for(let i = 0 ; i< nums.length ; i++){
//         for(let j = i+1; j< nums.length ; j++){
//             if(nums[i]+nums[j] === target){
//                 return [nums[i],nums[j]]
//             }
//         }
//     }
//      return "Not found";
// }

// let nums = [2,7,11,15]
// let target = 18
// console.log(twoSum(nums,target))


//Using Two Pointer method
//Works because you only need the numbers, not indices.
// Sorting + two-pointer → O(n log n) time.
// If the problem asks for original indices, you would need to store [value,index] before sorting.

function TwoSum(nums,target){
    nums.sort((a,b)=>a-b)
    let i =0 
    let j= nums.length -1

    while(i<j){
        let sum = nums[i]+nums[j]
        if(sum === target){
            return[nums[i],nums[j]]
        }else if(sum < target){
            i++
        }else{
            j--
        }
    }
    return 'not found'
}
let nums = [7,12,2,8,11,15]
let target = 18
console.log(TwoSum(nums,target))

