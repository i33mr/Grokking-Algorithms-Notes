// No checking for visited node was done
let graph = {};

graph["Omar"] = ["Saad"];
graph["Saad"] = ["Mansoor"];
graph["Mansoor"] = ["Fahem", "Mango"];
graph["Fahem"] = [];

let queue = graph["Omar"].slice();

while (queue.length) {
  console.log(queue);
  let person = queue.shift();
  if (person === "Mango") {
    console.log("Mango found!");
  } else {
    queue = queue.concat(graph[person]);
  }
}
