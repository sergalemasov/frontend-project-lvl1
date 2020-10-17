import promptly from 'promptly';

// eslint-disable-next-line import/prefer-default-export
export async function greetings() {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
}
