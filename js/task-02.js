const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

// const htmlItems = ingredients.map((ingredient) => {
//   const newItem = document.createElement("li");
//   newItem.textContent = ingredient;
//   newItem.classList.add("item");
//   return newItem;
// });
// ingredientsList.append(...htmlItems);

ingredientsList.innerHTML = ingredients.reduce(
  (acc, ingredient) => (acc += `<li class="item">${ingredient}</li>`),
  ""
);
