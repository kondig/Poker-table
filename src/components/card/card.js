import React from 'react';
import './card.css';

const Card = ({rank,suit}) => (

    <div className="Card">
      {rank} <br/>
      <div className={suit}> {suit} </div>
    </div>


);

export {
  Card,
};
