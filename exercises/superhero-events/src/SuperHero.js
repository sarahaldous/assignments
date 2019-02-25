import React from 'react'

function SuperHero (props) { 
    return (
        <div onClick={() => props.alertCatchPhrase(props.catchPhrase)} style = {{backgroundImage: `url(${props.imgUrl})`, backgroundSize: "contain", backgroundRepeat: `no-repeat`,height: 300, width: 300}}>
            <h1 style={{ color: "white"}}>Name: {props.name}</h1>
            </div>
            )

}

export default SuperHero