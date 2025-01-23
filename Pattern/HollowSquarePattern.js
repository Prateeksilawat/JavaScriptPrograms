function HollowSquare(){

    let totalRows = 10
    for(let i=1; i<=totalRows ; i++){
        let row = ''

        for(let j=1 ; j<=totalRows; j++)
        {
            if(i === 1 || i === totalRows || j===1 || j === totalRows){
                row = row +'*'
            }
            else{
                row= row + ' '
            }
        }
        console.log(row)
    }
}

HollowSquare()