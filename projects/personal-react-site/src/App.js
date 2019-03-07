import React, {Component} from 'react'
import Nav from './components/Nav.js'
// import Ground from './components/Ground.js'
import Earth from './components/Earth.js'
import Galaxy from './components/Galaxy.js'
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom'
import { PageFade } from './index.js'
import './components/styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    render(){
        const { navToggle } = this.state
        const { location } = this.props
        return (
            <div className="nav-toggle">
                <Nav navToggle={navToggle} toggler={this.toggler}/>
                <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                <button className="menuBtn">Menu</button>
                
                <Switch className="page-display">
                    {/* <Route exact path='/' component={Earth} /> */}
                    {/* <Route path='/' component={Ground} /> */}
                    <Route path='/' component={Galaxy} />
                </Switch>
                {/* <Galaxy /> */}
            </div>
        )
    }
}

export default App