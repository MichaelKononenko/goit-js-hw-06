const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("change", () => (text.style.fontSize = `${input.value}px`));
