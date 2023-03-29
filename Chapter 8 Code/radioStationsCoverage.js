let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  for (let station in stations) {
    const states = stations[station];

    // intersection
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }

  // Difference
  statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)));
  console.log("statesCovered", statesCovered);
  console.log("statesNeeded", statesNeeded);
  finalStations.add(bestStation);
}

console.log(finalStations);