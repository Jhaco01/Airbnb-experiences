import React from "react";
import layout from "../img/layout.png"
import "../styles/HeroSection.css"

export const HeroSection = () => {
    return(
        <section>
            <div className="hero-box">
                <div className="hero-img">
                    <img src={layout} />
                </div>
                <div className="hero-text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </section>
    )
}