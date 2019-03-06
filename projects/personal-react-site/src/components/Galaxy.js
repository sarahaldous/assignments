import React, {Component} from 'react'
import { withSpace} from "../context/Provider"

class Galaxy extends Component {
    constructor(){
        super()
            this.state={

            }
    }
    componentDidMount(){
        this.props.getGalaxyData()
    }
    render(){
        
    
    console.log(this.props)
    return (
        <div>
           

            
        </div>
    )
}
}
export default withSpace(Galaxy)