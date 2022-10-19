function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  console.log('Мин: ' + min);
  console.log('Макс: ' + max);
  console.log(Math.floor(Math.random() * (max - min)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function maxLenStr(str, lenStr) {
  if (str.length > lenStr) {
    console.log('Длина строки: ' + str.length);
    console.log('Макс длина строки: ' + lenStr);
    console.log(false);
    return false
  }
  console.log('Длина строки: ' + str.length);
  console.log('Макс длина строки: ' + lenStr);
  console.log(true);
  return true
}

getRandomInt(0, 10);
maxLenStr('В этой строке 25 символов', 24);
