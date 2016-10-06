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

import {
  Card,
} from '../components';

import {
  CPerson,
} from '../components';



const Hand = ({ trick }) => (
  <div className="Hand">
    {trick.map((card) => (
      <Card rank={card.rank} suit={card.suit} onClick={0} />
    ))}
    </div>
);




const Result = ({final, final2, winner}) => (
<div className="evaluation">
  <div className="Result" >
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
    const text2 = this.state.result ? <Result final={final} final2={final2} winner={winner}/>  :  <h7> 'EVALUATE' </h7>  ;
    return (
        <div className="evalButton" onClick={this._handleResult} > {text2} </div>
    );
  }
}

class OpponentHand  extends Component {
  constructor() {
    super();
    this.state = {
      flipped: false,
  };
  this._handleHand = this._handleHand.bind(this);
}
_handleHand() {
  this.setState ({flipped: !this.state.flipped})
}
render() {
  const text3 = this.state.flipped ? 'Card-front' : 'Card-back';
  return(
  <div className="opponent-button" onClick={this._handleHand} > {text3} </div>

  );}
}


function FancyCheckbox(props) {
  var checked = props.checked ? 'FancyChecked' : 'FancyUnchecked';
  return (
    <div className={checked} onClick={props.onClick}>
      {props.children}
    </div>
  );
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
            <p> You </p>
            <Hand className="Hand-dealt" trick={trick}  />
            <p> Opponent </p>
            <Hand className="Hand-opponent" trick={trick2}  onClick={0} />
            <OpponentHand className="flip-em" type="button"  />
            <br/> <br/>
            <FancyCheckbox checked={false} onClick={this._flipCard}> HELLO! </FancyCheckbox>
            <br/> <br/>
            <button onClick={this._flipCard}> flip me </button>
          </div>
          <div className="button">
            <EvalButton type="button" id="eval" />
          </div>
        </div>
        <div className="App-footer">
          <h5> wanna play again? </h5>
          <img src={cardlogo} className="footer-logo" alt="logo" />
        </div>
      </div>
    );
  }
  _flipCard(event) {
      //event.currentTarget.style.position='absolute';
      event.currentTarget.style.fontSize='30px';
      //event.currentTarget.style.top='0';
      //event.currentTarget.style.left='0';
      event.currentTarget.style.width='100%';
      //event.currentTarget.style.height='100%';
      event.currentTarget.style.backfaceVisibility='hidden';
      event.currentTarget.style.transition='transform 3s';
      event.currentTarget.style.transform="rotateY(180deg)"
      //event.currentTarget.style.zIndex='2';
  }
}

export default App;
