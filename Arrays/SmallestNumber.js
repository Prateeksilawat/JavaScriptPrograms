const smallestNumber = (Arr) => {
  let smallValue = Arr[0]

  for(let i = 1; i < Arr.length ; i++){
    if(smallValue > Arr[i]){
        smallValue = Arr[i]
    }
  }
  return smallValue
}

let Arr = [3, 5, 7, 2, 9, 1];
let Result = smallestNumber(Arr)

console.log(`Smallest Number is`, Result)