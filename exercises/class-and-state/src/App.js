import React from 'react'
import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        // this.handleClick = this.handleClick.bind <--Only need this if not using fat arrow below
    }
        handleIncrement = () => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter + 1
                }
            })
        }
        handleDecrement = ()=> {
            this.setState(prevState => {
                return {
                    counter: prevState.counter - 1
                }
            })
        }
        handleDivideBy2 = ()=> {
            this.setState(prevState => {
                return {
                    counter: prevState.counter / 2
                }
            })
        }
        handleMultBy2 = ()=> {
            this.setState(prevState => {
                return {
                    counter: prevState.counter * 2
                }
            })
        }
    render(){
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    handleDivideBy2={this.handleDivideBy2}
                    handleMultBy2={this.handleMultBy2}/>
            </div>
        )
    }
}

export default App