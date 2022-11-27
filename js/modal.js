import { clearForm, isEscape, body} from './util.js';

const imageOption = document.querySelector('.img-upload__overlay');
const closeOptionButton = imageOption.querySelector('.img-upload__cancel');
const previewImageContainer = imageOption.querySelector('.img-upload__preview img');
const changeScaleButton = imageOption.querySelector('.img-upload__scale');
const minusScaleButton = imageOption.querySelector('.scale__control--smaller');
const plusScaleButton = imageOption.querySelector('.scale__control--bigger');
const scaleValueContainer = imageOption.querySelector('.scale__control--value');

const openModal = () => {
  imageOption.classList.remove('hidden');
  body.classList.add('modal-open');
};


const closeKeydown = (evt) => {
  if (isEscape(evt)) {
    imageOption.classList.add('hidden');
    body.classList.remove('modal-open');
    clearForm();
  }
};

const closeModal = () => {
  imageOption.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeKeydown);
};

const closeModalEscape = () => {
  document.addEventListener('keydown', closeKeydown , { once: true });
};

changeScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const scaleValue = Number(scaleValueContainer.value.slice(0,-1));
  if (evt.target === plusScaleButton) {
    if(scaleValue < 100){
      scaleValueContainer.value = `${scaleValue + 25}%`;
      const imageTransform = `${Number(scaleValueContainer.value.slice(0, -1)) / 100}`;
      previewImageContainer.style.transform = `scale(${imageTransform})`;
    }
  } else if (evt.target === minusScaleButton) {
    if(scaleValue > 25) {
      scaleValueContainer.value = `${scaleValue - 25}%`;
      const imageTransform = `${Number(scaleValueContainer.value.slice(0, -1)) / 100}`;
      previewImageContainer.style.transform = `scale(${imageTransform})`;
    }
  }
});


export {openModal, closeModal, closeModalEscape, closeOptionButton, imageOption};
