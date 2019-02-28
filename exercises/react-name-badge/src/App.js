import React from 'react'
import Badge from './Badge'
import NameBadgeList from './NameBadgeList.js'
import Form from './Form.js'

class App extends React.Component {
    constructor(){
    super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthplace: "",
            phone: "",
            favFood: "",
            info: "",
            nameBadges: []
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const {firstName, lastName, birthplace, favFood, info} = this.state
        if (firstName.length >= 3 && lastName.length >= 3 && birthplace.length >= 3 && favFood.length >= 3 && info.length >= 3) {

        
            const nameBadge = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                birthplace: this.state.birthplace,
                phone: this.state.phone,
                favFood: this.state.favFood,
                info: this.state.info
            }
            this.setState(prevState => {
                return{
                    nameBadges: [...prevState.nameBadges, nameBadge],
                    firstName: "",
                    lastName: "",
                    email: "",
                    birthplace: "",
                    phone: "",
                    favFood: "",
                    info: ""
                }
            
            })
        } else {
            alert("Please put answers at least 3 characters long.")
        }
    }
    render(){
        const { firstName, lastName, phone, birthplace, email, favFood, info, nameBadges } = this.state
        return (
            <div>
                <Form   firstName={firstName}
                        lastName={lastName}
                        email={email}
                        birthplace={birthplace}
                        phone={phone}
                        favFood={favFood}
                        info={info} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        nameBadges={this.state.nameBadges}/>
                        {/* Short form that would also work: 
                        <Form 
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}/>
                         */}
                <Badge nameBadges={this.state.nameBadges}/>
                
                </div>
        )
    }

}

export default App