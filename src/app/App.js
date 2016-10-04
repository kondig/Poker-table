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
      <Card rank={card.rank} suit={card.suit} />
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
    //this._handleClick = this._handleClick.bind(this);
    this._handleResult = this._handleResult.bind(this);
  }
  //_handleClick () {
  //  this.setState ({evaluated: !this.state.evaluated});
  //}
  _handleResult () {
    this.setState ({result: !this.state.result})
  }
  render() {
    //const text = this.state.evaluated ? 'EVALUATED' : 'EVALUATE';
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
  const text3 = this.state.flipped ? 'front' : 'back';
  return(
  <div className="opponent-button" onClick={this._handleHand} > {text3} </div>

  );}
}
var Box = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    return <div>Current window width: {this.state.windowWidth}</div>;
  }
});


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
            <Hand className="Hand-dealt" trick={trick} />
            <p> Opponent </p>
            <Hand className="Hand-opponent" trick={trick2} />
            <OpponentHand className="flip-em" type="button"  />
            <Box />
            <br/> <br/>
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

}

export default App;
