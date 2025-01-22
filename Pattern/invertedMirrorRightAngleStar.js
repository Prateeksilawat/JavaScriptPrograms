
function invertedMirrorRightAngleStar(){

    let totalRows = 5;
    for(let i = totalRows ; i>=1; i--){
        let space = totalRows - i
        let stars = i

        let row = " "

        for (let s = 1; s <= space; s++){
            row = row + " "
        }

        for (let j = 1 ; j <= stars ; j++){
            row = row + "*"
        }
        console.log(row)
    } 
}

invertedMirrorRightAngleStar()