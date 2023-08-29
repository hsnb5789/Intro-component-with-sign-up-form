const inputD = document.querySelectorAll(".input-div");
const submitButton = document.querySelector("#form #submit-btn");
const form = document.getElementById("form");

const checkValidity = () => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\.\w{2,3})+$/;

  const inDiv = document.querySelectorAll(".input-div");
  inDiv.forEach((n) => {
    if (n.children[0].value === "") {
      n.children[0].placeholder = "";
      n.classList.add("error");
    } else {
      n.classList.remove("error");
    }
  });
  if (inDiv[2].children[0].value.match(regEx)) {
    inDiv[2].classList.remove("error");
  } else {
    inDiv[2].classList.add("error");
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();
});

/* const checkValidity = () => {
  const inputFirstName = document.getElementById("firstname");
  const inputLastName = document.getElementById("lastname");
  const inputEmail = document.getElementById("email");
  const inputPW = document.getElementById("password");

  const firstNameValue = inputFirstName.value.trim();
  const LastNameValue = inputLastName.value.trim();
  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPW.value.trim();

  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstNameValue === "") {
    inputD[0].classList.add("error");
  } else {
    inputD[0].classList.remove("error");
  }
  if (LastNameValue === "") {
    inputD[1].classList.add("error");
  } else {
    inputD[1].classList.remove("error");
  }
  if (emailValue.match(regEx)) {
    inputD[2].classList.remove("error");
  } else {
    inputD[2].classList.add("error");
  }
  if (passwordValue === "") {
    inputD[3].classList.add("error");
  } else {
    inputD[3].classList.remove("error");
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();
}); */
