import React from 'react'

function SuperHero (props) { 
    return (
        <div onClick={() => props.alertCatchPhrase(props.catchPhrase)} style = {{backgroundImage: `url(${props.imgUrl})`, backgroundSize: "contain", backgroundRepeat: `no-repeat`,height: 500, width: 500}}>
            <h1 style={{ color: "white"}}>Name: {props.name}</h1>
            </div>
            )

}
// can also write the function:
// const SuperHero = props => {
//     const styleObj = {

//     }
//     return (
//         <div style={} className="superHero-div">}
//             <h1>{props.name</h1>
//         </div>
//     )
// }
export default SuperHero