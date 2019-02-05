function happyMonday(name, age){
    var a = "Happy Monday, "
    return a + name
}
console.log(happyMonday())

var lameMonday = function(){
    var b = "Ugh, it's Monday!"
    return b + " " + name + ", You are: " + age
}
console.log(lameMonday("Rick, 70"))
// If you don't put the ^ inner parentheses, it will return [Function: lameMonday], meaning it knows there is such a function, but it hasn't been told what to do.
// Functions   
//     - Declarations vs Expressions
//     - Calling Functions

// Function declaration  ( hoisted )
// function generateHello(name, age){
//     var a = "hello"
//     return a + " " + name + ", You are: " + age
// }

// Function Expression ( Not hoisted )
// var generateGoodbye = function(name, age){
//     var b = "goodbye"
//     return b + " " + name + ", You are: " + age
// }

// console.log(generateHello("Rick", 70))
// console.log(generateGoodbye("Morty", 13))