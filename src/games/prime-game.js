import { generateRandomNumber } from '../helpers/index.js';
import gameRunner from '../core/game-runner.js';

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';

let CURRENT_NUMBER = null;
let CORRECT_ANSWER = null;

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const half = num / 2;

  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getGameRules() {
  return `Answer "${POSITIVE_ANSWER}" if given number is prime. Otherwise answer "${NEGATIVE_ANSWER}".`;
}

function setupNewRound() {
  CURRENT_NUMBER = generateRandomNumber(0);

  CORRECT_ANSWER = isPrime(CURRENT_NUMBER)
    ? POSITIVE_ANSWER
    : NEGATIVE_ANSWER;
}

function getQuestionPayload() {
  return `${CURRENT_NUMBER}`;
}

function getCorrectAnswer() {
  return CORRECT_ANSWER;
}

function isAnswerCorrect(answer) {
  return CORRECT_ANSWER === POSITIVE_ANSWER
    ? answer === POSITIVE_ANSWER
    : answer !== POSITIVE_ANSWER;
}

// eslint-disable-next-line import/prefer-default-export
export async function primeGame() {
  await gameRunner(
    getGameRules,
    setupNewRound,
    getQuestionPayload,
    getCorrectAnswer,
    isAnswerCorrect,
  );
}
