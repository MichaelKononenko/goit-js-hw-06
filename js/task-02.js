const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

const htmlItems = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.className = "item";
  return newItem;
});

ingredientsList.append(...htmlItems);
