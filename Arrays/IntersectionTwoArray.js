// Brute Force Method

function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let alreadyAdded = false;

        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          result[result.length] = arr1[i];
        }
      }
    }
  }
  return result;
}

//Method 2: Using a Frequency Object (Better for Large Arrays)

function intersection1(arr1, arr2) {
  let freq = {};
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    freq[arr1[i]] = true;
  }
  console.log(freq);

  for (let j = 0; j < arr2.length; j++) {
    if (freq[arr2[j]]) {
      let alreadyAdded = false;
      for (let k = 0; k < result.length; k++) {
        if (result[k] === arr2[j]) {
          alreadyAdded = true;
          break;
        }
      }

      if (!alreadyAdded) {
        result[result.length] = arr2[j];
      }
    }
  }
  return result;
}

//Two-Pointer Method ( only work for sorted arrays)
function intersection2(arr1, arr2) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result[result.length] = arr1[i];
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

let arr1 = [1, 2, 3, 4, 5].sort((a, b) => a - b);
let arr2 = [6, 7, 5, 2, 4].sort((a, b) => a - b);

console.log(intersection2(arr1, arr2));
