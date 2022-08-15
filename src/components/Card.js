import React from "react";
import "../styles/Card.css"
import { CardImage } from "./CardImage";
import star from "../img/star.png";

export const Card = ({item}) => {
    return(
        <div className="card">
            < CardImage 
                img = {item.img}
                openSpots = {item.openSpots}
                location = {item.location}
            />
            <div className="info">
                <div className="line-1"> <img src={star} className="star" /> <p> {item.rating} </p> <p className="gray-text"> {`(${item.reviewCount}) - ${item.location}`} </p> </div>
                <p> {item.title} </p>
                <p> <strong> {`From $${item.price}`} </strong> / person </p>                
            </div>
        </div>
    )
}