import { openModal, closeModal, closeModalEscape, closeOptionButton} from './modal.js';
import { blockSubmitButton, unblockSubmitButton, showSuccesPopup , showErrorPopup} from './util.js';
import { sendData } from './api.js';
import { getPreviewImage } from './preview-image.js';

const form = document.querySelector('#upload-select-image');
const uploadInput = document.querySelector('#upload-file');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__error'
});

const postForm = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid){
      blockSubmitButton();
      sendData(
        () => {
          unblockSubmitButton();
          showSuccesPopup();
          onSuccess();
        },
        () => {
          showErrorPopup();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });

  uploadInput.addEventListener('change', () => {
    getPreviewImage();
    openModal();
    closeModalEscape();
    closeOptionButton.addEventListener('click', () => {closeModal();});

  });
};

export {postForm, uploadInput};
