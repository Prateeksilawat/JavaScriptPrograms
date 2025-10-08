//MoveZeroes

function moveZeroes(nums){

    let insertPoints = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] != 0){
            nums[insertPoints] = nums[i]
            insertPoints++
        }
    }
    while(insertPoints < nums.length){
        nums[insertPoints++] =0
    }
    return nums
}

let nums = [0,1,0,12,3,0,16]

console.log(moveZeroes(nums))