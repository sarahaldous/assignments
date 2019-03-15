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
            this.setState(prevState => ({
                bounty: prevState.bounty.filter(bounty => bounty._id !== _id)
            }))
        })
    }
    handleEdit = (_id, updates) => {
        axios.put(`/bounty/${_id}`, updates).then(response => {
            const updatedBounty = response.data
            this.setState(prevState => {
                return {
                    bounty: prevState.bounty.map(bounty => bounty._id === _id ? updatedBounty : bounty)
                }
            })
        })
        .catch(error => console.log(error))
    }
    render(){
        console.log(this.state)
        return (
            <div>
               <AddBountyForm buttonText="Add Target" handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state}/>
                {this.state.bounty.map(bounty => <BountyItem handleDelete={this.handleDelete} handleEdit={this.handleEdit} key={bounty._id} {...bounty}/>)}
            </div>
        )
    }
}

export default App