import React from 'react'
import Pet from './Pet'

function Friend(props){
    const mappedPets = props.pets.map((pet, i) =>
        <Pet key={i}
         
            name={pet.name}
            breed={pet.breed}/>
)
    return (
            <div className="friend-container">
                <h2 className="names">Name: {props.name}</h2>
                <h3>Age: {props.age}</h3>
                {mappedPets}
            </div>
            )
}

export default Friend

// could also write
//const Friend = props => {
