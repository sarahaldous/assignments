import React from 'react'
// import ReactDOM from 'react-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withUser} from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import Home from './components/Home.js'
import NotFound from './components/NotFound.js'


const App = (props) => {
    const {user, token, logout} = props
    document.title = props.location.pathname === "/" ? "" :
    props.location.pathname.slice(1)[0].toUpperCase() + props.location.pathname.slice(2)

    return (
        <div>
            <Switch>
                <Route exact path="/" render=
                {() => token ? <Redirect to="/home"/> : <Redirect to="/login"/>}/>
                <Route 
                    path="/login" 
                    render={routerProps => token ? <Redirect to="/home"/> : <AuthContainer {...routerProps} />}/>
                <ProtectedRoute 
                    token={token}
                    path="home"
                    redirectTo="/login"
                    component={Home}   
                    username={user.username} 
                    logout={logout}  
                    />    
                    <Route path="*" component={NotFound}/>      
                    {/* <Route 
                    path="/home" 
                    render={routerProps => !token ? <Redirect to="/login"/> : <Home {...routerProps}/>}/> */}
            </Switch>

        </div>
    )
}

export default withUser(App)

//NECESSARY COMPONENTS:

//Auth
    //Form for login and signup
//UserProvider (context)

//Dependencies:
//axios, react-router-dom, prop-types (which we installed upon create-react-app)

// import logo from ',/logo.svg'
// import './index.css'
// import App from './App'
// import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'))

// import './App.css'

// class App extends Component {
//     render(){
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         >
//                         Learn React
//                         </a>
//                         </header>
//                         </div>
//         );
//     }
// }