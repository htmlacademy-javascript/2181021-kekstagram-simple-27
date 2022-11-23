const imageRendering = (imageData) => {
  const picturesContainer = document.querySelector('.pictures');
  const thumbTemplate = document.querySelector('#picture').content;

  const fragment = new DocumentFragment();

  imageData.forEach((picture) => {
    const cloneTemplate = thumbTemplate.cloneNode(true);
    cloneTemplate.querySelector('.picture__img').src = picture.url;
    cloneTemplate.querySelector('.picture__likes').textContent = picture.likes;
    cloneTemplate.querySelector('.picture__comments').textContent = picture.comments;
    cloneTemplate.querySelector('.picture__img').alt = picture.description;
    fragment.appendChild(cloneTemplate);
  });
  picturesContainer.appendChild(fragment);
};

export {imageRendering};
