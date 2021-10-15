const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Animal } = require('../Animal');

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.dogPlay);

    if (play === 'stick') this.boredom(-2);
    if (play === 'ball') this.boredom(-5);
    if (play === 'chase') this.boredom(-10);
  }
}

module.exports = {
  Dog,
};
