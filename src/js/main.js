// import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

// animatedScrollTo(500);


//Variablen zum Testen
let firstBtnNumber = 0;
let secondBtnNumber = 1;
let thirdBtnNumber = 2;


//Funktion mit der das Tooltip erscheint für die mauelle Variante
function openTextbox(x) {
  let box = document.getElementsByClassName("tooltip")[x];
  box.style.display = "block";
  return true;
}

//Allen Buttons soll das Event Click zugewiesen werden
let btnList = document.querySelectorAll(".main-conversion__content-text-wrapper-button"); //<-- Warum muss hier der Punkt vor die Klasse?
console.log(btnList);
// ...

//Zuweisung des Events manuell 
let firstButton = document.getElementsByClassName(
  "main-conversion__content-text-wrapper-button" //<-- Warum muss man hier den Punkt nicht vor der Klasse setzten?
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



// Test Area -- Der Versuch ein Array zu erzeugen welches die Werte von 0 bis n enthält.
  let arr = [];

  function divCounter(){
    let div = document.getElementsByClassName("tooltip");
    let erg = div.length;

    arr.length = erg;

    if(arr.length > erg){
      return arr
    } else {
      arr.fill("Div found", 0, erg);
    }
    
    console.log(erg);
    console.log(arr);
  }

  divCounter();
