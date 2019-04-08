import React, {Component} from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import {withLocation} from '../../context/LocationProvider.js'
import {withUser} from '../../context/UserProvider.js'
import VacationForm from './VacationForm.js'
import moment from 'moment'



class WeatherDisplay extends Component {
   constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        this.props.getCoordinatesData()
    }
  
   saveLocation = () => {
       this.props.setNewLocation(this.props.city, this.props.state, this.props.user._id)
    console.log(this.props)
       
   }

// build map function here that returns a div with the below information (nested divs)
//        /let mappedDay=props.forecast.map(build map out here)

    render(){
        
        // const convertTime = (props) => {
        //     const unixTimestamp = this.props.time;
        //     const date = new Date(unixTimestamp*1000)
        //     let myDate = this.props.time
            
        //     myDate = new Date(this.props.time *1000);
        //     // write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
        //     console.log(this.props.time)
        //     console.log(date)
        //     console.log(myDate)
        //    }
       const convertPercentage = percentage => {
           return `${percentage*100}%`
       }
            let mappedDay = this.props.forecast.map((dayWeather, i) => {
                const convertTime = (unixTime) => {
                    const date = new Date(unixTime*1000)
                   
                } 
                convertTime()
               
                return (
                    <div key={i}>
                   
                    <div className="weeklyInfo">
                    
                        
                        {/* Put weekly weather summary here */}
                       </div>
                       <div className="dailyInfo">
                           <div className="date">
                          <p>{moment(dayWeather.time * 1000).format("dddd, MMM DD, YYYY")}</p>
                          </div>
                          <div className="dailyDetails">
                          <p>Summary: {dayWeather.summary}</p>
                          <div id="weatherIcon">
                          {/* <img src="{dayWeather.icon}">Icon: </img> */}
                          </div>
                          
                          <p>High: {parseFloat(dayWeather.temperatureHigh).toFixed()}°F</p>
                          <p>Low: {parseFloat(dayWeather.temperatureLow).toFixed()}°F</p>
                          <p>Feels Like: {parseFloat(dayWeather.apparentTemperatureLow).toFixed()}°F to {parseFloat(dayWeather.apparentTemperatureHigh).toFixed()}°F</p>
                          <p>Humidity: {parseFloat(convertPercentage(dayWeather.humidity)).toFixed()}%</p>
                          <p>Cloud Cover: {parseFloat(convertPercentage(dayWeather.cloudCover)).toFixed()}%</p>
                          <p>Chance of Precipitation: {parseFloat(convertPercentage(dayWeather.precipProbability)).toFixed()}%</p> 
                          <p>Wind Speed: {parseFloat(dayWeather.windSpeed).toFixed()} MPH</p>
                           {/* alerts */}
                          </div>
                         
                     </div> 
                     </div>
                )
 
            })
            
      return (
        <div>
            <VacationForm />
            <h1>{this.props.currentCity && "This week in " + this.props.currentCity[0].toUpperCase() + this.props.currentCity.slice(1) + ", " + this.props.currentState[0].toUpperCase() + this.props.currentState.slice(1)}</h1>
            <button onClick={this.saveLocation}>Save Location</button>
            <h2>{this.props.dailySummary}</h2>
            {/* <div>{this.props.weeklyIcon}</div> */}
            <h2>{this.props.summary}</h2>
            {mappedDay}
        </div>
       )
    }
}


export default withUser(withLocation(withCoordinates(WeatherDisplay)))

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
