const LargestNumber = (Arr) => {
  let LargestValue = Arr[0]

  for(let i = 1 ; i<Arr.length; i++){
    if(  LargestValue  < Arr[i] ){
        LargestValue = Arr[i]
    }
   
  }
  return LargestValue
}

let Arr = [3, 5, 7, 2, 9, 4];
let Result = LargestNumber(Arr)

console.log(`Largest Number is`, Result)