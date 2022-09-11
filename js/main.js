const inputName = document.getElementById("inputName");
const inputSurname = document.getElementById("inputSurname");
const inputAge = document.getElementById("inputAge");
const inputEmail = document.getElementById("inputEmail");
const inputNumber = document.getElementById("inputNumber");

const showButton = document.getElementById("showButton");
const formEl = document.getElementById("form")
const lsOutput = document.getElementById("lsOutput")
const containerEl = document.querySelector(".container")
const removeBtn = document.querySelector(".remove");


let confirmEl = confirm('Are you going to begin?');

if (confirmEl) {
    alert("Do you really want to begin?");
}

showButton.addEventListener("click", function() {
    document.body.style.transition = "2s";
    document.body.style.backgroundColor = "#1d2b3a";
    containerEl.style.transition = "2s"
    containerEl.style.display = "block";
    showButton.style.transition = "2s";
    showButton.style.transform = "translateX(-300px)";
    
})
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameEl = inputName.value;
    const surnameEl = inputSurname.value;
    const ageEl = inputAge.value;
    const emailEl = inputEmail.value;
    const numberEl = inputNumber.value;

    localStorage.setItem("Name", nameEl);
    localStorage.setItem("Surname", surnameEl);
    localStorage.setItem("Age", ageEl);
    localStorage.setItem("Email", emailEl);
    localStorage.setItem("Number", numberEl);
    
    if (ageEl <= 0 || ageEl > 120) {
        alert("Sorry, It's impossible to be at the age of" + " " + ageEl);
    }


    lsOutput.innerHTML += `Your name is ${nameEl} <br /> Your surname is ${surnameEl}  <br /> Your are ${ageEl} old  <br /> Your email is ${emailEl}  <br /> Your number is ${numberEl} <br>`;

    formEl.reset();
})

