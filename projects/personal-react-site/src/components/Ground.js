import React, {Component} from 'react'
import { withGround} from "../context/GroundProvider"

            
class Ground extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    componentDidMount(){
        console.log('ground component mounted')
        this.props.getGroundData()
    }
   

    render(){
        
    console.log(this.props.selectedArticle)
    console.log(this.props)
    return (
        <div className="groundContainer" style={{backgroundImage: this.props.selectedArticle.imgUrl }} id="ground-div">
           { this.props.infoDisplayed ? 
           <div>
           <h3 className="groundTitle">{this.props.title}</h3>
           <p className="groundDescription">{this.props.explanation}</p>
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
export default withGround(Ground)
