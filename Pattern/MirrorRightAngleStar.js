function mirrorRightAngleStar(){
    let totalRows = 5
    //outloop for rows
    for (let i=1 ; i<=totalRows ; i++){
        let spaces = totalRows - i
        let stars = i

        let row =''
        //innerLoop for space
        for(let s=1 ; s<=spaces ; s++)
        {
            row = row + ' '
        }
         // loop for printin *
        for(let j=1 ;j<=stars ;j++)
        {
            row = row + '*'
        }
        console.log(row)
    }
}
mirrorRightAngleStar()