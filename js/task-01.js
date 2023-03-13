const elCategories = document.querySelector("#categories");
console.log(
  `Number of categories: ${elCategories.childElementCount}`
);

elCategories.childNodes.forEach((el, idx) => {
  if (idx % 2 === 1) {
    console.log(`\nCategory: ${el.childNodes[1].textContent}`);
    console.log(`Elements: ${el.childNodes[3].childElementCount}`);
  }
});
