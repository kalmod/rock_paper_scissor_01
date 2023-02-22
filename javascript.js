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

let playerChoice = (prompt('Please enter Rock, Paper, or Scissors.')).toLowerCase();
let cpuChoice = getComputerChoice();

console.log(`player: ${playerChoice} cpu: ${cpuChoice}`)
console.log(playRound(playerChoice,cpuChoice))