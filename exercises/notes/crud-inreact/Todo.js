import React from 'react'

const Todo = (props) => {
    // console.log(props)
    const {title, description, imgUrl, price, completed, _id } = props
    return (
        <div style={{ backgroundImage: `url(${imgUrl})`, border: '1px solid black', backgroundSize: 'cover'}}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Price: </p>
            <input type="checkbox" defaultChecked={completed} />
            <button onClick={() => props.handleDelete(_id)}>Delete</button>
        </div>
    )

export default Todo