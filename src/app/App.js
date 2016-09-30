import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import maregaki  from './images/maregaki.jpg';
import cardlogo from './images/cardlogo.png';

import {
  trick,
  final,
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
        <CPerson name="kon" age={20} />
        <br/> <br/>
        <br/> <br/>
        <Hand className="Hand-dealt" trick={trick} />
        <br/> <br/>
        <div className="Result">
          <h3> Your hand is: <br/> {final} </h3>
          <br/> <br/>
        </div>
        <div className="App-footer">
          <h4> wanna play again? </h4>
          <img src={cardlogo} className="footer-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
