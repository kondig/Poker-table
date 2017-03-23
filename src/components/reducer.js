import { trick, trick2, myDeck } from './gamecalc';
import { newTable, handBuilder } from './gamecalc';

const initialState = {
  opponent: trick2,
  you: trick,
  evalmenu: false,
  isOpponent: true,
  isPlayer: false,
  deckId: myDeck
}

function compare(a,b) {
  return a.weight-b.weight;
}

const tableMaker = (state = {}, action) => {
  switch (action.type) {
   case 'DEAL_HANDS':
      let trickX = newTable();
      let trickA = trickX.trickA;
      let trickB = trickX.trickB;
      let deckX = trickX.newDeck;
      return {
        opponent: trickB,
        you: trickA,
        evalmenu: false,
        isOpponent: true,
        isPlayer: false,
        cardsToSwap: [],
        deckId: deckX
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
      console.log(state);
      console.log(state.cardsToSwap);
      return {
        ...state,
        you: state.you.map((card) => {
            if (card.rank !== action.rank || card.suit !== action.suit) {
              return card;
             } else {
              return {
                ...card,
                selected: !card.selected,
              }
            }
        }),
      }
    case 'CHANGE_SELECTED':
      console.log(state);
      let updatedTrick = [];
      let newCards = handBuilder(state.deckId);
      updatedTrick.push(newCards.cardA);
      updatedTrick.push(newCards.cardB);
      let updatedSwap = state.you.filter((obj) => { return obj.selected === true});
      let first = state.you.indexOf(updatedSwap[0]);
      let second = state.you.indexOf(updatedSwap[1])
      state.you.splice(first,1);
      console.log(state.you);
      state.you.splice(second-1,1);
      console.log(state.you);
      let remainingHand = state.you;
      updatedTrick = updatedTrick.concat(remainingHand);
      let sortedTrick = updatedTrick.sort(compare);
      return {
        ...state,
        you: sortedTrick,
        }
	default:
	   return state;
   }
};




export { tableMaker, initialState };
