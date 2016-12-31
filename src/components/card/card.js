
import React from 'react';
import './card.css';
import { connect } from 'react-redux';

let Card = ({rank, suit, isOpponent, cardClick}) => {
    const style = {
      front: {
        transform: 'rotateY(0deg)',
        cursor: 'pointer',
      },
      back: {transform: 'rotateY(180deg)'},

    };
    const side = isOpponent ? 'back' : 'front';

    return (
      <div className="playingCards"  >
        <div className="Card"
           style={style[side]}
           onClick={() => cardClick()}
            >
          <div className="Card-front"   >
            <span className={`Suit ${suit}`} > {rank} </span>
          </div>
          <div className="Card-back" > back </div>
        </div>
      </div>
    )
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardClick: () => {
      dispatch({
        type:'SHOW_OPP',
      })
    }
  }
}

Card = connect(null, mapDispatchToProps)(Card)


export { Card };
