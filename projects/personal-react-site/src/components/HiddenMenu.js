import React from 'react'
import { Link } from 'react-router-dom'
import { withSpace } from '../context/Provider'

const HiddenMenu = props => {
    const { navToggle, toggler, menuToggler } = props
    console.log(props.menuToggler)
    return (
        // <div onClick={toggler} className={`nav nav-${navToggle ? "open" : "closed" }`}>
        <div className="nav">
        <button id="menuBtn" onClick={menuToggler}>Menu</button>
        <Link className="groundLink" to="/ground">Travel to Another Part of Earth</Link>
        <Link className="earthLink"  to="/">See The Planet</Link>
        <Link className="galaxyLink" to="/galaxy">Explore the Galaxy</Link>
        </div>
    )

        
}

export default withSpace(HiddenMenu)