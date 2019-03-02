import React, {Component} from 'react'
import axios from 'axios'

const UglyThingsContext = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
        this.url = "https://api.vschool.io/sarah/todo"
    }
    getUglyThings = () => {
        axios.get(this.url).then(response => {
            this.setState({
                todos: response.data
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
                    todos: [response.data, ...prevState.uglyThings]
                }
            })
        }).catch(error => console.log(error))
    }
    handleDelete = (_id, updates) => {
        axios.put(`${this.url}/${_id}`, updates)
            .then(response => {
                const updatedUglyThing = response.data
                this.setState(prevState => {
                    return {
                        uglyThings: prevState.uglyThings.map(uglyThing => uglyThing._id === _id ? updatedUglyThing : uglyThing)

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
                    handleEdit: this.handleEdit
                }}
                {/UglyThingsContext.Provider}
                 )
            }
    
}
export const withUglyThings = C => props (
    <UglyThingsContext.Consumer>
        {value => <C {...props} {...value} /> }
    </UglyThingsContext.Consumer>
)export devault UglyThingsProvider