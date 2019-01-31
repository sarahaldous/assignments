



var shopper = {
    firstName: "Steve",
    lastName: "Harvey",
    inAHurry: true,
    itemsYetToBuy: 12,
    groceryCart: ["onions", "walnuts", "napkins", "toothpaste", "blueberry muffins"],
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
// person.name = function() {
//     return this.firstName + " " + 
// this.lastName;
// };

console.log(shopper.fullName())