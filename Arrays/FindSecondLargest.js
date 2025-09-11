
let arr = [11,41,6,8,20,35]

let largest =  -Infinity
let secondLargest =  -Infinity

for(let i = 0 ; i < arr.length ; i++)
    {
    let num = arr[i]

    if(num > largest){
        secondLargest = largest
        largest = num
    }else if (num > secondLargest && num < largest){
        secondLargest = num
    }
}

console.log('Largest number',largest);
console.log('Second Largest number',secondLargest);

