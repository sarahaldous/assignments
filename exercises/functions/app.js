// Write a function that accepts two numbers as parameters and returns the sum.
var funcOne = function(a, b) {
    console.log(a +b);

}
funcOne(6, 20)


// // Write a function that accepts three numbers as parameters and returns the largest of those numbers.
// var funcTwo = function(a, b, c) {
//     if ( a > b && a > c ) {
//         console.log(a)
//     } else if ( b > c )
//         console.log (b)
//     } else
//     console.log(c)
// }
// funcTwo(39, 38, 2);
// using Math.max
// function returnLargestOf3(num1, nu2, num3){
//    return Math.max(num1, num2, num3)
// }
// console.log(returnLargestOf3)()

//  Using for loop
//  function returnLargestOf3(num1, num2, num3){
//      var numsArray = [num1, num2, num3]
//      var largest = 0;

//      for(var i = 0; i < numsArray.length; i++){
//         if(numsArray[i] > largest){
//             largest = numsArray[i]
//         }

//    }
//    return largest
// }
// console.log(returnLargestOf3(30, 244, 809))
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
// Notes on Strings and string methods
var myStr = “hello”
myStr = myStr.toUpperCase()
console.log(myStr)
