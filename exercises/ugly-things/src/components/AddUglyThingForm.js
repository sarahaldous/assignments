import React from 'react'

const AddUglyThingForm = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder={"Title"}/>
            <input 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Why Is This So Ugly?"/>
            <input 
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image Url"/>
            <button>{btnText}</button>        
        
        </form>
    )
}
export default AddUglyThingForm