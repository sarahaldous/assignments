import React from 'react'

const AddTodoForm = (props) => {
    const{ title, description, price, handleChange, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange}/>
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={handleChange}/>
            <input 
                type="text" 
                name="number" 
                value={price} 
                onChange={handleChange}
            <input 
                type="text" 
                name="imgUrl" 
                value={imgUrl} 
                onChange={handleChange}
                placeholder: "Image Url"/>
        </form>
    )
}
export default AddTodoForm