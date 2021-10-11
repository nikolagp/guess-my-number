'use strict';

const checkBtn = document.querySelector('.check');
const inputNmbr = document.querySelector('.guess');
const randomNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const totalScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');


let currentScore = 20;
let highscore = 0;

// Finding random number
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
console.log (secretNumber);

// Display Message
const displayMessage = function(messages) {
  message.textContent = messages;
};

// Event handler - Check!
checkBtn.addEventListener('click', function() {
  const guess = Number(inputNmbr.value);
  console.log(guess);

  // When there is no input
  if(guess == '') {
    displayMessage('🧐 No number!');

  // When player wins
  } else if (guess === secretNumber) {
    randomNumber.textContent = secretNumber;
    displayMessage('😎 Correct number');
    document.body.style.backgroundColor = '#60b347';
    randomNumber.style.width = '30rem';
    totalScore.textContent = currentScore;
    
    if (currentScore > highscore ){
      highscore = currentScore;
      highScore.textContent = highscore;
    }

  // When the guess num is lower than the secret num
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(guess < secretNumber ? 'Try with higer number ⏫' : 'Try with lower number ⏬');
      currentScore--;
      totalScore.textContent = currentScore;
    } else {
          displayMessage('You lost the game! 😪');
          totalScore.textContent = 0;
        }
  };
  
  // Longer Code
  //    } else if (guess < secretNumber) {
  //   if (currentScore > 1) {
  //     message.textContent = 'Try with higer number ⏫';
  //     message.style.color = '#B29576';
  //     inputNmbr.style.color = '#B29576';
  //     currentScore--;
  //     totalScore.textContent = currentScore;
  //   } else {
  //     message.textContent = 'You lost the game! 😪';
  //     totalScore.textContent = 0;
  //   }

  // // When the guess num is higher than the secret num  
  // } else {
  //   if (currentScore > 1) {
  //     message.textContent = 'Try with lower number ⏬';
  //     message.style.color = '#949400';
  //     inputNmbr.style.color = '#949400';
  //     currentScore--;
  //     totalScore.textContent = currentScore;
  //   } else {
  //     message.textContent = 'You lost the game! 😪';
  //     totalScore.textContent = 0;
  //   }
  // }
});

// Reset game
againBtn.addEventListener('click', function() {
  currentScore = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  console.log(secretNumber)
  displayMessage('👀 Start guessing...');
  inputNmbr.value = '';
  totalScore.textContent = currentScore;
  document.body.style.backgroundColor = '#2f4f4f';
  randomNumber.style.width = '15rem';
  randomNumber.textContent = '?';
})