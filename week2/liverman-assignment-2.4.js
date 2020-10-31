/*
============================================
; Title:  functions.js
; Author: Professor Krasso 
; Modified By: James Liverman
; Date:   30 October 2020
; Description: Displays the sum of two integer values
;===========================================
*/

/**
 * Params: x, y
 * Response: x + y
 * Description: returns the sum x and y
 */
function fullName(first, last) {  //Creates a function with 2 parameters
  return first + last;
}

function dateWriter(year, month, day) {
    //return value of year/month/day
  return year + "/" +month + "/" + day;
}

function formatNumber (number, numOfFixedPositions) {
    //Returns a number with a Invocation of toFixed to the NumOfFixed Positions.
  return number.toFixed(numOfFixedPositions);
}

function convertToInt (imAstring) {
    //Return a string as an interger
    //https://www.w3schools.com/jsref/jsref_parseint.asp
  return parseInt(imAstring);

}

function convertToFloat (imAstring) {
  //The parseFloat() function parses a string and returns a floating point number.
  //https://www.w3schools.com/jsref/jsref_parsefloat.asp
  return parseFloat(imAstring);
} 

/* Expected Output Hello my name is James!
  Today's date is <today's date> and the current temperature is <33.3 - use the formatNumber function> degrees.
   I wish my age was 21 - years old and my savings account goal is 10,000,000 - parsed float value> dollars.
*/
console.log("Hello my name is " + fullName("James ", "Liverman")+ "!");
console.log("Todays Date is " + dateWriter(2020, 10, 31));
console.log("The current temperature is " +formatNumber(33.33, 1));
console.log("I wish my age was " +convertToInt("21"));
console.log("My retirement goal " +convertToFloat("10000000.0000"));


/* Instruction 7.Run and test the program and make sure your output matches what I have.
No video to tell if output matches what you had
*/