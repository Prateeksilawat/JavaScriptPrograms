
function ZeroOnePyramid(){
    let n = 5; 

    for(let i=  1; i<=5; i++){
        let row = " "
        for(let j =1; j <= i ; j++){

            if((i+j)%2 === 0){
                row = row + " 1 "
            }else{
                row = row + " 0 "
            }
        }
        console.log(row)
    }
}
ZeroOnePyramid()