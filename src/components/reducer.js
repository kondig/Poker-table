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
// function equals (element) {
//   return element.rank === rank && element.suit === suit
// }
// const checkCard = (state, action) => {
//   //let { rank, suit, weight, selected } = action;
//   //console.log({ rank, suit, weight, selected});
//   let mycard = {
//     rank: action.rank,
//     suit: action.suit,
//     weight: action.weight,
//     selected: action.selected}
//   console.log(mycard);
//   console.log(state.you);
//   console.log(state.you[1]);
//   console.log(state.cardsToSwap);
//   console.log(state.cardsToSwap.includes(state.you[1]));
//   // console.log(state.you[1].rank === mycard.rank);
//     console.log(state.cardsToSwap.filter((obj) => { return obj.rank === action.rank}));
//     if (state.cardsToSwap[0] === mycard) {
//       return [...state.cardsToSwap]
//     }
//     return  [...state.cardsToSwap, mycard ]
//
// }

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
      let mycard = {
        rank: action.rank,
        suit: action.suit,
        weight: action.weight
      }
    console.log(state);
    console.log(state.cardsToSwap);
    // const {rank, suit, weight, selected} = action;
      return {
        ...state,
        //cardsToSwap: checkCard(state, action),
        you: state.you.map((card) => {
          //console.log(card.rank + ' ' + card.suit + ' ' + card.selected);
            if (card.rank !== action.rank || card.suit !== action.suit) {
              // console.log(contains(state.cardsToSwap, {rank, suit, weight, selected}));
              return card;
             }
              else {
              if (!contains(state.cardsToSwap, mycard)) {
                state.cardsToSwap.push(card);
                return {
                  ...card,
                  selected: !card.selected,
                }
              }
              return {
                ...card,
                selected: !card.selected,
              }
            }
        }),

      }
    case 'CHANGE_SELECTED':
      console.log(state);
      //console.log(state.you[1].selected);
      //console.log(state.cardsToSwap[0]);
      //console.log(state.cardsToSwap);
      let updatedTrick = [];
      let newCards = handBuilder(state.deckId);
      updatedTrick.push(newCards.cardA);
      updatedTrick.push(newCards.cardB);
      //console.log(state.you.filter((obj) => { return obj.selected === true}));
      let updatedSwap = state.you.filter((obj) => { return obj.selected === true});
      console.log(updatedSwap);
      //console.log(state.you.indexOf(updatedSwap[1]));
      let first = state.you.indexOf(updatedSwap[0]);
      let second = state.you.indexOf(updatedSwap[1])
      console.log(first);
      console.log(second);
      console.log(updatedSwap[1]);
      state.you.splice(first,1);
      console.log(state.you);
      //console.log(state.you.splice(updatedSwap[0],1));
      state.you.splice(second-1,1);
      //console.log(state.you.splice(updatedSwap[1],1));
      console.log(state.you);
      let remainingHand = state.you;
      //console.log(remainingHand);
      //console.log(remainingHand);
      //remainingHand = state.you.splice(secondstop);
      updatedTrick = updatedTrick.concat(remainingHand);
      let sortedTrick = updatedTrick.sort(compare);
      //console.log(remainingHand);
      //console.log(updatedTrick);
      //console.log(sortedTrick);
      //console.log(contains(sortedTrick, newCards.cardB));
      return {
        ...state,
        you: sortedTrick,
        // cardsToSwap: state.cardsToSwap
        }

	default:
	   return state;
   }
};




export { tableMaker, initialState };
