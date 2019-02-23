import React from 'react'

const Fruit = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.fruit}</h3>
        </div>
    )
    }



export default Fruit