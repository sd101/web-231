/*
; Title: Assignment 4.3 filtering.js
; Author: James Liverman
; Date: 14 November 2020
; Modified By: James Liverman
; Description: Demonstrates how to filter values in an array.

*/


const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 4.3"));


//Create a string array of 5 vehicles.
var vehicles = ["Car", "Truck", "Airplane", "Bus", "Motorcycle"];
//Create a function called getValue with two parameters: an array and a string value.
function getValue(arr,val) {
  //In the body of the getValue function, iterate over the parameterized array
  for(var k = 0; k < arr.length; k++) {
   // In the body of the for loop add an if statement and use the second parameter (see step 2) to test if the string value matches the current value in the loop. 
    if (arr[k] === val)
    //Use the console.log() function to output the matching value. 
    console.log(arr[k]);
  }

}

//Output
console.log("--DISPLAYING ARRAY ITEMS--");
  for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
  }

  //new line
  console.log("");

  console.log("-- SELECTED VALUE --");
  getValue(vehicles, "Motorcycle");

  console.log("");

  console.log("-- SELECTED VALUE --");
  getValue(vehicles, "Bus");