import React, { Component } from 'react';
import { createStore } from 'redux';
import { Hand } from './hand';
import { table } from './reducer';
import { Eval } from './result';

import './App.css';
import cardlogo from './images/cardlogo.png';
import { CPerson } from '../components';

const store = createStore(table)

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
            <Eval type="button" id="eval"  />
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
