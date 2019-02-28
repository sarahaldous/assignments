import React from 'react'
import axios from 'axios'
import './styles.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            imminentDemise: [],
            name: '',
            imageURL: ''
        }
    }
    componentDidMount(){
        axios.get("https://vschool-cors.herokuapp.com?url=https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
        // console.log(response.data)    
        this.setState({
                imminentDemise: [...response.data]
            })
        }).catch(error => console.log(error))
    }
    render(){
        console.log(this.state.imminentDemise)
        const mappedCharacters = this.state.imminentDemise.map(((item, i) => {
            return (
                <div className="wanted-posters">
                <div className="mug-shots" key={i} style={{backgroundImage: `url(${item.image})`}}>
                <div className="name">{item.name}</div>

                </div>
                </div>
            )
        }))
        return (
            <div>
                <header>
                    <img className="Don-Corleone" src="https://cdn.shopify.com/s/files/1/1877/8853/files/Don-Vito_grande.jpg?v=1501127874"/>
                    <h3>Don Corleone's Hit List</h3></header>
                {mappedCharacters}
            </div>
        )
    }
}

export default App