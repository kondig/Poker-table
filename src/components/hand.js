import React, { Component } from 'react';
import { Card } from './card';
import { connect } from 'react-redux';


class Hand extends Component {
  render () {
    const {trick, isOpponent, isPlayer, selected, cardClick} = this.props;
    return (
      <div className="Hand">
        {trick.map( ({rank, suit, weight}) => (
          <Card
            rank={rank}
            suit={suit}
            weight={weight}
            isOpponent={isOpponent}
            isPlayer={isPlayer}
            selected={selected}
            onClick={() => cardClick(rank, suit, weight)}
            key={`${rank} ${suit}`}  />
         ))}
       </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps);
  return {
    selected: state.selected
  }
}

const mapDispatchToProps = (dispatch ) => {
  return {
    cardClick: (rank, suit, weight) => {
      dispatch({
        type:'SELECT',
        rank,
        suit,
        weight
    })}
  }
}

Hand = connect (mapStateToProps, mapDispatchToProps)(Hand);

export { Hand }
