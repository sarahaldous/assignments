import React, {Component} from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
        this.url = "https://api.vschool.io/sarah/todo"
    }
    getTodos = () => {
        axios.get("https://api.vschool.io/sarah/todo").then(response => {
        //resolve
        // console.log(response)
        this.setState({
            todos: response.data
        })
        })//reject
        .catch(error => console.log(error))
    }
    addTodo = (inputs) => { //this used to be in handleSubmit
        const {title, description, price, imgUrl} = inputs
        const newTodo = {title, description, price, imgUrl }
            // title: this.state.title,
            // description: this.state.description,
            // price: this.state.price,
            // imgUrl: this.state.imgUrl
        }
        axios.post(this.url), newTodo).then(response => {
            console.log(response)
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    // title: '',
                    // description: '',
                    // price: '',
                    // imgUrl: ''
                }
            })
        }
        .catch(error => console.log(error)
        )
    
    handleDelete = (_id) => {
        axios.delete(`${this.url}/${_id}`).then(response => 
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => todo._id !== _id)
                }
            })
        )}
        .catch(error => console.log(error))
        
        handleEdit = (_id, updates) => {
            axios.put(`${this.url}/${_id}`, updates)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todos: prevState.todos.map(todo => todo._id === _id ? response.data : todo)
                    }
                })
            })
            .catch(error => console.log(error))
        }

    render (){
        return (
            <TodoContext.Provider 
                value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    handleDelete: this.handleDelete,
                    handleEdit={this.props.handleEdit}
                }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }

export const withTodos = C => props => {
    <TodoContext.Consumer>
        {value => <C {...props} {...value}/>}
    </TodoContext.Consumer>
}
export default TodoProvider