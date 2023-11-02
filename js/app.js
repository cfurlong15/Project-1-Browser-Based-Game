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

const firstPair = document.querySelectorAll(".blue")
const secondPair = document.querySelectorAll(".second-pair")
//console.log(firstPair)

let attemptsRemaining = document.querySelector("#remaining");

let num1;
let num2;
let class1;
let class2;
let flip = 0
attemptsRemaining.innerHTML = 20;
let firstColor;
let win = 0;
function flipCard(evt) {
    let cardColor = ""
    flip++
    const card = evt.target
   // console.log(card.getAttribute("class"))
    let cardClass = card.getAttribute("class");
    //console.log(class1)
    if(cardClass === "first-pair") {
         cardColor = "blue"
    } else if(cardClass === "second-pair") {
        cardColor = "green"
    } else if(cardClass === "third-pair") {
        cardColor = "yellow"
    } else if(cardClass === "fourth-pair") {
        cardColor = "orange"
    } else if(cardClass === "fifth-pair") {
        cardColor = "pink"
    } else if(cardClass === "sixth-pair") {
        cardColor = "purple"
    } else if(cardClass === "seventh-pair") {
        cardColor = "red"
    } else if(cardClass === "eighth-pair") {
        cardColor = "black"
    } 
    if(flip === 1) {
    attemptsRemaining.innerHTML--
        num1=card
        class1=cardClass
        firstColor=cardColor
        //card.style.background = "blue"
        card.classList.add(cardColor)
    } else if(flip === 2) {
        attemptsRemaining.innerHTML--
        num2 = card
        class2 = cardClass
        card.classList.add(cardColor)
    } 

    
console.log(attemptsRemaining.innerHTML)
    console.log(class1, class2)
    //console.log(num1, num2)
if (class1 === class2 && flip === 2) {
       console.log("same")
        flip = 0
        win++
    }else if (flip === 2 && class1 !== class2) {
        num1.classList.remove(firstColor)
        num2.classList.remove(cardColor)
       console.log("different")
        flip = 0;
    }

 if (win === 8) {
     alert("You Win!")
 }

if (attemptsRemaining.innerHTML <=0) {
    alert("Game Over")
    console.log("GAME OVER")
}
}

cardEls.forEach(function(card) {
    card.addEventListener("click", flipCard)
})


const resetBtnEl = document.getElementById("reset");

function reset(evt) {
    if (evt.target == resetBtnEl) {
        attemptsRemaining.innerHTML = 20
        cardEls.forEach(function(card) {
            card.classList.add("gray")
        })
        flip = 0
    }
}
resetBtnEl.addEventListener("click", reset)



    
