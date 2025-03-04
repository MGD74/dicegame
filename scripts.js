
dices = ["one", "two", "three", "four", "five", "six"]

// players 

const playerOne = document.querySelector(".img1");
const playerTwo = document.querySelector(".img2"); 
const gameResult = document.querySelector("h1");

function diceGame() {
    // getting a random number from 0 to 5 (total of 6 numbers);
    const diceOne = Math.floor(Math.random() * dices.length);
    const diceTwo = Math.floor(Math.random() * dices.length);

    if (diceOne === 0) {
        playerOne.setAttribute("src", "./images/dice1.png");
    }else if (diceOne === 1){
        playerOne.setAttribute("src", "./images/dice2.png");
    }else if (diceOne === 2){
        playerOne.setAttribute("src", "./images/dice3.png");
    }else if (diceOne === 3){
        playerOne.setAttribute("src", "./images/dice4.png");
    }else if (diceOne === 4){
        playerOne.setAttribute("src", "./images/dice5.png");
    }else if (diceOne === 5){
        playerOne.setAttribute("src", "./images/dice6.png");
    }

    if (diceTwo === 0) {
        playerTwo.setAttribute("src", "./images/dice1.png");
    }else if (diceTwo === 1){
        playerTwo.setAttribute("src", "./images/dice2.png");
    }else if (diceTwo === 2){
        playerTwo.setAttribute("src", "./images/dice3.png");
    }else if (diceTwo === 3){
        playerTwo.setAttribute("src", "./images/dice4.png");
    }else if (diceTwo === 4){
        playerTwo.setAttribute("src", "./images/dice5.png");
    }else if (diceTwo === 5){
        playerTwo.setAttribute("src", "./images/dice6.png");
    }

    if(diceOne > diceTwo) {
        gameResult.innerHTML = "Player 1 Wins!";
    } else if (diceOne < diceTwo) {
        gameResult.innerHTML = "Player 2 Wins!";
    } else if (diceOne === diceTwo) {
        gameResult.innerHTML = "Draw!";
    }

}

diceGame();



















