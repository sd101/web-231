/*
; Title: Assignment 4.4 Predicates.js
; Author: James Liverman
; Date: 14 November 2020
; Modified By: James Liverman
; Description: Demonstrates how to declare and and use JavaScript predicates, sorting and filtering

*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 4.4")); 



//Create a string array of 5 states. 
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//Create a function called getState with two string parameters.
function getState (val1, val2) {
  //In the body of the getState function add an if statement to test if the two string parameters match.  If they match, return true
  return val1 === val2;
}

//Sort and display the contents of the updated array
console.log("-- Original Array --");
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}

//Create a break then Sort the Array States Alpabetically.
console.log("");
console.log("-- Sorted Array --");
states.sort()
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}


//Create a break then Select Iowa from the Array States array by creating a filter
console.log("");
console.log("-- Selected Value --");
function filterMe (e) {
  return getState(e, "Iowa")
}

var filteredStates = states.filter(filterMe)
for (var x = 0; x < filteredStates.length; x++) {
  console.log(filteredStates[x]);
}
