import React from 'react'
import EntryForm from './EntryForm.js'
import List from './List.js'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            names: []
        }
    }

    handleChange = (e) => {
        this.setState ({
            // nameInput: e.target.value
            [e.target.name]: e.target.value
            //if more than one data entry box, put [e.target.name]: e.target.value to list the value of all of them.
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return{
                names: [...prevState.names, this.state.nameInput],
                nameInput: ""
            }
            
        })
    }
    render(){
        return (

            <div>
            <div>
                <h1>{this.state.nameInput}</h1>
                <EntryForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    nameInput={this.state.nameInput}/>
                    <List names={this.state.names}/>
            </div>
            <div>
                    {this.state.names.map((name, i) => <h1 key={i}>{name}</h1>)}
            </div>
            </div>
        )
    }
}

export default App;