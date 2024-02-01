let randomNumber = Math.round(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a valid number');
  } else {
    preGuess.push(guess);
    if (numGess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guess it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too High');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guesSlot.innerHTML += `${guess},  `;
  numGess++;
  remaining.innerHTML = `${11 - numGess}`;
}
function displayMessage(guess) {
  lowOrHigh.innerHTML = `<h2>${guess}</h2>`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    playGame = true;
    randomNumber = Math.round(Math.random() * 100 + 1);
    preGuess = [];
    numGess = 1;
    guesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.append(p);
  playGame = false;
  newGame();
}
