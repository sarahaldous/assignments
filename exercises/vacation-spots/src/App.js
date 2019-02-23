import React from 'react'
import Destination from './Destination'

const App = () => {
    let vacationSpots = [
        {
          place: "New York City",
          price: 400,
          timeToGo: "Fall"
        },{
          place: "New Zealand",
          price: 2000,
          timeToGo: "Fall"
        },{
          place: "Europe",
          price: 3000,
          timeToGo: "Spring"
        },{
          place: "San Diego, CA",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "British Columbia",
          price: 800,
          timeToGo: "Summer"
        }
      ]
      const mappedDestinations = vacationSpots.map((destination, i) => 
        <Destination place={destination.place} 
            price={destination.price}
            timeToGo={destination.timeToGo}
            />
      )


      return (
          <div>
            {mappedDestinations}
          </div>
      )
}

export default App