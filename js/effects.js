const editPanel = document.querySelector('.img-upload__overlay');
const uploadedPicture = editPanel.querySelector('.img-upload__preview > img');
const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');
const effectButtons = document.querySelectorAll('.effects__radio');
const effectNone = document.querySelector('#effect-none');

const EFFECTS = {
  chrome: {
    min: 0,
    max: 1,
    setFilter: (value) => `grayscale(${value})`
  },
  sepia: {
    min: 0,
    max: 1,
    setFilter: (value) => `sepia(${value})`
  },
  marvin: {
    min: 0,
    max: 100,
    setFilter: (value) => `invert(${value}%)`
  },
  phobos: {
    min: 0,
    max: 3,
    setFilter: (value) => `blur(${value}px)`
  },
  heat: {
    min: 1,
    max: 3,
    setFilter: (value) => `brightness(${value})`
  },
  none: {
    min: 0,
    max: 0,
    setFilter: () => 'none'
  }
};

const transformEffects = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 10
    },
    start: 90,
    connect: 'lower'
  });
  for (const effectButton of effectButtons){
    effectButton.addEventListener('click', () => {
      for (const effect in EFFECTS){
        if (effectButton.value === effect){
          uploadedPicture.removeAttribute('class');
          uploadedPicture.classList.add(`effects__preview--${effect}`);
          slider.noUiSlider.updateOptions({
            range: {
              min: EFFECTS[effect].min,
              max: EFFECTS[effect].max
            },
            start: EFFECTS[effect].max
          });
          const previewEffect = document.querySelector(`.effects__preview--${effect}`);
          slider.noUiSlider.on('update', () => {
            previewEffect.style.filter = EFFECTS[effect].setFilter(slider.noUiSlider.get());
            sliderValue.value = slider.noUiSlider.get();
          });
        }
        const checkEffectNone = () => effectNone.checked === true ? effectLevel.classList.add('hidden') : effectLevel.classList.remove('hidden');
        checkEffectNone();

      }
    });
  }
};

export { transformEffects };

