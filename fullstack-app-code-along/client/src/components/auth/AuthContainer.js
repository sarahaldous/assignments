import React, {Component} from 'react'
// import {useToggle, useFormProperties} from '../../shared/hooks'
import AuthForm from './AuthForm.js'
import {withUser} from '../../context/UserProvider.js'

class AuthContainer extends Component  {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            authToggle: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUp = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)
    }
    handleLogin = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
    }

    toggler = () => {
        this.setState(prevState => ({
            authToggle: !prevState.authToggle
        }))
    }

   render (){

        return (
            <div>
                { this.state.authToggle ?
                    <>
                    <h3>Sign Up</h3>
                    <AuthForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignUp}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Sign Up"
                    />
                    <h6 style={{color: '#990033'}}>{this.props.errMsg}</h6>
                    <h6 onClick={this.toggler}>Already a Member?</h6>
                    </>
                    :
                    <>
                    <h3>Log In</h3>
                    <AuthForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLogin}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Log In"
                    />
                    <h6 style={{color: '#cc0066'}}>{this.props.errMsg}</h6>
                    <h6 onClick={this.toggler}>Not a Member?</h6>
                </>
                }
            </div>
        )
    }
}

   

export default withUser(AuthContainer)





// const initInputs = {username: "", password: ""}

// const submit = () => {

// }

// const {handleChange, handleSubmit, inputs} = useFormProperties(initInputs, submit)