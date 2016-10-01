import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import maregaki  from './images/maregaki.jpg';
import cardlogo from './images/cardlogo.png';

import {
  trick,
  trick2,
  final,
  final2,
  winner,
} from './gamecalc.js';

import {
  Card,
} from '../components';

import {
  Deck,
  CPerson,
} from '../components';

const Hand = ({ trick }) => (
  <div className="Hand">
    {trick.map((card) => (
      <Card rank={card.rank} suit={card.suit} />
    ))}
    </div>
);

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={cardlogo} className="App-logo" alt="logo" />
          <h2>Poker table</h2>
        </div>

        <p className="App-intro"> So it begins... my petit meringue!!!</p>
        <img src={maregaki} alt="theme-pic" />
        <br/> <br/>
        <Deck name="kon" age={28} />
        <Deck name="maria" age={28} />
        <CPerson name="maraki μικρό βερύκοκο" age={20} />
        <br/> <br/>
        <br/> <br/>
        <div className="Table">
            <p> You: </p>
            <Hand className="Hand-dealt" trick={trick} />
            <p> Opponent: </p>
            <Hand className="Hand-opponent" trick={trick2} />
            <br/> <br/>
        </div>

        <div className="Result">
            <h3> Hands on table: </h3>
            <p> You: {final} </p>
            <p> Opponent: {final2} </p>
            <br/> <br/>
        </div>
        <div className="Winner">
            <h4> Winner: </h4>
            <p> {winner} </p>
            <br/>
        </div>
        <div className="App-footer">
          <h5> wanna play again? </h5>
          <img src={cardlogo} className="footer-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
