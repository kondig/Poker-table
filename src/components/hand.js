import React from 'react';
import { Card } from './card';
import { connect } from 'react-redux';

let Hand = (props) => {
  const { trick, isOpponent, isPlayer } = props;
  return (
    <div className="Hand">
      {trick.map((card) => (
        <Card
          rank={card.rank}
          suit={card.suit}
          isOpponent={isOpponent}
          isPlayer={isPlayer}
          key={`${card.rank} ${card.suit}`}
          />
       ))}
     </div>
  )
}

Hand = connect()(Hand);

export { Hand }
