/**
 * It takes two numbers, divides them, multiplies the result by 100, and returns the result as a string
 * @param {number} correct - number of correct answers
 * @param {number} total - number of questions
 * @returns A function
 */
function calCorectRate(correct: number, total: number): string {
  return ((correct / total)*100).toFixed(2);
}

export default calCorectRate;