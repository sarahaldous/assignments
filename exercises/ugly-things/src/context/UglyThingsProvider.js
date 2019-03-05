import React, {Component} from 'react'
import axios from 'axios'

const UglyThingsContext = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglyThings: []
        }
        this.url = "https://api.vschool.io/sarah/todo"
    }
    getUglyThings = () => {
        axios.get(this.url).then(response => {
            this.setState({
                uglyThings: response.data
            })
        })
        .catch(error => console.log(error))
    }
    addUglyThing = (inputs) => {
        const { title, description, imgUrl} = inputs

        const newUglyThing = { title, description, imgUrl}

        axios.post(this.url, newUglyThing).then(response => {
            this.setState(prevState => {
                return {
                    uglyThings: [response.data, ...prevState.uglyThings]
                }
            })
        }).catch(error => console.log(error))
    }
    handleDelete = _id => {
        axios.delete (`${this.url}/${_id}`)
            .then(response => {
                const updatedUglyThing = response.data
                this.setState(prevState => {
                    return {
                        uglyThings: prevState.uglyThings.filter(uglyThing => uglyThing._id !== _id)

                    }
                })
            }).catch(error => console.log(error))
    }
    render(){
        return (
            <UglyThingsContext.Provider
                value={{
                    uglyThings: this.state.uglyThings,
                    getUglyThings: this.getUglyThings,
                    addUglyThing: this.addUglyThing,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit,
                }}>
                {this.props.children}
                </UglyThingsContext.Provider>
        )
    }
}
export const withUglyThings = C => props => (
    <UglyThingsContext.Consumer>
        {value => <C {...props} {...value} /> }
    </UglyThingsContext.Consumer>
)
export default UglyThingsProvider