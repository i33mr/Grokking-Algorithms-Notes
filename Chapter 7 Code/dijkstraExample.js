// The initial graph as a hash table
const graph = {};

// graph["start"] is also a hash table.
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// console.log(graph["start"]);

// Hash table to store costs
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// Hash table to store parents:
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = "None";

// An array to keep track of nodes that we have already processed:
const processed = [];

// Find the node with lowest cost that isn't processed yet.
// At the beginning, it has to have a connection to the start node, otherwise, it will be infinity.
const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const node in costs) {
    if (costs[node] < lowestCost && !processed.includes(node)) {
      lowestCost = costs[node];
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node != null) {
  console.log("node", node);
  console.log("Processed", processed);
  console.log("Costs", costs);
  console.log("Parents", parents);

  // Get the cost and neighbors of the current node.
  const cost = costs[node];
  const neighbors = graph[node];

  // for each of the neighbors, calculate their new cost if we take the current node as their parent.
  // if it is less than their initial cost, we set the new cost and parent.
  for (const n in neighbors) {
    let newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }

  // Add the node to the processed nodes. If a node is processed, it means that there is no shorter way to reach it.
  processed.push(node);

  // Get the next node.
  node = findLowestCostNode(costs);
}

// to get the path, we need to find the parent of the finish node, then the parent of that node, etc...
let currentNode = "fin";
console.log("Path:");
while (currentNode) {
  console.log(currentNode);
  currentNode = parents[currentNode];
}
