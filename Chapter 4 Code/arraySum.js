const arraySum = (arr) => {
  console.log(arr);
  if (arr.length) return arr.shift() + arraySum(arr);
  return 0;
};

console.log(arraySum([2, 4, 6]));

// same example, but tail recursive:
const goArraySum = (arr, sum) => {
  console.log(arr, sum);
  if (arr.length) return goArraySum(arr, sum + arr.shift());
  return sum;
};

console.log(goArraySum([2, 4, 6], 0));
