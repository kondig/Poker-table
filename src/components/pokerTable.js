import React from 'react';
import { connect } from 'react-redux'
import { Hand } from './hand';
import { Eval } from './eval';
//import { trick, trick2 } from './gamecalc';
//import { final, final2, winner } from './gamecalc';
import { winnerFinder } from './gamecalc';


let PokerTable = (props) => {
  const { trick, trick2, evalmenu, isOpponent, isPlayer, dealHands, toggleEval } = props;
  let myeval = winnerFinder(trick, trick2);
  let final = myeval.youResult;
  let final2 = myeval.oppResult;
  let thiswinner = myeval.newWinner;
  return (
    <div>
    <div className="Table">
      <p> Opponent </p>
      <Hand trick={trick2} isOpponent={isOpponent}    />
      <br/> <br/>
      <p> You</p>
      <Hand trick={trick} isOpponent={isPlayer}    />
      <br/> <br/>
      <br/> <br/>
    </div>
    <div className="button"  >
      <button className="evaluate" onClick={() => toggleEval()} > click me </button>
      <button className="deal" onClick={() => dealHands()} > deal me </button>
      <Eval evalmenu={evalmenu} youResult={final} oppResult={final2} winner={thiswinner}  />
    </div>
    </div>
  )
};

const mapStateToProps = ({
  opponent: trick2,
  you: trick,
  evalmenu,
  isOpponent,
  isPlayer,
}) => {
  return {
    trick2,
    trick,
    evalmenu,
    isOpponent,
    isPlayer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dealHands: () => dispatch({type: 'DEAL_HANDS'}),
    toggleEval: () => dispatch({type: 'TOGGLE_EVAL'}),
    cardClick: () => dispatch({type: 'SHOW_OPP'})
  };
};


PokerTable = connect(mapStateToProps,mapDispatchToProps)(PokerTable);
export { PokerTable };