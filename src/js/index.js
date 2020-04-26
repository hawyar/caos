const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Handle input error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
};

// Handle input error
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check valid emial (regex from stackoverflow)
function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArray) {
  inputArray.map((el) => {
    if (el.value.trim() === "") {
      showError(el, `${getFieldName(el)} is required`);
    } else {
      showSuccess(el);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get field name for proper display
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if input is required
  checkRequired([username, email, password, password2]);

  // Check input length
  checkLength(username, 3, 10);
  checkLength(password, 8, 16);
  checkLength(password2, 8, 16);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
