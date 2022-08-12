import React from "react";
import "../styles/CardImage.css"


export const CardImage = (props) => {
    return(
        <div className="card-img-state">                
            <div className="card-img">
                <img src={props.img} />
            </div>
            <div className="card-state"> <button> {props.state} </button> </div>
        </div>
    )
}