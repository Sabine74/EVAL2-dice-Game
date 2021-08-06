//VARIABLES//
let diceValue;
const faces = ['1.svg','2.svg','3.svg','4.svg','5.svg','6.svg'];

//DOM//
const face = document.getElementById('face');
const roll = document.getElementById('btnRoll');
const hold = document.getElementById('btnHold');
const newGame = document.getElementById('btnNewGame');

let global1 = document.getElementById('score-1');
let global2 = document.getElementById('score-2');
let result = document.getElementById('result');
let current1 = document.getElementById('current-1');
let current2 = document.getElementById('current-2');

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let activePlayer = player1;

//FUNCTIONS//
//btn ROLL//
const rollDice = () => {
  diceValue = Math.floor(Math.random() * 6) +1;
  face.src ='images/faces/' + faces[diceValue -1];
    if (diceValue == 1) {
      if (activePlayer == player1) {
        current1.textContent = 0;
      } else {
        current2.textContent = 0;
      }
      otherPlayer();
    } else {
      if (activePlayer == player1) {
        current1.textContent = parseInt(current1.textContent) + diceValue;
      } else {
        current2.textContent = parseInt(current2.textContent) + diceValue;
      }
    }
}

//change player//
const otherPlayer = () => {
  activePlayer.classList.remove("player-active");
  activePlayer.classList.add("non-active");
  activePlayer = (activePlayer == player1) ? player2 : player1;
  activePlayer.classList.remove("non-active");
  activePlayer.classList.add("player-active");
}

//btn HOLD//
const holdDice = () => {
  if (activePlayer == player1) {
    global1.textContent = parseInt(global1.textContent) + parseInt(current1.textContent);
    current1.textContent = 0;
    global1.textContent >= 100 ? endGame() : otherPlayer();
  } else {
    global2.textContent = parseInt(global2.textContent) + parseInt(current2.textContent);
    current2.textContent = 0;
    global2.textContent >= 100 ? endGame() : otherPlayer();
  }
}


//end Game//
const endGame = () => {
  activePlayer = (activePlayer == player1) ? player1 : player2;
  result.innerHTML = "<h1>"+ (activePlayer == player1 ? player1.id : player2.id) +" WIN !!! </h1>";
}


//new game//
const startGame = () => {
  if (confirm("are you sur to begin a new game ?") == true) {
    global1.textContent = "0";
    global2.textContent = "0";
    current1.textContent = "0";
    current2.textContent = "0";
    result.textContent = "";
      if (activePlayer = player1) {
        otherPlayer();
      }
  }
}

//EVENTS//
newGame.addEventListener('click', () => startGame());
roll.addEventListener('click', () => rollDice());
hold.addEventListener('click', () => holdDice());