/**
 * It takes two numbers as arguments and returns a string
 * @param {number} correctAnswers - number
 * @param {number} numOfSeconds - number of seconds the user took to complete the quiz
 * @returns A string
 */
function calAverage(correctAnswers:number,numOfSeconds:number):string {
    return (correctAnswers/numOfSeconds).toFixed(2);
}

export default calAverage;