const inquirer = require('inquirer');

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
    const { food } = await inquirer.prompt({
      type: 'list',
      name: 'food',
      message: `What do you want to feed ${this.name}?`,
      choices: [
        {
          key: 'a',
          name: 'Snack hunger -2',
          value: 'snack',
        },
        {
          key: 'b',
          name: 'Meal hunger -5',
          value: 'meal',
        },
        {
          key: 'c',
          name: 'Treat hunger -10',
          value: 'treat',
        },
      ],
    });

    if (food === 'snack') this.hunger(-2);
    if (food === 'meal') this.hunger(-5);
    if (food === 'treat') this.hunger(-10);

    return this._hunger;
  }

  hunger(num) {
    this._hunger += num;

    if (this._hunger < 0) this._hunger = 0;
    if (this._hunger > 25) this.health(5);
    if (this._hunger > 40) {
      this.health(5);
      this.boredom -= 5;
    }
    return this.checkStats();
  }

  thirst(num) {
    this._thirst += num;

    if (this._thirst < 0) this._thirst = 0;
    if (this._thirst > 25) this.health(5);
    if (this._thirst > 40) {
      this.health(5);
      this.boredom -= 5;
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
    const { play } = await inquirer.prompt({
      type: 'list',
      name: 'play',
      message: 'Do you want to play with?',
      choices: [
        {
          key: 'a',
          name: 'Tin foil ball: boredom -2',
          value: 'foil',
        },
        {
          key: 'b',
          name: 'wind up mouse: boredom -5',
          value: 'mouse',
        },
        {
          key: 'c',
          name: 'Ball of wool: boredom -10',
          value: 'wool',
        },
      ],
    });

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
    const { play } = await inquirer.prompt({
      type: 'list',
      name: 'play',
      message: 'Do you want to play with?',
      choices: [
        {
          key: 'a',
          name: 'Stick: boredom -2',
          value: 'stick',
        },
        {
          key: 'b',
          name: 'Ball: boredom -5',
          value: 'ball',
        },
        {
          key: 'c',
          name: 'Chase the postman: boredom -10',
          value: 'chase',
        },
      ],
    });

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
    const { play } = await inquirer.prompt({
      type: 'list',
      name: 'play',
      message: 'Do you want to play with?',
      choices: [
        {
          key: 'a',
          name: 'Straw: boredom -2',
          value: 'straw',
        },
        {
          key: 'b',
          name: 'Paper towels: boredom -5',
          value: 'paper',
        },
      ],
    });

    if (play === 'straw') this.boredom(-2);
    if (play === 'paper') this.boredom(-5);
  }
}
class Parrot extends Animal {
  constructor(name) {
    super(name);
  }
  async play() {
    const { play } = await inquirer.prompt({
      type: 'list',
      name: 'play',
      message: 'Do you want to play with?',
      choices: [
        {
          key: 'a',
          name: 'Learn a word: boredom -2',
          value: 'word',
        },
        {
          key: 'b',
          name: 'Learn a swear word: boredom -5',
          value: 'swear',
        },
        {
          key: 'c',
          name: 'Swear at the mail man: boredom -10',
          value: 'mail',
        },
      ],
    });

    if (play === 'word') this.boredom(-2);
    if (play === 'swear') this.boredom(-5);
    if (play === 'mail') this.boredom(-10);
  }
}
async function start() {
  const { typeOfPet } = await inquirer.prompt({
    type: 'list',
    name: 'typeOfPet',
    message:
      'What type of pet would you like? Please choose from the following options:',
    choices: [
      {
        key: 'a',
        name: 'Cat',
        value: 'cat',
      },
      {
        key: 'b',
        name: 'Dog',
        value: 'dog',
      },
      {
        key: 'c',
        name: 'Rabbit',
        value: 'rabbit',
      },
      {
        key: 'd',
        name: 'Parrot',
        value: 'parrot',
      },
    ],
  });

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
  myPet.boredom(2);
  myPet.hunger(2);
  myPet.thirst(2);
  myPet.stats;

  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      {
        key: 'a',
        name: 'Play with your pet',
        value: 'play',
      },
      {
        key: 'b',
        name: 'Feed your pet',
        value: 'feed',
      },
      {
        key: 'c',
        name: 'Give your pet a drink',
        value: 'drink',
      },
      {
        key: 'd',
        name: "View your pet's status",
        value: 'status',
      },
    ],
  });

  if (choice === 'status') console.log(myPet.status);
  if (choice === 'play') await myPet.play();
  if (choice === 'feed') await myPet.eats();
  if (choice === 'drink') await myPet.drinks();

  myPet.checkStats();

  if (!myPet._isAlive && myPet._boredom >= 50) {
    gameOver('boredom');
    startAgain();
    return;
  } else if (!myPet._isAlive && myPet._hunger >= 50) {
    gameOver('hunger');
    startAgain();
    return;
  } else {
    userChoice();
  }
}

start();

function gameOver(scenario) {
  if (scenario === 'boredom') {
    console.log();
  } else if (scenario === 'hunger') {
    console.log(
      `${myPet.name} has run away to join the circus because they were bored, please play with your pet more next time...`
    );
  }
}

function startAgain() {
  console.log('start again');
}
