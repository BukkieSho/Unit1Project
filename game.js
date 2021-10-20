document.addEventListener('DOMContentLoaded', () => {

//create an array of cards
const cardArray = [
  {name: 'apple', img: 'images/apple.jpg'},
  {name: 'avocado', img: 'images/avocado.jpg'},
  {name: 'banana', img: 'images/banana.jpg'},
  {name: 'cherry', img: 'images/cherry.jpg'},
  {name: 'orange', img: 'images/orange.jpg'},
  {name: 'pineapple', img: 'images/pineapple.jpg'},
  {name: 'strawberry', img: 'images/strawberry.jpg'},
  {name: 'blank', img: 'images/blank.jpg'},
  {name: 'back', img: 'images/back.png'}
]
cardArray.sort(() => 0.5 - Math.random())
const resultDisplay = document.querySelector('#result')

//create grid and deck of cards to fill up the grid
const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', 'images/blank.jpg')
    card.setAttribute('data-id', i)
    //eventListener to clip the card when player clicks
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

// for loop to display image when card is clicked, like an event listener
for (let i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);
};

//to flip the card

function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

//check if cards match after clicking
function checkForMatch(){
  let cards = document.querySelectorAll('img')
  let optionOneId = cardsChosenId[0]
  let optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Matched!!!!');
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    cardsWon.push(cardsChosen);
    } else {
    cards[optionOneId].setAttribute('src', 'images/back.png');
    cards[optionTwoId].setAttribute('src', 'images/back.png');
    alert('Try again');
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Good Job!'
  } else {
    createBoard()
  }
}