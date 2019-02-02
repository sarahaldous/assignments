var addForm = document.addForm

var result = document.getElementById('divA')
// var total = document.getElementById("total")

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    var p = document.createElement("p")

    var addX = addForm.addX.valueAsNumber
    var addY = addForm.addY.valueAsNumber
    var sum = addX + addY
    p.textContent = sum
    result.appendChild(p)
})
var subForm = document.subForm 
var resultS = document.getElementById('divS')
 
subForm.addEventListener("submit", function(e){
    e.preventDefault()
    var p = document.createElement("p")

    var subX = subForm.subX.valueAsNumber
    var subY = subForm.subY.valueAsNumber
    var sum = subX - subY
    p.textContent = sum
    resultS.appendChild(p)
})
var multForm = document.multForm 
var resultM = document.getElementById('divM')
multForm.addEventListener("submit", function(e){
    e.preventDefault()
    var p = document.createElement("p")

    var multX = multForm.multX.valueAsNumber
    var multY = multForm.multY.valueAsNumber
    var sum = multX * multY
    p.textContent = sum
    resultM.appendChild(p)
})

var divForm = document.divForm

var resultD = document.getElementById('divD')
// var total = document.getElementById("total")

divForm.addEventListener("submit", function(e){
    e.preventDefault()
    var p = document.createElement("p")

    var divX = divForm.divX.valueAsNumber
    var divY = divForm.divY.valueAsNumber
    var sum = divX / divY
    p.textContent = sum
    resultD.appendChild(p)
})