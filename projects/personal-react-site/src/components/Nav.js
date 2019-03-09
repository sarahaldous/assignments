import React from 'react'
import { withSpace } from '../context/GalaxyProvider'
// import { Link } from 'react-router-dom'

const Nav = props => {
    // const { navToggle, toggler } = props
    console.log(props.hdToggle)
    return (
        <div className="navContainer">
            <button id="menuBtn" onClick={props.menuToggler}>Menu</button>
            <button className="HDImgBtn" onClick={props.hdToggler}>View in {props.hdToggle ? "SD" : "HD"}</button>
            <button onClick={props.infoToggler} className="HDImgBtn">More Info</button>
        </div>
    )

        
}

export default withSpace(Nav)