import React from "react";
import "../styles/CardImage.css"


export const CardImage = (props) => {
    let state;
    let boolean = false;
    if (props.openSpots <= 0) {
        state = 'SOLD OUT'
        boolean = true;
    } else if (props.location === 'ONLINE') {
        state = 'ONLINE'
        boolean = true;
    }

    return(
        <div className="card-img-state">                
            <div className="card-img">
                <img src={props.img} />
            </div>
            {boolean && <div className="card-state"> {state} </div>}
        </div>
    )
}