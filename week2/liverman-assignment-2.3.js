/*
============================================
; Title:  function-properties.js
; Author: Professor Krasso
; Date:   31 October 2020
; Modified By: James Liverman
; Description: Demonstrates how to define and call function properties
;===========================================
*/

// function property definitions
myName.james = "James"     //Created a function property to be associated with function myName


/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {    //Created a function called myName with 0 parameters and an empty body
  return myName.james;  
} 



/**
 * Description: returns the value assigned to a function property
 */


// output
console.log("Hello " +myName() + " Liverman");

// Video and instruction do not match up. I went off the video. 