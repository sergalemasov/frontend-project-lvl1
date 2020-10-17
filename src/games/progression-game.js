import { generateRandomNumber } from '../helpers/index.js';
import gameRunner from '../core/game-runner.js';

let QUESTION_PAYLOAD = null;
let CORRECT_ANSWER = null;

function getGameRules() {
  return 'What number is missing in the progression?';
}

function setupNewRound() {
  const step = generateRandomNumber(1, 10);
  const startOfProgression = generateRandomNumber(1, 25);
  const progressionLength = generateRandomNumber(5, 15);
  const hiddenNumberIndex = generateRandomNumber(0, progressionLength - 1);

  const progression = [];

  for (let index = 0; index < progressionLength; index += 1) {
    const currentProgressionMember = startOfProgression + index * step;

    if (index === hiddenNumberIndex) {
      CORRECT_ANSWER = currentProgressionMember;
      progression.push('..');
    } else {
      progression.push(`${currentProgressionMember}`);
    }
  }

  QUESTION_PAYLOAD = progression.join(' ');
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
export async function progressionGame() {
  await gameRunner(
    getGameRules,
    setupNewRound,
    getQuestionPayload,
    getCorrectAnswer,
    isAnswerCorrect,
  );
}
