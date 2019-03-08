import React, {Component} from 'react'
// import axios from 'axios'
const nasa = (process.env.REACT_APP_NASA_KEY)
const axios = require('axios')

const SpaceContext = React.createContext()

class SpaceProvider extends Component {
    constructor(){
        super()
        this.state = {
            // galaxyImgUrl: "",
            date:'',
            explanation:'',
            hdurl: '',
            title: '',
            url: '',
            infoDisplayed: false,
            hdToggle:false,
            menuShowing: false,
        }
    }
    getGalaxyData = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasa}`).then((response) => {
            const {
                date,
                explanation,
                hdurl,
                title,
                url
            } = response.data
            this.setState({
                date,
                explanation,
                hdurl,
                title,
                url
            })
            console.log(this.state)
            
        }).catch(function(error){
            console.log(error)
        })
        
    }
    getEarthData = () => {
        axios.get(`https://api.nasa.gov/EPIC/api/enhanced/all?api_key=${nasa}`).then((response ) => {
            const {
                caption,
                image,
                date
            }
            
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
    }
    
    // earthImgUrl: "",
    // groundImgUrl: ""
    infoToggler = () => {
        this.setState({infoDisplayed: !this.state.infoDisplayed})
    }
    hdToggler = () => {
        this.setState(prevState => ({
            hdToggle: !prevState.hdToggle
        }))
    }
    menuToggler = () => {
        this.setState(prevState => ({
            menuShowing: !prevState.menuShowing
        }))
    }

    render(){
        console.log(this.state)
        return (
            <SpaceContext.Provider
                value={{
                    ...this.state,
                    getGalaxyData:this.getGalaxyData,
                    infoToggler:this.infoToggler,
                    hdToggler:this.hdToggler,
                    menuToggler:this.menuToggler
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