import React from "react";
import "../styles/Card.css"
import { CardImage } from "./CardImage";
import star from "../img/star.png";

export const Card = () => {
    return(
        <div className="card">
            < CardImage />
            <div className="info">
                <div className="line-1"> <img src={star} className="star" /> <p> 5.0 </p> <p className="gray-text"> {`(6)-USA`} </p> </div>
                <p> Life lessons with Katie Zaferes </p>
                <p> <strong> From $136 </strong> / person </p>                
            </div>
        </div>
    )
}