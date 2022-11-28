let firstCard = 11;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
let heyEl = document.querySelector(".hey-el");

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    let newCard = 5;
    sum += newCard;
    cards.push(newCard);
    renderGame();
}


let render = ["my name", "kekskes", "maksioooo"];

for (let i = 0; i < render.length; i++) {
    heyEl.textContent += render[i];
}

