import {getRandomInt, getIdElement} from './util.js';

const NUMBER_OBJECTS = 25;
const ID = [];
const URL = [];

const createObjects = () => ({
  id: getIdElement(ID),
  url: `photos/${getIdElement(URL)}.jpg`,
  description: 'Описание фото',
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200)
});

const getDataGeneretion = Array.from({length: NUMBER_OBJECTS}, createObjects);

export {NUMBER_OBJECTS, getDataGeneretion};
