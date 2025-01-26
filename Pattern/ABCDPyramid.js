function printRightAngleTriangle() {
    let rows = 5;
    // ASCII value for 'A'
    let charCode = 65; 
  
    for (let i = 1; i <= rows; i++) {
      let row = '';
      // Adding characters 
      for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(charCode);
        charCode++; // Move to the next character in the alphabet
      }
      console.log(row);
    }
  }
  
  printRightAngleTriangle();
  