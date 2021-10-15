const questions = {
  eat: {
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
  },

  catPlay: {
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
  },

  dogPlay: {
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
  },

  rabbitPlay: {
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
  },

  parrotPlay: {
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
  },

  typeOfPet: {
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
  },

  choice: {
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
      {
        key: 'e',
        name: 'Quit the game',
        value: 'quit',
      },
    ],
  },

  quitChoice: {
    type: 'list',
    name: 'quitChoice',
    message:
      'Are you sure you want to quit? This will mean your pet has to be returned to the Animal Shelter...',
    choices: [
      {
        key: 'a',
        name: "Yes, I'm sure.",
        value: 'yes',
      },
      {
        key: 'b',
        name: "No, I'll play some more.",
        value: 'no',
      },
    ],
  },

  playAgain: {
    type: 'list',
    name: 'playAgain',
    message: 'Would you like to play again?',
    choices: [
      {
        key: 'a',
        name: 'Yes',
        value: 'yes',
      },
      {
        key: 'b',
        name: 'No',
        value: 'no',
      },
    ],
  },
};

module.exports = {
  questions,
};
