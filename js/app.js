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
// const attemptsEl = document.querySelector("#attempts");



const cardEls = document.querySelectorAll("#grid > div");



// const card1 = document.getElementById("1")
// const card2 = document.getElementById("2")
// const card3 = document.getElementById("3")
// const card4 = document.getElementById("4")
// const card5 = document.getElementById("5")
// const card6 = document.getElementById("6")
// const card7 = document.getElementById("7")
// const card8 = document.getElementById("8")
// const card9 = document.getElementById("9")
// const card10 = document.getElementById("10")
// const card11 = document.getElementById("11")
// const card12 = document.getElementById("12")
// const card13 = document.getElementById("13")
// const card14 = document.getElementById("14")
// const card15 = document.getElementById("15")
// const card16 = document.getElementById("16")
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



// function flipCard() {
//     this.classList.toggle('is-flipped');
// };

// cards.forEach(function (card) {
//     card.addEventListener("click", flipCard);
// })

const firstPair = document.querySelectorAll(".first-pair")
const secondPair = document.querySelectorAll(".second-pair")
//console.log(firstPair)

let attemptsRemaining = document.querySelector("#remaining");

let num1;
let num2;
let class1;
let class2;
let flip = 0
attemptsRemaining.innerHTML = 16;
function flipCard(evt) {
    flip++
    const card = evt.target
    console.log(card.getAttribute("class"))
    const cardClass = card.getAttribute("class");
    if(flip === 1) {
        attemptsRemaining.innerHTML--
        num1=card
        class1=cardClass
        card.style.backgroundColor = "blue"
    } else if(flip === 2) {
        attemptsRemaining.innerHTML--
        num2 = card
        class2 = cardClass
        card.style.backgroundColor = "blue"
    } 
console.log(attemptsRemaining.innerHTML)
    if (class1 === class2) {
        console.log("same")
        flip = 0
    }else if (flip === 2 && class1 !== class2) {
        num1.style.backgroundColor = "gray";
        num2.style.backgroundColor = "gray"
        console.log("different")
        flip = 0;
    }
    //DRAFT
    
    
    
    
    
    
    // if(card.id === num1) {
    //     card.style.backgroundColor = "blue";
    // }if(card.id === num2) {
    //     card.style.backgroundColor = "blue"
    // }
    // // else if(card.id !== "1" && card.id !== "2") {
    // //     card.style.backgroundColor = "green"
    // // }
    // else if(card.id != "1" && card.id != "2") {
    //     card1.style.background = "gray";
    // }
if (attemptsRemaining.innerHTML <=0) {
    alert("Game Over")
    console.log("GAME OVER")
}
}
cardEls.forEach(function(card) {
    card.addEventListener("click", flipCard)
})
// card1.addEventListener("click", flipCard)
// card2.addEventListener("click", flipCard)
// card3.addEventListener("click", flipCard)



// card1.addEventListener("click", function(evt) {
//     if(evt.currentTarget.id = "1") {
//         card1.style.backgroundColor = "blue";
//     } else {
//         card1.style.backgroundColor = "gray";
//     }
// })      

// card2.addEventListener("click", function(evt) {
//     if(evt.currentTarget.id = "2") {
//         card2.style.backgroundColor = "blue";
//     } 
// })