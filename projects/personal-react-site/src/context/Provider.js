import React, {Component} from 'react'
import axios from 'axios'
import nasa from process.env.REACT_APP_NASA_KEY

const SpaceContext = React.createContext()

class SpaceProvider extends Component {
    constructor(){
        super()
        this.state = {
            galaxyImgUrl: "",
            earthImgUrl: "",
            groundImgUrl: ""
        }
    }
    getGalaxyData = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasa}`).then(function(response){
    
            console.log(response.data.url)
        }).catch(function(error){
            console.log(error)
        })
        
    }
    // getEarthData = () => {
    //     axios.get("url").then(function(response){
            
    //         console.log(response.data)
    //     }).catch(function(error){
    //         console.log(error)
    //     })
    // }
    
    

    render(){
        return (
            <SpaceContext.Provider
                value={{
                    galaxyImgUrl: this.state.galaxyImgUrl,
                    earthImgUrl: this.state.earthImgUrl,
                    groundImgUrl: this.state.groundImgUrl,
                    getGalaxyData: this.getGalaxyData
                }}>
                {this.props.children}
                </SpaceContext.Provider>
        )
    }






}






export const withSpace = C => props => (
    <SpaceContext.Consumer>
        {value => <C {...props} {...value} />}
    </SpaceContext.Consumer>
)

export default SpaceProvider