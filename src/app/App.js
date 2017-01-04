import React, { Component } from 'react';
// import { Hand } from '../components';
// import { Eval } from '../components';

import './App.css';
import cardlogo from './images/cardlogo.png';
import { CPerson } from '../components';
import { PokerTable } from '../components';




class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header-content">
          <div className="App-header">
            <img src={cardlogo} className="App-logo" alt="logo" />
            <h2>POKER TABLE</h2>
            <CPerson name="kon" age={20} />
            <br/>
          </div>
        </div>
        <div className="Content">
          <PokerTable />
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
