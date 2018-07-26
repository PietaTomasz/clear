'use strict';

const floor = '.';
const hero = '@';
let boardWidth = 28;
let boardHeight = 14;
let board = [];
let row = 0;
let col = 0;

function setHeroPosition (x, y) {
  row = y;
  col = x;
}

function getHeroPosition () {
  return [col, row];
}

function init(boardWidth = 28, boardHeight = 14) {
  for (let i = 0; i < boardHeight; i++) {
    board[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      board[i][j] = floor;
    }
  }
  board[row][col] = hero;
}

function heroMove(dir) {
  let newRow = row;
  let newCol = col;
  if (dir==='right') {
    newCol++;
  } else if (dir==='left') {
    newCol--;
  } else if (dir==='up') {
    newRow--;
  } else if (dir==='down') {
    newRow++;
  }

  let newCor = validatePosition(newRow, newCol);
  newCol = newCor[1];
  newRow = newCor[0];

  board[newRow][newCol] = hero;
  board[row][col] = floor;
  row = newCol;
  col = newRow;
 
}

function validatePosition(newRow, newCol) {
  if (newCol == -1){
    return [newRow, boardWidth-1];
    // setHeroPosition(boardWidth-1,row);
  } else if (col == boardWidth) {
    return [newRow, 0];
  } else {
    return [newCol, newRow];
  }
}

function write() {
  for (let i = 0; i < boardHeight; i++) {
    console.log(board[i].join(''));
  }
}

module.exports = {
  board: board,
  init: init,
  write: write,
  heroMove: heroMove,
  getHeroPosition: getHeroPosition,
  setHeroPosition: setHeroPosition,
};