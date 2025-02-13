let firstCard = 2
let secondCard = 11
let sum = firstCard + secondCard

let winner = false
let isalive = true

if(sum <= 20){
    console.log("do you want to draw a new card?")
}
else if(sum === 21){
    console.log("youve won the game!")
     winner = true
}
else{
    console.log("youre out of the game!")
    isalive = false
   }

//
if(winner == true || isalive == false){
    console.log("game is over")
}
else{
    console.log("tuendelee")
}