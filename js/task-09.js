const refs = {
  body: document.querySelector("body"),
  widget: document.querySelector(".widget"),
  text: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onCangeColor);

function onCangeColor(event) {
  refs.text.textContent = getRandomHexColor();
  // у разі необхідності виведення кольору тільки на div class="widget"
  // у наступному рядку треба змінити body на widget
  refs.body.style.backgroundColor = refs.text.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
