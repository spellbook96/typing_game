

/**
 * 重複なしの乱数配列を生成する
 * It generates a random Non-repeating array of numbers from 0 to limitN, with length being the length of the array.
 * @param {number} limitN - the maximum number of elements in the array
 * @param {number} length - the length of the array
 * @returns A Non-repeating array of numbers from 0 to length-1, but in a random order.
 */

function randomIntArray(limitN: number, length: number) {
  const result = Array(length)
    .fill(0)
    .map((_, i) => i);
  const fakeArray = new Map();
  for (let i = 0; i < length; i++) {
    const j = randomInt(i, limitN); 
    if (i === j) continue; 
    const tmp = result[i];
    if (j < length) {
      result[i] = result[j];
      result[j] = tmp;
    } else {

      result[i] = fakeArray.has(j) ? fakeArray.get(j) : j;
      fakeArray.set(j, tmp);
    }
  }
  return result;
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomIntArray;
