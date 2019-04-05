import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import CoordinatesProvider from './context/CoordinatesProvider.js'
import './style.css'

ReactDOM.render(
        <BrowserRouter>
            <UserProvider>
                <CoordinatesProvider>
                    <App />
                </CoordinatesProvider>
            </UserProvider>
        </BrowserRouter>, 
document.getElementById('root'))