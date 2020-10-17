import gameRunner from '../core/game-runner.js';
import { generateRandomNumber, getRandomItem } from '../helpers/index.js';

let QUESTION_PAYLOAD = null;
let CORRECT_ANSWER = null;

const operations = {
  MULTIPLICATION: '*',
  ADDITION: '+',
  SUBTRACTION: '-',
};

const operationExecutionMap = {
  [operations.MULTIPLICATION]: (first, second) => first * second,
  [operations.ADDITION]: (first, second) => first + second,
  [operations.SUBTRACTION]: (first, second) => first - second,
};

function getRandomOperation() {
  return getRandomItem([
    operations.MULTIPLICATION,
    operations.ADDITION,
    operations.SUBTRACTION,
  ]);
}

function getGameRules() {
  return 'What is the result of the expression?';
}

function setupNewRound() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operation = getRandomOperation();

  CORRECT_ANSWER = operationExecutionMap[operation](firstNumber, secondNumber);
  QUESTION_PAYLOAD = `${firstNumber} ${operation} ${secondNumber}`;
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
export async function calcGame() {
  await gameRunner(
    getGameRules,
    setupNewRound,
    getQuestionPayload,
    getCorrectAnswer,
    isAnswerCorrect,
  );
}
