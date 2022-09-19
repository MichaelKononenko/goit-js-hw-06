const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesArea = document.getElementById("boxes");
const input = document.querySelector("input");

createButton.addEventListener("click", () => {
  const inputValue = input.value;
  createBoxes(inputValue);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let dimention = 30;
  const output = [];

  for (let i = 0; i < amount; i++) {
    dimention += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = `${dimention}px`;
    newDiv.style.height = `${dimention}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    output.push(newDiv);
  }

  boxesArea.append(...output);
  input.value = "";
}

function destroyBoxes() {
  boxesArea.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
