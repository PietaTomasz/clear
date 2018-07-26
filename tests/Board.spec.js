'use strict';

const assert = require('chai').assert;

const Board = require('./../src/Board');

describe('Board', function() {
  describe('#init()', function() {
    it('should fill the whole board with floor tiles and hero on the 0,0 position', function() {
      Board.init();
      const initialisedBoard = Board.board;
      for (let i = 0; i < initialisedBoard.length; i++) {
        for (let j = 0; j < initialisedBoard[i].length; j++) {
          if (i == 0 && j == 0) {
            assert.equal(initialisedBoard[i][j], '@');
          } else {
            assert.equal(initialisedBoard[i][j], '.');
          }
        }
      }
    });
  });
  describe('move', function() {
    Board.init();

    it('when I set position then I get position', function () {
      Board.setHeroPosition(2, 2);
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [2, 2]);
    })

    it('should move left', function() {
      Board.setHeroPosition(3, 3);
      Board.heroMove('left');
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [2, 3]);
    })

    it('should move right', function() {
      Board.setHeroPosition(3, 3);
      Board.heroMove('right');
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [4, 3]);
    })

    it('should move up', function() {
      Board.setHeroPosition(3, 3);
      Board.heroMove('up');
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [3, 2]);
    })

    it('should move down', function() {
      Board.setHeroPosition(3, 3);
      Board.heroMove('down');
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [3, 4]);
    })

    it('when we are on left edge and we want move to the left then we should go to right edge', function() {
      Board.setHeroPosition(0, 0);
      Board.heroMove('left');
      let cord = Board.getHeroPosition();
      assert.deepEqual(cord, [0,27]);
    })

    // it('when we are on right edge and we want move to the right then we should go to left edge', function() {
      
    //   Board.init(28, 14);
    //   Board.setHeroPosition(27, 0);
    //   Board.heroMove('right');
    //   let cord = Board.getHeroPosition();
    //   assert.deepEqual(cord, [0, 0]);
    // })

    // it('when we are on top edge and we want move up then we should go to bottom edge', function() {
      
    //   Board.init(28, 14);
    //   Board.setHeroPosition(0, 0);
    //   Board.heroMove('up');
    //   let cord = Board.getHeroPosition();
    //   assert.deepEqual(cord, [0, 13]);
    // })
  })
});