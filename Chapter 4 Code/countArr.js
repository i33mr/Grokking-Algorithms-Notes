const countArr = (arr) => {
  if (arr.length) {
    arr.shift();
    return 1 + countArr(arr);
  }
  return 0;
};

console.log(countArr([1, 2, 3, 4, 5]));
