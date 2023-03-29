// Testing the tail recursive concept using factorial and fibonacci

// At every recursion, we pass the next number (x-1) and the accumulator (result of 5*4*3...)
const goFactorial = (x, a) => {
  if (x == 1) {
    return a;
  }
  return goFactorial(x - 1, x * a);
};

// Wrapper function
const factorial = (x) => {
  console.log(goFactorial(x, 1));
};
factorial(5);

/////////////////////////////

// At every recursion, we pass the counter (x-1, counting towards 1), n-2 (a), n-1(b)
const goFibonacci = (x, a, b) => {
  if (x <= 2) {
    return b;
  } else {
    return goFibonacci(x - 1, b, a + b);
  }
};

const fibonacci = (x) => {
  console.log(goFibonacci(x, 0, 1));
};
fibonacci(5);
