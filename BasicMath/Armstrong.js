

const Armstrong = (num) => {
   
     let n = num 
     let arm =0

     while(num>0){
        let rem = num%10 
           
            arm = rem*rem*rem+arm
        num = Math.floor(num/10)
     }
     if(n === arm){
        console.log(`${n} is Armstrong Number`);
        
     }else{
        console.log(`${n} is not Armstrong Number`);
     }

}
// Test with 153
Armstrong(153); 
// Test with another Armstrong number
Armstrong(370); 
// Test with a non-Armstrong number
Armstrong(123); 