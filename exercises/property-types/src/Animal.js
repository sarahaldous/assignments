import React from 'react'

const Animal = props => {
    return (
        <div>
            <h1>Type: {props.type}</h1>
            <h3>Sound it makes: {props.sound}</h3>
            <p>Coat: {props.coat}</p>
            <p>Legs: {props.legs}</p>
            <p>Diet: {props.diet}</p>
        </div>
    )
}

Animal.propTypes = {
    type: PropTypes.string.isRequired, 
    legs: PropTypes.number.isRequired,
    coat: PropTypes.string,
    speak: PropTypes.arrayOf(PropTypes.object),
    diet: PropTypes.string

}
export default Animal