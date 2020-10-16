#!/usr/bin/env node
import promptly from 'promptly';

async function askName() {
  return promptly.prompt('May I have your name? ');
}

async function main() {
    console.log('Welcome to the Brain Games!');

    const name = await askName();

    console.log(`Hello, ${name}!`);
}

main();
