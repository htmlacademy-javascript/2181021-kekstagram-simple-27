import { clearForm } from './util.js';

const imageOption = document.querySelector('.img-upload__overlay');
const closeOptionButton = imageOption.querySelector('.img-upload__cancel');
const previewImageContainer = imageOption.querySelector('.img-upload__preview img');
const minusScaleButton = imageOption.querySelector('.scale__control--smaller');
const plusScaleButton = imageOption.querySelector('.scale__control--bigger');
const scaleValueContainer = imageOption.querySelector('.scale__control--value');

const uploadModalOpen = () => {
  imageOption.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const uploadModalClose = () => {
  imageOption.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const uploadModalCloseEscape = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      imageOption.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      clearForm();
    }
  });
};

plusScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const scaleValue = Number(scaleValueContainer.value.slice(0,-1));
  if(scaleValue < 100){
    scaleValueContainer.value = `${scaleValue + 25}%`;
    const imageTransform = `${Number(scaleValueContainer.value.slice(0, -1)) / 100}`;
    previewImageContainer.style.transform = `scale(${imageTransform})`;
  }
});

minusScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const scaleValue = Number(scaleValueContainer.value.slice(0,-1));
  if(scaleValue > 25){
    scaleValueContainer.value = `${scaleValue - 25}%`;
    const imageTransform = `${Number(scaleValueContainer.value.slice(0, -1)) / 100}`;
    previewImageContainer.style.transform = `scale(${imageTransform})`;
  }
});

export {uploadModalOpen, uploadModalClose, uploadModalCloseEscape, closeOptionButton};
