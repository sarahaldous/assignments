import React { Component } from 'react'
import axios from 'axios'
import { withTodos } from './context/TodoProvider';

class App = props => {
    componentDidMount(){
        this.props.getTodos()
    }
    render
    return (

    )
}

export default withTodos(App)