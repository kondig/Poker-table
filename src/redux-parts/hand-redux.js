import React, { Component } from 'react';
import './App.css';
import { Card } from '../components';
import { trick, trick2 } from './gamecalc.js';

class Hand extends Component {
  render () {
    const {trick, isOpponent} = this.props;
    const {store} = this.context;
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
Hand.contextTypes = {
  store: React.PropTypes.object
}
export {Hand}
