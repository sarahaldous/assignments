var ask = require('readline-sync');

console.log('Hello! My name is Betty. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log("HELLO, " + firstName.toUpperCase() + "! Sorry, I'm just so excited to be talking to you.")
var age = ask.question("What is your age? ");
console.log('It must be nice to be ' + age + " years old, right?")
var favoriteColor = ask.question("What is your favorite color? ");
console.log("No way! I recently painted my house " + favoriteColor + "!")
var favoriteAnimal = ask.question('What is your favorite animal? ');
console.log("Sweet! I have a pet " + favoriteAnimal + " in my basement!")
console.log("You know what would be super-cool? A " + favoriteColor + " " + favoriteAnimal + "!")
var favoriteMovieQuote = ask.question("I love movies. What's your favorite movie quote? ")
var str = favoriteMovieQuote
var strHalf = str.slice(str.length/2) + "...Sorry, I was tuned out until halfway through."
console.log(strHalf)
// var strFirstHalf = str.slice(0, str.length/2)
// console.log(strFirstHalf)
// console.log(str.slice(0, favoriteMovieQuote.length) + "...Sorry, I was tuned out until halfway through.")
