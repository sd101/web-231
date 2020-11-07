/*
============================================
; Title: Assignment 3.2
; Author: James Liverman
; Date: 11 November 2020
; Modified By: James Liverman
; Description: This program demonstrates the
; use of JavaScript types, values, and 
; and variables in an application.
;===========================================
*/ 
//start program

var header = require('../liverman-header.js')
// Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false.
function match(string1, string2) {
    /*
    if (string1===string2) {
      console.log("Matches!")
    } else {
      console.log("Doesn't match!")
    }
    */
   return string1 === string2;
  }
  
  /* Create a function called logMismatch with two parameters, create a string message with the two 
  parameters saying they do not match.  Use the parameters as the values you display in the string message.*/
  // Truck and Car do not match!
  function logMismatch(string1, string2) {
     console.log(string1 + " and " + string2 + " do not match!"); 
  }
  
  /* Create a function called logMatch with two parameters, create a string message with the two
  parameters saying they do match.  Use the parameters as the values you display in the string message. */
  // Bike and Bike do match!
  function logMatch(string1, string2) {
     console.log(string1 + " and " + string2 + " do match!"); 
  }
  
  // Create six local test variables with default values.
  let var1 = "Truck";
  let var2= "Car";
  let var3 = "Bike";
  let var4= "Bike";
  let var5 = "Four";
  let var6= "Three";
  
  /*
    Using if...else statements call the match function and pass-in two of the test variables. In the body of
    the "true" statement call the logMatch function and pass-in these same two variables.  In the body of
    the "false" statement call the logMismatch function and pass-in these same two variables. Repeat this
    process until all 6 variables have been tested.
  */
    if (match(var1, var2)) {
      // true
      logMatch(var1, var2)
    } else {
      // false
      logMismatch(var1, var2)
    }
  
    if (match(var3, var4)) {
    // true
    logMatch(var3, var4)
  } else {
    // false
    logMismatch(var3, var4)
  }

  if (match(var5, var6)) {
    // true
    logMatch(var5, var6)
  } else {
    // false
    logMismatch(var5, var6)
  }
  

  //end program
  
  