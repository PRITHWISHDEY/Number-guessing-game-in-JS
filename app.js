let min = 1,
    max = 15,
    winningNum = getRandom(min, max),
    guessesLeft = 3;
// UI elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNUm = document.querySelector(".max-num"),
    guessbtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    msgx = document.querySelector(".message");


minNum.textContent = min;
maxNUm.textContent = max;

game.addEventListener("mousedown", function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }

})

guessbtn.addEventListener("click", function () {
    let h = parseInt(guessInput.value);
    if (isNaN(h) || h < min || h > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }


    if (h == winningNum) {
        gameover(true, `${winningNum} is the correct answer, You win`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameover(false, `Your chances are finished the right number is ${winningNum}`)


        } else {
            guessInput.style.borderColor = 'red';

            guessInput.value = '';
            setMessage(`${h} is not correct, ${guessesLeft} guesses left`, 'red');

        }

    }



})

// function setMessage(msg, color) {

//     msgx.style.color = color;
//     msgx.textContent = msg;



// }

function gameover(won, msg) {
    let color;
    won == true ? color = "green" : color = "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    msgx.style.color = color;

    setMessage(msg);
    guessbtn.value = "Play Again";
    guessbtn.className += "play-again";
    // console.log(guessbtn);

}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);


}

function setMessage(msg, color) {

    msgx.style.color = color;
    msgx.textContent = msg;



}