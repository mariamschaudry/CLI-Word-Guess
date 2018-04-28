// **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// ==================================================================================================== //

class Letter {
    Letter(character) {    // Defining the constructor function // 
    this.character = value; // The string value to hold underlying character for letter // 
    this.isGuessed = false; // Boolean that is setting the guess to false //

    this.checkGuess = function (char) { // If letter is guessed correctly then change update boolean to true //
        if (char === " ") {  
            this.isGuessed = true; 
        }
    }
    this.display = function () {  // Function that takes character as argument and displays either correct answer or placeholder// 
         if (this.isGuessed) {
             return this.character + " ";
         } else {
             return "_"; 
         }
    }
 }
}; 

// Exporting the Letter constructor // 

module.exports = Letter; 