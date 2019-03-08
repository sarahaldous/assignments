import React, {Component} from 'react'
import Nav from './components/Nav.js'
import Ground from './components/Ground.js'
import Earth from './components/Earth.js'
import Galaxy from './components/Galaxy.js'
import HiddenMenu from './components/HiddenMenu.js'
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom'
import { PageFade } from './index.js'
import { withSpace } from './context/Provider'
import './components/styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false,
            
        }
    }

    // toggler = () => {
    //     this.setState(prevState => ({
    //         navToggle: !prevState.navToggle
    //     }))
    // }

    render(){
        // const { navToggle } = this.state
        const { location } = this.props
        return (
            this.props.menuShowing ?
                <HiddenMenu />
                :
            

            <div className="app-container" style={{backgroundImage: this.props.hdToggle ? `url(${this.props.hdurl})` : `url(${this.props.url})`}} id="galaxy-div">
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