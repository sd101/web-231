/*
============================================
; Title: Assignment 3.3
; Author: James Liverman
; Date: 11 November 2020
; Modified By: James Liverman
; Description: Switch statements are an alternative to traditional if...else structures
 and often seen as a better choice for large multiway branches.  
 Take for example the if...else statements below:
;===========================================
Expected output to test the Variable named eventKeyCode and assign a value to it. The 
value will be compared to the different switch statements to provide an output, in this
case the output will be "The enter key was pressed" since the variable eventKeycode =13
*/ 
//start program
var header = require('../liverman-header.js')

//create a variable named event KeyCode and assign is a value of 13
let eventKeyCode = 13
//
switch(eventKeyCode){
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("The backspace key was pressed");
        break;
    default:
        console.log("Unrecognized key.")        

}
