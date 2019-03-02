import React, {Component} from 'react'
import Toggle from './shared/Toggle'

const App = () => {
   
    render(){
        return (
            <div>
                <Toggle render={({isToggled, toggler}) => 
                    <Toggle render={({isToggled: fanIsToggled, toggler:fanToggler}) => 
                        <>
                            <h1>The Light is {isToggled ? "On" : "Off"}</h1>
                            <button onClick={toggler}>Turn {isToggled ? "On" : "Off"} the Light</button>
                            <h1>The Light is {fanIsToggled ? "On" : "Off"}</h1>
                            <button onClick={toggler}>Turn {fanIsToggled ? "On" : "Off"} the Fan</button>
                        </>
                    }/>
                </div>
        )
    }
}
export default App