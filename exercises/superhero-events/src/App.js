import React from 'react'
import data from './superHeroes.json'
import SuperHero from './SuperHero.js'
import './style.css'
import PropTypes from 'prop-types'

class App extends React.Component {
    alertCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
    }
    render(){
        const mappedSuperHeroes = data.superHeroes.map((superHero, i) => {
        return (
            <SuperHero 
                key={i} 
                name={superHero.name} 
                imgUrl={superHero.imgUrl} 
                catchPhrase={superHero.catchPhrase} 
                alertCatchPhrase={this.alertCatchPhrase}/>
        )
        })
        return (
            <div className="superheroes-container">
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App