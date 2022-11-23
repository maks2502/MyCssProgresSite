let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCard = 5;

function startGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "BLACK JACK!";
        hasBlackJack = true;
    } else {
        message = "You lose :(";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function drawNewCard() {
    sum += newCard;
    startGame();
}
