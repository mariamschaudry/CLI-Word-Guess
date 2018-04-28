// **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");

const wordBank = ["mascara", "shoe", "bread", "plastic", "juice", "kleenex", "pledge", "candle", "neuroscience", "religion", "instrument", "fox", "thoughts", "imagination", "zebra"]; 

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var gamePlay; 
var player; 

function Player () {
    
}