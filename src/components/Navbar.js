import React from "react";
import "../styles/Navbar.css"
import logo from "../img/Airbnb-logo.png"

export const Navbar = () => {
    return(
        <nav className="nav">
            <div className="nav-div">
                <img src={logo} />
            </div>
        </nav>
    )
}