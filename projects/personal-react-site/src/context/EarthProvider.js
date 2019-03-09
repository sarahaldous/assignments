import React, {Component} from 'react'
// import axios from 'axios'
const nasa = (process.env.REACT_APP_NASA_KEY)
const axios = require('axios')

const SpaceContext = React.createContext()

class EarthProvider extends Component {
    constructor(){
        super()
        this.state = {
            image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
            date:'',
            caption:'',
            infoDisplayed: false,
            // hdToggle:false,
            menuShowing: false,
            
        }
    }
    
    // getEarthData = () => {
    //     axios.get(`https://api.nasa.gov/EPIC/api/enhanced/all?api_key=${nasa}`).then((response) => {
    //         console.log(response.data)
    //         const {
    //             caption,
    //             image,
    //             date
    //         } = response.data
    //         this.setState({
    //             caption,
    //             image,
    //             date,
    //         })
            
    //     }).catch(function(error){
    //         console.log(error)
    //     })
    // }
   
    infoToggler = () => {
        this.setState({infoDisplayed: !this.state.infoDisplayed})
    }
    
    menuToggler = () => {
        this.setState(prevState => ({
            menuShowing: !prevState.menuShowing
        }))
    }
    enhancedToggler = () => {
        this.setState(prevState => ({
            enhancedToggle: !prevState.enhancedToggle
        }))
    }

    render(){
       
        return (
            <SpaceContext.Provider
                value={{
                    ...this.state,
                    getEarthData:this.getEarthData,
                    infoToggler:this.infoToggler,
                    hdToggler:this.hdToggler,
                    menuToggler:this.menuToggler
                }}>
                {this.props.children}
                </SpaceContext.Provider>
        )
    }
}
   
export const withPlanet = C => props => (
    <SpaceContext.Consumer>
        {value => <C {...props} {...value} />}
    </SpaceContext.Consumer>
)

export default EarthProvider