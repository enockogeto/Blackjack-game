let firstCard = 8
let secondCard = 10
let cards = [firstCard,secondCard]

let sum = firstCard + secondCard

let winner = false
let isalive = true

let sumel = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")
let message = " "

function startgame(){
    rendergame()
}
function rendergame(){
    document.getElementById("cards").textContent = "Cards: " +cards[0] +"," +cards[1]
    sumel.textContent = "Sum: " + sum
    if(sum <= 20){
        message ="draw another card"
    }
    else if(sum === 21){
        message = "You've won the game!"
         winner = true
    }
    else{
        message ="you're out of the game!"
        isalive = false
       }

 messageEl.textContent = message
}

function newcard(){
  let pickcard = 1
  document.getElementById("newcard").textContent = "New Card: " +pickcard
  sum += pickcard 
  rendergame()()
}