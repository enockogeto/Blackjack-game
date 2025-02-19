let cards = []
let sum = 0

let winner = false
let isalive = true

let message = " "

let player ={
    name: "eones",
    dimes: 100
}
document.querySelector("#player-el").textContent= player.name +": $"+ player.dimes
function randomnumber(){
    let randomN = Math.floor(Math.random()*13) + 1
    if(randomN > 10){ return 10}
    else if(randomN === 1){ return 11}
    else{return randomN}
}

function startgame(){
    let firstCard = randomnumber()
    let secondCard = randomnumber()
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard

    rendergame()
}

function rendergame(){

    document.querySelector("#cards").textContent = "Cards: " + cards
    document.querySelector("#sum-el").textContent = "Sum: " + sum

    if(sum <= 20){
        message ="draw another card"
    }
    else if(sum === 21){
        message = "You've won the game!"
         winner = true
         isalive = false
    }
    else{
        message ="you're out of the game!"
        isalive = false
       }

       document.querySelector("#message-el").textContent = message
}

function newcard(){
    if(isalive === true && winner === false){
        let pickcard = randomnumber()
        document.getElementById("newcard").textContent = "New Card: " +pickcard
        sum += pickcard 
        cards.push(pickcard)

       rendergame()
    }
}

function resetgame(){
    
}