function fibb(n) {
  if (n <= 0) {
    console.log([]); 
    return [];
  }
  if (n === 1) {
    console.log([0]); 
    return [0];
  }
  let FibArr = [0, 1];

  for (let i = 2; i < n; i++) {
    FibArr[i] = FibArr[i - 1] + FibArr[i - 2];
  }
  console.warn(FibArr);
  return FibArr;
}

// console.warn(fibb(2));
// console.warn(fibb(5));

fibb(2)
fibb(3)
fibb(4)
fibb(5)