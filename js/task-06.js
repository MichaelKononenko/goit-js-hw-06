const input = document.getElementById("validation-input");

const symbolsLength = input.dataset.length;

input.addEventListener("blur", changeBorder);

function changeBorder() {
  if (input.value.length == symbolsLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
