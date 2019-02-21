import React from 'react'

function Box(props){
    return (
        <div style={{backgroundColor: props.style}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h5>{props.info}</h5>
        </div>
    )
}
export default Box;