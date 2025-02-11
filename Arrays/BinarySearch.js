const BinarySearch = (Arr, key) => {
  let start = 0,
    end = Arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (Arr[mid] === key) {
      return mid;
    }
    //right
    else if (Arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let Arr = [2, 1, 5, 6, 8, 7, 3, 9, 4];
console.log("Unsorted Array:", Arr);

let key = 91;
Arr.sort((a, b) => a - b);  // Sort the array in ascending order
console.log("Sorted Array:",Arr)
let Answer = BinarySearch(Arr, key);

if (Answer !== -1) {
  console.log(`Element found at index ${Answer}`);
} else {
  console.log("Not found");
}
