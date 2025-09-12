function MergeSortArr(arr1, arr2) {
  let i = 0,
    j = 0;
  let mergeArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
    //   console.log('arr1 push',arr1[i])
      i++;
    } else {
      mergeArr.push(arr2[j]);
    //    console.log('arr2 push',arr2[j])
      j++;
    }
  
    
  }
  while (i < arr1.length) mergeArr.push(arr1[i++]);
  while (j < arr2.length) mergeArr.push(arr2[j++]);
  return mergeArr;
}

console.log(MergeSortArr([1, 3, 5, 7, 9, 11], [2, 4, 6, 8,10,12,14,16,18,20]));
