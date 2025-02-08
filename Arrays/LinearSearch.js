

const LinearSearch = (Arr,key) => {
  for(let i = 0 ; i<Arr.length ;i++){
    if(Arr[i] == key ){
        return i
    }
       
    
  } return -1
}

let Arr = [2,4,6,8,10,16,20,28]
let key = 10
let Answer = LinearSearch(Arr,key)

if( Answer !== -1){
    console.log(`Element found at index ${Answer}`)
}else{
    console.log('Not found')
}