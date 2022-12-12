const diceImg = document.getElementById("diceImg");
const rollButton = document.getElementById("roll");
const holdButton = document.getElementById("hold");
const newgameButton = document.getElementById("newgame");
const scoreTitle1 = document.getElementById("scoreTitle1");
const scoreTitle2 = document.getElementById("scoreTitle2");
const playerBoard1 = document.getElementById("player1"); 
const playerBoard2 = document.getElementById("player2");

const maxScore = 20;// can be changed for test
let score1 = 0;
let score2 = 0;
let playerTurn = 1;
//start again
function resetGame() {
    score1 = 0;
    score2 = 0;
    gameEnded = false;
    playerTurn = 1;

    diceImg.setAttribute("src", "");
    scoreTitle1.innerText = '';
    scoreTitle2.innerText = '';
}
//add scores for both according to playerTurn value 1 or 2
function addScore(score) {
    if (playerTurn === 1) {
        score1 += score;
        scoreTitle1.innerText = `Score : ${score1}`;
        return score1;
    } else if (playerTurn === 2) {
        score2 += score;
        scoreTitle2.innerText = `Score : ${score2}`;
        return score2;
    }
}
//end of the game declaring the winner according to global variable playerTurn 1 or 2
//also it hide the 2 players buttons
function endGame() {
    if (playerTurn === 1) {
        alert('Player 1 won!');
    } else if (playerTurn === 2) {
        alert('Player 2 won!');
    }

    rollButton.style.visibility = 'hidden';
    holdButton.style.visibility = 'hidden';
    newgameButton.style.visibility = 'visible';
}
// on the screen switch between player 
function updateActivePlayer() {
    if(playerTurn === 1) {
        playerBoard1.className = 'active-player';
        playerBoard2.className = '';
    } else if (playerTurn === 2) {
        playerBoard1.className = '';
        playerBoard2.className = 'active-player';
    }
}
// actual switch of player changing global variable playerTurn to 1 or 2
function switchTurns() {
    if(playerTurn === 1) {
        playerTurn = 2;
    } else if(playerTurn === 2) {
        playerTurn = 1;
    }

    updateActivePlayer();
}
//if dice 1 reset the current player
function resetScore() {
    if(playerTurn === 1) {
        score1 = 0;
        scoreTitle1.innerText = `Score : ${score1}`;
    } else {
        score2 = 0;
        scoreTitle2.innerText = `Score : ${score2}`;
    }

    switchTurns();
}
//rolling the dice
const roll = () => {
    updateActivePlayer();

    const randomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = "icons/dice" + randomNum + ".png";
    diceImg.setAttribute("src", firstDiceImage);

    if (randomNum === 1) {
        resetScore();
    } else {
        const score = addScore(randomNum);
        if (score >= maxScore) {
            endGame();
        }
    }
}
//new game 
const newGame = () => {
    rollButton.style.visibility = 'visible';
    holdButton.style.visibility = 'visible';
    newgameButton.style.visibility = 'hidden';
    resetGame();
    updateActivePlayer();
}
// clicking listner and actions
newgameButton.addEventListener('click', newGame);
rollButton.addEventListener('click', roll);
holdButton.addEventListener('click', switchTurns);