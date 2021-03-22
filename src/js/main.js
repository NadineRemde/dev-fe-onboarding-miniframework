// import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

// animatedScrollTo(500);

//Alle Buttons soll das Event Click zugewiesen werden
let btnList = document.querySelectorAll(
  ".main-conversion__content-text-wrapper-button"
);
btnList.forEach((button) => {
  button.addEventListener("click", function (){
    moveTooltip(event);                                           //Alternative zu Event?
  });
});

//Funktion mit der das Tooltip geöffnet oder geschlossen wird
function moveTooltip(evt) {
  let divBoxesOpen = document.querySelectorAll(".main-conversion__tooltip--opening");
  let targetElem = evt.target.closest(".main-conversion").querySelector(".main-conversion__tooltip");
 
    divBoxesOpen.forEach((divBox) => {
    divBox.classList.remove("main-conversion__tooltip--opening");  
    divBox.classList.add("main-conversion__tooltip--closing");
  });

  targetElem.classList.add("main-conversion__tooltip--opening");
  targetElem.classList.remove("main-conversion__tooltip--closing");
}

//Zuweisung des Events manuell
//Variablen zum Testen
// let firstBtnNumber = 0;
// let secondBtnNumber = 1;
// let thirdBtnNumber = 2;

//Funktion mit der das Tooltip erscheint für die mauelle Variante
// function openTextbox(x) {
//   let box = document.getElementsByClassName("tooltip")[x];
//   box.style.display = "block";
//   return true;
// }

// let firstButton = document.getElementsByClassName(
//   "main-conversion__content-text-wrapper-button"
// )[0];
// firstButton.addEventListener("click", function (){
//   openTextbox(firstBtnNumber);
// });

// let secondButton = document.getElementsByClassName(
//     "main-conversion__content-text-wrapper-button"
// )[1];
// secondButton.addEventListener("click", function () {
//     openTextbox(secondBtnNumber);
// });

// let thirdButton = document.getElementsByClassName(
//     "main-conversion__content-text-wrapper-button"
//   )[2];
//   thirdButton.addEventListener("click", function () {
//     openTextbox(thirdBtnNumber);
//   });
