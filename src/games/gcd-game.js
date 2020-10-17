import { generateRandomNumber } from '../helpers/index.js';
import gameRunner from '../core/game-runner.js';

let QUESTION_PAYLOAD = null;
let CORRECT_ANSWER = null;

function getGameRules() {
  return 'Find the greatest common divisor of given numbers.';
}

function greatestCommonDivisor(firstNumber, secondNumber) {
  return secondNumber === 0
    ? firstNumber
    : greatestCommonDivisor(secondNumber, firstNumber % secondNumber);
}

function setupNewRound() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();

  CORRECT_ANSWER = greatestCommonDivisor(firstNumber, secondNumber);
  QUESTION_PAYLOAD = `${firstNumber} ${secondNumber}`;
}

function getQuestionPayload() {
  return QUESTION_PAYLOAD;
}

function getCorrectAnswer() {
  return CORRECT_ANSWER;
}

function isAnswerCorrect(answer) {
  return CORRECT_ANSWER === +answer;
}

// eslint-disable-next-line import/prefer-default-export
export async function gcdGame() {
  await gameRunner(
    getGameRules,
    setupNewRound,
    getQuestionPayload,
    getCorrectAnswer,
    isAnswerCorrect,
  );
}
