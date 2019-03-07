import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { navToggle, toggler } = props
    return (
        <div onClick={toggler}
        className={`nav nav-${navToggle ? "open" : "closed" }`}>
        <button className="menuBtn">Menu</button>
        <Link className="groundLink" to="/ground">Travel to Another Part of Earth</Link>
        <Link className="earthLink" to="/">See The Planet</Link>
        <Link className="galaxyLink" to="/galaxy">Explore the Galaxy</Link>
        </div>
    )
}

export default Nav