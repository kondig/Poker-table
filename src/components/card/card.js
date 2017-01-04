
import React from 'react';
import './card.css';
import { connect } from 'react-redux';

let Card = ({rank, suit, weight, isOpponent, selected, onClick}) => {
    const style = {
      front: {
        transform: 'rotateY(00deg)',
        cursor: 'pointer',
      },
      back: {
        transform: 'rotateY(180deg)'
      },
      // normal: {fontSize: '2.7em'},
      // big: {height:'2.9em'}
    };
    const side = (isOpponent) ? 'back' : 'front';
    //const size = (selected) ? 'big' : 'normal';
    if (selected) {
      return (
        <div className="playingCards"  >
          <div className="Card"
             style={style[side]}
             onClick={onClick}
              >
            <div className="Card-front"   >
              <strong className={`Suit ${suit}`} > {rank} </strong>
            </div>
            <div className="Card-back" > back </div>
          </div>
        </div>
      )
    }
    return (
      <div className="playingCards"  >
        <div className="Card"
           style={style[side]}
           onClick={onClick}
            >
          <div className="Card-front"   >
            <span className={`Suit ${suit}`} > {rank} </span>
          </div>
          <div className="Card-back" > back </div>
        </div>
      </div>
    )
};



// const mapDispatchToProps = (dispatch ) => {
//   return {
//     cardClick: (rank, suit) => {
//       dispatch({
//         type:'SELECT',
//         rank,
//         suit
//     })}
//   }
// }

Card = connect()(Card)


export { Card };
