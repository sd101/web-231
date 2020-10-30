/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: James Liverman
; Description: Displays a formatted header. Create a header for code.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
}
