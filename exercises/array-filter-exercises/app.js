// var numbers = [3, 6, 8, 2];
// var newArr = [];
// for (var i = 0; i < numbers.length; i++){
//     if(numbers[i] >= 5){
//         newArr.push(numbers[i]);
//     }
// }
// numbers.filter(function(numbers){
//     return numbers >= 5;
// })
function fiveAndGreaterOnly(arr) {
    var newNums = arr.filter(function(number){
    return number >= 5
    })
    console.log(newNums)
}
  // test
fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.
// DOESN'T WORK

var numbers = [3, 6, 8, 2]
numbers.filter(function(number){
  return number % 2 === 0
})
    
     
// test
console.log(number([3, 6, 8, 2])); /// [6, 8, 2]
// var numbers = [12,4,56,27];

// var newArr = numbers.filter(function(number){
//     return number >= 25;
// })
// console.log(newArr)