export function generateRandomNumber(min = 1, max = 100) {
  return min + Math.floor((max + 1 - min) * Math.random());
}

export function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
