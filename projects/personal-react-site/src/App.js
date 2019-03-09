import React, {Component} from 'react'
import Nav from './components/Nav.js'
import Ground from './components/Ground.js'
import Earth from './components/Earth.js'
import Galaxy from './components/Galaxy.js'
import HiddenMenu from './components/HiddenMenu.js'
import { Switch, Route, 
    // BrowserRouter, withRouter 
} from 'react-router-dom'
// import { PageFade } from './index.js'
import { withSpace } from './context/GalaxyProvider'
// import { withPlanet } from './context/EarthProvider'
// import { withGround } from './context/GroundProvider'
import './components/styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            // navToggle: false,
            
        }
    }

    // toggler = () => {
    //     this.setState(prevState => ({
    //         navToggle: !prevState.navToggle
    //     }))
    // }

    render(){
        // const { navToggle } = this.state
        // const { location } = this.props
        return (
            <div>
                <HiddenMenu />
                <Nav />
                
                <Switch className="page-display">
                    <Route exact path='/' component={Earth} />
                    <Route path='/ground' component={Ground} /> 
                    <Route path='/galaxy' component={Galaxy} />
                </Switch>
             
            </div>
            
        )
    }
}

export default withSpace(App)