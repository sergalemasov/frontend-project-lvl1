import promptly from 'promptly';
import { greetings } from './greetings.js';

function printGameRules(gameRules) {
  console.log(gameRules);
}

function askQuestion(payload) {
  console.log(`Question: ${payload}`);
}

async function promptAnswer() {
  return promptly.prompt('Your answer: ');
}

function onCorrectAnswer() {
  console.log('Correct!');
}

function onWin(username) {
  console.log(`Congratulations, ${username}!`);
}

function onLose(username, answer, correctAnswer) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
}

export default async function gameRunner(
  getGameRules,
  setupNewRound,
  getQuestionPayload,
  getCorrectAnswer,
  isAnswerCorrect,
) {
  const username = await greetings();

  printGameRules(getGameRules());

  const maxAttempts = 3;
  let attemptsTaken = 0;

  while (attemptsTaken < maxAttempts) {
    setupNewRound();

    askQuestion(getQuestionPayload());

    // eslint-disable-next-line no-await-in-loop
    const answer = await promptAnswer();

    if (isAnswerCorrect(answer)) {
      onCorrectAnswer();
    } else {
      onLose(
        username,
        answer,
        getCorrectAnswer(),
      );

      return;
    }

    attemptsTaken += 1;
  }

  onWin(username);
}
