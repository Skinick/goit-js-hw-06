const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListElem = document.querySelector('#ingredients');

const makeIngredientsItem = ingredient => {
  const itemElem = document.createElement('li');
  itemElem.textContent = ingredient;
  itemElem.classList.add('item');
  return itemElem;
};

const ingredientsItem = ingredients.map(makeIngredientsItem);
console.log(ingredientsItem);

ingredientsListElem.append(...ingredientsItem);