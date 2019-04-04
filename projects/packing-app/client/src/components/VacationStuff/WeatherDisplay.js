import React from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'

const WeatherDisplay = (props) => {
 console.log(props)
 //build map function here that returns a div with the below information (nested divs)
       //let mappedDay=props.forecast.map(build map out here)

       return (
            <div>
{/* {mappedDay} */}
            </div>
        )
    }

export default withCoordinates(WeatherDisplay)










// apparentTemperatureHigh: 61.65
// apparentTemperatureLow: 47.98
// cloudCover: 0.87
// humidity: 0.72

// icon: "partly-cloudy-day"

// icon: "partly-cloudy-day"
// precipType: "rain"
// summary: "Mostly cloudy throughout the day."
// time: 1554274800
// windSpeed: 3.83