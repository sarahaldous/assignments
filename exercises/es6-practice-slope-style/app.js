// function collectAnimals(...animals){
//     console.log(animals)
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "armadillo");

// function combineFood(fruit, sweets, vegetables){
//     const food = { fruit, sweets, vegetables}
//     console.log(food)
// }
// combineFood(   ["apple", "pear"],
//                 ["cake", "pie"],
//                 ["carrot"]
// )

// const vacation = {
//     location: "Burley, Idaho",
// //     duration: "2 weeks"
// // }
// // const {location, duration} = vacation
// // console.log(`We're going to have a good time in ${location} for ${duration}`)
// // function parseSentence(){
    
// // }
// const desserts = ["cupcakes", "donuts", "apple strudel"]
// function returnFirst(items){
    
//     const [secondItem, firstItem, potato] = items;
//     return potato
//     // console.log(items[0])
// }
// console.log(returnFirst(desserts))


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];


// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = favoriteActivities
//     console.log(`My top three favorite activities are ${firstFav}, ${fourthFav}, and ${fifthFav}`)
// }

// returnFavorites(favoriteActivities)
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const fruit = ["banana", "apple"]

//  combineAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals] 
//     console.log(combineAnimals)


function SpreadArr(...arr){
    console.log(arr);
    const newArr = []
    arr.forEach(each => newArr.push(...each))
    return newArr
}
console.log(SpreadArr(["dog", "cat", "mouse"] ,magicalAnimals, mysteriousAnimals, fruit))

