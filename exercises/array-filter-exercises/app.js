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


// var numbers = [12,4,56,27];

// var newArr = numbers.filter(function(number){
//     return number >= 25;
// })
// console.log(newArr)