const diceImg = document.getElementById("diceImg");
const rollButton = document.getElementById("roll");
const resetButton = document.getElementById("reset");
const scoreTitle = document.getElementById("scoreTitle");

const maxScore = 20;
let score = 0;
let gameEnded = false;

function resetGame() {
    score = 0;
    diceImg.setAttribute("src", "");
    rollButton.innerText = "Roll";
    gameEnded = false;
    scoreTitle.innerText = '';
}
//reset game onclick
// resetButton.addEventListener('click', () => {
//     console.log ("ckicked");
//     //resetGame();
// })

//onclick change dice ,add and reset if 1
//display lose and win via alert
rollButton.addEventListener('click', () => {
    if (gameEnded == true) {
        resetGame();
    } else {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        const diceImage = "icons/dice" + randomNum + ".png";
        diceImg.setAttribute("src", diceImage);
        
        if (randomNum === 1) {
            alert('You lost');
            rollButton.innerText = "Play Again";
            gameEnded = true;
        } else {

            score += randomNum;
            scoreTitle.innerText = `Your Score: ${score}`;
            if (score >= maxScore) {
                alert('You won');
                rollButton.innerText = "Play Again";
                gameEnded = true;
            }
        }
    }
});