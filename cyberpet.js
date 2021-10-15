const inquirer = require('inquirer');

const { questions } = require('./questions');

const { Cat } = require('./animals/Cat');
const { Dog } = require('./animals/Dog');
const { Rabbit } = require('./animals/Rabbit');
const { Parrot } = require('./animals/Parrot');

let myPet;

async function start() {
  const { typeOfPet } = await inquirer.prompt(questions.typeOfPet);

  const { petName } = await inquirer.prompt({
    type: 'input',
    name: 'petName',
    message: 'What is your pet called?',
  });

  if (typeOfPet === 'cat') myPet = new Cat(petName);
  else if (typeOfPet === 'dog') myPet = new Dog(petName);
  else if (typeOfPet === 'rabbit') myPet = new Rabbit(petName);
  else if (typeOfPet === 'parrot') myPet = new Parrot(petName);

  userChoice();
}

async function userChoice() {
  myPet.boredom(5);
  myPet.hunger(5);
  myPet.thirst(5);
  myPet.stats;

  if (!myPet._isAlive) {
    gameOver();
    return;
  }

  const { choice } = await inquirer.prompt(questions.choice);

  if (choice === 'status') console.log(myPet.status);
  if (choice === 'play') await myPet.play();
  if (choice === 'feed') await myPet.eats();
  if (choice === 'drink') await myPet.drinks();
  if (choice === 'quit') {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myPet.checkStats();

  userChoice();
}

async function confirmQuit() {
  const { quitChoice } = await inquirer.prompt(questions.quitChoice);

  if (quitChoice === 'yes') return true;
  else return false;
}

async function gameOver() {
  console.log(myPet.status);
  const { playAgain } = await inquirer.prompt(questions.playAgain);

  if (playAgain === 'yes') start();
  else return;
}

start();
