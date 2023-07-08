const emailInput = document.querySelector(".email");
const submitBtn = document.querySelector(".submit");
const validateEmail = document.querySelector(".validation");
const error = document.querySelector('.error-icon');

// console.log(emailInput.value);
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailInput.value != "") {
    validateEmail.classList.add('hidden')
    error.classList.add('hidden')
    console.log(emailInput.value);
    emailInput.style.borderColor = "hsl(0, 88%, 77%)";
  } else {
    validateEmail.innerHTML = "Please provide a valid email";
    validateEmail.classList.remove('hidden')
    error.classList.remove('hidden')
    emailInput.style.borderColor = "red";
  }
});
