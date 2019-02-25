import React from 'react'
import Box from './Box.js'

class App extends React.Component {
    constructor(){
    super()
    this.state = {
    color1: “blue”,
    color2: "red",
    color3: "green",
    count: 0
    
    }
    }
    handleChangeColor = () => {
    const = [“green”, “purple”, “teal”, “cornflowerblue”, “firebrick”]

    const chosenColor1 = colors[ Math.floor(Math.random() * colors.length)]
    const chosenColor2 = colors[ Math.floor(Math.random() * colors.length)]
    const chosenColor3 = colors[ Math.floor(Math.random() * colors.length)]
    this.setState({
        color1: chosenColor1,
        color2: chosenColor2,
        color3: chosenColor3,
        count: prevState.count + 1
    })
    
    alert("Hello")
    }
    render(){
    return (
        <div>
        <Box color={this.state.color1} handleChangeColor={this.handleChangeColor}/>
        <Box color={this.state.color2} handleChangeColor={this.handleChangeColor}/>
        <Box color={this.state.color3} handleChangeColor={this.handleChangeColor}/>
        </div>
    )
    }
    }

    export default App