function CheckAnagrams(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  if (str1.length !== str2.length) {
    return false;
  }

  // object create
  let Count1 = {};
  let Count2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (Count1[char] === undefined) {
      Count1[char] = 1;
    } else {
      Count1[char] = Count1[char] + 1;
    }
  }
//   console.log(Count1);

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (Count2[char] === undefined) {
      Count2[char] = 1;
    } else {
      Count2[char] = Count2[char] + 1;
    }
  }
//   console.log(Count2);

  for (let key in Count1) {
    if (Count1[key] !== Count2[key]) {
      console.log(`Given String is not a Anagrams `);
      return false;
    }
  }
  console.log(`Given String is  a Anagrams `);
  return true;
}

console.warn(CheckAnagrams("Hello", "eello"));
