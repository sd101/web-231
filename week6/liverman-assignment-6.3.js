/*
; Title: Assignment 6.3 Object literal
; Author: James Liverman
; Date: 28 November 2020
; Modified By: James Liverman
; Description: Create an object literal for a ticketing system with the following fields (provide your own default values)


Instructions

Create an object literal for a ticketing system with the following fields (provide your own default values)
id 
name
requestor
Display each of the fields in a single string
 {id: 101, name: Help Desk Support, requester: Bob Jones}*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 6.3"));

var ticketingSystem = {
  id: 101, 
  name:"Help Desk", 
  requestor: "Ted Bundy", 
 };

console.log("The id is " + ticketingSystem.id + " the System name is " + ticketingSystem.name + "The Requestor is " + ticketingSystem.requestor )
// Expected output Ticketing ID number 101 for Ticketing System created by user ID SD-666 Job Title: Butcher Full Name: Jack the Ripper 
//Created Date: "Current Date/Time" the priority for this ticket is Low