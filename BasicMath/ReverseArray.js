const ReverseArr = (arr) => {
  let left = 0 , Right = arr.length-1
   while(left < Right){
     let temp = arr[left]
    arr[left] = arr[Right]
    arr[Right] = temp
    left++;
        Right--;
   }
   return arr
}
let Arr = [5,4,3,2,1]
console.log(ReverseArr(Arr))