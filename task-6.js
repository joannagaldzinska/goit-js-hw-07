// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length

// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.


/* 
<input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов"></input>
*/ 

const inputRef = document.querySelector('#validation-input');

const dataLength = Number(inputRef.dataset.length);
console.log(dataLength);


inputRef.addEventListener('change', e => {
    if (e.target.value.length === dataLength) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
      } 
      else if (e.target.value.length === 0) {
            inputRef.classList.remove("invalid");
            inputRef.classList.remove("valid");
          }
      else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
      }
    })

    // e.target.value.length === dataLength ? 
    //     inputRef.classList.add('valid') && inputRef.classList.remove("invalid") 
    // : inputRef.classList.add('invalid') && inputRef.classList.remove("valid");


// e.target.value.length = inputRef.selectionEnd -----> it's the same



  