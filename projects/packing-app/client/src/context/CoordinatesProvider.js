import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
const coordinates = (process.env.REACT_APP_OC_API_KEY)
const weather = (process.env.REACT_APP_DS_API_KEY)
const axios = require('axios')


//Add ability to save searched destinations with suitcase icon!!!!!!!
//build saveCity method
//axios.post to route on back end
const CoordinatesContext = React.createContext()

class CoordinatesProvider extends Component {
    constructor(){
        super()
        this.state = {
            latitude: "",
            longitude: "",
            city: "",
            state: "",
            locationInput: "",
            tripLength: "",
            tempRange: "",
            activities: "",
            forecast: []
        }
    }

    getCoordinatesData = props => {
        const city = this.state.city
        let correctCity = ''
        // use regex to find whitespace
        // remove witespacde
        // replace with %20

        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.city}%2C%20${this.state.state}&key=${coordinates}&language=en&pretty=1`).then((response) => {
            this.setState({ latitude: response.data.results[0].geometry.lat, longitude:  response.data.results[0].geometry.lng}, () => this.getWeather())
        }).catch(function(error){
            console.log(error)
        })
    }
    getWeather = (props) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${weather}/${this.state.latitude},${this.state.longitude}`).then((response) => {
            // console.log(response.data)
            this.setState({ forecast: response.data.daily.data}, () => console.log(this.state.forecast))
            this.setState({ dailySummary: response.data.daily.summary}, () => console.log(this.state.dailySummary))
        }).catch(function(error){
            console.log(error)
        })
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
        },() => this.props.history.push('/weather')) 
        this.getCoordinatesData()
    }
    render(){
        return (
            <CoordinatesContext.Provider
                value={{
                    ...this.state,
                    getCoordinatesData:this.getCoordinatesData,
                    handleChange:this.handleChange,
                    handleSubmit:this.handleSubmit
                }}>
                {this.props.children}
                </CoordinatesContext.Provider>
        )
    }
}
export const withCoordinates = C => props => (
    <CoordinatesContext.Consumer>
        {value => <C {...props} {...value} />}
    </CoordinatesContext.Consumer>
)
export default withRouter(CoordinatesProvider)