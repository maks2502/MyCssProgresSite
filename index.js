let count = 0;
let countElement = document.getElementById("count-el");
let saves = " | ";
let savesElement = document.getElementById("saves");

function increment() {
    count += 1;
    countElement.innerText = count;
}

function reset() {
    count = 0;
    countElement.innerText = count;
}

function save() {
    saves = saves + count + " | ";
    savesElement.innerText = saves;
}

function resetAll() {
    saves = " | ";
    savesElement.innerText = "None";
}
