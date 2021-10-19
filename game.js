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
]

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
function checkForMatch() {
  let cards = document.querySelectorAll('img')
  let optionOneId = cardsChosenId[0]
  let optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Matched!!!!')
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/white.jpg')
    cards[optionTwoId].setAttribute]('src', 'images/white.jpg')
    alert('Try again')
  }
}

  cardArray.sort(() => 0.5 - Math.random())
  
    
  
    //check for matches

      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }

    createBoard()
  }