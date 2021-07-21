let cardValue = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

class Player {
  constructor(hand) {
    this.highCard = hand[0];
    this.hand = this.evaluateHand(hand);
  }
  evaluateHand(hand) {
    for (let card of hand.sort()) {
      // HIGH CARD
      if (cardValue[card] > cardValue[this.highCard]) {
        this.highCard = card;
        this.highCardValue = cardValue[card];
      }

      //   PAIR / 3 OF A KIND
      if (card in this.playerCardHash) {
        if (this.hasPair) {
          this.hasThree = true;
        }
        this.hasPair = true;
      }

      //   ADD TO HASH
      this.playerCardHash[card] = true;
    }
  }
  playerCardHash = {};
  highCard = 0;
  highCardValue = 0;
  hasPair = false;
  hasThree = false;
  hasStraight = false;
}

class Game {
  constructor(playerHands) {
    let self = this;

    for (let hand of playerHands) {
      let player = new Player(hand);
      player.index = self.playerCount + 1;

      if (player.highCardValue > this.players[this.winningIndexes.cardValue]) {
        this.highCard = player;
      }

      this.players.push(player);
      self.playerCount++;
    }
  }

  players = [];
  playerCount = 0;
  winningIndexes = {
    cardValue: 0,
  };

  getPlayers() {
    return this.players;
  }

  getHighestCard() {
    return this.winningIndexes.cardValue;
  }
}

function pokerSolver(playerHands) {
  let game = new Game(playerHands);
  return game.getHighestCard();
}

exports.pokerSolver = pokerSolver;
