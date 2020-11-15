const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  /* Напиши скрипт, который для каждого элемента массива ingredients 
  создаст отдельный li, 
  после чего вставит все li за одну операцию в список ul.ingredients. 
  Для создания DOM-узлов используй document.createElement(). */

  const ingredientsList = ingredient => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('list-item');
    itemRef.textContent = ingredient;

    return itemRef;
};

ingredients.forEach(ingredient => {console.log(ingredientsList(ingredient));})

const productCards = ingredients.map(ingredient => ingredientsList(ingredient))
// console.log(productCards)

const createIngredienceCard = document.querySelector('#ingredients')

createIngredienceCard.append(...productCards);

