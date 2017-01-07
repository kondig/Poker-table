function Deck() {
    this.createDeck = createDeck;
    this.drawCard = drawCard;
    this.buildHand = buildHand;
    this.buildTable = buildTable;
 }
const SUITS = {
  club: {
    name: 'club',
    symbol: '♣',
    color: 'black', },
  diamond: {
    name: 'diamond',
    symbol: '♦',
    color: 'red', },
  spade: {
    name: 'spade',
    symbol: '♠',
    color: 'black', },
  heart: {
    name: 'heart',
    symbol: '♥',
    color: 'red',},
  }



var Card = function (rank, suit, weight) {
    this.rank = rank;
    this.suit = suit;
    this.weight = weight;
    this.selected = false;
 };
function createDeck() {
    const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const weight = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const suit = [SUITS.club.name, SUITS.diamond.name, SUITS.spade.name, SUITS.heart.name];
    this.deck = [];
    for (var i = 0; i < suit.length; i++ ) {
      for (var j = 0; j < rank.length; j++) {
        this.deck.push(new Card(rank[j], suit[i], weight[j]));
      }
    }
 }


function drawCard () {
    if (this.deck.length > 0) {
      var myCard = this.deck[Math.floor(Math.random()*this.deck.length)];
      let indexCard = this.deck.indexOf(myCard);
      this.deck.splice(indexCard,1);
      //console.log(myCard);
      return myCard;
    } else {
      console.log("no cards left")
      return null;
    }
 }
function buildHand() {
  var hand = [];
  let card1 = this.deck[Math.floor(Math.random()*this.deck.length)];
  let indexCard1 = this.deck.indexOf(card1);
  this.deck.splice(indexCard1,1);
  let card2 = this.deck[Math.floor(Math.random()*this.deck.length)];
  let indexCard2 = this.deck.indexOf(card2);
  this.deck.splice(indexCard2,1);
  hand.push(card1, card2);
  return hand;
}
function buildTable() {
  var table = [];
  let flopCard1 = this.deck[Math.floor(Math.random()*this.deck.length)];
  let indexCard1 = this.deck.indexOf(flopCard1);
  this.deck.splice(indexCard1,1);
  let flopCard2 = this.deck[Math.floor(Math.random()*this.deck.length)];
  let indexCard2 = this.deck.indexOf(flopCard2);
  this.deck.splice(indexCard2,1);
  let flopCard3 = this.deck[Math.floor(Math.random()*this.deck.length)];
  let indexCard3 = this.deck.indexOf(flopCard3);
  this.deck.splice(indexCard3,1);
  table.push(flopCard1, flopCard2, flopCard3);
  return table;
}
function compare(a,b) {
  return a.weight-b.weight;
}
function pairCounter(hand) {
  var pairs = [];
  var pairscore = [];
  //console.log(hand[0].rank, hand[1].rank, hand[2].rank, hand[3].rank, hand[4].rank);
  //console.log(hand[0].suit, hand[1].suit, hand[2].suit, hand[3].suit, hand[4].suit);
  //console.log(hand[0].weight, hand[1].weight, hand[2].weight, hand[3].weight, hand[4].weight);
  for (var i=0; i < (hand.length-1); i++) {
      if (hand[i].rank === hand[i+1].rank) {
        pairs.push(hand[i].rank);
        pairscore.push(hand[i].weight);
      }
  }
  return  { pairs : pairs,
            pairscore : pairscore
          };
}
function flush(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i].suit !== array[i+1].suit) {
            return false;
        }
    }
    return true;
}
function straight(array) {
  var straightTracker = 0;
   for(var i = 0; i < array.length-1; i++) {
     if ((array[i+1].weight) - (array[i].weight) === 1) {
         straightTracker++
     }
   }
     if (straightTracker === 4) {
       return true;
     } else if ((straightTracker === 3) && (array[4].weight === 14) && (array[3].weight === 5)) {
       return true;
     } else {
       return false;
     }
}
function cardRank(hand, pairs) {
  var result = "";
    if (flush(hand) && straight(hand)  && (hand[4].weight === 14) && (hand[3].weight === 13)) {
        result = (`ROYAL FLUSH of ${hand[4].suit}'s`);
    } else if (flush(hand) && straight(hand) && (hand[3].weight !== 13)) {
            result = (`${hand[3].rank}-high straight flush`);
        } else if (flush(hand) && straight(hand)) {
            result = (`${hand[4].rank}-high straight flush`);
    } else if  ((pairs[0] === pairs[1]) && (pairs[1] === pairs[2]) && (pairs[1] !== undefined)) {
        result = (`four of a kind ${pairs[0]}`);
    } else if (((pairs[0] !== pairs[1]) && (pairs[2] !== undefined) && (pairs[1] === pairs[2])) ||
               ((pairs[1] !== pairs[2]) && (pairs[2] !== undefined) && (pairs[0] === pairs[1]))) {
          if (pairs[0] === pairs[1]) {
            result = (`full house of ${pairs[0]}'s with ${pairs[2]}'s`);
        } else if (pairs[1] === pairs[2]) {
            result = (`full house of ${pairs[2]}'s with ${pairs[0]}'s`);
        }
    } else if  (flush(hand)) {
         result = (`flush of: ${hand[0].suit}`);
    } else if (straight(hand) && hand[4].weight === 14 && hand[3].weight !== 13) {
         result = (`${hand[3].rank}-high straight`);
        } else if (straight(hand)) {
         result = (`${hand[4].rank}-high straight`);
    } else if  (pairs[0] === pairs[1] && pairs[1] !== undefined) {
         result = (`three of a kind ${pairs[0]}'s`);
    } else if  (pairs.length === 2) {
         result = (`double pairs ${pairs[0]}'s & ${pairs[1]}'s`);
    } else if  (pairs.length === 1) {
         result = (`pair of ${pairs[0]}'s`);
    } else if  (pairs.length === 0) {
         result = (`high card ${hand[4].rank}`);
    }
  return result;
}
function score(hand, pairs, pairscore) {
  var Score ;
  if (flush(hand) && straight(hand)  && (hand[4].weight === 14) && (hand[3].weight === 13)) {
      Score = 100000
  } else if (flush(hand) && straight(hand) && (hand[3].weight !== 13)) {
          Score = 900000 + hand[4].weight;
      } else if (flush(hand) && straight(hand)) {
          Score = 900000 + 14*hand[4].weight;
  } else if  ((pairs[0] === pairs[1]) && (pairs[1] === pairs[2]) && (pairs[1] !== undefined)) {
      Score = 80000 + 14*pairscore[2] + hand[4].weight;
  } else if (((pairs[0] !== pairs[1]) && (pairs[2] !== undefined) && (pairs[1] === pairs[2])) ||
             ((pairs[1] !== pairs[2]) && (pairs[2] !== undefined) && (pairs[0] === pairs[1]))) {
        if (pairs[0] === pairs[1]) {
        Score = 700000 + 14*pairscore[0] + pairscore[2];
      } else if (pairs[1] === pairs[2]) {
        Score = 700000 + 14*pairscore[2] + pairscore[0];
      }
  } else if  (flush(hand)) {
       Score = 600000 + 196*hand[4].weight + 14*hand[3].weight + hand[2].weight;
  } else if (straight(hand) && hand[4].weight === 14 && hand[3].weight !== 13) {
       Score = 500000 + hand[3].weight;
      } else if (straight(hand)) {
       Score = 400000 + hand[4].weight;
  } else if  (pairs[0] === pairs[1] && pairs[1] !== undefined) {
       Score = 300000 + 14*pairscore[1] + hand[4].weight ;
  } else if  (pairs.length === 2) {
       Score = 200000 + 196*pairscore[1] + 14*pairscore[0] + hand[4].weight;
  } else if  (pairs.length === 1) {
       Score =  100000 + 14*pairscore[0] + hand[4].weight ;
  } else if  (pairs.length === 0) {
       Score = 196*hand[4].weight + 14*hand[3].weight + hand[2].weight ;
  }
return Score;
}
// --- below calculations of initial state ----
let myDeck = new Deck();
myDeck.createDeck();
//build 1st hand
var handTest = myDeck.buildHand();
var tableTest = myDeck.buildTable();
var trick = handTest.concat(tableTest);
// build 2nd hand
var hand2 = myDeck.buildHand();
var table2 = myDeck.buildTable();
var trick2 = hand2.concat(table2);
trick.sort(compare);
trick2.sort(compare);
var freq = pairCounter(trick);
var freq2 = pairCounter(trick2);
var final = cardRank(trick, freq.pairs);
var final2= cardRank(trick2, freq2.pairs);
var score1 = score(trick, freq.pairs, freq.pairscore);
var score2 = score(trick2,freq2.pairs, freq2.pairscore);

