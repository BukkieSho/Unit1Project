const cardArray = document.querySelectorAll('.container');

let cardSelected = false;
let flipControl = false;
let [firstPlay, ], secondPlay; 

//declaring a lot of functions here

function flipCard() {
  if (flipControl) return;
  if (this === firstPlay) return;
  this.classList.add('flip');
  if (!cardSelected) {
    cardSelected = true;
    firstPlay = this;
    return;
  }
  secondPlay = this;
  flipControl = true;
  checkMatch();
}


function checkMatch() {
  if (firstPlay.dataset.name === secondPlay.dataset.name) {
    removeCard();
    return;
  }
  unflipCard();
}

function removeCard() {
  firstPlay.removeEventListener('click', flipCard);
  secondPlay.removeEventListener('click', flipCard);
}

function unflipCard() {
  setTimeout(() => {
    firstPlay.classList.remove('flip');
    secondPlay.classList.remove('flip');
    resetGame();
  }, 1500);
}

function resetGame() {
  [cardSelected, flipControl] = [false, false];
  [firstPlay, secondPlay] = [null, null];
}


function shuffle() {
  cardArray.forEach(card => {
    let newPick = Math.floor(Math.random() * 12);
    card.style.order = newPick;
  });
}

cardArray.forEach(card => card.addEventListener('click', flipCard));