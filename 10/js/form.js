import { uploadModalOpen, uploadModalClose, uploadModalCloseEscape, closeOptionButton} from './modal.js';
import { blockSubmitButton, unblockSubmitButton, succesPopup , errorPopup} from './util.js';
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
          succesPopup();
          onSuccess();
        },
        () => {
          errorPopup();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });

  uploadInput.addEventListener('change', () => {
    getPreviewImage();
    uploadModalOpen();
    closeOptionButton.addEventListener('click', () => {
      uploadModalClose();
    });
    uploadModalCloseEscape();
  });
};

export {postForm, uploadInput};
