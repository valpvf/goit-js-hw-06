const buttonMinusEl = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonPlusEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

let counterValue = 0;

buttonMinusEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.innerHTML = counterValue;
});
buttonPlusEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
});
