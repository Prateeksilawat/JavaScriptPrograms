//Recursion 
const PrintOneToN = (num) => {
   let count = 1 

   function print (count){
       if(count >num) return
       console.log(count)
        print(count+1)
   }
   print(count)
}

PrintOneToN(12)