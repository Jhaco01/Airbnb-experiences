import React from "react";
import "../styles/CardImage.css"
import img from "../img/image-12.png";

export const CardImage = () => {
    return(
        <div className="card-img-state">                
            <div className="card-img">
                <img src={img} />
            </div>
            <div className="card-state"> <button> SOLD OUT </button> </div>
        </div>
    )
}