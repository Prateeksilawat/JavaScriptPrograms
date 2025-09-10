// let Arr = [22,9,62,5,7,54,1,6]

// let smallest = Arr[0];
// let biggest = Arr[0];

// for(let i = 1 ; i<Arr.length; i++){
//     if(Arr[i]<smallest){
//         smallest = Arr[i]
//     }
//     if(Arr[i] > biggest){
//         biggest = Arr[i]
//     }
// }

// console.log("Smallest Array", smallest);
// console.log("Biggest array",biggest);

let arr = [22, 9, 62, 5, 7, 54, 1, 6];

function findMinMax(arr){
    if(arr.length === 0){
        console.warn("Array is Empty")
    }

    let min = arr[0]
    let max = arr[0]

    for(let  i = 1 ; i< arr.length ; i++){
        if(arr[i] < min){
            min = arr[i]
        }else if(arr[i] > max){
            max = arr[i]
        }
    }
    return {min,max}
}
//object destructing 
const {min,max} = findMinMax (arr)
console.log("Smallers",min);
console.log("Biggest",max)

// "Normally, a single loop takes 2(n-1) comparisons. Using a tournament (divide & conquer) approach,
//  we can reduce it to about 3n/2 - 2 comparisons by comparing in pairs and merging results."


