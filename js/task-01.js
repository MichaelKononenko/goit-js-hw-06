const categoryItems = document.querySelectorAll(".item");
const categoriesQuantity = categoryItems.length;

console.log("Number of categories:", categoriesQuantity);
console.log("");

// categoryItems.forEach((item) => {
//   const titleText = item.querySelector("h2").textContent;
//   const itemsQuantity = item.querySelectorAll("li").length;
//   console.log("Category:", titleText);
//   console.log("Elements:", itemsQuantity);
//   console.log("");
// });

categoryItems.forEach((item) => {
  const titleText = item.firstElementChild.textContent;
  const itemsQuantity = item.lastElementChild.children.length;
  console.log("Category:", titleText);
  console.log("Elements:", itemsQuantity);
  console.log("");
});
