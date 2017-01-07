import React, { Component } from 'react';
import { Card } from './card';
import { connect } from 'react-redux';


class Hand extends Component {
  render () {
    const {trick, isOpponent, isPlayer} = this.props;
    return (
      <div className="Hand">
        {trick.map( ({rank, suit, weight, selected}) => (
          <Card
            rank={rank}
            suit={suit}
            weight={weight}
            isOpponent={isOpponent}
            isPlayer={isPlayer}
            selected={selected}
            key={`${rank} ${suit}`}  />
         ))}
       </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//
//   return {
//     cardsToSwap: state.cardsToSwap
//   }
// }

// const mapDispatchToProps = (dispatch ) => {
//   return {
//     cardClick: (rank, suit) => {
//       dispatch({
//         type:'SELECT',
//         rank,
//         suit,
//     })}
//   }
// }

Hand = connect ()(Hand);

export { Hand }
