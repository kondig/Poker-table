
import React, {Component} from 'react';
import './card.css';

class Card extends Component {
  render () {
    const {store} = this.context;
    const {rank, suit, weight, isOpponent} = this.props;
    const style = {
      front: {transform: 'rotateY(0deg)'},
      back: {transform: 'rotateY(180deg)'}
    };
    const side = isOpponent ? 'back' : 'front';
    const cardClick = () => {store.dispatch( {type:'FLIP_CARD', side})}



    return (
      <div className="playingCards ">
        <div className="Card" style={style[side]} onClick={cardClick} >
          <div className="Card-front"  >
            <span className={`Suit ${suit}`} > {rank} </span>
          </div>
          <div className="Card-back" > back </div>
        </div>
      </div>
    )
  }
}

Card.contextTypes = {
  store: React.PropTypes.object
}
export {Card};
