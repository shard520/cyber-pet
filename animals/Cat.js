const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Animal } = require('../Animal');

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.catPlay);

    if (play === 'foil') this.boredom(-2);
    if (play === 'mouse') this.boredom(-5);
    if (play === 'wool') this.boredom(-10);
  }
}

module.exports = {
  Cat,
};
