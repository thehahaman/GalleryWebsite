import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logoSection">
                <Link className="links" to="/">
                    <h3>Title</h3>

                    <img className="logo" src="images/mainLogo.png" alt="main logo" />

                </Link>

            </div>
            
            <div className="pathNames">
                <Link className="link" to="/"><h6>Home</h6></Link>
                <Link className="link" to="/about"><h6>About</h6></Link>
                <Link className="link" to="/photos"><h6>Photos</h6></Link>
            </div>
        </div>
    )
}

export default Navbar;