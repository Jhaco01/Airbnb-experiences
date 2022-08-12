import React from "react";
import "../styles/Card.css"
import { CardImage } from "./CardImage";
import star from "../img/star.png";

export const Card = (props) => {
    return(
        <div className="card">
            < CardImage 
                img = {props.img}
                state = {props.state}
            />
            <div className="info">
                <div className="line-1"> <img src={star} className="star" /> <p> {props.rating} </p> <p className="gray-text"> {`(${props.reviewCount}) - ${props.country}`} </p> </div>
                <p> {props.title} </p>
                <p> <strong> {`From $${props.price}`} </strong> / person </p>                
            </div>
        </div>
    )
}