var startButton = document.getElementById('startButton');
var message = document.getElementById('message');
var money = 100;
var suits = ['spades', 'clubs', 'hearts', 'diams'];
var numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var cards = [];
var cardsRand = [];
var cardOutput = document.getElementById('cardDisplay');
var count = 0;

startButton.addEventListener('click', function () { gameStart() });


function gameStart () {
  message.innerHTML = 'Game Started, leeeciiimyyy';
  startButton.style.display = 'none';
  buildCards();
  shuffleArray(cards);
  cardOutput.innerHTML += cardDisplay();
}

function buildCards () {
  cards = [];
  for (s in suits){
    var suit = suits[s][0].toUpperCase();
    for (n in numbers){
      var card = {
        suit: suits[s],
        number: numbers[n],
        value: parseInt(n) + 1,
        icon: suit
      }
      cards.push(card);
    }
  }
}

function cardDisplay () {
  return cardsRand[count].number + ' &' + cardsRand[count].suit + ';';
}

function shuffleArray (array) {
  for (var i = cards.length - 1; i >= 0; i--){
    var holder = Math.floor(Math.random() * (i + 1));
    cardsRand[i] = array[holder];
    array.splice(holder, 1);
    console.log(cardsRand[i]);
  }
  return cardsRand;
}
