
function Pyramid(){

    let totalRows = 5

    for(let i= 1 ; i<=totalRows; i++){
        let space = totalRows - i
        let stars = i

        let row = ''
        for(let s=1 ; s<=space ; s++){
            row = row + ' '
        }

        for(let j=1 ; j<=((2*i)-1) ; j++){
            row = row + '*'
        }
        console.log(row);
        
    }
}

Pyramid()