"use strict";

// this is the alphabet in an array, const because it won't change
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// main variables for tracking score/progress/guesses/etc - lets because they will change
let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let round=0;
// array to hold letters guessed so far each round
let soFar = [];
// this is going to be used later in the actual function to store the key pressed
let userGuess = null;

// Force the computer to pick a random number within the length of the array
// and then assign the number's letter equivalent to the compAnswer variable
let compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

// using onkeypress because it fires when a valid character is entered (via press AND release) not 
// simply when a key is only pressed or released https://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown
document.onkeypress = function(kp) {

    // assign the pressed key to a variable 
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    let userGuess = String.fromCharCode(kp.keyCode).toLowerCase();
    console.log(`the user has pressed the ${userGuess} key`);
}