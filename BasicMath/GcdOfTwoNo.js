//Find GCD of two numbers
//using Readline to take input in terminal

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gcd = (m, n) => {
  while (m != n) {
    if (m > n) {
      m = m - n;
    } else {
      n = n - m;
    }
  }
  return m;
};

// Ask user for the first number
rl.question("Enter the 1st number: ", (input1) => {
  const m = parseInt(input1, 10); // Convert input to integer (10 is here means that we
                                  //  convert string into decimal(10))

  // Ask user for the second number
  rl.question("Enter the 2nd number: ", (input2) => {
    const n = parseInt(input2, 10); // Convert input to integer

    // Calculate GCD and output the result
    const result = gcd(m, n);
    console.log("The Highest Common Factor is:", result);

    // Close the readline interface
    rl.close();
  });
});
