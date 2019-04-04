import React from 'react'
// import ReactDOM from 'react-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withUser} from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'


//NECESSARY COMPONENTS:

//Auth
    //Form for login and signup
//UserProvider (context)

//Dependencies:
//axios, react-router-dom, prop-types (which we installed upon create-react-app)

const App = (props) => {
    const {user, token, signup, login} = props
    return (
        <div>
            <Switch>
                <Route 
                path="/login" 
                render={rProps => 
                    <AuthContainer 
                        {...rProps} 
                        signup={signup} 
                        login={login} />}/>
            </Switch>

        </div>
    )
}
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
export default withUser(App)