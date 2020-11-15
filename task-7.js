// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
//  (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// Write a script that reacts when the value of input #font-size-control 
// changes (input event) and changes the inline style of span #text 
// by updating the font-size property. 
// As a result, when you drag the slider, the text size will change.

{/*     <input id="font-size-control" type="range" />

        <span id="text">Абракадабра!</span> */}

        const inputRef = document.querySelector('#font-size-control');

        const spanRef = document.querySelector('#text');
   
        inputRef.addEventListener('input', e => {
            spanRef.style.fontSize = `${inputRef.value}px`;
        })


         