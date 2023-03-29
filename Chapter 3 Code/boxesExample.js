// Without recursion
const findKey = (mainBox) => {
  let pile = [mainBox];
  let found = false;
  while (pile.length && !found) {
    let box = pile.pop();
    console.log(box);
    box.items.forEach((el) => {
      if (el.name == "box") {
        pile.push(el);
      } else {
        found = true;
        console.log("Key found!");
      }
    });
  }
};

const findKeyRecursion = (box) => {
  console.log(box);
  // if (!box.items.length) {
  //   return;
  // }
  box.items.forEach((element) => {
    if (element.name == "box") {
      findKeyRecursion(element);
    } else {
      console.log("Key found!");
      return;
    }
  });
};

let box = {
  name: "box",
  num: "1",
  items: [
    {
      name: "box",
      num: "4",
      items: [
        {
          name: "box",
          num: "7",

          items: [],
        },
      ],
    },
    {
      name: "box",
      num: "2",

      items: [
        {
          name: "box",
          num: "5",

          items: [
            {
              name: "box",
              num: "8",

              items: [
                {
                  name: "key",
                },
              ],
            },
          ],
        },
        ,
      ],
    },
    {
      name: "box",
      num: "3",

      items: [
        {
          name: "box",
          num: "6",
          items: [
            {
              num: "9",

              name: "box",
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
// findKey(box);
findKeyRecursion(box);
