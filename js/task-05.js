const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", isInput);

function isInput(event) {
  refs.output.textContent =
    event.currentTarget.value.length === 0
      ? "Anonymous"
      : event.currentTarget.value;
}
