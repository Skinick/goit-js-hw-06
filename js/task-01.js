const categoriesElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach(categorie => {
  console.log(`Category: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.lastElementChild.children.length}`);
});
