/*
; Title: Assignment 7.2
; Author: James Liverman
; Date: 05 December 2020
; Modified By: James Liverman
; Description: Create an constructor function called Employee

Instructions 

Create an employee constructor object with four (4) parameters/fields 
id
firstName
lastName
title
Populate an array with five (5) employee objects 
Loop over the array and output the results 
*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 7.2"));
// header goes here

/*
 * Description: Create an constructor function called Employee with paramaters of id, firstName, 
 lastName and title. Additionally, we are creating properties of id, firstName, lastName and
 title.*/

function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

/* Create array named employees with 5 new Employee objects, these create a new reference 
or instance of the original constructor function.
*/
const employees = [
  new Employee('1', 'Thomas', 'Edison', 'Software Engineer'),
  new Employee('2', 'Benjamin', 'Franklin', 'Programmer'),
  new Employee('3', 'Nikola', 'Tesla', 'Project Manager'),
  new Employee('4', 'Charles', 'Babbage', 'Project Manager'),
  new Employee('5', 'Alexander', 'Bell', 'Business Analyst'),
];

// 
/*
  Expected output:
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/
console.log('-- DISPLAYING A LIST OF MY EMPLOYEES --')
//Printing the array named employees on seperate lines. Loop over the array and output the results 
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' +employees[x].title)
}

