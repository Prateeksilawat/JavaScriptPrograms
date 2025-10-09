//ContainerWithMostWater

//Problem
//Given an array height of positive integers where each element represents the height of a vertical line
//at that index, find two lines that together with the x-axis form a container that holds the most
// water.Return the maximum area.
//Area between indices i and j is min(height[i], height[j]) * (j - i).
//height = [1,8,6,2,5,4,8,3,7]

//Brute-force Apporch (clear, simple)
// function MaxArea(height){
//    let n = height.length
//    let maxArea = 0

//    for(let i = 0 ; i < n ; i++){
//       for(let j = i+1 ; j<n ; j++){
//         const width = j - i 
//         const h = Math.min(height[i],height[j])
//          const area = width * h
//         if(area > maxArea){
//             maxArea = area
//         } 
//       }
//    }
//    return maxArea
// }

//Two pointer Apporch
function MaxArea(height){
    let left = 0 
    let right = height.length - 1
    let maxArea = 0 

    while(left < right){
        const width = right - left
        const  h = Math.min (height[left],height[right])

        const area = width * h 

        if(area > maxArea){
            maxArea = area
        }

        //moving pointer
        if(height[left] < height[right]){
            left++
        }else {
            right --
        }
    }
    return maxArea
}

let height = [1,8,6,2,5,4,8,3,7]
console.log(MaxArea(height));
