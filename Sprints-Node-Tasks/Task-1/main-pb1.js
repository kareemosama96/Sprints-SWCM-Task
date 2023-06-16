"use strict"
// PROBLEM 1
const {
  readFileSync,
  writeFileSync
} = require('fs')

// Read the json in problem1.json
let cat = readFileSync(
  './problems/problem1.json',
  {encoding:"utf-8"});

// Add height and weight to Fluffy
// Update Fluffy name to Fluffyy
cat = JSON.parse(cat);
cat.weight = 50;
cat.height = 40;
cat.name = "Fluffyy"

writeFileSync(
  './problems/problem1-solution.json',
  JSON.stringify(cat),
  {encoding:"utf-8"}
)

// List all the activities of Fluffyy’s catFriends.
let catFriendsActivities = [];
cat.catFriends.forEach(friend => {
  catFriendsActivities = [...catFriendsActivities, ...friend.activities]
});
console.log(catFriendsActivities)


// Print the catFriends names.
let catFriendsNames = [];
cat.catFriends.forEach(friend => {
  catFriendsNames = [...catFriendsNames, friend.name]
})
console.log("\n",catFriendsNames)

// Print the total weight of catFriends
let catFriendsWeights = 0;
cat.catFriends.forEach(friend => {
  catFriendsWeights +=  friend.weight
})
console.log('\nTotal weights of cat friends:',catFriendsWeights)

// Print the total activities of all cats
let totalActivites = catFriendsActivities.length + cat.activities.length;
console.log('\nTotal activites of cats:',totalActivites)

// Add 2 more activities to bar & foo cats
cat.catFriends.forEach(friend => {
  friend.activities.push("running","laughing")
});
cat.catFriends.forEach(friend => {
  console.log( `\n${friend.name}:`,friend.activities)
});

// Update the fur color of bar
cat.catFriends.forEach(friend=>{
  if (friend.name == "bar") {
    friend.furcolor = "brown"
    console.log("\nfur color update:",friend.furcolor)
  }
})

console.log("\ncat:",cat)


