console.log("js: loaded")

// WHAT I NEED:
    // "Start" button needs to begin the game, shuffle cards, and bring "Attempts Remaining" to 16
    // We need to be able to interact with each of the cards
    // Each card needs to have a color, as well as a blank face attributed
    // After the second click, if the cards DO NOT match, they need to flip back to their blank side
    // "Attempts Remaining" needs to start at a number, and count down with every click. Let's start with 16
    // If "Attempts Remaining" = 0, browser must display "Game Over: YOU LOSE"
    // If all cards are flipped successfully BEFORE "Attempts Remaining" = 0, browser must display "YOU WIN"
    // "Reset" button needs to turn cards to their blank sides and bring "Attempts Remaining" to 16
    // "Your Score" will be an icebox feature 




/*----- constants -----*/
// initial data states
//animation names
//image assets paths

const INIT_STATE = {
    attempts: 16
}



/*----- state variables -----*/
//state is the data that will change while the game is running



/*----- cached elements -----*/
//querySelector and getElementById, etc.

// const startBtnEl = document.querySelector("#start");
const resetBtnEl = document.querySelector("#reset");
const attemptsEl = document.querySelector("#attempts");

const cardEls = document.querySelectorAll("#grid > div");

const divArray = []

// const divArray = [cardEls];
/*----- event listeners -----*/


/*----- functions -----*/
// Source: https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

let cards = document.getElementById("grid"),
start = document.getElementById("start");
function shuffle(items) {
    let cached = items.slice(0), temp, i = cached.length, rand;
    while(--i) {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes() {
    let nodes = cards.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length) {
        cards.appendChild(nodes[i]); ++i;
    }
}
start.onclick = shuffleNodes;

// Attempts Remaining: 
cards.addEventListener("click", function(e){

})

function flipCard() {
    this.classList.toggle('is-flipped');
};

cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
})