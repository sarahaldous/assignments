var ask = require('readline-sync')

var name = ask.question("What is your name?")

console.log("Well, good morning, " + name + "!")

var gameOver = false
var findKey = false

var options = ["Put hand in hole", "Find the key", "Open the door"]

while(!gameOver){
    var userChoice = ask.keyInSelect(options, "What would you like to do?")
    if(userChoice === 0){
        console.log("You put your hand in the hole, and a bear ate you.")
        gameOver = true
        }
        else if(userChoice === 1){
            console.log("Good job! You found the key! Next step: open the door.")
            findKey = true
        }
        else if(userChoice === 2){
            if(findKey === true){
                console.log("Good job! You're done!")
                gameOver = true
            } else {
                console.log("You need to find the key first.")
            }
        }
        else if(userChoice === -1){
            console.log("You need to choose one of the other options.")
        
        }
    }
    
    
