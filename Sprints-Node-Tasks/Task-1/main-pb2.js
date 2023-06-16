"use strict";
// PROBLEM 2
const moment =  require('moment'); // require
const { readFileSync, writeFileSync } = require("fs");

// Read the json in problem2.json
let car = JSON.parse(readFileSync("./problems/problem2.json", { encoding: "utf-8" }));

// Convert the dates into format YYYY-MM-DD
car.accidents.forEach(accident => {
  accident.date = moment(accident.date, "MM/DD/YYYY").format("YYYY-MM-DD")
});

// Write the results to output2.json
writeFileSync("./output2.json",JSON.stringify(car),{encoding:"utf-8"})

