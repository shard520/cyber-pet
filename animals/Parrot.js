const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Animal } = require('../Animal');

class Parrot extends Animal {
  constructor(name) {
    super(name);
  }
  async play() {
    const { play } = await inquirer.prompt(questions.parrotPlay);

    if (play === 'word') this.boredom(-2);
    if (play === 'swear') this.boredom(-5);
    if (play === 'mail') this.boredom(-10);
  }
}

module.exports = {
  Parrot,
};
