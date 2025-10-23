//MergeSortedArrays.js

// Brute Force Method
function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];
  let k = 0;

  for (let i = 0; i < arr1.length; i++) {
    mergedArr[k] = arr1[i];
    k++;
  }

  for (let j = 0; j < arr2.length; j++) {
    mergedArr[k] = arr2[j];
    k++;
  }
  console.log("Before sort", mergedArr);

  //Sorting
  for (let i = 0; i < mergedArr.length - 1; i++) {
    for (let j = 0; j < mergedArr.length - i - 1; j++) {
      if (mergedArr[j] > mergedArr[j + 1]) {
        let temp = mergedArr[j];
        mergedArr[j] = mergedArr[j + 1];
        mergedArr[j + 1] = temp;
      }
    }
  }
  console.log("Merged (after sorting):", mergedArr);

  return mergedArr;
}
// mergeSortedArrays
// let arr1 = [9, 7, 2, 6];
// let arr2 = [3, 8, 1];
console.log("After Sort", mergeSortedArrays(arr1, arr2));

// 🧮 Complexity:
// Merge: O(n + m)
// Sort: O((n + m)²)
// Space: O(n + m)
// ✅ Total = O((n + m)²)

//Optimal Apporch
function mergeOptimal(arr1, arr2) {
  let i = 0,
    j = 0,
    k = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

//mergeOptimal
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 6, 7];
console.log(mergeOptimal(arr1, arr2));

// Time Complexity: O(n + m)
// Space Complexity:O(n + m)

//
