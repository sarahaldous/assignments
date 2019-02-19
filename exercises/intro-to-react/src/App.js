import React from 'react'
import Nav from './Nav.js'
import './style.css'

function App(){
    return (
        <div className="flex-container">
           {/* <Greeting /> */}
           <Nav />
           <h1 className="hello-world">Hello World</h1>
            <p>Goodbye World</p>
        </div>
        )
}
// function Greeting(){
//     return <h2>Greetings</h2>
// }
export default App;