function game () {
    let playerSelection = prompt ("Make your choice\:", "Rock, Paper, or Scissors").toUpperCase();
    let computerSelection = computerPlay();

    for (i = 0 ; i < 5; i++) {
        return playRound(playerSelection, computerSelection);
    }

    function computerPlay() {
        const cPlay = ["Rock", "Paper", "Scissors"];
        const randNum = Math.floor(Math.random()* 3);
        return cPlay[randNum];
    }

    function singleRound() {
        
    }
}