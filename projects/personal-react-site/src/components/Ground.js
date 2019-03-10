import React, {Component} from 'react'
import { withGround} from "../context/GroundProvider"
import { Moment } from 'moment'

// const formatted = moment(new Date()).format().split("T")[0]

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
        <div className="groundContainer" style={{backgroundImage: `url(${this.props.selectedArticle.urlToImage}` }}>
           { this.props.groundInfoDisplayed ? 
           <div>
           <h1 className="groundTitle">{this.props.selectedArticle.title}</h1>
           <h6 className="groundDescription">{this.props.selectedArticle.description}</h6>
           <div id="bottomOfImage">
           <a className="groundHref" rel="noopener noreferrer" href={this.props.selectedArticle.url} target="_blank">Read Full Article</a>
      
            <p>{this.props.selectedArticle.publishedAt}</p>
            
            <p>Source: National Geographic</p>
            
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
