import React from 'react'
import Ground from './Ground.js'
import Earth from './Earth.js'
import Galaxy from './Galaxy.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render(){
        return (
            <div>
                <nav></nav>
                <Switch>
                    <Route exact path='/' component={Earth} />
                    <Route path='/' component={Ground} />
                    <Route path='/' component={Galaxy} />
                </Switch>
            </div>
        )
    }
}

export default App