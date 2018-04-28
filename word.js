// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var letter = require("./letter.js");

class Word {      // Word constructor //
    Word(newWord) {
        this.wordValue = newWord; 
        this.newLetters = [];
        this.found = false; 

        this.grabLetters = function () {  // Creates an array of letters objects representing letters of underlying word //
            for (var i = 0; i < this.wordValue.length; i++) {
                this.newLetters.push(new Letter(this.wordValue[i]));
            }
        };

        // Checks to make sure user has guessed word and updates found parameter //
        this.checkWord = function () { 
            this.found = this.newLetters.every(function(currentLetter) {
                return currentLetter.display; 
            }); 
            return this.found; 
        };
    }
};

// This checks number of times the letter guessed is in user's selected word //

var letterFrequency = 0; 

this.checkLetter = function(letterGuess) {

    for(var i = 0; i < this.newLetters.length; i++) {
        if (this.newLetters[i].character === letterGuess) {
           this.newLetters[i].display = true; 
           letterFrequency++;
        }
    }
    return letterFrequency;

}

// Function that returns a string representing the word //

this.showWord = function () {
   var string = "\n";
   for (var i = 0; i < this.newLetters.length; i++) {
       string += " "; 
       string += this.newLetters[i].display();
   }
   string+="\n";
   return string;
};

module.exports = Word; 


