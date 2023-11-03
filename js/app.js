/*----- constants -----*/
// initial data states
//animation names
//image assets paths



/*----- state variables -----*/
//state is the data that will change while the game is running



/*----- cached elements -----*/


const cardEls = document.querySelectorAll("#grid > div");






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





const firstPair = document.querySelectorAll(".blue")
const secondPair = document.querySelectorAll(".second-pair")

let attemptsRemaining = document.querySelector("#remaining");
const youWin = document.getElementById("you-win");
const youLose = document.getElementById("you-lose");

let num1;
let num2;
let class1;
let class2;
let flip = 0
attemptsRemaining.innerHTML = 20;
let firstColor;
let win = 0;
let cardId;
function flipCard(evt) {
    let cardColor = ""
    flip++
    const card = evt.target
    console.log(card)
    
   // console.log(card.getAttribute("class"))
    let cardClass = card.getAttribute("class");
    //console.log(class1)
    if(cardClass === "first-pair" && !card.classList.contains("blue")) {
         cardColor = "blue"
         cardId = card.id
         card.classList.add(cardColor)
    } else if(cardClass === "second-pair" && !card.classList.contains("green")) {
        cardColor = "green"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "third-pair" && !card.classList.contains("yellow")) {
        cardColor = "yellow"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "fourth-pair" && !card.classList.contains("orange")) {
        cardColor = "orange"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "fifth-pair" && !card.classList.contains("pink")) {
        cardColor = "pink"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "sixth-pair" && !card.classList.contains("purple")) {
        cardColor = "purple"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "seventh-pair" && !card.classList.contains("red")) {
        cardColor = "red"
        cardId = card.id
        card.classList.add(cardColor)
    } else if(cardClass === "eighth-pair" && !card.classList.contains("black")) {
        cardColor = "black"
        cardId = card.id
        card.classList.add(cardColor)
    } 
    if(flip === 1) {
    attemptsRemaining.innerHTML--
        num1=card
        class1=cardClass
        firstColor=cardColor
        
     } else if(flip === 2) { 
        num2 = card
        class2 = cardClass
    } else if(flip === 2 && cardId === card.id) {
        flip=1
    }

    
console.log(attemptsRemaining.innerHTML)
    //console.log(num1, num2)
if (class1 === class2 && flip === 2) {
       console.log("same")
        flip = 0
        win++
    }else if (flip === 2 && class1 !== class2) {
        console.log("different")
        num1.classList.remove(firstColor)
        num2.classList.remove(cardColor)
       
        flip = 0;
    }

 if (win === 8) {
   // youWin.append()
    youWin.innerHTML = "You Win!"
     console.log("You Win!")
 }

if (attemptsRemaining.innerHTML < 1) {
    //youLose.append()
    youLose.innerHTML = "You Lose! Try Again!"
    console.log("GAME OVER")
}
}

cardEls.forEach(function(card) {
    card.addEventListener("click", flipCard)
})


const resetBtnEl = document.getElementById("reset");

function reset(evt) {
    if (evt.target === resetBtnEl) {
        flip = 0
        attemptsRemaining.innerHTML = 20
        cardEls.forEach(function(card) {
            card.classList.remove("blue", "green", "yellow", "orange", "pink", "purple", "red", "black")
            win = 0
            youWin.innerHTML = ""
            youLose.innerHTML = ""
            
        })
        
    }
}
resetBtnEl.addEventListener("click", reset)



    
