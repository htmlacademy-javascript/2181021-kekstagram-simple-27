import {getDataGeneretion} from './data.js';

const imageRendering = () => {
  const picturesContainer = document.querySelector('.pictures');
  const thumbTemplate = document.querySelector('#picture').content;

  const fragment = new DocumentFragment();
  const data = getDataGeneretion();

  data.forEach((picture) => {
    const cloneTemplate = thumbTemplate.cloneNode(true);
    cloneTemplate.querySelector('.picture__img').src = picture.url;
    cloneTemplate.querySelector('.picture__likes').textContent = picture.likes;
    cloneTemplate.querySelector('.picture__comments').textContent = picture.comments;
    fragment.appendChild(cloneTemplate);
  });
  picturesContainer.appendChild(fragment);
};

export {imageRendering};
