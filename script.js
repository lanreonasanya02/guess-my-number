'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
document.querySelector('.again').style.display = 'none';
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number inputed';
  } else if (guess > 30) {
    displayMessage('Choose between 1 & 30');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '✨ Correct! You guessed it';
    document.querySelector('.body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.display = 'block';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = `${
        highScore * 10
      } points`;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆 Too High' : '👇 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 Ooops, you lost!');
      document.querySelector('.again').style.display = 'block';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
