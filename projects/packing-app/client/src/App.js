import React from 'react'
import VacationForm from './components/VacationStuff/VacationForm.js'
import WeatherDisplay from './components/VacationStuff/WeatherDisplay.js'
// import List from './List.js'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
           
        }
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.locationInput}</h1>
                <VacationForm />
                <WeatherDisplay />
            </div>
        )
    }
    
}
export default App