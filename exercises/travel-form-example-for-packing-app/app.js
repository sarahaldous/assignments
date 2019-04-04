var form = document.travelForm


form.addEventListener("submit", function(e){
    e.preventDefault() 

    var destination = form.destination.value
    var tripLength = form.tripLength
    var gender = form.gender.value
    
    var activities = form.activities
    console.log(dietRest)

    var result = []
    for(var i = 0; i < activities.length; i++) {
        if(dietRest[i].checked) {
            result.push(dietRest[i].value)
        }
    }
    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age.value + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + result)
})
