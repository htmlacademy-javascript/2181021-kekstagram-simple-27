const form = document.querySelector('#upload-select-image');
const uploadInput = document.querySelector('#upload-file');
const imageOption = document.querySelector('.img-upload__overlay');
const closeOptionButton = imageOption.querySelector('.img-upload__cancel');
const previewImageContainer = imageOption.querySelector('.img-upload__preview img');
const submitButton = imageOption.querySelector('#upload-submit');
const minusScaleButton = imageOption.querySelector('.scale__control--smaller');
const plusScaleButton = imageOption.querySelector('.scale__control--bigger');
const scaleValueContainer = imageOption.querySelector('.scale__control--value');
const effectButtons = document.querySelectorAll('.effects__radio');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__error'
});

const imageEffect = [
  'none',
  'chrome',
  'sepia',
  'marvin',
  'phobos',
  'heat'
];

const loadImage = () => {
  form.addEventListener('click', () => {
    uploadInput.addEventListener('change', () => {
      imageOption.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      closeOptionButton.addEventListener('click', () => {
        imageOption.classList.add('hidden');
        document.querySelector('body').classList.remove('modal-open');
      });
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          imageOption.classList.add('hidden');
          document.querySelector('body').classList.remove('modal-open');
        }
      });
    });
    submitButton.addEventListener('click', (evt) => {
      const isValid = pristine.validate();
      if (!isValid){
        evt.preventDefault();
      }
    });
    for (const effectButton of effectButtons){
      effectButton.addEventListener('click', () => {
        for (const effect of imageEffect){
          if (effectButton.value === effect){
            previewImageContainer.removeAttribute('class');
            previewImageContainer.classList.add(`effects__preview--${effect}`);
          }

        }
      });
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

export {loadImage};