if (score1 > score2) {
  var winner = "You";
} else if (score1 === score2 ) {
  winner = "It's a tie";
} else {
  winner = "Opponent";
}
// ----------------------------------------------
function newTable () {
  let newDeck = new Deck();
  newDeck.createDeck();
  let hand1 = newDeck.buildHand();
  let hand2 = newDeck.buildHand();
  let trickA = hand1.concat(newDeck.buildTable());
  let trickB = hand2.concat(newDeck.buildTable());
  trickA.sort(compare);
  trickB.sort(compare);
  return {trickA, trickB, newDeck};
}
function winnerFinder (hand1, hand2) {
  let pairs1 = pairCounter(hand1);
  let pairs2 = pairCounter(hand2);
  let youResult = cardRank(hand1, pairs1.pairs);
  let oppResult = cardRank(hand2, pairs2.pairs);
  let youScore = score(hand1, pairs1.pairs, pairs1.pairscore);
  let oppScore = score(hand2, pairs2.pairs, pairs2.pairscore);
  if (youScore > oppScore) {
    var newWinner = "You";
  } else if (youScore === oppScore ) {
     newWinner = "It's a tie";
  } else {
     newWinner = "Opponent";
  };
  return {youResult, oppResult, newWinner};
}
function handBuilder (deck) {
  let cardA = deck.drawCard();
  let cardB = deck.drawCard();
  return {cardA, cardB};
}

export {
  trick,
  final,
  trick2,
  final2,
  winner,
  score1,
  score2,
  myDeck,
};
export {
  newTable,
  winnerFinder,
  handBuilder
};
