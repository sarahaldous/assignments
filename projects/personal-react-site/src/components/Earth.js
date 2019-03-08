import React from 'react'

class Earth extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    componentDidMount(){
        this.props.getEarthData()
    }
    

    render(){
        
    
    console.log(this.props)
    return (
        <div className="earthContainer" >
            { this.props.infoDisplayed ? 
            <div>
            <h3 className="earthTitle">{this.props.title}</h3>
            <p className="earthDescription">{this.props.explanation}</p>
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
return (
    <div>
        


    </div>
)
}


export default Earth