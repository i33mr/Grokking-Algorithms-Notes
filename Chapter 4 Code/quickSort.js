const quickSort = (arr) => {
  console.log(arr);
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr.shift();
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
  }
  console.log(pivot);
  return quickSort(less).concat([pivot]).concat(quickSort(greater));
};

console.log(quickSort([1, 5, 3, 7, 2]));
