import React from 'react'
import App from './App.js'
import ReactDOM from 'react-dom'
import './components/styles.css'
import Provider from './context/Provider'

ReactDOM.render(
    <Provider>
         <App /> 
    </Provider>,
 document.getElementById('root'))
