import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
document.getElementById('root'))

// serviceWorker.unregister()
