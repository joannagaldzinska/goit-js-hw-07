const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  // Используй массив объектов images для создания тегов img вложенных в li. 
  // Для создания разметки используй шаблонные строки и insertAdjacentHTML().

  // Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  // Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
   

  const galleryRef = document.querySelector('#gallery')
  // console.log(galleryRef);

  const createGallery = image => {
   const imgRef = document.createElement('li');
   imgRef.classList.add('list-item-task1')
   

   const imgTag = document.createElement('img');
   imgTag.src = image.url;
   imgTag.alt = image.alt;
   imgRef.appendChild(imgTag);
   imgTag.classList.add('pic-task1')

   return imgRef;
  }; 
  

  //  images.forEach(image => {console.log(createGallery(image));}) 

  const mappedImg = images.map(image => createGallery(image));

  // console.log(mappedImg);

  galleryRef.append(...mappedImg)



