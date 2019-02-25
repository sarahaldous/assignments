import React from 'react'
import PropTypes from 'prop-types'

const CounterDisplay = (props) => {
    return (
        <div>
            <h3>{props.counter}</h3>
        </div>
    )
}

CounterDisplay.propTypes = {
    counter: PropTypes.number.isRequired
    
}

export default CounterDisplay