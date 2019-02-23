import React from 'react'

function Pet(props){
    
    return (
        <div>
            
           <h6 className="pet-name">Pet Name: {props.name}</h6>
            <h6 className="pet-breed">Breed: {props.breed}</h6>
            
        
        </div>
    )
    
}

export default Pet