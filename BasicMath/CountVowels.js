
const CountVowl = (str) => {
    let count = 0
    let found =""
    let vowels =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i = 0 ;i<str.length ;i++){
        for(let j =0 ; j<vowels.length; j++){

            if(str[i] === vowels[j]){
            count++;
            found = found + str[i]
        }
        }
    }
    return {count,vowels:found}
}

console.log(CountVowl("hello"));   // { count: 2, vowels: "eo" }
console.log(CountVowl("LEVEL"));   // { count: 2, vowels: "EE" }
console.log(CountVowl("sky"));     // { count: 0, vowels: "" }