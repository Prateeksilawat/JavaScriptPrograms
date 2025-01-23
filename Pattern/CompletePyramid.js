
function CompletePyramid(){

    let totalRows = 5
// loop for total Rows
    for(let i= 1 ; i<=totalRows; i++){
        let space = totalRows - i
        let stars = i

        let row = ''
        //loop for Space
        for(let s=1 ; s<=space ; s++){
            row = row + ' '
        }
        // loop for Print Star
        for(let j=1 ; j<=((2*i)-1) ; j++){
            row = row + '*'
        }
        console.log(row);
        
    }
}

CompletePyramid()