var form = document.airlineForm;
var submit = document.getElementById("submit");
// var query = document.querySelector(e);

airlineForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(e)



    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push(document.getElementById('vegan').value);
    }
    else if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident...");
})


button.addEventListener("onclick", formAlert);
