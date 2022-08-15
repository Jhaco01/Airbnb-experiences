import React from "react";
import "../styles/CardImage.css"


export const CardImage = (props) => {
    let state;
    if (props.openSpots <= 0) {
        state = 'SOLD OUT'
    } else if (props.location === 'ONLINE') {
        state = 'ONLINE'
    }

    return(
        <div className="card-img-state">                
            <div className="card-img">
                <img src={props.img} />
            </div>
            {state && <div className="card-state"> {state} </div>}
        </div>
    )
}