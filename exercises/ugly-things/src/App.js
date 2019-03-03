import React, {Component} from 'react'
import UglyThingList from './components/UglyThingList.js'
import AddUglyThingForm from './components/AddUglyThingForm.js'
import './styles.css'
import {withUglyThings} from './context/UglyThingsProvider.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }
    componentDidMount(){
        this.props.getUglyThings()
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addUglyThing(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: ''
        })
    }
    render(){
        return (
            <div className="app-container">
                <h1>Ugly Things. So, So Ugly.</h1>
                <AddUglyThingForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}
                    imgUrl={this.state.imgUrl}
                    btnText="Add Another Ugly Thing" />
                <UglyThingList
                    uglyThings={this.props.uglyThings}
                    handleDelete={this.props.handleChange}
                    handleEdit={this.props.handleEdit}/>
            </div>
        )
    }
}

export default withUglyThings(App)