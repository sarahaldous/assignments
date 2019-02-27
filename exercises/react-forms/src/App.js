import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            ageInput: "",
            names: []
        }
    }

    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
            // nameInput = e.target.value
            // ageInput = e.target.value

            //can also write it this way:
            // const { name, value} = e.target
            // this.setState({
            //     [name]: value
            // })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // alert(`Hi, I am ${this.state.nameInput}, and I am ${this.state.ageInput}!`)
        this.setState(prevState => {
            return {
                names: [...prevState.names, this.state.nameInput],
                nameInput: "",
                ageInput: "",
            }
        })
    }
    render(){
        // this.state.names.map()
        return (
            <div>
                <h1>{this.state.nameInput}</h1> //this will display their input on the screen
                <h1>{this.state.ageInput}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange}/>
                    <input type="text" name=" ageInput" value={this.state.ageInput} onChange ={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                    {this.state.names.map((name, i) => <h1 key ={i}>{name}</h1>)}
            </div>
        )
    }
}

export default App