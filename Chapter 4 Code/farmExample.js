const findLargestBox = (width, height) => {
  if (width === height) {
    console.log(`Largest box is ${width} x ${height}`);
  } else {
    if (width > height) {
      width = Math.floor(width % height) ? width % height : height;
    } else if (height > width) {
      height = Math.floor(height % width) ? height % width : width;
    }
    findLargestBox(width, height);
  }
};

findLargestBox(1024, 640);
