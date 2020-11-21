/*
; Title: Assignment 5.3 Object Collections.js
; Author: James Liverman
; Date: 21 November 2020
; Modified By: James Liverman
; Description: Using JavaScripts built-in forEach() function, iterate over the composer objects and output the results.

*/
/*Instructions

Create an array of five (5) composer objects with the following fields:
firstName
lastName
genre

Expected Output
 COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
rating (acceptable values are between 1 and 10)
Using JavaScripts built-in forEach() function, iterate over the composer objects and output the results. 
Run and test the program and make sure your output matches what I have in the starter code. */

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 5.3"));

// Create an array with 5 different objects  
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10

  },
  {
  firstName: "Johann Sebastian",
  lastName: "Bach",
  genre: "Classical",
  rating: 9

  },
  {
  firstName: "Joseph",
  lastName: "Haydn",
  genre: "Classical",
  rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];

composers.forEach(function(composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
})
