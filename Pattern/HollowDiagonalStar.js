
function HollowDiagonal(){
    
    for(let i=1 ;i<= 10 ; i++){
        let row = " "
        for(let j=1 ; j<=10 ; j++){
            if(i==1 || i == 10 || j==1 || j==10 || j == i || j == 10-i+1){
                row = row + "*"
            }else{
                row = row + " "
            }
           
        }
        console.log(row)
    }
}
HollowDiagonal()