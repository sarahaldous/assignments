import React from 'react'
import {mitTheme} from './context/ThemeProvider.js'
import './styles.css'


const App = props => {
    return (
        <div>
            <style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
</style>
       
            <div className={`home-${props.theme}`}>
            <header className={`header-${props.theme}`}><span>Yarr</span> <span>Ahoy, Matey!</span> <span>Aye, Avast!</span></header>
            <h3>This be ye home page. </h3>
           <p> Rum flogging Pirate Round loaded to the gunwalls mizzen cutlass. Piracy cog pirate no prey, no pay black spot square-rigged. Admiral of the Black fluke grog blossom spike belay schooner. Schooner aye crow's nest smartly Chain Shot haul wind. Bilge lee provost prow squiffy belay. Port Spanish Main furl schooner Sail ho lateen sail.</p>
           {/* <img src="https://images-na.ssl-images-amazon.com/images/I/81VHFWpxvcL._SL1500_.jpg"/> */}

<p>Snow belaying pin nipperkin bilged on her anchor Blimey yawl. Davy Jones' Locker grapple flogging pink Plate Fleet reef. Matey pillage spirits brig mizzen yard. Ho mutiny topmast boatswain hearties yo-ho-ho. Matey reef lad boom gun jury mast. Pinnace main sheet case shot hempen halter bilged on her anchor pressgang.</p>

<p>Long clothes Cat o'nine tails mutiny splice the main brace bucko gibbet. Line prow wherry port ho ahoy. Rigging jack Letter of Marque scurvy mizzenmast spanker. Log matey sutler Admiral of the Black piracy Letter of Marque. Ballast reef hang the jib fire ship rope's end clap of thunder. Knave coxswain nipper gabion bounty boom.</p>
            <div className="buttonDiv">
                <button className={`button-${props.theme}`} onClick=
                {props.toggleTheme}>Change Theme to {props.theme === "light" ? "dark" : "light"}!</button>
            </div>
            <footer className={`footer-${props.theme}`}>Peg-Leg-er (Get it? Because pirates are often missing feet)</footer>
            </div>
            
        </div>
    )
}
export default mitTheme(App)