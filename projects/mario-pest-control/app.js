var form = document.form
var result = document.getElementById("sum")

form.addEventListener("submit", function(e){
    e.preventDefault()

    var p = document.createElement("p")


    var g = form.goombaQuantity.valueAsNumber
    var b = form.bobOmbQuantity.valueAsNumber
    var c = form.cheepCheepQuantity.valueAsNumber
    var sum = (5 * g) + (7 * b) + (11 * c)
    p.textContent = sum
    result.appendChild(p)
})