var myVar = document.getElementById("treeName")
console.log(myVar)
var myVar2 = document.getElementById("flowerName")
console.log(myVar2)
var myVar3 = document.getElementById("grassName")
console.log(myVar3)

var myH1 = document.createElement('h1')
myH1.textContent = "Hello Wednesday"
var container = document.getElementById('container')
container.appendChild(myH1)
console.log()
var pTag = document.getElementsByClassName('my-class')
pTag[0].classList.add("highlight")
pTag[0].classList.remove("highlight")

var myImg = document.createElement('img')
myImg.setAttribute("src", "url")
myImg.style.width = "200x"
myImg.style.height = "200px"
container.appendChild(myImg)