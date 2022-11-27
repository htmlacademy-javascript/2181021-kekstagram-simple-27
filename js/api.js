import { imageRendering } from './image-rendering.js';
import { showAlert } from './util.js';

const GETURL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POSTURL = 'https://27.javascript.pages.academy/kekstagram-simple/';
const getData = () => {
  fetch(GETURL)
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
    POSTURL,
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
