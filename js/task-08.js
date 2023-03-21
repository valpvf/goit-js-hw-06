const refs = {
  form: document.querySelector(".login-form"),
  input: document.querySelectorAll("input"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email: login, password },
  } = event.currentTarget;

  if (!login.value || !password.value) {
    return alert("Please fill in all the fields!");
  }

  const submitData = {
    login: login.value,
    password: password.value,
  };
  console.log(submitData);

  event.currentTarget.reset();
}
