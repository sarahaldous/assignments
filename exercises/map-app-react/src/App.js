import React from 'react'
import Fruit from './Fruit.js'
import Person from './Person.js'


const App = () => {
    //const tropicalFruits = ["Pineapple", "Papaya", "Passion Fruit", "Mango", "Coconut"]
    //const mappedFruitComponents = tropicalFruits.map((fruit, i) => <Fruit fruit={fruit} key={i}/>)
        // return (
        //     <div>
        //         { mappedFruitComponents}
           
        //     </div>
        // )


const people = [
    {
        name: "Alice",
        age: 66,
        favColor: "blue",
        friends: ["Alice", "Heather"]
    },
    {
        name: "Sarah",
        age: 36,
        favColor: "teal",
        friends: ["Michelle", "Charlotte", "Eva"]
    },
    {
        name: "Aaron",
        age: 3,
        favColor: "orange",
        friends: ["Tabitha", "Alex", "Caleb"]
    }
]
const mappedPeople = people.map((person, i) => 
        <Person key={i} 
            name={person.name} 
            age={person.age} 
            favColor={person.favColor}
            friends={person.friends}/>)
return (
  <div>
        {mappedPeople}
  </div>
)

}

export default App