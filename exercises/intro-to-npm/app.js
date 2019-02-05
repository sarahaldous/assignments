var readline = require("readline-sync")

// var name = readline.question("What is your name? ")
// console.log("Hello, " + name)


// var answer = readline.keyInYN("Do you like Node? ")
// console.log(answer)

var animals = ["Buffalo", "Sheep", "Bird", "Pig", "Snake"]
var animalNotSelected = true;

while(animalNotSelected){
    var favAnimal = readline.keyInSelect(animals, "What is your favorite animal?")

    
    if(favAnimal === -1){
    console.log("Choose an animal; don't cancel!")
    } else {
    console.log("I like " + animals[favAnimal] + "s too!")
    animalNotSelected = false
    }

    
}