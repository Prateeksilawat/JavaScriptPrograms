
function flattenArray (arr,depth){

    let result = []

    for(let i = 0 ; i< arr.length ; i++){
        let element = arr[i]

        if(Array.isArray(element) && depth > 0){

            let flat = flattenArray(element,depth-1)

            for(let j = 0 ; j<flat.length ; j++){
                result[result.length] = flat[j]
            }
        }else{
            result[result.length]=element
        }
    }
    return result
}

console.log(flattenArray([1,[2,[3,4]],5],2))