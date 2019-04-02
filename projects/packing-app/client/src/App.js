import React from 'react'
import VacationForm from './VacationForm.js'
import List from './List.js'

class App extends React.Component {
    constructor({
        super()
        this.state = {
            locationInput: "",
            tripLength: "",
            tempRange: "",
            activities: ""
        }
    }
    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                locationInput: [...prevState.locationInput, this.state.locationInput],
                tripLength: "",
                tempRange: "",
                activities: ""
            }
        })
    }
    render(){
        return (
            <h1>{this.state.locationInput}</h1>
            <VacationForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                locationInput={this.state.locationInput}
                tripLength={this.state.tripLength}
                tempRange={this.state.tempRange}
                activities={this.state.activities}
            ></VacationForm>
        )
    }
    )
}