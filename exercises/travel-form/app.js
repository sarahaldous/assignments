var form = document.travelForm


form.addEventListener("submit", function(e){
    e.preventDefault() 

    var firstName = form.firstName.value
    var lastName = form.lastName.value
    var age = form.age
    var gender = form.gender.value
    var destination = form.destination.value
    var dietRest = form.dietRest
    console.log(dietRest)

    var result = []
    for(var i = 0; i < dietRest.length; i++) {
        if(dietRest[i].checked) {
            result.push(dietRest[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age.value + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + result)
})

// console.log
// console.log("Last Name: " + result)
// console.log ("Age: " + result)
// console.log("Gender: " + result)
// console.log("Destination: " + result)
// consolelog("Dietary Restrictions: " + result)

