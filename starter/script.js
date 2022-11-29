'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/*Creamos una función para cerrar si el usuario da click dentro del pop up*/

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
/* Es lo mismo que: 
  modal.style.display = 'block';
  */

btnCloseModal.addEventListener('click', closeModal);

/*Al dar click en el overlay afuera del modal se cierra el pop up */
overlay.addEventListener('click', closeModal);

/* Usando  spread operator y map*/
// [...btnsOpenModal].map((button, i) =>
//   button.addEventListener('click', function () {
//     console.log(`button clicked, ${i}`);
//   })
// );

/* usando map y object values para convetir un array */
// Object.values(btnsOpenModal).map((button, i) =>
//   button.addEventListener('click', function () {
//     console.log(`button clicked, ${i}`);
//   })
// );

// const user = {
//   name: 'isela',
//   age: 23,
//   size: 47,
// };

// console.log(user);
// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.entries(user));

// ////////////// key events

/* HAY 3 TIPOS DE KEY EVENTS, KEY DOWN , KEY PRESS, KEY UP*/
/*KEY UP, CUANDO LEVANTAMOS EL DEDO DE LA TECLA*/
/*KEY PRESS , CUANDO MIENTRAS MANTENERMOS EL DEDO EN CIERTA TECLA*/
/*KEY DOWN SE ACTIVA EN CUANTO PRESIONAMOS LA TECLA*/

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    /*if (!modal.classList.contains('hidden')) {*/

    closeModal();
  }
});
