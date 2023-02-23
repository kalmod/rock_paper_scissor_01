console.log('Hello, time to begin...')

function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    let randomChoice = Math.floor(Math.random()*3)
    return choices[randomChoice]
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) return 'Draw';
    else if (playerSelection === 'rock' && computerSelection === 'paper') return 'You Lose.';
    else if (playerSelection === 'paper' && computerSelection === 'scissors') return 'You Lose.';
    else if (playerSelection === 'scissors' && computerSelection === 'rock') return 'You Lose.';
    else return 'You win!'
}

function choices(){
    let playerChoice = (prompt('Please enter Rock, Paper, or Scissors.')).toLowerCase();
    let cpuChoice = getComputerChoice();
    return { playerChoice, cpuChoice } ;
}
// 
// console.log(playRound(playerChoice,cpuChoice))

function game(rounds=5){
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < rounds; i++){
        let { playerChoice, cpuChoice } = choices();
        let result = playRound(playerChoice, cpuChoice);
        console.log(`player: ${playerChoice} | cpu: ${cpuChoice} | result: ${result}`)
        if (result === 'You win!'){
            playerScore++;
        }
        else if (result == 'You lose.'){
            //cpuScore++;
        }
        // (result === 'You win!') ? playerScore++ : (result === 'You win!') ? cpuScore++ : 0 ;
    }

    if (playerScore > cpuScore) return 'Congratulations! You won!'
    else if (playerScore < cpuScore) return 'You lose! Good day Sir!'
    else return "Draw! Try again next time."

}

console.log(game());