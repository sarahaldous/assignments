import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer.js'
import Main from './Main.js'
import Services from './Services.js'
import About from './About.js'
import { Switch, Route } from 'react-router-dom'


class App extends Component  {
    render (){

    
    return (
        <div>
            
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/services' component={Services} />
                <Route path='/about' component={About} />
            </Switch>
            <Footer />
        </div>
    )
}
}

export default App