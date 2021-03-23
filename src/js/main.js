//All buttons get the EventListener "click"
const btnList = document.querySelectorAll(
  ".main-conversion__content-text-wrapper-button"
);
btnList.forEach((button) => {
  button.addEventListener("click", function (e) {
    toggleTooltip(e);
  });
});

//Variable to open and close the tooltip
// let check = false;

//Function that is opening and closing the tooltip
const toggleTooltip = (evt) => {
  let divBoxesOpen = document.querySelectorAll(
    ".main-conversion__tooltip--open"
  );
  let targetElem = evt.target
    .closest(".main-conversion")
    .querySelector(".main-conversion__tooltip");

  divBoxesOpen.forEach((divBox) => {
    divBox.classList.remove("main-conversion__tooltip--open");
    divBox.classList.add("main-conversion__tooltip--close");
  });

  if (!targetElem.classList.contains("main-conversion__tooltip--open")) {
    targetElem.classList.add("main-conversion__tooltip--open");
    targetElem.classList.remove("main-conversion__tooltip--close");
  }
  
};

// --Open and close with a variable (same button)--
// divBoxesOpen.forEach((divBox) => {
//   divBox.classList.remove("main-conversion__tooltip--open");
//   divBox.classList.remove("main-conversion__tooltip--close");
// });

//   if (check == false) {
//     targetElem.classList.add("main-conversion__tooltip--open");
//     check = true;
//   } else {
//     targetElem.classList.add("main-conversion__tooltip--close");
//     check = false;
//   }

//--Zuweisung des Events manuell--
//--Variablen zum Testen--
// let firstBtnNumber = 0;
// let secondBtnNumber = 1;
// let thirdBtnNumber = 2;

//--Funktion mit der das Tooltip erscheint für die mauelle Variante--
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
