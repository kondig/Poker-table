
import React from 'react';
import './card.css';
import { connect } from 'react-redux';

let Card = ({rank, suit, weight, isOpponent, selected, cardClick}) => {
    const style = {
      front: {
        transform: 'rotateY(00deg)',
        cursor: 'pointer',
      },
      back: {
        transform: 'rotateY(180deg)'
      },
      normal: {fontSize: '2.7em'},
      big: {fontSize:'3.0em'}
    };
    const side = (isOpponent) ? 'back' : 'front';
    const size = (selected) ? 'big' : 'normal';

      return (
        <div className="playingCards"  >
          <div className="Card"
             style={{...style[side], ...style[size]}}
             onClick={() => cardClick(rank, suit, weight, selected)}
              >
            <div className="Card-front"   >
              <span className={`Suit ${suit}`} > {rank} </span>
            </div>
            <div className="Card-back" > back </div>
          </div>
        </div>
      )
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    selected: ownProps.selected,
  }
}
const mapDispatchToProps = (dispatch ) => {
  return {
    cardClick: (rank, suit, weight, selected) => {
      dispatch({
        type:'SELECT',
        rank,
        suit,
        weight,
        selected
    })}
  }
}

Card = connect(mapStateToProps,mapDispatchToProps)(Card)


export { Card };
