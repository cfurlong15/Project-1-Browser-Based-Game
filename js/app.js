/*----- state variables -----*/

let num1;
let num2;
let class1;
let class2;
let cardId;
let firstColor;


/*----- cached elements -----*/

const start = document.getElementById("start");
const cardEls = document.querySelectorAll("#grid > div");
const youWin = document.getElementById("you-win");
const youLose = document.getElementById("you-lose");
const resetBtnEl = document.getElementById("reset");
let cards = document.getElementById("grid");
let attemptsRemaining = document.querySelector("#remaining");


/*----- shuffle functions -----*/

// Source: https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

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


/*----- function flipCard state variables -----*/

attemptsRemaining.innerHTML = 20;
let flip = 0
let win = 0;


/*----- function flipCard -----*/

function flipCard(evt) {
    let cardColor = ""
    flip++
    const card = evt.target;
    console.log(card);
    let cardClass = card.getAttribute("class");
    if(cardClass === "first-pair" && !card.classList.contains("blue")) {
         cardColor = "blue";
         cardId = card.id;
         card.classList.add(cardColor);
    } else if(cardClass === "second-pair" && !card.classList.contains("green")) {
        cardColor = "green";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "third-pair" && !card.classList.contains("yellow")) {
        cardColor = "yellow";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "fourth-pair" && !card.classList.contains("orange")) {
        cardColor = "orange";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "fifth-pair" && !card.classList.contains("pink")) {
        cardColor = "pink";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "sixth-pair" && !card.classList.contains("purple")) {
        cardColor = "purple";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "seventh-pair" && !card.classList.contains("red")) {
        cardColor = "red";
        cardId = card.id;
        card.classList.add(cardColor);
    } else if(cardClass === "eighth-pair" && !card.classList.contains("white")) {
        cardColor = "white";
        cardId = card.id;
        card.classList.add(cardColor);
    } 
    if(flip === 1) {
    attemptsRemaining.innerHTML--
        num1=card;
        class1=cardClass;
        firstColor=cardColor;
     } else if(flip === 2) { 
        num2 = card;
        class2 = cardClass;
    } else if(flip === 2 && cardId === card.id) {
        flip=1;
    }
    console.log(attemptsRemaining.innerHTML)
    if (class1 === class2 && flip === 2) {
       console.log("same");
        flip = 0;
        win++
    }else if (flip === 2 && class1 !== class2) {
        console.log("different");
        num1.classList.remove(firstColor);
        num2.classList.remove(cardColor);
        flip = 0;
    }
    if (win === 8) {
        youWin.innerHTML = "You Win!";
    }
    if (attemptsRemaining.innerHTML < 1) {
        youLose.innerHTML = "You Lose! Try Again!"
    }
}


/*----- function reset -----*/

function reset(evt) {
    if (evt.target === resetBtnEl) {
        flip = 0;
        attemptsRemaining.innerHTML = 20;
        cardEls.forEach(function(card) {
            card.classList.remove("blue", "green", "yellow", "orange", "pink", "purple", "red", "white");
            win = 0;
            youWin.innerHTML = "";
            youLose.innerHTML = "";
        })
    }
}


/*----- event listeners -----*/

cardEls.forEach(function(card) {
    card.addEventListener("click", flipCard);
})

resetBtnEl.addEventListener("click", reset);



    
