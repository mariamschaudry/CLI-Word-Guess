// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var letter = require("./letter.js");
// var game = require("./gameLogic.js");

class Word {      // Word constructor //
    constructor(word) {
        this.wordValue = word; 
        this.letters = [];
        this.found = false; 

    // Creates an array of letters objects representing letters of underlying word //
        this.grabLetters = function () {  
            for (var i = 0; i < this.wordValue.length; i++) {
                this.newLetters.push(new Letter(this.wordValue[i]));
            }
        };

    // Checks to make sure user has guessed word and updates found parameter //
        this.checkWord = function() { 
            this.found = this.letters.every(function(currentLetter) {
                return currentLetter.display; 
            }); 
            return this.found; 
        };
    }
};

// This checks number of times the letter guessed is in user's selected word //

var letterFrequency = 0; 

this.checkLetter = function(letterGuess) {

    for(var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].character === letterGuess) {
           this.letters[i].display = true; 
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

// // ------------------------------------------------------------------------- //

// // GAME LOGIC //

// const wordBank = ["mascara", "shoe", "bread", "plastic", "juice", "kleenex", "pledge", "candle", "neuroscience", "religion", "instrument", "fox", "thoughts", "imagination", "zebra"]; 

// const chalk = require("chalk"); 

// // Creating a word by using words from the wordbank //
// function Game () {
//     var word = new Word(wordBank.words[Math.floor(Math.random() * wordBank.words.length)]); 

// // Call the word.grabLetters function to fill current word letters into array // 

// word.grabLetters(); 

// // New game object & parameters //

// this.currentWord = word; 
// this.guessesLeft = 12; 
// this.previousGuess = []; 
// this.status = "start"; 

// console.log(chalk.magenta.bold("\nCurrent Word"));
// console.log(this.word.showWord()); 
// console.log(" Guesses Remaining: " + this.guessesLeft + "\n");

// }

// // Check if guess is corrent and update the words display // 

// Game.prototype.isRight = function(guess) {

//     var isRight = this.currentWord.checkLetter(guess);

// // Subract from number of guess remaining if user guess is incorrect //
//     if (isRight === 0) {
//         console.log(chalk.redBright("\n You're wrong! Please try again."));
//         this.guessesLeft--;
//     } else {
//         console.log(chalk.cyanBright.bold("\nYay! You're correct!"));
//     }
// }

// // Check to see if user guessed the whole word //

// this.currentWord.checkWord(); 
// if ((this.guessesLeft > 0) && (this.currentWord.found === false)) {
//     console.log(this.currentWord.showWord());
//     console.log(" Guesses Remaining: " + this.guessesLeft);
//     console.log(" ==============================");
//     this.status = "continue"; 
// } else if (this.guessesLeft === 0) {
//     console.log("\n Sorry, game over! \n The correct word was: \n " + chalk.redBright.inverse(this.currentWord.wordValue) + "\n");
//     this.status = "gameOver";
// } else {
//     console.log("\n You won the game! The correct word was: \n" + chalk.greenBright.inverse(this.currentWord.wordValue) + "\n");
//     this.status = "win"; 
// };


// Exporting the constructor //
module.exports = Word; 
