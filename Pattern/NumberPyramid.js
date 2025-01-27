
function NumberPyramid(){
    let number = 1
    let totalrow = 5;
    for(let i=1 ;i<=totalrow ; i++){
        let  row = " "
        for(let j=1 ; j<= i ; j++){
            row = row + number + " "
             number++
        }
        console.log(row);
        
    }
}
NumberPyramid()