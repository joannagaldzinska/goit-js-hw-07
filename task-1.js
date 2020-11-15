
const titleRef = document.querySelectorAll('h2');

const listItem = document.querySelectorAll('.item ul');
 
console.log(`Категория: ${titleRef[0].textContent}`)
console.log(listItem[0].children.length);

console.log(`Категория: ${titleRef[1].textContent}`)
console.log(listItem[1].children.length);

console.log(`Категория: ${titleRef[2].textContent}`)
console.log(listItem[2].children.length);

// listItem.forEach(element => {
//     return console.log(`Количество элементов: ${element.children.length}`)
// });


