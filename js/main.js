const formEl = document.getElementById("form");

const info = [];

let listEl = document.querySelector(".list");

formEl.addEventListener("submit", evt => {
  evt.preventDefault();

  const elements = evt.target.elements;
  const nameInputVal = elements.name.value;
  const lastnameInputVal = elements.lastname.value;
  const emailInputVal = elements.email.value;
  const passwordInputVal = elements.password.value;

    if (nameInputVal && lastnameInputVal && emailInputVal && passwordInputVal) {
      const newObj = {
        name: nameInputVal,
        lastName: lastnameInputVal,
        email: emailInputVal,
        password: passwordInputVal
      }
      info.push(newObj);
    }

    let displayUI = ``;
  info.map(value => {
    
      displayUI += `
      <li class="list__item bg-primary text-white">
      <b>${value.name}</b>
      <span>${value.lastName}</span>
      <p>${value.email}</p>
      <em>${value.password}</em>
      </li>
      `
  });

  listEl.innerHTML = displayUI;

  formEl.reset();
})

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", evt => {
  evt.preventDefault();

  const searchInputVal = evt.target.elements.search.value;

  let displayUI = ``;

  info.map(value => {
      if (searchInputVal == value.name) {
        displayUI += `
        <li class="list__item bg-primary text-white">
        <b>${value.name}</b>
        <span>${value.lastName}</span>
        <p>${value.email}</p>
        <em>${value.password}</em>
        </li>
        `
      }
  })
  listEl.innerHTML = displayUI;

  searchForm.reset();
})