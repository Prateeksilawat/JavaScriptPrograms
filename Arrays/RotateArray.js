
// Rotate Array to Right

function RotateRight(arr,k){
  let n = arr.length;
  k = k % n
  let rotate = []

  // copy last element 
  for(let i  = n - k ; i< n ; i++){
    rotate.push(arr[i])
  }

  // remaining element 
  for(let i = 0  ; i< n-k ; i++){
    rotate.push(arr[i])
  }

  //
  for(let i = 0 ; i< n ; i++){
    arr[i] = rotate[i]
  }
}

function RotateLeft(arr,k){
    let  n = arr.length
    k = k % n
    let rotate = []
     for(let i = k ;i < n ; i++){
        rotate.push(arr[i])
     }
     for(let i= 0 ; i < k ;i++){
        rotate.push(arr[i])
     }
     for(let i = 0 ; i< n ; i++){
    arr[i] = rotate[i]
  }
}

let arr = [1,2,3,4,5]
RotateLeft(arr, 1);
console.log(arr);
