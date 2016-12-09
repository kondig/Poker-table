import React, { Component } from 'react';
import { createStore } from 'redux';
import { Hand } from '../components';
import { table } from '../components';
import { Eval } from '../components';

import './App.css';
import cardlogo from './images/cardlogo.png';
import { CPerson } from '../components';
import { trick, trick2 } from './gamecalc.js';

const initial = {
  hand1: trick2,
  hand2: trick,
  evalmenu: false
}
const store = createStore(table, initial);



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
            <Hand isOpponent={true} className="Hand-opponent" trick={store.getState().hand1}  />
            <br/> <br/>
            <p> You </p>
            <Hand isOppopnent={false} className="Hand-dealt" trick={store.getState().hand2}  />
            <br/> <br/>
            <button type="button" onClick={0}> Deal next hand please! </button>
            <br/> <br/> <br/>
          </div>
          <div className="button">
            <Eval type="button" id="eval" evalmenu={false}  />
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
