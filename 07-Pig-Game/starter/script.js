'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//stablish the starting score

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.- generate random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.- display dice roll

  diceEl.classList.remove('hidden');

  // * para cargar dinámicamente cada una de las imagenes de los dados :
  diceEl.src = `dice-${dice}.png`;

  //3.- checked for rolled 1,
  if (dice !== 1) {
    //add to the currentScore
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // if active player is equal to 0(score) then switch to 1 if not just still as 0
    //if true switch to the next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1 add current score to active's player score
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //2 check if players score is >= 100
  //finish the game
  //switch next player
  switchPlayer();
});
