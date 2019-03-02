import React from 'react'
import AddTodoForm from './AddTodoForm.js'



class Todo extends Component  {
    constructor(props){
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            price: props.price
        }
    }
    toggler = () => {
     this.setState(prevState => ({
         isToggled: !prevState.isToggled
     }))
 }    
 handleChange = e => {
    const { name, value } = e.target
    this.setState({
       this.setState({[name]: value }) 
    })
    
}
handleSubmit = e => {
    e.preventDefault()
    const updates = {
        title: this.state.title,
        description: this.state.description,
        imgUrl: this.state.imgUrl,
        price: this.state.price
    }
    this.props.handleEdit(this.props._id, updates)
    this.toggler()
}
 render(){
    const {title, description, imgUrl, price, complete, _id, handleDelete } = this.props
    
     return (
        <div style={{ backgroundImage: `url(${imgURl})`, border: '1px solid black', margin: 5, backgroundSize: 'cover', height: 200}}>
        <div>
        <h1> {title}</h1>
        <h3>{description}</h3>
        <p>Price: </p>
        <input type="checkbox" defaultChecked={completed} />
        <button onClick ={() => handleDelete(_id)}>Delete</button>
        <button onClick>{this.toggler}Edit</button>
        </div>
        
        
        <div>
        <AddTodoForm 
        {...this.state}
        btnText="Submit Edit"
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
        <button onClick={this.toggler}>Close</button>
        </div>
        
        </div>
    )
}}