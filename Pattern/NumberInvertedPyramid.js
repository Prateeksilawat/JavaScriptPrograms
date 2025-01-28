
function InvertedNumberPyramid(){
    let totalrow = 5
    for(let i=totalrow ; i>=1 ; i--){
        let space = totalrow -i
       

        let row = " "
        for(let s=1 ; s<=space ; s++){
            row = row + " "
        }

        for(let j=1 ; j<= (2*i)-1; j++){
            row = row +' '+j
        }
        console.log(row);
        
    }
}
InvertedNumberPyramid()