'use strict';

const checkBtn = document.querySelector('.check');
// const inputNmbr = document.querySelector('.guess').value;
//let secretNumber = document.querySelector('.number').textContent;
const message = document.querySelector('.message');
//let totalScore = document.querySelector('.score');
// let highScore = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

let currentScore = 20;
let highscore = 0;

// Finding random number
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
console.log (secretNumber);

// Event handler - Check!
checkBtn.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if(guess == '') {
    message.textContent = '🧐 No number!';

  // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    message.textContent = '😎 Correct number'
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = currentScore;
    
    if (currentScore > highscore ){
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }

  // When the guess num is lower than the secret num
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      message.textContent = 'Try with ⬆️ higer number';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      message.textContent = 'You lost the game! 😪';
      document.querySelector('.score').textContent = 0;
    }

  // When the guess num is higher than the secret num  
  } else {
    if (currentScore > 1) {
      message.textContent = 'Try with ⬇️ lower number'
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      message.textContent = 'You lost the game! 😪';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset game
againBtn.addEventListener('click', function() {
  currentScore = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  console.log(secretNumber)
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = currentScore;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
})