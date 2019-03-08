import React, {Component} from 'react'
import { withSpace} from "../context/Provider"

class Galaxy extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    componentDidMount(){
        this.props.getGalaxyData()
    }
   

    render(){
        
    
    console.log(this.props)
    return (
        <div className="galaxyContainer" >
           { this.props.infoDisplayed ? 
           <div>
           <h3 className="galaxyTitle">{this.props.title}</h3>
           <p className="galaxyDescription">{this.props.explanation}</p>
           <div id="bottomOfImage">
            
            <p>{this.props.date}</p>
            <p>{this.props.copyright}</p>
            
            </div>
           </div>
            :
            null
           }
        </div>
    )
}
}
export default withSpace(Galaxy)