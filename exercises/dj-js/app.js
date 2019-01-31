

var square = document.getElementById("square")
console.log(square)
function turnBlue(){
    square.style = "width: 100px; height: 100px; background-color: blue;"
}
square.addEventListener("mouseover", turnBlue)

function turnRed(){
    square.style = "width: 100px; height: 100px; background-color: red;"
}
square.addEventListener("mousedown", turnRed)

function turnYellow(){
    square.style = "width: 100px; height: 100px; background-color: yellow;"
}
square.addEventListener("mouseup", turnYellow)

function turnGreen(){
    square.style = "width: 100px; height: 100px; background-color: green;"
}
square.addEventListener("dblclick", turnGreen)

function turnOrange(){
    console.log("string")
    square.style = "width: 100px; height: 100px; background-color: orange;"
}
window.addEventListener("scroll", turnOrange)

document.addEventListener("keydown", function(event){
    event.which == 66 ? turnBlue()
        : event.which == 82 ? turnRed()
        : event.which == 89 ? turnYellow()
        : event.which == 71 ? turnGreen()
        : event.which == 79 ? turnOrange()
        : console.log("no color assigned")
})
document.addEventListener("keydown", function(event){
    console.log(event)
    console.log(event.which)
 })