import React, {Component} from 'react'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'
import { withTodos } from './context/TodoProvider.js'


class App extends Component {
    constructor (){
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
        this.getTodos = this.getTodos.bind(this)
    }
    componentDidMount(){
       this.props.getTodos()
    }
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
           this.setState({[name]: value }) 
        })
        
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
             })
        }
        
       
    
    render(){
        const {handleChange, handleSubmit, state: { title, description, imgUrl, price} } = this
        // console.log(this.state)
        return (
            <div>
                <AddTodoForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price} 
                    imgUrl={this.state.imgUrl}/>
                <TodoList todos={this.props.todos}
                handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}


export default withTodo(App)