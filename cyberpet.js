const inquirer = require('inquirer');

const { questions } = require('./questions');

let myPet;

class Animal {
  _health;
  _hunger;
  _thirst;
  _boredom;
  _isAlive = true;
  _status;

  constructor(name) {
    this._name = name;
    this._health = 100;
    this._hunger = 0;
    this._thirst = 0;
    this._boredom = 0;
    this._status = 'Your pet is alive and well.';
  }

  get name() {
    return this._name;
  }
  get health() {
    return this._health;
  }
  get hunger() {
    return this._hunger;
  }
  get thirst() {
    return this._thirst;
  }
  get boredom() {
    return this._boredom;
  }
  get stats() {
    return console.table({
      name: this._name,
      health: this._health,
      hunger: this._hunger,
      thirst: this._thirst,
      boredom: this._boredom,
    });
  }
  get status() {
    return this._status;
  }

  set status(msg) {
    this._status = msg;
  }

  checkStats() {
    if (this._health <= 0) {
      this._isAlive = false;
      this.status =
        'Your pet has died from malnutrition, please make sure your next pet has plenty to eat and drink.';
    }
    if (this._boredom >= 50) {
      this._isAlive = false;
      this.status = `${this.name} has run away to join the circus because they were bored, please play with your pet more next time...`;
    }
  }

  drinks() {
    this.thirst(-5);
    if (this.thirst < 0) this._thirst = 0;
    return this.thirst;
  }

  async eats() {
    const { food } = await inquirer.prompt(questions.eat);

    if (food === 'snack') this.hunger(-2);
    if (food === 'meal') this.hunger(-5);
    if (food === 'treat') this.hunger(-10);

    return this._hunger;
  }

  hunger(num) {
    this._hunger += num;

    if (this._hunger < 0) this._hunger = 0;
    if (this._hunger > 25) this.health(-5);
    if (this._hunger > 40) {
      this.health(-5);
      this.boredom(5);
    }
    return this.checkStats();
  }

  thirst(num) {
    this._thirst += num;

    if (this._thirst < 0) this._thirst = 0;
    if (this._thirst > 25) this.health(-5);
    if (this._thirst > 40) {
      this.health(-5);
      this.boredom(5);
    }
    return this.checkStats();
  }

  health(num) {
    this._health += num;
    if (this._health < 0) this._health = 0;
  }

  boredom(num) {
    this._boredom += num;
    if (this._boredom < 0) this._boredom = 0;

    return this.checkStats();
  }
}
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
    startAgain();
    return;
  }

  const { choice } = await inquirer.prompt(questions.choice);

  if (choice === 'status') console.log(myPet.status);
  if (choice === 'play') await myPet.play();
  if (choice === 'feed') await myPet.eats();
  if (choice === 'drink') await myPet.drinks();

  myPet.checkStats();

  userChoice();
}

start();

function gameOver() {
  // TODO
  console.log(myPet.status);
}

function startAgain() {
  console.log('start again');
}
