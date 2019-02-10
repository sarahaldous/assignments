var readlinesync = require("readline-sync")


var result = num1 + num2 
function add(){
    return(result) 
}
add()
console.log(result)
var resultMult = num1 * num2

function mul(){
    return(resultMult)
}
mul()
console.log(resultMult)

var resultDiv = num2 / num1
function div(){
    return(resultDiv)
}
div()
console.log(resultDiv)

var resultSub = num1 - num2
function sub(){
    return(resultSub)
}
sub()
console.log(resultSub)

var myNum1 = readlinesync.question("Please enter your first number: ")
var num1 = parseInt(myNum1)
console.log("")
var myNum2 = readlinesync.question("Please enter your second number: ")
var num2 = parseInt(myNum2)
var operators = ['add', 'sub', 'mul', 'div']
var operation = readlinesync.keyInSelect(operators, "Which operation would you like to perform? ")
var result = 0


function calc(){
    if (operation === 0){
        result = num1 + num2
        return result
    } else if (operation === 1){
        result = num1 - num2
        return result
    } else if (operation === 2){
        result = num1 * num2
        return result
    } else if (operation === 3) {
        result = num1 / num2
        return result
    }
}
calc()
// console.log(calc())

console.log("The result is: " + (result))