'use strict';

const checkBtn = document.querySelector('.check');
const inputNmbr = document.querySelector('.guess').value;
let secretNumber = document.querySelector('.number').textContent;
const message = document.querySelector('.message');
let totalScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

let currentScore = 20;
highScore = 0;

const resetGame = function () {
  
}

// Finding random number
const number = Number(Math.trunc(Math.random() * 20)); 
secretNumber = number;
console.log (secretNumber);



// Event handler - Check!
checkBtn.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if(!guess) {
    message.textContent = '🧐 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = number;
    message.textContent = '😎 Correct number'
    document.body.style.backgroundColor = '#60b347';
    // highScore = highScore + 1;
    totalScore.textContent = currentScore;
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      message.textContent = 'Try with ⬆️ higer number';
      // document.body.style.backgroundColor = 'darkgray';
      currentScore--;
      totalScore.textContent = currentScore;
    } else {
      message.textContent = 'You lost the game! 😪';
      // document.body.style.backgroundColor = '#222';
      totalScore.textContent = 0;
    }
  } else {
    if (currentScore > 1) {
      message.textContent = 'Try with ⬇️ lower number'
      // document.body.style.backgroundColor = '#e3242b';
      currentScore--;
      totalScore.textContent = currentScore;
    } else {
      message.textContent = 'You lost the game! 😪';
      // document.body.style.backgroundColor = '#222';
      totalScore.textContent = 0;
    }
  }
});