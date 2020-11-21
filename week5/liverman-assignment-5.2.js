/*
; Title: Assignment 5.2 Arrays.js
; Author: James Liverman
; Date: 21 November 2020
; Modified By: James Liverman
; Description:  ES5 Built-In Functions

*/
/*Instructions

Create a String array of your five (5) favorite food types. 
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
Using JavaScripts built-in forEach() function, iterate over the array and output the results.
Run and test the program and make sure the output matches what I have in the starter code.*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 5.2"));

//start program
//Create an array with 5 different food string values
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"]

// create/call a function that calls the array foods
foods.forEach(function(food) {
  console.log(food);
});