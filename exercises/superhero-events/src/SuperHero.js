import React from 'react'

function generateCatchphrase () { 
    return (
        <div style = {{backgroundImage: `url(${superHeroes.imgUrl})`, backgroundSize: "contain", backgroundRepeat: `no-repeat`,height: 300, width: 300}}>
            <h1 style={{ color: "white"}}>Name: {superHeroes.name}</h1>
            {/* <p style={{ color: "white"}}>CatchPhrase: {hero.catchPhrase}</p> */}
            <alert>CatchPhrase: {superHeroes.catchPhrase}</alert>
            </div>
            )

}

export default SuperHero