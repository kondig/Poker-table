import React from 'react';
import './card.css';

const Card = ({rank,suit}) => (

    <div className="playingCards [diams|hearts|spades|clubs]">
      <div className="Card effect__click">
        <div className="Card-front">
          <span className="Rank"> {rank} <br/> </span>
          <span className="Suit"> {suit} </span>
        </div>
        <div className="Card-back"> back </div>
      </div>
    </div>
);
(function () {
  var cards = document.querySelectorAll(".Card.effect__click");
  for (var i=0; i < cards.length; i++) {
    var Card = cards[i];
    clickListener(Card);
}
  function clickListener(Card) {
    Card.addEventListener("click", function () {
      var c = this.classList;
      (c.contains("flipped") === true) ? c.remove("flipped") : c.add("flipped");
    });
  }
}) ();


export {
  Card,
};
