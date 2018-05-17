var startButton = document.getElementById('startButton');
var message = document.getElementById('message');
var money = 100;
var score = 0;
var lives = 3;
var suits = ['spades', 'clubs', 'hearts', 'diams'];
var numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var cards = [];
var cardsRand = [];
var count = 0;
var cardOutput = document.getElementById('cardDisplay');
var highButton = document.getElementById('highButton');
var lowButton = document.getElementById('lowButton');

startButton.addEventListener('click', function () { gameStart() });
highButton.addEventListener('click', function () { highOrLow('high') });
lowButton.addEventListener('click', function () { highOrLow('low') });

function gameStart () {
  message.innerHTML = 'Game Started, leeeciiimyyy';
  startButton.style.display = 'none';
  document.getElementById('highLow').style.display = 'block';
  document.getElementById('score').style.display = 'block';
  buildCards();
  shuffleArray(cards);
  cardOutput.innerHTML += cardDisplay();
}

function buildCards () {
  cards = [];
  for (s in suits) {
    var suit = suits[s][0].toUpperCase();
    for (n in numbers) {
      var card = {
        suit: suits[s],
        number: numbers[n],
        cardValue: parseInt(n) + 2,
        icon: suit
      }
      cards.push(card);
    }
  }
}

function cardDisplay () {
  var c = cardsRand[count];
  var cardColor = (c.icon === 'H' || c.icon === 'D') ? 'red' : 'black';
  return '<span class="icard" style="color:' + cardColor + '">' + c.number + ' &' + c.suit + ';</span>';
}

function highOrLow (guess) {
  var result = false;
  var oldCard = cardsRand[count].cardValue;
  var newCard = cardsRand[count + 1].cardValue;
  var dispResult = document.getElementById('dispResult');
  var scoreDisp = document.getElementById('score');
  count++;
  if (count === 52) cardOutput.innerHTML += '<br> CHOOOPIE NI MOM JUŻ KART' ;
  cardOutput.innerHTML += cardDisplay();
  if (guess === 'high' && oldCard < newCard) { result = true; }
  else if (guess === 'low' && oldCard > newCard) { result = true; }
  if (result) {
    dispResult.innerHTML = 'wyhrana';
    score += 1;
  } else {
    dispResult.innerHTML = 'LOSER';
    lives--;
    if(lives === 0){endPlay()}
  }
//  scoreDisp.innerHTML = 'Your score: ' + score + ' Lives left:' + lives;
}

function endPlay () {
  document.getElementById('highLow').style.display = 'none';
  message.innerHTML = 'FRAJERZE JESTEŚ MARTWY HEHEHEHEH';
}

function shuffleArray (array) {
  for (var i = cards.length - 1; i >= 0; i--) {
    var holder = Math.floor(Math.random() * (i + 1));
    cardsRand[i] = array[holder];
    array.splice(holder, 1);
  }
  console.log(cardsRand);
  return cardsRand;
}
