import React from 'react'
import Footer from './Footer.js'
import Nav from './Nav.js'
import Info from './Info.js'

// import myPhoto from './myImg.jpeg' <-- to use a photo you've saved, not a url
import './style.css'

function App(){
    return (
    <div className="div-container">
        <Nav />
        {/* <img src={ myPhoto } className="img-tag"/> */}
        <Info />
        <Footer />
    </div>
    )
}

export default App;