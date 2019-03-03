import React from 'react'
import App from './App.js'
import UglyThingsProvider from './UglyThingsProvider.js'
import ReactDOM from 'react-dom'
import './styles.css'

ReactDOM.render(
    <UglyThingsProvider>
        <App />
    </UglyThingsProvider>,
document.getElementById('root'))