function computerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getUserChoice() {
    return prompt("1 for rock, 2 for paper, 3 for scissors")
}


function check(comp, player) {
    if (comp === player) {
        console.log("Tie");
        return
    }
    else if (player === "rock") {
        if (comp === "paper") {
            console.log("rock is catched by paper,so you lose");
        }
        else {
            console.log("rock breaks scissors,so you win");
        }
        return
    }
    else if (player === "paper") {
        if (comp === "rock") {
            console.log("paper catches rock,so you win");
        }
        else {
            console.log("paper is cut by paper,so you lose");
        }
        return
    } else if (player === "scissors") {
        if (comp === "rock") {
            console.log("scissors is broke by rock,so you lose");
        }
        else {
            console.log("scissors cuts paper,so you win");
        }
        return

    }
}

function play(n = 5) {
    for (let i = 0; i < n; i++) {

        check(computerChoice(), getUserChoice())
    }
}

play()