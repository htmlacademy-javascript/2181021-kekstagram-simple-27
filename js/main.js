function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function maxLenStr(str, lenStr) {
//   if (str.length > lenStr) {
//     return false
//   }
//   return true
// }

const ID = [];
const URL = [];

const NUMBER_OBJECTS = 25;

const createObjects = () => {
  const getIdElement = (elements) => elements.push(() => {for(let i = 0; i < NUMBER_OBJECTS; i++){return i;}});

  return {
    id: getIdElement(ID),
    url: `photos/${getIdElement(URL)}.jpg`,
    description: 'Описание фото',
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  };
};

const resultArray = Array.from({length: NUMBER_OBJECTS}, createObjects);

resultArray(); // ESlint ругается если не вызвать!
// console.log(resultArray);  // Eslint ругается если вызвать)))
