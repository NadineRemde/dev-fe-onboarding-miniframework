//All buttons get the event "onclick"
const btnList = document.querySelectorAll(".main-conversion__content-button");
btnList.forEach((button) => {
  button.onclick = (e) => {
    toggleTooltip(e);
  };
});

//Function that is opening and closing the tooltip
const toggleTooltip = (evt) => {
  let tooltipsOpen = document.querySelectorAll(
    ".main-conversion__tooltip--open"
  );
  let targetTooltip = evt.target
    .closest(".main-conversion")
    .querySelector(".main-conversion__tooltip");

  if (!targetTooltip.classList.contains("main-conversion__tooltip--open")) {
    targetTooltip.classList.add("main-conversion__tooltip--open");
  } else {
    targetTooltip.classList.remove("main-conversion__tooltip--open");
  }

  tooltipsOpen.forEach((tooltip) => {
    if (tooltip !== targetTooltip) {
      tooltip.classList.remove("main-conversion__tooltip--open");
    }
  });
};

