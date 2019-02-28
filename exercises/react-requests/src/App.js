import React, {Component } from 'react

class App extends Component {
  constructor(){
  super()
  this.state = {
      rickAndMortyCharacters: []
  }}
  componentDidMount({
      axios.get("https://rickandmortyapi.com/api/character").then(response => {
            this.setState({
                rickAndMortyCharacters: response.data.results
            })
      }).catch(error => console.log(error))
  }
  render(){
      console.log(this.state)

      const mappedCharacters = this.state.rickAndMortyCharacters.map((item => {
          return (
              <div key={item.id} style={{backgroundImage: `url(${item.image})`}}>
                  <h1>{item.name}</h1>
              </div>
          )
      }))
    return (
    <div>
    
    </div>
    )
  }
  }
}
