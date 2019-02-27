import React from 'react'
import {Link} from 'react-router-dom';

function Navbar (props) {
    return (
        <div className="navbar">
            <Link className="home" to="/">Home</Link>
            <Link className="home" to="/about">About</Link>
            <Link className="home" to="/services">Services</Link>
        </div>
    )
}


export default Navbar