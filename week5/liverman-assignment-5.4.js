/*
; Title: Assignment 5.4 Object Collections.js
; Author: James Liverman
; Date: 21 November 2020
; Modified By: James Liverman
; Description:  Used in conjunction with Array-Like Objects, the map() method provides a powerful way of filtering/reducing complex data structures.

*/
/*Instructions

Using the array created in exercise 5.3, complete the following: 
Using JavaScripts built-in map() function, create a filtered array of composers by rating (review the starter code for output expectations).
Using JavaScripts built-in map() function, create a filtered array of composers by genre (review the starter code for output expectations).
Using JavaScripts built-in forEach() function, iterate over each array and output the results. 
Run and test the program and make sure your output matches what I have in the starter code. 
Run and test the program and make sure your output matches what I have in the starter code.
Expected output
  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert
*/

const header = require("../liverman-header.js"); 
console.log(header.display("James", "Liverman", "Discussion 5.4"));
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: "8"
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
  console.log(" -- COMPOSER BY RATING --");
var composersByRating = composers.map(function(composer) {
  return {
    lastName: composer.lastName,
    rating: composer.rating,
  }
})

composersByRating.forEach(function(composer) {
  console.log(
    "Rating: " + composer.rating
  ); 
  console.log(
    "Composer: " + composer.lastName + "\n"
  );
})

console.log(" --  COMPOSER BY GENRE --");
var composersByGenre = composers.map(function(composer) {
  return {
    lastName: composer.lastName,
    genre: composer.genre,
  }
})

composersByGenre.forEach(function(composer) {
  console.log(
    "Genre: " + composer.genre
  ); 
  console.log(
    "Composer: " + composer.lastName+ "\n"
  );
})
