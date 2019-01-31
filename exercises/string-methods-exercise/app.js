// Make a functions that will return any given string into all caps followed by the same string all lowercase.x

// capilizeAndLowercase("Hello") // => "HELLOhello"
// function myFunction() {
    
    
//     function myFunc(){
//         var str = "Hello";
//         var res = str.toUpperCase();
//         var res1 = str.toLowerCase()
//         console.log(res)
//         console.log(res1)
//         var res2 = res.concat(res1);
//         console.log(res2)
//         var res3 = (res + res1)
//         console.log(res3)
//     }
//    myFunc()
    

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findMiddleIndex
    document.getElementById("Hello")
    console.log(findMiddleIndex("Hello"))

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// Make a function that uses slice() and your other functions you've written to return the first half of the string
function sliceMe(str, num){
    return str.slice(0, num)
}

console.log(sliceMe("This is the string to slice.", 10))
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// Optional: Make a function that takes any string and capitalizes any character that follows a space.
// https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
// var strSplit = "I'm a little tea pot".split(' ');
function capitalize(str){
    var splitWords = str.split(' ')
    for(var i = 0; i < splitWords.length; i++){
        splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);
        splitWords[i] = splitWords[i][0].toUpperCase()
    }
    return splitWords.join(' ')
}
console.log(capitalize("hey friends! practice practice practice!"))