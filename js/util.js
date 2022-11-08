function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getIdElement = (elements) => elements.push(() => {for(let i = 0; i < NUMBER_OBJECTS; i++){return i;}});


export {getRandomInt, getIdElement}
