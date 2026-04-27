function counter(){
    let count = 0

    function inner(){
        count++
        console.log(count)
    }
    return inner
}
let Outside = counter()
Outside()
Outside()
Outside()

console.log(a);
var a = 100
console.log(a);


// function x(){
//     for(let i=1 ;i<=5 ;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// }
// x()

function multiple(x){
    return function(y){
        return x*y
    }
}
const double = multiple(2)
console.log(double(5));
