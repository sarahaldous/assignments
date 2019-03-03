import React, {Component} from 'react'
import AddUglyThingForm from './AddUglyThingForm.js'

class UglyThing extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const updates ={
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }
    render(){
        const {title, description, imgUrl, handleDelete, _id} = this.props
        return (
        <div>
            { !this.state.isToggled
                ?   <div className="uglyThingsDiv" style={{ backgroundImage: `url(${imgUrl})`}}>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <button onClick={() => handleDelete(_id)}>Get This Ugly Thing Out of My Face!</button>
                        <button onClick={this.toggler}>Edit</button>
                        </div>
                    :
                        <div className="editUglyThingsDiv">
                            <AddUglyThingForm
                                {...this.state}
                                btnText="Submit Edit"
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                />
                                <button onClick={this.toggler}>Close</button>
                                </div>
                }
            </div>
        )
    }
}
export default UglyThing