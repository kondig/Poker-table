import React from 'react';
import './card.css';


const Card = ({rank,suit}) =>  {
  var front = true;
  const slideToggle = (event) => {
    var mycard = event.currentTarget;
    if (front) {
        front = false;
        mycard.style.transition='transform 1s';
        mycard.style.transform="rotateY(-180deg)";
        mycard.style.cursor="pointer";
    }
    else {
        front = true;
        mycard.style.transition='transform 1s';
        mycard.style.transform="rotateY(0deg)";
        mycard.style.cursor="pointer";
    }
  }
  return (
    <div className="playingCards ">
      <div className="Card" onClick={slideToggle}>
        <div className="Card-front"  >
          <span className={`Suit ${suit}`} > {rank} </span>
        </div>
        <div className="Card-back" > back </div>
      </div>
    </div>
  );
}



export {
  Card,
};
