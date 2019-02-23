import React from 'react'
import PropTypes from 'prop-types'

function Destination(props){
   
    let myStyle = { backgroundColor: 'red'}

    if (props.timeToGo === "Spring"){
         myStyle = {backgroundColor: 'rgba(78, 186, 111, 0.75'}
    } else if (props.timeToGo === "Summer"){
        myStyle = {backgroundColor: 'rgba(0, 153, 255, 0.5)'}
    } else if (props.timeToGo === "Fall"){
        myStyle = {backgroundColor: `rgba(143, 29, 44, 1)`}
    } else {
        myStyle = {backgroundColor: 'purple'}
    }

    let dollarSigns = "$"

    if (props.price <= 500){
        dollarSigns = "$"
    } else if (props.price > 500 && props.price < 1000) {
        dollarSigns = "$$"
    } else {
        dollarSigns = "$$$"
    }
        return (
            <div style={myStyle}>
              
            <h1>Destination: {props.place}</h1>
            <h4>Price: {props.price}</h4>
            <h3>Season to Travel: {props.timeToGo}</h3>
            <h4>{dollarSigns}</h4>
            </div>
        )
}

Destination.propTypes = {
    place: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    timeToGo: PropTypes.string.isRequired
}

export default Destination