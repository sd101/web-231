/*
; Title: Assignment 4.2 Arrays.js
; Author: James Liverman
; Date: 14 November 2020
; Modified By: James Liverman
; Description: This program demonstrates use of an array.

*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 4.2")); */

//start program

// array of numerical values

//Create a string array of five (5) fruit items (order does not matter).
var fruits = ["Apple ", "Orange" , "Banana", "Mango", "Pear"];

//Create a function called getFruit with one parameter (an array)
//In the body of the getFruit function iterate over the parameterized array (see step 2) and output the results using the console.log() function.
function getFruit(arr) {
  for (let k = 0; k < arr.length; k++) {
    console.log(arr[k])
    
  }

}


// Call the getFruit function and pass-in the array created in step 1 to test the results.
getFruit(fruits)
