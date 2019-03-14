import React, {Component} from 'react'
import HitList from './components/HitList.js'
import AddBountyForm from './components/AddBountyForm.js'
import './style.css'
import axios from 'axios'
import BountyItem from './components/BountyItem.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            living: '',
            bountyAmount: '',
            type: '',
            _id: '',
            bounty: []
        }
    }
    componentDidMount(){
        axios.get("/bounty").then(response => {
            this.setState({
                bounty: response.data
            })
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type,
            _id: this.state._id
        }
        axios.post("/bounty", newBounty).then(response => {
            this.setState(prevState => ({
                bounty: [...prevState.bounty, response.data],
                firstName: "",
                lastName: "",
                living: '',
                bountyAmount: '',
                type: '',
                _id: ''
            }))
        })
    }
    handleDelete = (_id) => {
        axios.delete(`/bounty/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => {
                bounty: prevState.bounty.filter(bounty => bounty._id !== _id)
            })
        })
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    value={this.state.firstName} 
                    onchange={this.handleChange}/>
                    <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    value={this.state.lastName} 
                    onchange={this.handleChange}/>
                    <input 
                    type="text" 
                    name="living" 
                    placeholder="Alive"
                    value={this.state.living} 
                    onchange={this.handleChange}/>
                    <input 
                    type="text" 
                    name="bountyAmount" 
                    placeholder="Bounty Amount"
                    value={this.state.bountyAmount} 
                    onchange={this.handleChange}/>
                    <input 
                    type="text" 
                    name="type" 
                    placeholder="Sith or Jedi?"
                    value={this.state.type} 
                    onchange={this.handleChange}/>
                    {/* <input 
                    type="text" 
                    name="_id" 
                    value={this.state._id} 
                    onchange={this.handleChange}/> */}
                    <button>Add Target</button>
                </form>
                {this.state.bounty.map(bounty => <BountyItem handleDelete={this.handleDelete} key={bounty._id} {...bounty}/>)}
            </div>
        )
    }
}

export default App