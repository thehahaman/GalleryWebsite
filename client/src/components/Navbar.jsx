import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    const [burger, setBurger] = useState(false);

    const burgerClick = () => setBurger(!burger);

    return (
        <div className="navbar">
            <div className="logoSection">
                <Link className="links" to="/">
                    <h3>George Projects</h3>

                    <img className="logo" src="images/mainLogo.png" alt="main logo" />

                </Link>

            </div>

            <div className="pathnames-container">
                <ul className={burger ? "pathnames-active" : "pathNames"}>
                    <li className='nav-item'><Link className="link" to="/"><h3>Home</h3></Link> </li>
                    <li className='nav-item'><Link className="link" to="/about"><h3>About</h3></Link></li>
                    <li className='nav-item'><Link className="link" to="/photos"><h3>Projects</h3></Link></li>
                </ul>
            </div>
            <div className="mobileButton" onClick={burgerClick}>
                <img className={burger ? 'hamburger-cross' : 'hamburger'} alt="hamburger" />

            </div>

        </div>
    )
}

export default Navbar;