const form = document.getElementById("ping__form");
const emailInput = form.querySelector("input[id='email']");
const button = form.querySelector("button[id='ping__submit']");
const emailFeedback = form.querySelector(".ping__emailFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = emailValidation(emailInput);
  feedbackValidation(message);
});

function emailValidation(email) {
  const emailValue = email.value;
  const validationResult = validator.isEmail(emailValue);
  if (!emailValue) {
    // Checks if the email is empty
    return "Whoops! It looks like you forgot to add your email";
  }
  if (!validationResult) {
    // Checks if the email is in a valid format
    return "Please provide a valid email address";
  }
}

function feedbackValidation(message) {
  if (message) {
    emailFeedback.textContent = message;
    if (emailFeedback.classList.contains("hidden")) {
      emailFeedback.classList.remove("hidden");
    }
  }
}
