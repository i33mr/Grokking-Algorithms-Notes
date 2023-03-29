// this solution wasn't done using divide and conquer, therefore trying another solution
// const findMaxInArr = (arr, max) => {
//   if (!arr.length) {
//     return max;
//   }
//   const tempMax = arr.shift();
//   if (tempMax > max) return findMaxInArr(arr, tempMax);
//   return findMaxInArr(arr, max);
// };

// console.log(findMaxInArr([1, 6, 4, 3, 0, 3], 0));

const max = (arr) => {
  if (arr.length == 2) {
    return Math.max(arr[0], arr[1]);
  }
  return Math.max(arr.shift(), max(arr));
};

console.log(max([1, 6, 5, 4, 8, 4, 2, 5]));
