import { trick, trick2 } from './gamecalc';
import { newTable } from './gamecalc';
// const style = {
//   front: {transform: 'rotateY(0deg)'},
//   back: {transform: 'rotateY(180deg)'}
// };
const initialState = {
  opponent: trick2,
  you: trick,
  evalmenu: false,
  isOpponent: true,
  isPlayer: false,
}


const tableMaker = (state = {}, action) => {
  switch (action.type) {
   case 'DEAL_HANDS':
      let trickX = newTable();
      let trickA = trickX.trickA;
      let trickB = trickX.trickB;
      // let newEval = winnerFinder(trickA, trickB);
      // console.log(newEval.oppResult);
      // console.log(newEval.newWinner);
      return {
        opponent: trickB,
        you: trickA,
        evalmenu: true,
        // youResult: newEval.youResult,
        // winner: newEval.newWinner
      };
  case 'TOGGLE_EVAL':
    return {
      ...state,
      evalmenu: !state.evalmenu
    }
    case 'SHOW_OPP':
      // if (state.isOpponent === true) {
        return {
          ...state,
          isOpponent: !state.isOpponent,
        }
      // }
	    // return {
	    //     ...state,
	    //     isOpponent: !state.isOpponent,
	    //   };
	default:
	   return state;
   }
};
export { tableMaker, initialState };
