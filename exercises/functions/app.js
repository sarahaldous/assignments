// Write a function that accepts two numbers as parameters and returns the sum.
// function addNumbers(a, b) {
//     console.log(a + b);

// }
// addNumbers(6, 20)


// Write a function that accepts three numbers as parameters and returns the largest of those numbers.

// var funcTwo = function(a, b, c) {
//     if ( a > b && a > c ) {
//         console.log(a);
//     } else if ( b > c ) {
//         console.log (b);
//     } else {
//     console.log(c);
//     }
// }
// funcTwo(39, 38, 2);

// using Math.max
// function returnLargestOf3(a, b, c) {
//    return Math.max(a, b, c);
// }
// console.log(returnLargestOf3(39, 38, 2));


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
// var i = 221;


// function evenOrOdd(i) {
//     if (i % 2 === 1){
//         console.log("odd");
//     } else {
//         console.log("even")
//     }
//   }
//   var i = 23456
// evenOrOdd(i)
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
// Notes on Strings and string methods
var myStr =  " your code to run";
// console.log(str.length);

function returnFirstHalf(myStr) {
    if (myStr.length >= 20) {
        var res = myStr.slice(0, myStr.length / 2);
        console.log(res)
    } else {
        var res1 = myStr
        console.log(res1 + res1)
    }
   
}
returnFirstHalf(myStr)
// str = myStr.returnFirstHalf()
// console.log(myStr)
