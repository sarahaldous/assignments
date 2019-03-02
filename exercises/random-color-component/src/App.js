import React from 'react'
import axios from 'axios'
import './styles.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colors: "",
        }
}
componentDidMount(){
    axios.get("http://www.colr.org/json/color/random").then(response => {
        
        this.setState({
            colors: response.data.colors[0].hex
            
        })
    }).catch(error => console.log(error))
}
render(){
    console.log(this.state.colors)
   
        return (
            <div className="style" style={{backgroundColor: `#${this.state.colors}`}}>

            </div>
        )
    
}


}

export default App