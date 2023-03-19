const refs = {
  boxes: document.querySelector("#boxes"),
  controls: document.querySelector("#controls"),
  input: controls.querySelector("input"),
  createBtn: controls.querySelector("button[data-create]"),
  destroyBtn: controls.querySelector("button[data-destroy]"),  
};

let size = 30;

refs.createBtn.addEventListener("click", onAddElements);
refs.destroyBtn.addEventListener("click", onDeleteElements);

function onAddElements(event) {
  const number = refs.input.value;
  size = createElements(number, size);

}

function createElements(number, size) {
  const elementsArr = [];  
  for (let i = 0; i < number; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    elementsArr.push(element);
    size += 10;
  }
  refs.boxes.append(...elementsArr);
  return size;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onDeleteElements(event) {
  refs.boxes.innerHTML = '';
  size = 30;
}
