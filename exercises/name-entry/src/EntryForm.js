import React from 'react'

const EntryForm = (props) =>  {
    let nameBadgesArray = []
    return (
    <form onSubmit={props.handleSubmit}>
                <input 
                    type="text" 
                    name="nameInput" 
                    value={props.state.nameInput} 
                    onChange={props.handleChange}
                    placeholder="Name"/>
                <button>Submit</button>
                </form>
    )
}

export default EntryForm