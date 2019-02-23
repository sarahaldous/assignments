import React from 'react'
import data from './superHeroes.json'
import SuperHero from './SuperHero.js'
import './style.css'
import PropTypes from 'prop-types'

class App extends React.Component {
    
    render(){
        const mappedSuperHeroes = data.superHeroes.map((superHero, i) => {
        return (
            <SuperHero name={superHero.name} imgUrl={superHero.imgUrl} catchPhrase={superHero.catchPhrase}/>
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