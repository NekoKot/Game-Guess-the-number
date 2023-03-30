'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
  } else if (guessingNumber > secretNumber) {
    document.querySelector('.guess-message').textContent = 'Слишком много';
  } else if (guessingNumber < secretNumber) {
    document.querySelector('.guess-message').textContent = 'Слишком мало';
  }
});
