//recursion

const PrintNToOne = (num) =>{
//    let count = num
   function print (count){
    if(count<1)return
     console.log(count)
     print(count-1)
   } 
   print(num)


}

PrintNToOne(10)