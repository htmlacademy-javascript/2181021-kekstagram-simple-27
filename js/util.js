import { closeModal } from './modal.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const submitButton = document.querySelector('#upload-submit');
const successPopupTemplate = document.querySelector('#success').content;
const errorPopupTemplate = document.querySelector('#error').content;
const cloneSuccessPopupTemplate = successPopupTemplate.cloneNode(true);
const cloneErrorPopupTemplate = errorPopupTemplate.cloneNode(true);
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const noneEffect = document.querySelector('#effect-none');
const textDescription = document.querySelector('.text__description');

const isEscape = (evt) => (
  evt.key === 'Escape'
);

const showAlert = (message, color = 'red') => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const clearForm = () => {
  uploadFile.value = '';
  scaleValue.value = '100%';
  imagePreview.style = '';
  noneEffect.click();
  textDescription.value = '';
};

const showSuccesPopup = () => {
  body.appendChild(cloneSuccessPopupTemplate);
  const popup = document.querySelector('.success');
  const successPopupButton = document.querySelector('.success__button');
  const onModalEscapeKeydown = (evt) => {
    if (isEscape(evt)) {
      popup.remove();
      clearForm();
    }
  };

  successPopupButton.addEventListener('click', () => {
    popup.remove();
    clearForm();
    closeModal();
    document.removeEventListener('keydown', onModalEscapeKeydown);
  });

  document.addEventListener('keydown', onModalEscapeKeydown, { once: true });
};

const showErrorPopup = () => {
  body.appendChild(cloneErrorPopupTemplate);
  const popup = document.querySelector('.error');
  const errorPopupButton = document.querySelector('.error__button');

  const onModalEscapeKeydown = (evt) => {
    if (isEscape(evt)) {
      popup.remove();
      clearForm();

    }
  };

  errorPopupButton.addEventListener('click', () => {
    popup.remove();
    document.removeEventListener('keydown', onModalEscapeKeydown);
  });

  document.addEventListener('keydown', onModalEscapeKeydown, { once: true });
};


export { showAlert, blockSubmitButton, unblockSubmitButton, showSuccesPopup , showErrorPopup, clearForm, isEscape , body };
