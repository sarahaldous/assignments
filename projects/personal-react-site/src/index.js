import React from 'react'
import App from './App.js'
import ReactDOM from 'react-dom'
import Provider from './context/Provider'
import {BrowserRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const PageFade = props => {
     const { location, children } = 
     props
     return (
          <TransitionGroup component={null}>
               <CSSTransition
                    in={true}
                    appear={true}
                    classNames="page-fade"
                    timeout={900}
                    key={location.key}>
                    { children } 
                    </CSSTransition>
          </TransitionGroup>
     )
}


ReactDOM.render(
     <BrowserRouter>
          <Provider>
               <App /> 
          </Provider>
    </BrowserRouter>,
 document.getElementById('root'))
