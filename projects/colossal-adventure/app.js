var ask = require('readline-sync');

var player = {
    name: '',
    health: 100,
    inventory: []
}

var underAttack = false
player.name = ask.question("\n\tWhat is your name? ");
console.log("\n\tWelcome, " + player.name + ", to The Grand Adventure!")

var enemies = [
    {
    name: "Vector", 
    weapon: "squid launcher",
    health: 35
    },
    {
    name: "El Macho",
    weapon: "mutation serum",
    health: 45
    },
    {
    name: "Balthazar Bratt",
    weapon: "sonic keytar",
    health: 40
    }
    ]
var currentEnemy = null
var allEnemiesDead = false
var options = ["Walk", "Check Inventory", "Run", "Fight Back"]

var deadEnemies = []


function initilizeGame(){ 
     
    if(allEnemiesDead === true && player.health > 0){
        console.log("\n\tCongratulations! You won!")
        
    } else if (allEnemiesDead && player.health <= 0){
        console.log("\n\tYou died, " + player.name + "! Maybe you'd have better luck playing Oregon Trail?!")
    }
    while(player.health > 0 || allEnemiesDead){
    
    var userChoice = ask.keyInSelect(options, "\n\tWhat would you like to do? ")
    if(userChoice === 0){
       walk()
    } else if (userChoice === 1) {
        console.log(player)
    } else if (userChoice === 2) {
        if (underAttack === true){
            run() 
        } else {
            console.log("\n\tNo need to run! Let's keep walking!")
        }
    } else if (userChoice === 3) {
        if (underAttack === true) {
            attackBack()
        } else {
            console.log("\n\tAttack who? Keep walking; you'll encounter an enemy soon enough.")
        }
    } else if(userChoice === -1){
        console.log("\n\tPlease choose to walk or check your inventory.")
    }
}
}


function walk(){
    // random number between 1 - 4
    var walk = Math.floor(Math.random() * 4)
    // if number is 1 === attack
    if(walk === 1){
        //underAttack = true
       console.log("\n\tYou're under attack!")
       attack()
    } else {
        console.log("\n\tStill safe and sound. Let's keep walking!")
        
    }
}
function attack(existingEnemy){
    var currentEnemy = existingEnemy;
    var aliveEnemies = []
    if(!currentEnemy){
        
        for (var i = 0; i < enemies.length; i++){
            if(enemies[i].health > 0){
                aliveEnemies.push(enemies[i])
            }
        }
        var mathTest = Math.floor(Math.random() * aliveEnemies.length)
        var currentEnemy = aliveEnemies[mathTest]
    }
    
    // console.log(currentEnemy)

    console.log("\n\tOh, no! " + currentEnemy.name + " attacked you with his " + currentEnemy.weapon + "! Run or fight back!")
    console.log(currentEnemy.health)
    while(currentEnemy.health > 0 && player.health > 0){
        var choice = ask.keyInSelect(["Fight", "Run"], "\n\tWhat would you like to do?")
     console.log(choice)
        if(choice === 0){
            var enemyAttackPower = randomDamage()
            player.health -= enemyAttackPower
            console.log("\n\t" + player.name + " was hurt for " + enemyAttackPower)
            console.log("\n\tYour current health is " + player.health + ".")

            if(player.health <= 0){
                console.log("\n\tYou died, " + player.name + "! Maybe you'd have better luck playing Oregon Trail?!")
            }
            
            var playerAttackPower = randomDamage()
            currentEnemy.health -= playerAttackPower
            console.log (currentEnemy.name + " was hurt for " + playerAttackPower)
            console.log("\n\tYour enemy's health is " + currentEnemy.health + ".")
            
            if(currentEnemy.health <= 0){
                console.log("\n\tYou killed " + currentEnemy.name + "!")

                deadEnemies.push(currentEnemy)

                //  //console.log(enemies)
                // for (var i = 0; i < enemies.length; i++){

                //     console.log("enemy is " + enemies[i].name )
                //     console.log("enemy health " + enemies[i].health )

                //     if(enemies[i].health > 0){
                //         aliveEnemies.push(enemies[i])
                //     }
                // }
                console.log(aliveEnemies)
                if(deadEnemies.length === 3 ){
                    allEnemiesDead = true
                    console.log("\n\tGood job! You defeated all your enemies!")
                    player.health = 0
                    initilizeGame()

                }

                initilizeGame()
            }
        }
        else if(choice === 1){
            run(currentEnemy)
        }

        
    }
   
    
    // } else if(attack === 1) {
    //     console.log("Oh, no! " + enemies[1].name + " attacked you with a mutation serum! Run or fight back!")
        
    // } else if(attack === 2) {
    //     console.log("Oh, no! " + enemies[2].name + " attacked you with his sonic keytar! Run or fight back!")
        
    // } 
    // currentEnemy = enemies[attack]
}


function randomDamage(){
    var addPoints = Math.floor(Math.random() * 51)
    return addPoints    
}


function run(currentEnemy){
    var run = Math.floor(Math.random() * 2)
    if(run === 0){

        console.log("\n\tThat was close - but you escaped!!!")
        deadEnemies.push(currentEnemy)
        currentEnemy.health = 0
        underAttack = false
    } else if(run === 1) {
        console.log("\n\tOh, no! " + currentEnemy.name + " caught up to you!")
        // underAttack = true
        attack(currentEnemy)
    }
}


// // // GAME LOOP
while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "\n\tWhat would you like to do? ")
    if(userChoice === 0){
       walk()
    } else if (userChoice === 1) {
        console.log(player)
    } else if (userChoice === 2) {
        if (underAttack === true){
            run() 
        } else {
            console.log("\n\tNo need to run! Let's keep walking!")
        }
    } else if (userChoice === 3) {
        if (underAttack === true) {
            attackBack()
        } else {
            console.log("\n\tNobody to attack! Keep walking; you'll encounter an enemy soon enough.")
        }
    } else if(userChoice === -1){
        console.log("\n\tPlease choose to walk or check your inventory.")
    }
}
function attackBack(){
    var attackBack = Math.floor(Math.random() * 2)
    if(attackBack === 0){
        var randomDamage = addPoints()
        player.health -= randomDamage
        console.log("\n\tHe bested you! You lost " + randomDamage + " points!!")
        underAttack  = false
    } else if(attack === 1) {
        var randomDamage = addPoints()
        player.health += addPoints()
        console.log("You blast him with your freeze ray and win the fight! You won" + randomDamage + " and get to keep his weapon!")
        underAttack = false
        player.inventory.push(currentEnemy.weapon)
        console.log(currentEnemy.inventory)
}
}