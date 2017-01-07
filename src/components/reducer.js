import { trick, trick2, myDeck } from './gamecalc';
import { newTable, handBuilder } from './gamecalc';
import {  } from './gamecalc';

const initialState = {
  opponent: trick2,
  you: trick,
  evalmenu: false,
  isOpponent: true,
  isPlayer: false,
  cardsToSwap: [],
  deckId: myDeck
}
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
function compare(a,b) {
  return a.weight-b.weight;
}
const checkCard = (state, action) => {
  let { rank, suit, weight, selected } = action;
  console.log(action.rank);
  console.log({ rank, suit, weight, selected});
  console.log(contains(state.cardsToSwap, { rank, suit, weight, selected }));
  if (state.cardsToSwap.includes(action)) {
    return [...state.cardsToSwap];
  }
  return  [...state.cardsToSwap, { rank, suit, weight, selected} ]

}

const tableMaker = (state = {}, action) => {

  switch (action.type) {
   case 'DEAL_HANDS':
      let trickX = newTable();
      let trickA = trickX.trickA;
      let trickB = trickX.trickB;
      let deckX = trickX.newDeck;
      // let newEval = winnerFinder(trickA, trickB);
      // console.log(newEval.oppResult);
      // console.log(newEval.newWinner);
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
    // const {rank, suit, weight, selected} = action;
      return {
        ...state,
        cardsToSwap: checkCard(state, action),
        you: state.you.map((card) => {
          //console.log(card.rank + ' ' + card.suit + ' ' + card.selected);
            if (card.rank !== action.rank || card.suit !== action.suit) {
              // console.log(contains(state.cardsToSwap, {rank, suit, weight, selected}));
              return card;
             }
            // else {
            // if (!contains(state.cardsToSwap, {rank, suit})) {
            //   state.cardsToSwap.push(card);
            //   return {
            //     ...card,
            //     selected: !card.selected,
            //   }
            // }
              return {
                ...card,
                selected: !card.selected,
              }
            // }
        })
      }
    case 'CHANGE_SELECTED':
      let updatedTrick = [];
      let newCards = handBuilder(state.deckId);
      updatedTrick.push(newCards.cardA);
      updatedTrick.push(newCards.cardB);
      let remainingHand = state.you.slice(2);
      updatedTrick = updatedTrick.concat(remainingHand);
      let sortedTrick = updatedTrick.sort(compare);
      console.log(state.cardsToSwap[0]);
      console.log(remainingHand);
      console.log(updatedTrick);
      console.log(sortedTrick);
      console.log(contains(sortedTrick, newCards.cardB));
      return {
        ...state,
        you: sortedTrick,
        cardsToSwap: state.cardsToSwap
        }

	default:
	   return state;
   }
};




export { tableMaker, initialState };
