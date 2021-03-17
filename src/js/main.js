// import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

// animatedScrollTo(500);

let firstBtnNumber = 0;
let secondBtnNumber = 1;
let thirdBtnNumber = 2;

function openTextbox(x) {
  let box = document.getElementsByClassName("text-box")[x];
  box.style.display = "block";
}

let firstButton = document.getElementsByClassName(
  "main-conversion__content-text-wrapper-button"
)[0];
firstButton.addEventListener("click", function (){
  openTextbox(firstBtnNumber);
});

let secondButton = document.getElementsByClassName(
    "main-conversion__content-text-wrapper-button"
)[1];
secondButton.addEventListener("click", function () {
    openTextbox(secondBtnNumber);
});

let thirdButton = document.getElementsByClassName(
    "main-conversion__content-text-wrapper-button"
  )[2];
  thirdButton.addEventListener("click", function () {
    openTextbox(thirdBtnNumber);
  });




