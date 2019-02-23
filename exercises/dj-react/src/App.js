import React from 'react'
import { createRequireFromPath } from 'module';

class App extends React.Component {
    constructor(){
    super()
    this.state = {
        color1: "blue",
        color2: "purple",
        color3: "teal",
        color4: "gray"
        
    }
   } 
   handleChangeColor = () => {
        const colors = ["teal", "purple", "magenta", "blue", "gray", "seafoam green", "#D9FEDF"]
        const currentColor1 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor2 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor3 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor4 = colors[Math.floor(Math.random() * colors.length)]
        
        this.setState({
            color1: currentColor1,
            color2: currentColor2,
            color3: currentColor3,
            color4: currentColor4
        })
   }
   turnBlack = () => {
       this.setState({
           color1: "black",
           color2: "black",
           color3: "black",
           color4: "black"
       })
   }
//    toggleGreens = () => {
//        this.setState(prevState => {
//            color1: prevState.color1 === "teal" ? "#D9FEDF" : "teal"
//        })
//    }
   turnPurple = () => {
    this.setState({
        color1: "purple",
        color2: "purple"
    })
    }
    bottomLeftBlue = () => {
        this.setState({
            color3: "blue"
        })
        }
    bottomRightBlue = () => {
        this.setState({
            color4: "blue"
        })
        }
   render(){
       const style = {
           display: "grid",
           gridTemplateColumns: "repeat(2, 1fr)"
           
       }
       const boxStyle1 = {
           width: 200,
           height: 200,
           border: '1px solid black',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: this.state.color1
       }
       
    
        const boxStyle2 = {
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.color2
        }
    
    
        const boxStyle3 = {
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.color3
            }
        

        const boxStyle4 = {
                    width: 200,
                    height: 200,
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: this.state.color4
                }
            
       return (
           <div>
               <div style={style}>
                    <div style={boxStyle1}>Box 1</div>
                    <div style={boxStyle2}>Box 2</div>
                    <div style={boxStyle3}>Box 3</div>
                    <div style={boxStyle4}>Box 4</div>
               </div>
               <button onClick={this.handleChangeColor}>Random Color Change</button>
               <button id="toggleGreens" onClick={this.toggleGreens}>Toggle</button>
                <button id="turnBlack" onClick={this.turnBlack}>Make all the squares black</button>
                <button id="purple" onClick={this.turnPurple}>Change to Purple</button>
               <button id="bottomLeftBlue" onClick={this.bottomLeftBlue}>Change Bottom Left to Blue</button>
               <button id="bottomRightBlue" onClick={this.bottomRightBlue}>Change Bottom Right to Blue</button>

           </div>
       )
}
}


export default App;