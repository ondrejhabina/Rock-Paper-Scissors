//cache the DOM

const playingButtons = document.querySelectorAll('.pics');

const resetButton = document.getElementById('restart');

const playerWindow = document.getElementById('yourPick');
const compWindow = document.getElementById('computerPick');
const winnerWindow = document.getElementById('winner');

const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');

//add event listeners to buttons

document.addEventListener('DOMContentLoaded', () => {
    playingButtons.forEach(but => {
        but.addEventListener('click', () => {
            playGame(but.id)});
    });
    resetButton.addEventListener('click', () => {
        resetFields();
    });
});

function getCompChoice() {
    let computerChoice = '';
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}
function playGame(playerChoice) {
    let playerHand = '';
    playerHand = playerChoice;
    compHand = getCompChoice();

    if (playerHand === compHand) {
        playerWindow.innerText = playerHand;
        compWindow.innerText = compHand;
        winnerWindow.innerText = 'Tied!';
    } else if (playerHand === 'rock') {
        if (compHand === 'paper') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You lost!';
        } else if (compHand === 'scissors') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You won!';
        }
    } else if (playerHand === 'paper') {
        if (compHand === 'rock') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You won!';
        } else if (compHand === 'scissors') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You lost!';
        }
    } else if (playerHand === 'scissors') {
        if (compHand === 'paper') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You won!';
        } else if (compHand === 'rock') {
            playerWindow.innerText = playerHand;
            compWindow.innerText = compHand;
            winnerWindow.innerText = 'You lost!';
        }
    }
    addScore(winnerWindow.innerText);
}

function resetFields() {
    playerWindow.innerText = 'Please choose';
    compWindow.innerText = 'Computer will choose';
    winnerWindow.innerText = "Let's see!";
    playerScore.innerText = "0";
    compScore.innerText = "0";
}

function addScore(endgame) {
    let playerScoreCounter = parseInt(playerScore.innerText);
    let compScoreCounter = parseInt(compScore.innerText);
    let playerScoreString = '';
    let compScoreString = '';
    if (endgame === "YOU LOST!") {
        compScoreCounter++;
        compScoreString = `${compScoreCounter}`;
        compScore.innerText = compScoreString;
    } else if (endgame === "YOU WON!") {
        playerScoreCounter++;
        playerScoreString = `${playerScoreCounter}`;
        playerScore.innerText = playerScoreString;
    }
}