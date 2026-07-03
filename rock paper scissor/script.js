let resultText = document.getElementById("result-text");

function result(user_choice, computer_choice) {

    if (user_choice === computer_choice) {
        return "It's a Draw!";
    }

    if (
        (user_choice === "rock" && computer_choice === "scissor") ||
        (user_choice === "paper" && computer_choice === "rock") ||
        (user_choice === "scissor" && computer_choice === "paper")
    ) {
        return "You Win!";
    }

    return "Computer Wins!";
}

function playGame(user_choice) {

    let computer_choice;
    let random = Math.random();

    if (random < 0.33) {
        computer_choice = "rock";
    } else if (random < 0.66) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissor";
    }

    let win = result(user_choice, computer_choice);

    resultText.innerHTML =
        `You chose ${user_choice} <br>
         Computer chose ${computer_choice} <br>
         ${win}`;

    console.log("User Choice:", user_choice);
    console.log("Computer Choice:", computer_choice);
    console.log(win);
}

document.getElementById("rock").addEventListener("click", () => {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playGame("paper");
});

document.getElementById("scissor").addEventListener("click", () => {
    playGame("scissor");
});