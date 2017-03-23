import React, { Component } from 'react';
import { Card } from './card';
import { connect } from 'react-redux';


class Hand extends Component {
  render () {
    const {trick, isOpponent, isPlayer } = this.props;
    return (
      <div className="Hand">
        {trick.map( ({rank, suit, weight, selected}) => (
          <Card
            rank={rank}
            suit={suit}
            weight={weight}
            selected={selected}
            isOpponent={isOpponent}
            isPlayer={isPlayer}
            key={`${rank} ${suit}`}  />
         ))}
       </div>
    )
  }
}

Hand = connect ()(Hand);

export { Hand }
