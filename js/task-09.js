const refs = {
  body: document.querySelector("body"),
  text: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onCangeColor);

function onCangeColor(event) {
  refs.text.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
