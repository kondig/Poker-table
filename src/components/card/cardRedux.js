import React from 'react';
import './card.css';

const style = {
  front: {
    //transition: 'transform 1s',
    transform: 'rotateY(0deg)',
    cursor: 'pointer',
  },
  back: {
    //transition: 'transform 1s',
    transform: 'rotateY(-180deg)',
    cursor: 'grab',
  }
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    const { isOpponent } = props;
    this.state = {
      side: isOpponent ? 'back' : 'front',
    };
  }

  cardClick = () => {
    let { state: { side } } = this;
    side = side === 'front' ? 'back' : 'front';
    this.setState( { side } );
  };

  render() {
    const { props: {rank,suit}, state: {side}, cardClick } = this;

    return (
      <div className="playingCards ">
        <div className="Card" style={style[side]} onClick={cardClick}>
          <div className="Card-front"  >
            <span className={`Suit ${suit}`} > {rank} </span>
          </div>
          <div className="Card-back"> back </div>
        </div>
      </div>
    );
  }
}



export {
  Card,
};
