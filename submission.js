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

  const Sequence = Object.freeze({
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4
  })

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
        // TODO: Draw one more card from deck
        continue;
      }

      return {
        type: MoveType.PLACE_CHIP,
        card: card,
        position: position
      };
    }
  }

  function buildPotentialSequences(boardSlots) {
    const SEQUENCE_LENGTH = 5
    let SEQUENCES = {}

    function addToSequence(sequenceId, position, slot) {
      const key = position.join('_')
      SEQUENCES = {
        ...SEQUENCES,
        [key]: {
          ...SEQUENCES[key],
          [sequenceId]: (SEQUENCES[key] && SEQUENCES[key][sequenceId] || []).concat([{
            position: position,
            slot: slot
          }])
        }
      }
      // const sourceObj = SEQUENCES[key] || {}
      // SEQUENCES[key] = Object.assign(sourceObj, {
      //   [sequenceId]: (sourceObj[sequenceId] || []).concat([{
      //     position: position,
      //     slot: slot
      //   }])
      // })
    }

    for (let i = 0; i < boardSlots.length; i++) {
      const row = boardSlots[i]
      for (let j = 0; j < row.length; j++) {
        const column = row[j]
        if (!column.chip) {
          continue;
        }
        for (let k = 1; k <= SEQUENCE_LENGTH; k++) {
          const previousRow = i - k;
          const nextRow = i + k;
          const previousColumn = j - k;
          const nextColumn = j + k;

          if (boardSlots[previousRow]) {
            // console.log(Sequence.ONE)
            addToSequence(Sequence.ONE, [previousRow, j], boardSlots[previousRow][j])
          }

          if (boardSlots[previousRow] && boardSlots[previousRow][nextColumn]) {
            // console.log(Sequence.TWO)
            addToSequence(Sequence.TWO, [previousRow, nextColumn], boardSlots[previousRow][nextColumn])
          }

          if (boardSlots[i] && boardSlots[i][nextColumn]) {
            // console.log(Sequence.THREE)
            addToSequence(Sequence.THREE, [i, nextColumn], boardSlots[i][nextColumn])
          }

          if (boardSlots[nextRow] && boardSlots[nextRow][nextColumn]) {
            // console.log(Sequence.FOUR)
            addToSequence(Sequence.FOUR, [nextRow, nextColumn], boardSlots[nextRow][nextColumn])
          }

          if (boardSlots[nextRow]) {
            // console.log(Sequence.ONE)
            // console.log([nextRow, j])
            addToSequence(Sequence.ONE, [nextRow, j], boardSlots[nextRow][j])
          }

          if (boardSlots[nextRow] && boardSlots[nextRow][previousColumn]) {
            // console.log(Sequence.TWO)
            addToSequence(Sequence.TWO, [nextRow, previousColumn], boardSlots[nextRow][previousColumn])
          }

          if (boardSlots[i] && boardSlots[i][previousColumn]) {
            // console.log(Sequence.THREE)
            addToSequence(Sequence.THREE, [i, previousColumn], boardSlots[i][previousColumn])
          }

          if (boardSlots[previousRow] && boardSlots[previousRow][previousColumn]) {
            // console.log(Sequence.FOUR)
            addToSequence(Sequence.FOUR, [previousRow, previousColumn], boardSlots[previousRow][previousColumn])
          }
        }
      }
    }
    console.log(SEQUENCES)
    return SEQUENCES
  }

  // position shape - { row: number, col: number }
  // sPosition - position of card in hand
  // tPosition - position on the board where we want to place the chip
  function canPlaceChip(sPosition, tPosition, slot, card) {
    const isMatchingPosition = sPosition.row === tPosition.row && sPosition.col === tPosition.col
    const isMatchingCard = slot.card.suit === card.suit && slot.card.rank === card.rank
    const hasChip = !!slot.chip
    return isMatchingCard && isMatchingPosition && !hasChip
  }

  const positionsAdjacentToCorner = {
    positions: [
      [0, 1], [0, 8],
      [1, 0], [1, 1], [1, 8], [1, 9],
      [8, 0], [8, 1], [8, 8], [8, 9],
      [9, 1], [9 ,8]
    ],
    has: function (sPosition, slot, card) {
      return this.positions.reduce(function(acc, curr) {
        const tPosition = { row: curr[0], col: curr[1] }
        return acc || canPlaceChip(sPosition, tPosition, slot, card)
      }, false)
    }
  }

  let count = 0

  function findCardPosition(boardSlots, card, yourChipColor) {
    buildPotentialSequences(boardSlots)
    for (let row = 0; row < boardSlots.length; row++) {
      const slotsRow = boardSlots[row];
      for (let col = 0; col < slotsRow.length; col++) {
        const slot = slotsRow[col];
        const position = { row: row, col: col }
        // This slot is one of four corners, ignore
        if (slot.isCorner) {
          continue;
        }

        // This slot is a chip and this chip is part of a sequence
        if (slot.chip != null && slot.chip.inSequence) {
          // do something
        }

        if (slot.chip !== null && positionsAdjacentToCorner.has(position, slot, card)) {
          console.log('Corner position hogged!', position)
          return position
        }

        // This is opponent's chip
        if (slot.chip != null && slot.chip.color !== yourChipColor) {
          // do something
        }

        // match card suit and rank
        if (
          slot.chip == null && // There is not chip in this slot
          slot.card != null &&
          slot.card.suit === card.suit &&
          slot.card.rank === card.rank
        ) {
          return position
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
