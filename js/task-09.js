const refs = {
  body: document.querySelector("body"),
  text: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onCangeColor);

function onCangeColor(event) {
  const color = getRandomHexColor();
  refs.text.textContent = color;
  refs.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
