import React from 'react'

const AddBountyForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
                    <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    value={props.firstName} 
                    onChange={props.handleChange}/>
                    <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    value={props.lastName} 
                    onChange={props.handleChange}/>
                    <input 
                    type="text" 
                    name="living" 
                    placeholder="Alive: true or false?"
                    value={props.living} 
                    onChange={props.handleChange}/>
                    <input 
                    type="text" 
                    name="bountyAmount" 
                    placeholder="Bounty Amount"
                    value={props.bountyAmount} 
                    onChange={props.handleChange}/>
                    <input 
                    type="text" 
                    name="type" 
                    placeholder="Sith or Jedi?"
                    value={props.type} 
                    onChange={props.handleChange}/>
                    <button>{props.buttonText}</button>
                </form>)}

                export default AddBountyForm