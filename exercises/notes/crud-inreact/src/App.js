import React, {Component} from 'react'
import axios from 'axios'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'


class App extends Component {
    constructor (){
        super()
        this.state = {
            todos: [],
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
        this.getTodos = this.getTodos.bind(this)
    }
    componentDidMount(){
       this.getTodos()
    }
    getTodos = () =>
        axios.get("https://api.vschool.io/sarah/todo").then(response => {
        //resolve
        // console.log(response)
        this.setState({
            todos: response.data
        })
        })//reject
        .catch(error => console.log(error))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: e.target.value
        })
        
    }
    handleSubmit = e => {
        e.preventDefault()
        const {title, description, price, imgUrl} = this.state
        const newTodo = {title, description, price, imgUrl }
            // title: this.state.title,
            // description: this.state.description,
            // price: this.state.price,
            // imgUrl: this.state.imgUrl
        }
        axios.post("https://api.vschool.io/sarah/todo", newTodo).then(response => {
            console.log(response)
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    title: '',
                    description: '',
                    price: '',
                    imgUrl: ''
                }
            })
        })
        .catch(error => console.log(error))
    handleDelete = (_id) => {
        axios.delete(`https://api.vschool.io/sarah/todo/${_id}`).then(response => 
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => todo._id !== _id)
                }
            })
        )}
        .catch(error => console.log(error))
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
                <TodoList todos={this.state.todos}
                handleDelete={this.handleDelete}
            </div>
        )
    }
}


export default App