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

const succesPopup = () => {
  document.querySelector('body').appendChild(cloneSuccessPopupTemplate);
  const popup = document.querySelector('.success');
  const successPopupButton = document.querySelector('.success__button');
  successPopupButton.addEventListener('click', () => {
    popup.remove();
    clearForm();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.remove();
      clearForm();
    }
  });
};

const errorPopup = () => {
  document.querySelector('body').appendChild(cloneErrorPopupTemplate);
  const popup = document.querySelector('.error');
  const errorPopupButton = document.querySelector('.error__button');
  errorPopupButton.addEventListener('click', () => {
    popup.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.remove();
    }
  });
};

export { showAlert, blockSubmitButton, unblockSubmitButton, succesPopup, errorPopup, clearForm };
