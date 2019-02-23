import React from 'react'

const CounterControls = props => {
    return (
        <div>
            <button onClick={props.handleIncrement}> + </button>
            <button onClick={props.handleDecrement}> - </button>
            <button onClick={props.handleDecrement}> /2 </button>
            <button onClick={props.handleDecrement}> *2 </button>
        </div>
    )
}
const CounterDecrement = props => {
    return (
        <div>
            <button onClick={props.handleDecrement}> - </button>
        </div>
    )
}

export default CounterControls