import React from 'react'

const BountyItem = (props) => {
    const { firstName, lastName, living, bountyAmount, type, _id, handleDelete } = props
    return (
        <div style={type === "Sith" ? {backgroundColor: "red"} : {backgroundColor: "brown" }}>
            <h1>{firstName} {lastName}</h1>
            <p>Still Alive? {living && living.toString()}</p>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    )
}
export default BountyItem