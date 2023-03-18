const inputEl = document.querySelector("input");

inputEl.addEventListener("input", onOutFocusInput);

function onOutFocusInput(event) {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  };
};