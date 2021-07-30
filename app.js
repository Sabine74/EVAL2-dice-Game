/*//variables//
const faces = ["images/face1.svg", "images/face2.svg", "images/face3.svg", "images/face4.svg", "images/face5.svg", "images/face6.svg"];
let faceValue = 0;


//players//
const player1 = document.getElementById('playerOne');
const player2 = document.getElementById('playerTwo');
let activePlayer = player1;

//selecors//
let globalPlay2 = document.getElementById('playerTwoGlobalScore');
let globalPlay1 = document.getElementById('playerOneGlobalScore');
let currentPlay1 = document.getElementById('playerOneCurrentScore');
let currentPlay2 = document.getElementById('playerTwoGlobalScore');

const btnNewGame = document.getElementById('newGame');
const btnRoll = document.getElementById('rDice');
const btnHold = document.getElementById('hDice');
const winModal = document.getElementById('win');

//eventlistener//

btnNewGame.addEventListener('click', () => newGame());
btnRoll.addEventListener('click', () => Roll());
btnHold.addEventListener('click', () => Hold());

//close modal//


//functions//
//change dice//
const rollDice = () => {
  diceValue = Math.floor(Math.random() * (6)) + 1;
  diceFace.src = './public/images/faces/'+ face[diceValue-1];
  if (diceValue == 1){
      currentScore.innerHTML = 0;
      current = 0;
      nextPlayer();
  } else {
      current += diceValue;
      currentScore.innerHTML = current;
  }
}


//restart Game//
const newGame = () => {
  element('playerOneGlobalScore').innerHTML = 0;
  element('playerOneCurrentScore').innerHTML = 0;
  element('playerTwoGlobalScore').innerHTML = 0;
  element('playerTwoCurrentScore').innerHTML = 0;
  global = 0;
  current = 0;
}*/