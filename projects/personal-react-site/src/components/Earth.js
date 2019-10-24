import React, {Component} from 'react'
import { withPlanet} from "../context/EarthProvider"
// import moment from 'moment'

// const formatted = moment(new Date()).format().split("T")[0]

class Earth extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    // componentDidMount(){
    //     this.props.getEarthData()
    // }
    render(){
        console.log(this.props)

        
    return (
        <div className="earthContainer" style={{backgroundImage: `url(${(this.props.randomEarthPhoto())})`}} id="earth-div">
        <h1 className="redirectMessage" align="center">Please see the improved version of this site on <a href="https://galaxy-site.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify!</a>! </h1>
        </div>
    )
}
}
export default withPlanet(Earth)

// this.props.enhancedToggle ? `url(${this.props.hdurl})` : `url(${this.props.image})`}} 
            // { this.props.infoDisplayed ? 
            // <div>
            // <h3 className="earthTitle">{this.props.caption}</h3>
            
            // <div id="bottomOfImage">
            // <p>{this.props.date}</p>
            // </div>

            // </div>
            // :
            // null
            // }