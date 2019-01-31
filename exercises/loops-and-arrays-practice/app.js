var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer"){
        count++
    }
}
console.log(count)
// // There are 4 computers

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
var i = 0
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough")
    } else {
        console.log("not old enough")
    }
}
// console.log(peopleWhoWantToSeeMadMaxFuryRoad[i](name) + "is old enough")
// console.log(peopleWhoWantToSeeMadMaxFuryRoad[i](name) + "is not old enough")
//   for (i = 0; i > peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      
//   

//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] <== 18) {
//         console.log("We found a true!");
//         break;
//     }
// }
