import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withUser} from './context/UserProvider.js'
// import AuthContainer from './components/auth/AuthContainer.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoutes.js'
import Home from './components/Home.js'
import WeatherDisplay from './components/VacationStuff/WeatherDisplay.js'

const App = (props) => {
    const {user, token} = props
    return (
        <div>
            <Switch>
                <Route
                    path="/login"
                    render={routerProps => token ? <Redirect to="/home"/> :
                <AuthContainer {...routerProps} />}/>
                <ProtectedRoute 
                    token={token}
                    path="home"
                    redirectTo="/login"
                    component={Home}   
                    username={user.username}   
                    />  
                <Route
                    path="/weather" component={WeatherDisplay}
                    />
                    
            </Switch>
        </div>
    )
}
export default withUser(App)




// import React from 'react'
// import VacationForm from './components/VacationStuff/VacationForm.js'
// // import WeatherDisplay from './components/VacationStuff/WeatherDisplay.js'
// // import List from './List.js'

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
           
//         }
//     }
    
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.locationInput}</h1>
//                 <VacationForm />
//                 {/* <WeatherDisplay /> */}
//             </div>
//         )
//     }
    
// }
// export default App