import { generateRandomNumber } from '../helpers/index.js';
import gameRunner from '../core/game-runner.js';

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';

let CURRENT_NUMBER = null;
let CORRECT_ANSWER = null;

function isEven(num) {
  return num % 2 === 0;
}

function getGameRules() {
  return `Answer "${POSITIVE_ANSWER}" if the number is even, otherwise answer "${NEGATIVE_ANSWER}".`;
}

function setupNewRound() {
  CURRENT_NUMBER = generateRandomNumber();

  CORRECT_ANSWER = isEven(CURRENT_NUMBER)
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
export async function evenGame() {
  await gameRunner(
    getGameRules,
    setupNewRound,
    getQuestionPayload,
    getCorrectAnswer,
    isAnswerCorrect,
  );
}
