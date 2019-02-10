var ask = require('readline-sync');

var player = {
    name: '',
    health: 100,
    inventory: []
}

player.name = ask.question("What is your name? ");
console.log("Welcome, " + player.name + ", to The Grand Adventure!")

// // // / Global variables //
// // keyIn
// // pressedKey = readlineSync.keyIn([query[, options]])
// // // ENEMIES////////////////
var enemies = ["Vector", "El Macho", "Balthazar Bratt"]



var options = ["Walk", "Check Inventory"]
var optionsUnderAttack = ["Run", "Fight Back"]

function walk(){
    // random number between 1 - 4
    var chance = Math.floor(Math.random() * 4)
    // if number is 1 === attack
    if(chance === 1){
       attack()
       console.log("You're under attack!")
    } else {
        console.log("Nothing happened, uneventful day really.")
    }
}
function attack(){
    var attack = Math.floor(Math.random() * 3)
    if(attack === 1){
        console.log("Oh, no! " + enemies[0] + " attacked you!")
    } else if(attack === 2) {
        console.log("Oh, no! " + enemies[1] + " attacked you!")
    } else if(attack === 3) {
        console.log("Oh, no! " + enemies[2] + " attacked you!")
    }
}
function attackBack(){



}
function damageCalc(){
    // random number between 1 - 4
    var damage = Math.floor(Math.random() * 10)
    
    
}
// // /////////////
// // // GAME LOOP
while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 1){
       walk()
    } else if (userChoice === 2) {
        console.log(player)
    } else if(userChoice === -1){
        console.log("Please choose to walk or check your inventory.")
    }
}

// // ////////////////////
// // // Game Functions //




// /////////////////
// /// GAME INTRO //


