/*
============================================
; Title: Assignment 3.4
; Author: James Liverman
; Date: 11 November 2020
; Modified By: James Liverman
; Description: This program demonstrates the usage of for statements.
;===========================================
*/ 
//start program

var header = require('../liverman-header.js')


// Create a variable and assign it a value between 1 and 10
let vars = 1;

// Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's assignment.
function logMismatch(string1, string2) {
  console.log(string1 + " and " + string2 + " do not match!"); 
}

function logMatch(string1, string2) {
  console.log(string1 + " and " + string2 + " do match!"); 
}

function match(string1, string2) {
  return string1 === string2;
}

/* Create a for loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random
   number between 1 and 10 (use the randomNumber function I have provided in the starter code)*/
for(var x = 0; x<10; x++) {
  /* During each iteration of the for loop the random number should be reassigned a new random value
     (this means the placement of the variable should be inside the for loop). */
  let vars2 = randomNumber()

  /* Next, create an if...else statement and use the match function to test if the variable in step one matches the random
     number created in step 3.  For true, call the logMatch function using the same two values.  For false, call the
     logMismatch function using the same two values.  If it is not obvious by now, you are basically wrapping a for loop around
     the work you did in exercise 3.2.  And, instead of using multiple if...else statements and test variables you will be
     using a for loop to generate the test variables and one if..else statement to check the generated values. */
  if (match(vars, vars2)) {
    // true
    logMatch(vars, vars2)
  } else {
    // false
    logMismatch(vars, vars2)
  }
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}