const findSmallest = (arr) => {
  // let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[smallestIndex]) {
      // smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  let newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
};

console.log(selectionSort([5, 4, 6, 2, 10]));
