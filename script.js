'use strict';

let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '😡 NO Number!';
    displayMessage('😡 NO Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '👌 Correct Number!';
    displayMessage('👌 Correct Number!');

    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = ' #60b347';
    number.style.width = '30rem';

    // set high Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =  guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game!';
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too high
  /*
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
    */
});

// Again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  number.textContent = '?';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
