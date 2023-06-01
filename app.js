const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburgeer",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburgeer",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];
// sorting the array of objects randomly
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.getElementById("result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId === optionTwoId && cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    alert("You have clicked the same Cards");
  }
  if (cardsChosen[0] == cardsChosen[1] && optionOneId !== optionTwoId) {
    alert("You Found a Match");
    cards[optionOneId].setAttribute("src", "./images/white.png");
    cards[optionTwoId].setAttribute("src", "./images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else if (cardsChosen[0] !== cardsChosen[1] && optionOneId !== optionTwoId) {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    alert("No Match, Please Try Again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = " Congratutaltions you Won";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
