import React, {Component} from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import VacationForm from './VacationForm.js'

class WeatherDisplay extends Component {
   constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.getCoordinatesData()
    }

  


// build map function here that returns a div with the below information (nested divs)
//        /let mappedDay=props.forecast.map(build map out here)

    render(){
        
            let mappedDay = this.props.forecast.map((dayWeather, i) => {
                console.log(dayWeather)
                return (
                    
                    <div>
                        {/* Put weekly weather summary here */}
                       
                          <p>(Date)</p>
                          {/* convert to date readable by human */}
                          <p>Summary: {dayWeather.summary}</p>
                          <div id="weatherIcon">
                          {/* <img src="{dayWeather.icon}">Icon: </img> */}
                          </div>
                          <p>High: {dayWeather.temperatureHigh}</p>
                          <p>Low: {dayWeather.temperatureLow}</p>
                          <p>Feels Like: {dayWeather.apparentTemperatureLow} to {dayWeather.apparentTemperatureHigh}</p>
                          <p>Humidity: {dayWeather.humidity}</p>
                          <p>Cloud Cover: {dayWeather.cloudCover}</p>
                          <p>Chance of Precipitation: {dayWeather.precipProbability}</p> 
                          {/* convert to percentage, not decimal */}
                          <p>Wind Speed: {dayWeather.windSpeed}</p>
                     </div> 
                )
    
                     
                    
                })
            
      return (
        <div>
            <VacationForm />
            <h1>This week in {this.props.forecast.city}, {this.props.forecast.state}</h1>
            <h2>{this.props.summary}</h2>
            {mappedDay}
        </div>
       )
    }
}


export default withCoordinates(WeatherDisplay)

// temperatureHigh: 65.37
// temperatureLow: 50.75
// apparentTemperatureHigh: 61.65
// apparentTemperatureLow: 47.98
// cloudCover: 0.87
// humidity: 0.72
// icon: "partly-cloudy-day"
// precipType: "rain"
// summary: "Mostly cloudy throughout the day."
// time: 1554274800  <<-- need to convert this to a readable time
// windSpeed: 3.83
// "precipProbability": 0.33,
// daily -> summary and daily -> data -> [0] -> summary
