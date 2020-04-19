import React from 'react';
import './card.css';



const Card = props => {
   
    return (
    <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"></img>
        <div className="nameandemail">
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        </div>
   </div>
    );

}



export default Card;