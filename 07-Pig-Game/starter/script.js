'use strict';

//selecting elements
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

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.- generate random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2.- display dice roll

  diceEl.classList.remove('hidden');

  // * para cargar dinámicamente cada una de las imagenes de los dados :
  diceEl.src = `dice-${dice}.png`;

  //3.- checked for rolled 1,
  if (dice !== '1') {
    //add to the currentScore
    currentScore += dice;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    //if true switch to the next player
  }
});
