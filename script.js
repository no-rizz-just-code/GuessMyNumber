'use strict';

// Secret Number Generator

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// displayMessage Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const scoreUpdate = function (score) {
  document.querySelector('.score').textContent = score;
};

const highscoreUpdate = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// Event Listener for Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess > 20 || guess < 1) {
    displayMessage('🚫 Number must be between 1 and 20');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayBodyColor('#60b347');
    displayNumber(secretNumber);
    displayNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      highscoreUpdate(highscore);
    }
  } // when the guess is wrong
  else if (guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreUpdate(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreUpdate(0);
    }
  }
});

//    else if(score > 1) {
//      if (guess > secretNumber) {
//         document.querySelector('.message').textContent = '📈 Too high!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else if (guess < secretNumber) {
//         document.querySelector('.message').textContent = '📉 Too low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       }
//   }  else {
//         document.querySelector('.message').textContent = '💥 You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// });

// Event Listener for Again Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreUpdate(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  displayBodyColor('#222');
  displayNumberWidth('15rem');
});
