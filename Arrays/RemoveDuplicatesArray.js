
let arr = [1,2,2,4,3,4,5,3,5]
let uniArr = []

for(let i = 0 ; i< arr.length ; i++){
    let duplicate = false

    for(let j = 0 ; j< uniArr.length ; j++){

        if(arr[i] === uniArr[j]){
            duplicate = true
            break;
        }


    }
    if(!duplicate){
        uniArr.push(arr[i])
    }
}
// uniArr.sort(function(a, b) {
//     return a - b;
// });

console.log(uniArr); // [1, 2, 3, 4, 5]