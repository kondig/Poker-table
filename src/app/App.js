import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import cardlogo from './images/cardlogo.png';
import {
  trick,
  trick2,
  final,
  final2,
  winner,
} from './gamecalc.js';

import { Card } from '../components';
import { CPerson } from '../components';


const Hand = ({ trick, isOpponent }) => (
  <div className="Hand">
    {trick.map((card) => (
      <Card rank={card.rank} suit={card.suit} isOpponent={isOpponent} key={`${card.rank} ${card.suit}`}  />
    ))}
    </div>
);

const Result = ({final, final2, winner}) => (
<div className="evaluation">
  <div className="Result" >
    <h3> Hands on table: </h3>
    <p> Opponent: {final2} </p>
    <p> You: {final} </p>
    <br/> <br/>
  </div>
  <div className="Winner">
    <h4> Winner: </h4>
    <p> {winner} </p>
    <br/>
  </div>
</div>
);

class EvalButton extends Component {
  constructor() {
    super();
    this.state = {
      evaluated: false,
      result: false,
    };
    this._handleResult = this._handleResult.bind(this);
  }
  _handleResult () {
    this.setState ({result: !this.state.result})
  }
  render() {
    const text = this.state.result ? <Result final={final} final2={final2} winner={winner}/>  :  <h7>  </h7>  ;
    return (
        <div className="evalButton" onClick={this._handleResult} > {text} </div>
    );
  }
}



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="header-content">
          <div className="App-header">
            <img src={cardlogo} className="App-logo" alt="logo" />
            <h2>Poker table</h2>
            <CPerson name="kon" age={20} />
            <br/>
          </div>
        </div>
        <div className="Content">
          <div className="Table">
            <p> Opponent </p>
            <Hand isOpponent={true} className="Hand-opponent" trick={trick2} key={trick2.id} />
            <br/> <br/>
            <p> You </p>
            <Hand isOppopnent={false} className="Hand-dealt" trick={trick} key={trick.id} />
            <br/> <br/>
            <button type="button" onClick={0}> Deal next hand please! </button>
            <br/> <br/> <br/>
          </div>
          <div className="button">
            <EvalButton type="button" id="eval" key={EvalButton.id} />
          </div>
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
