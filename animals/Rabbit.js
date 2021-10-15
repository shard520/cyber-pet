const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Animal } = require('../Animal');

class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }
  async play() {
    const { play } = await inquirer.prompt(questions.rabbitPlay);

    if (play === 'straw') this.boredom(-2);
    if (play === 'paper') this.boredom(-5);
  }
}

module.exports = {
  Rabbit,
};
