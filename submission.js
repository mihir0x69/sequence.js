/* *********** DO NOT WRITE CODE HERE, OUTSIDE (IIFE) ************************** */
const bot = (function() {
  const MoveType = Object.freeze({
    PLACE_CHIP: 1,
    REPLACE_DEAD_CARD: 2,
    REMOVE_CHIP: 3
  });

  const Suit = Object.freeze({
    SPADE: 1,
    CLUB: 2,
    DIAMOND: 3,
    HEART: 4
  });

  const Rank = Object.freeze({
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13
  });

  /*
  Arguments:
  1. boardSlots: 2 dimensional array where each element represents slot on the board
    The object structure is:
      {
        // It is true for the four corner slots
        isCorner: true;
        // It represents card at the slot.
        // It is undefined for four corners.
        // It has following structure:
        card: {
          suit: 1, // number between 1 - 4
          rank: 1, // number between 1 - 13
          twoEyedJack: false, // boolean represent if its a two eyed jack
          oneEyedJack: false // boolean represent if its a one eyed jack
        },
        // It represents a chip at the slot.
        // It is undefined for four corners or if chip is not placed at this slot.
        // It has following structure.
        chip: {
          // string representing color of the chip
          color: "blue",
          // boolean, always true
          isChip: true,
          // boolean representing if this chip is part of a completed sequence
          inSequence: false
        }
      }

  2. playerCards: Array of 7 elements.
      Each element represents a card with following structure is:
      {
        // number between 1 - 4
        suit: 1,
        // number between 1 - 13
        rank: 1,
        // boolean represent if its a two eyed jack
        twoEyedJack: false,
        // boolean represent if its a one eyed jack
        oneEyedJack: false
       }

   3. yourChipColor: string representing color of your chip

  Returns:
    Move object representing your next move. It has following structure:
        {
          // number between 1- 3. 1 = Place chip, 2 = Replace dead card, 3 = Remove chip
          type: 1,
          // Card that you want to place in dead pile
          card: {suit: 1, rank: 1},
          // Position where you want to place or remove chip from.
          // It can be null if move 'type' is 2 i.e. replace dead card
          position: {row: 1, col: 1}
        }
*/
  function nextMove(boardSlots, playerCards, yourChipColor) {
    for (let i = 0; i < playerCards.length; i++) {
      const card = playerCards[i];
      const position = findCardPosition(boardSlots, card, yourChipColor);
      // This card is either dead or Jack, try another card
      if (position == null) {
        // handle dead card or jack
        continue;
      }
      
      return {
        type: MoveType.PLACE_CHIP,
        card: card,
        position: position
      };
    }
  }

  const positionsAdjacentToCorner = {
    positions: [
      [0, 1], [0, 8],
      [1, 0], [1, 1], [1, 8], [1, 9],
      [8, 0], [8, 1], [8, 8], [8, 9],
      [9, 1], [9 ,8]
    ],
    has: function (position) {
      return this.positions.reduce(function(acc, curr) {
        if (acc || (curr[0] === position[0] && curr[1] === position[1])) {
          return true
        }
        return acc
      }, false)
    }
  }

  function findCardPosition(boardSlots, card, yourChipColor) {

    function getPosition(row, col) {
      return { row: row, col: col }
    }

    for (let row = 0; row < boardSlots.length; row++) {
      const slotsRow = boardSlots[row];
      for (let col = 0; col < slotsRow.length; col++) {
        const slot = slotsRow[col];
        // This slot is one of four corners, ignore
        if (slot.isCorner) {
          continue;
        }

        if (slot.chip !== null && positionsAdjacentToCorner.has([row, col])) {
          return getPosition(row, col)
        }

        // This slot is a chip and this chip is part of a sequence
        if (slot.chip != null && slot.chip.inSequence) {
          // do something
        }

        // This is opponent's chip
        if (slot.chip != null && slot.chip.color !== yourChipColor) {
          // do something          
        }

        // match card suit and rank
        if (
          slot.chip == null &&  // There is not chip in this slot
          slot.card != null &&
          slot.card.suit === card.suit &&
          slot.card.rank === card.rank
        ) {
          return getPosition(row, col)
        }
      }
    }

    return null;
  }

  return nextMove;
})();
/* *********** DO NOT WRITE CODE HERE, OUTSIDE (IIFE) ************************** */
// Computer ManualUser
new Game("Team X", bot, "computer", Computer, true).start();
