import React, { Component } from 'react'
import AddBountyForm from './AddBountyForm.js'

class BountyItem extends Component {
    constructor(){
        super()
        this.state = {
            editToggle: false,
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: "",
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type
        }
        // if(!updates.firstName){
        //     delete updates.firstName
        // }
        // if(!updates.lastName){
        //     delete updates.lastName
        // }
        // if(!updates.living){
        //     delete updates.living
        // }
        // if(!updates.bountyAmount){
        //     delete updates.bountyAmount
        // }
        // if(!updates.type){
        //     delete updates.type
        // }

        for(let key in updates){
            if(!updates[key]) {
                delete updates[key]
            }
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
        this.setState({
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: "",
        })
        // this.props.handleEdit
        
    }
    render (){

    
    const { firstName, lastName, living, bountyAmount, type, _id, handleDelete, handleEdit } = this.props
    return (
        <div style={type === "Sith" ? {backgroundColor: "#ba312b", height: 200} : {backgroundColor: "#68452c", height: 200 }}>
        { !this.state.editToggle ? 
        <>
            <h1>{firstName} {lastName}</h1>
            <p>Still Alive? {living && living.toString()}</p>
            <button onClick={() => handleDelete(_id)}>Delete</button>
            <button onClick={this.toggler}>Edit Target</button>
            </>
            :
            <>
            <AddBountyForm buttonText="Submit Change" handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state}/>
            <button onClick={this.toggler}>Close</button>
            </>
            }
        </div>
    
    )
    }
}
export default BountyItem