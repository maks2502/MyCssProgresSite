let count = 0;
let countElement = document.getElementById("count-el");

function increment() {
    count += 1;
    countElement.innerText = count;
    console.log(count);
}

function reset() {
    count = 0;
    countElement.innerText = count;
}

function save() {
    
}