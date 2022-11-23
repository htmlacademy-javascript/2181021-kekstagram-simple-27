import { imageRendering } from './image-rendering.js';
import { showAlert } from './util.js';


const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера');
    })
    .then((imageData) => {
      imageRendering(imageData);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
