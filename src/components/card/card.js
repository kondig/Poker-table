import React from 'react';
import './card.css';

const Card = ({rank,suit}) => (
  
    <div className="Card">
      {rank} <br/> {suit}
    </div>

);

export {
  Card,
};
