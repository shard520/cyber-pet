let myPet;

class Animal {
  _health;
  _hunger;
  _thirst;
  _boredom;
  _isAlive = true;

  constructor(name) {
    this._name = name;
    this._health = 100;
    this._hunger = 0;
    this._thirst = 0;
    this._boredom = 0;
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

  checkStats() {
    if (
      this.health <= 0 ||
      this.hunger >= 50 ||
      this.thirst >= 50 ||
      this.boredom >= 50
    ) {
      this._isAlive = false;
    }
  }

  drinks() {
    this._thirst -= 5;
    if (this._thirst < 0) this._thirst = 0;
    return this._thirst;
  }

  eats() {
    const food = prompt(`
What do you want to feed ${this.name}?
a)Snack: Hunger -2
b)Meal: Hunger -5
c)Treat: Hunger -10
`);
    if (food === 'snack') this.hunger(-2);
    if (food === 'meal') this.hunger(-5);
    if (food === 'treat') this.hunger(-10);

    if (this._hunger < 0) this._hunger = 0;

    return this._hunger;
  }

  hunger(num) {
    this._hunger += num;
  }

  boredom(num) {
    this._boredom += num;
    if (this._boredom < 0) this._boredom = 0;

    return this._boredom;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  play() {
    const choice = prompt(`
Do you want to play with:
a) tin foil ball: boredom -2
b) wind up mouse: boredom -5
c) ball of woll: boredom -10
`).toLowerCase();

    if (choice === 'a') this.boredom(-2);
    if (choice === 'b') this.boredom(-5);
    if (choice === 'c') this.boredom(-10);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  play() {
    const choice = prompt(`
Do you want to play with:
a) Stick: boredom -2
b) Chewy toy: boredom -5
c) Ball : boredom -10
`).toLowerCase();

    if (choice === 'a') this.boredom(-2);
    if (choice === 'b') this.boredom(-5);
    if (choice === 'c') this.boredom(-10);
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }
  play() {
    const choice = prompt(`
Do you want to play with:
a) Straw: boredom -2
b) Paper Towels: boredom -5
`).toLowerCase();

    if (choice === 'a') this.boredom(-2);
    if (choice === 'b') this.boredom(-5);
  }
}
class Parrot extends Animal {
  constructor(name) {
    super(name);
  }
  play() {
    const choice = prompt(`
Do you want to play with:
a) Learn a word: boredom -2
b) Learn a swear word: boredom -5
c) Swear at the mail man: boredom -10
`).toLowerCase();

    if (choice === 'a') this.boredom(-2);
    if (choice === 'b') this.boredom(-5);
    if (choice === 'c') this.boredom(-10);
  }
}
function start() {
  let typeOfPet = prompt(
    'What type of pet would you like? Please choose from: Cat, Dog, Rabbit, Parrot.'
  ).toLowerCase();
  console.log(typeOfPet);
  let petName = prompt('Please enter a name for you pet.');
  console.log(petName);
  if (typeOfPet === 'cat') myPet = new Cat(petName);
  else if (typeOfPet === 'dog') myPet = new Dog(petName);
  else if (typeOfPet === 'rabbit') myPet = new Rabbit(petName);
  else if (typeOfPet === 'parrot') myPet = new Parrot(petName);

  myPet.boredom(45);
  myPet.hunger(45);
  userChoice();
}

function userChoice() {
  myPet.boredom(2);
  myPet.hunger(2);

  const choice = prompt(`
What would you like to do? Please choose from: Play, Eat, Drink
To see your pet's stats type stats`).toLowerCase();

  if (choice === 'stats') myPet.stats;
  if (choice === 'play') myPet.play();

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
    console.log(
      `${myPet.name} has run away to join the circus because they were bored, please play with your pet more next time...`
    );
  } else if (scenario === 'hunger') {
    console.log(
      `${myPet.name} has run away to join the circus because they were bored, please play with your pet more next time...`
    );
  }
}

function startAgain() {
  console.log('start again');
}
