const elCategories = document.querySelector("#categories");
console.log(
  `Number of categories: ${elCategories.childElementCount}`
);

for (const el of elCategories.children) {
  console.log(`\nCategory: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
}
