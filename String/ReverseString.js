
function RevString (n){
    
    let result = ""
    for(let i = n.length - 1 ; i>= 0 ;i --){
        result = result + n[i]
    }
    return result

}console.log(RevString("DoG"));

const RevStr = (str) => {
    let result = ""
    for(let i = str.length-1 ;i>=0 ;i--){
        result += str[i]
    }
    return result
}
console.log(RevStr("HappY"));

// function RevString(n) {
//     let Words = n;
//     let StrLen = Words.length;
//     let result = "";
//     for (let i = StrLen - 1; i >= 0; i--) {
//         result = result + Words[i];
//     }
//     return result;
// }

// console.log(RevString("Hello")); // Output: "olleH"
