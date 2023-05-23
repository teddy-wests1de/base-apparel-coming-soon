const emailInput = document.querySelector(".email");
const submitBtn = document.querySelector(".submit");
const validateEmail = document.querySelector(".validation");

// console.log(emailInput.value);
submitBtn.addEventListener("click", function () {
  if (emailInput.value != "") {
    console.log(emailInput.value);
  } else {
    validateEmail.innerHTML = "Please provide a valid email";
  }
});
