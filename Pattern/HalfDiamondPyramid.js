function HalfDiamondPyramid(){
    let n =5

    for(let i = 1 ;i<=n ; i++){
        let row = ' '
        for(let j=1 ; j<=i ; j++){
            row = row + '*'
        }
        console.log(row)
    }

    for(let k = n ; k>=1 ; k--){
        let row = ' '
        for(let j=1; j<k ; j++){
            row = row + "*"
        }
        console.log(row)
    }
}
HalfDiamondPyramid()