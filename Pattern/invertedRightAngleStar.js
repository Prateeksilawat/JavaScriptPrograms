function InvertedRightAngleTriangle(){

    for(let i = 5 ; i >= 1; i-- ){
        stars = " "
        for(let j = 1; j <= i ; j++){
            stars = stars + " * "
        }
        console.log(stars)
    }
}
InvertedRightAngleTriangle()