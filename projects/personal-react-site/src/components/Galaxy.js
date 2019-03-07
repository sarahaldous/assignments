import React, {Component} from 'react'
import { withSpace} from "../context/Provider"

class Galaxy extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                hdToggle:false,
            }
    }
    componentDidMount(){
        this.props.getGalaxyData()
    }
    hdToggler = () => {
        this.setState(prevState => ({
            hdToggle: !prevState.hdToggle
        }))
    }

    render(){
        
    
    console.log(this.props)
    return (
        <div style={{backgroundImage: this.state.hdToggle ? `url(${this.props.hdurl})` : `url(${this.props.url})`}} id="galaxy-div">
           <div className="buttonBox">
           <button className="HDImgBtn" onClick={this.hdToggler}>View in HD</button>
            <button onClick={this.props.infoToggler} className="HDImgBtn">More Info</button>
            </div>
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
          
          
           
            {/* <img  src={this.props.url}/> */}
            {/* style={} onClick="" */}
            
           
        </div>
    )
}
}
export default withSpace(Galaxy)