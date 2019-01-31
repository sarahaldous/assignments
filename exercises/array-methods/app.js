var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
// Remove first item from fruit array
fruit.shift()
console.log(fruit)
// Remove last item from veg array
vegetables.pop()
console.log(vegetables)
// Find the index of "orange"
console.log(fruit.indexOf("orange"))
// Add that number to the end of the fruit array
fruit.push("1")
console.log (fruit)
// Use the length property to find the length of the vegetable array
console.log(vegetables.length)
// Add that number to the end of the vegetable array
vegetables.push("3")
console.log(vegetables)
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food)
// Remove 2 elements from your new array starting at index 4 with one method
food.splice(4, 2)
console.log(food)
// Reverse your array
food.reverse()
console.log(food)
var foodString = food.toString()
console.log(foodString)