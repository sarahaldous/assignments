import React, {Component} from 'react'
import Ground from './components/Ground.js'
import Earth from './components/Earth.js'
import Galaxy from './components/Galaxy.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render(){
        return (
            <div>
                <nav></nav>
                {/* <Switch>
                    <Route exact path='/' component={Earth} />
                    <Route path='/' component={Ground} />
                    <Route path='/' component={Galaxy} />
                </Switch> */}
                <Galaxy />
            </div>
        )
    }
}

export default App