import React, { Component } from 'react';


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

class Eval extends Component {
  render() {
    const {final, final2, winner, evalmenu} = this.props;
    return evalmenu ?
      ( <Result final={final} final2={final2} winner={winner} />) :
      ( "Evaluate")

  }
};

export { Eval };
