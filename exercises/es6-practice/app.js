// // const name = "John"
// // let age = 101
// // const pets = ["cat", "dog"]
// // let petObjects = []

// // function runForLoop() {
// //     for (let i = 0; i < pets.length; i++) {
// //         let pet = { type: pets[i] }
// //         if (pets[i] === "cat") {
// //             let name = "fluffy"
// //         } else {
// //             let name = "spot"
// //         }
// //         pet.name = name
// //         petObjects.push(pet)
// //     }
// //     return name
// // }

// // runForLoop()

// const name = "John"
// let age = 101
// const pets = ["cat", "dog"]
// let petObjects = []
// let petName = ""

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             petName = "fluffy"
//         } else {
//             petName = "spot"
//         }
//         pet.petName = petName
//         petObjects.push(pet)
//     }
//     return petObjects

// }

// // console.log(runForLoop())

const carrots = ["bright orange", "ripe", "rotten"]


// function mapVegetables(arr) {
//     return arr.map((carrot)  => {
//         return { type: "carrot", name: carrot }
//     })
// }
const mapVegetables = carrots.map(function(carrot) {
    return {type: "carrot", name: carrot}

})
console.log(mapVegetables)
//  const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return !!person.friendly
//     })
// }
// const filterForFriendly = people.filter(person => person.friendly)
// console.log(filterForFriendly)

// // const doMathSum = (a, b) => a + b;
// console.log(doMathSum)

// // }
// // function doMathSum(a, b) {
// //     return a + b
// // }

// const produceProduct = (a, b) => a * b
// console.log(produceProduct)
// //     return a * b
// // }

// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// const person = {
//     firstName: `Jane`,
//     lastName: `Doe`,
//     age: 10
// }



// function createString(firstName = "Jane", lastName = "Doe", age = 100){
//     console.log(`Hi, ${firstName} ${lastName}, how does it feel to be ${age}?`)

// }

// createString(person.firstName, person.lastName, person.age)
// createString("Steve", "Smith", 999)

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
//  const filterForDogs = animals.filter(animal => animal.type === "dog" ? true : false)
//  console.log(filterForDogs)

 const createString2 = (name = "Janice", location = "Hawaii") => {
 console.log(`Hi, ${name}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

 }
 createString2("Ken", "Australia")