function RhombusPattern(){

    let n = 5
    for(let i = 1 ; i<= n ; i++){
        let row = " "

        for(let j = 1 ; j<=n-i ; j++){
             row = row + " "
        }

        for(let k=1 ; k<= ( 2*i-1) ;k++){
            row = row + "*"
        }
        console.log(row)
    }

    for(let i=n-1 ; i>=1 ;i--){
        let row = " "
        for(let j=1 ; j<= n-i ; j++){
            row = row + " "
        }
        for(let k=1 ; k<=(2*i-1); k++)
        {
            row  =  row + "*"
        }
        console.log(row)
    }
}
RhombusPattern()