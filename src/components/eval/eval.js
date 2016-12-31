import React, { Component } from 'react';



class Eval extends Component {
  render() {
    const {youResult, oppResult, winner, evalmenu } = this.props;
    return evalmenu ?
      ( <div className="evaluation">
        <div className="Result" >
          <h3> Hands on table: </h3>
          <p> Opponent: {oppResult} </p>
          <p> You: {youResult} </p>
          <br/> <br/>
        </div>
        <div className="Winner">
          <h4> Winner: </h4>
          <p> {winner} </p>
          <br/>
        </div>
      </div> ) :
      ( <div></div> )

  }
};

export { Eval };
