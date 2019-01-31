// var sayHello = function(){
//     console.log("hello class")
// }
// This way won't hoist

sayHello()
function sayHello(){
    console.log("hello class")
}
// This way will hoist
var name = "Jezebel"
var age = 400
function greeting(){
    console.log("hello " + name + ", how do you like being 400?")
}
greeting()
