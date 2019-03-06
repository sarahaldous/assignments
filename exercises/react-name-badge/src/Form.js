import React from 'react'


const Form = (props) => {
     //console.log(props.nameBadges)
    return (    
    <form className="form" onSubmit={props.handleSubmit}>
                
                <input  type="text"
                        name="firstName"
                        value={props.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name"/>
                <input type="text"
                        name="lastName"
                        value={props.lastName}
                        onChange={props.handleChange}
                        placeholder="Last Name"/>
                <input type="text"
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        placeholder="Email"/>
                <input type="text"
                        name="birthplace"
                        value={props.birthplace}
                        onChange={props.handleChange}
                        placeholder="Place of Birth"/>
                <input type="tel"
                        name="phone"
                        maxLength="10"
                        value={props.phone}
                        onChange={props.handleChange}
                        placeholder="Phone"/>
                <input  type="text"
                        name="favFood"
                        value={props.favFood}
                        onChange={props.handleChange}
                        placeholder="Favorite Food"/>
                <textarea 
                        name="info"
                        value={props.info}
                        onChange={props.handleChange}
                        placeholder="Tell us about yourself"/>
                
               
                <button>Submit</button>
               
                
                
            </form>
    )
}
export default Form;