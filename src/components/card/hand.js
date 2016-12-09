import React, { Component } from 'react';
import { Card } from './card';


class Hand extends Component {
  render () {
    const {trick, isOpponent} = this.props;
    return (
      <div className="Hand">
        {trick.map( (card) => (
          <Card
            rank={card.rank}
            suit={card.suit}
            isOpponent={isOpponent}
            key={`${card.rank} ${card.suit}`}  />
         ))}
       </div>
    )
  }
}

export { Hand }
