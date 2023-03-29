let simpleHash = {};
const checkVoter = (name) => {
  if (!simpleHash[name]) {
    simpleHash[name] = true;
    console.log("You can vote");
  } else {
    console.log("CHEATER!!!");
  }
};

checkVoter("peter");
checkVoter("peter");
checkVoter("Omar");
console.log(simpleHash);
