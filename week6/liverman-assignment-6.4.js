/*
; Title: Assignment 6.4 Nested Object literal.js
; Author: James Liverman
; Date: 28 November 2020
; Modified By: James Liverman
; Description: Nested Object Literal example

*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 6.4"));
/*Instructions

Create an object literal ticket with a nested object literal person
Ticket fields 
id
name
dateCreated
priority 

Person fields 
id 
firstName
lastName
jobTitle
Display the results  */

var ticketing = {
   id: "101",  //
   name: "Ticketing System", //
   dateCreated: new Date(), //
   priority: "Low",

   person : {
      id: "SD-666", //
      firstName: "Jack the", //
      lastName: "Ripper", //
      jobTitle: "Butcher", //
   }
   
}

console.log("Ticketing ID number " + ticketing.id + " for " + ticketing.name +" created by user ID " + ticketing.person.id + 
" Job Title: " + ticketing.person.jobTitle + " Full Name: " + ticketing.person.firstName + " " + ticketing.person.lastName + " Created Date: " + 
ticketing.dateCreated + " the priority for this ticket is " + ticketing.priority) 

/*Expected Output
Ticketing ID number 101 for Ticketing System created by user ID SD-666 Job Title: Butcher Full Name:
 Jack the Ripper Created Date: Sat Nov 28 2020 21:52:59 GMT+0430 (Afghanistan Time) the priority for this ticket is Low
*/