/*
; Title: Assignment 6.2 
; Author: James Liverman
; Date: 28 November 2020
; Modified By: James Liverman
; Description:  Create a try statement and create variable objects

*/
/*Instructions
Exception handling is the process of programmatically "planning for" and "handling" runtime errors. The try/catch/finally statement 
is how developers gracefully "handle" runtime exceptions. The "try," as the name suggests, is the portion of code that you wish to test. 
The "catch" clause "catches" the exception and the "finally" clause, which is often referred to as the "clean-up," always executes last.
*/

//Try/Catch example:
// Create a try statement and create variable objects.
try {

     var x = 4;

     var y = "sandwich";

     var sum = x * y;
// If variable sum is equal to NaN, skip/throw to the Catch clause/statement: This math function does not make sense
if (isNaN(sum)) throw "This math function does not make sense";

     console.log(sum);
// This is the section or place where the function is thrown/skipped to.
} catch (err) {

     console.log("Catch clause: " + err);

} finally {

     console.log("Finally clause: End of program ...");

}
/* Expected output Catch clause: This math function does not make sense
Finally clause: End of program ... */


 