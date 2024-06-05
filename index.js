//Number Guessing Game

const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

document.getElementById("submit").onclick = function () {
    guess = Number(document.getElementById("guess").value);

    //while (true) {
    //guess = Number(window.prompt("Guess the Number: "));
    attempts++;
    //console.log(attempts);

    if (guess < answer) {
        console.log("Too Low! Try Again!");
    } else if (guess > answer) {
        console.log("Too High! Try Again!");
    } else if (guess == answer) {
        console.log(`You win! You took ${attempts} attempts`);
        document.getElementById(
            "attempt"
        ).innerText = `Total Attempts: ${attempts}`;
        //break;
    } else {
        console.log("Invalid Input! Enter again!");
    }
    //}
};
