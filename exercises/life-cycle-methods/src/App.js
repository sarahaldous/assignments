import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state ={
            bgColor: "turquoise",
            fontSize: 20
        }
    }
    componentDidMount(){
        //axios request
        //save response data in state
        window.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.which === 71){
                this.setState({
                    bgColor: "goldenrod",
                    fontSize: 50
                })
            }
            switch(e.which){
                case 77:
                    this.setState({
                        bgColor: "magenta",
                        fontFamily: "Cambria", 
                        borderRadius: "10",
                        border: "1px solid black"
                    })
            }
            switch(e.which){
                case 66:
                    this.setState({
                        bgColor: "black",
                        fontFamily: "Cambria", 
                        borderRadius: "10",
                        border: "1px solid black"
                    })
            }
            switch(e.which){
                case 65:
                    this.setState({
                        bgColor: "aquamarine",
                        fontFamily: "Cambria", 
                        borderRadius: "10",
                        border: "1px solid black"
                    })
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener("keydown")
    }

    render(){
        return (
            <div style={{backgroundColor: this.state.bgColor}}>
               <h1>Hello {this.state.username}</h1>
            </div>
        )
    }
}
export default App