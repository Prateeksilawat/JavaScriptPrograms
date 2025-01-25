
function HollowPyramid(){
    let n = 5

    for(let i= 1 ; i<=n ; i++){
        let row = " "
        
        //space
        for(let s = 1 ; s <= n-i ;s++ ){
            row = row + " "
        }


        for(let j =1 ; j<=(2*i-1) ; j++){
           if(i==1 || i==n || j==1 || j==(2*i-1)){
             row = row + "*"
           }else{
            row = row + " "
           }
        }
        console.log(row)
    }
}

HollowPyramid()