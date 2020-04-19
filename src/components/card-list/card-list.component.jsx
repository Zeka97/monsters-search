import React from 'react';
import './card-list.css';
import Card from  '../card/card.component';

const Cardlist = props => {
  
    console.log(props.monsters);

    return <div className="card">

      {

      props.monsters.length
      
      ?
      <div className="card-list">
        {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
      }
      </div>
      :
      <h1 className="norobots">No robot found</h1>
    
      }  
      
      
      </div>;


};


export default Cardlist;