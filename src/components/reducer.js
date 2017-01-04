import { trick, trick2 } from './gamecalc';
import { newTable } from './gamecalc';

const initialState = {
  opponent: trick2,
  you: trick,
  evalmenu: false,
  isOpponent: true,
  isPlayer: false,
}
// const CardMaker = (state, action) => {
//     switch (action.type) {
//       case 'SELECT':
//         for (var i=0; i < state.you.length; i++) {
//           if ((state.you[i].rank !== action.rank) || (state.you[i].suit !== action.suit) ) {
//             return state;
//           }
//           return  {
//               ...state,
//               selected: true,
//           }
//         }
//     default:
//       return state
//     }
// }


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
        evalmenu: false,
        isOpponent: true,
        isPlayer: false
      };
   case 'TOGGLE_EVAL':
      return {
      ...state,
      evalmenu: !state.evalmenu
    }
    case 'SHOW_PLAYER_HAND':
      return {
          ...state,
          isPlayer: !state.isPlayer
        }
    case 'SHOW_OPPONENT_HAND':
        return {
          ...state,
          isOpponent: !state.isOpponent
        }
    case 'SELECT':
    console.log(action.rank);
      return {
        ...state,
        selected: !state.selected
      }

	default:
	   return state;
   }
};
export { tableMaker, initialState };
