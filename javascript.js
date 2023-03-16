console.log('Hello, time to begin...')

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    let randomChoice = Math.floor(Math.random()*3)
    return choices[randomChoice]
}

const rpsObj = {
    Rock:{weakTo: 'Paper', strongTo: 'Scissors'},
    Paper:{weakTo: 'Scissors', strongTo: 'Rock'},
    Scissors:{weakTo: 'Rock', strongTo: 'Paper'}
}



function playRound(playerSelection, computerSelection){
    if (rpsObj[playerSelection].weakTo === computerSelection) return 'You Lose.';
    else if (rpsObj[playerSelection].strongTo === computerSelection) return 'You Win.';
    else return 'DRAW!'
}

function choices(){
    let playerChoice = (prompt('Please enter Rock, Paper, or Scissors.'));
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    let cpuChoice = getComputerChoice();
    return { playerChoice, cpuChoice } ;
}


// 
// console.log(playRound(playerChoice,cpuChoice))
/*
function game(rounds=5){
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < rounds; i++){
        let { playerChoice, cpuChoice } = choices();
        let result = playRound(playerChoice, cpuChoice);
        console.log(`player: ${playerChoice} | cpu: ${cpuChoice} | result: ${result}`)
        if (result === 'You Win.'){
            playerScore++;
        }
        else if (result == 'You Lose.'){
            cpuScore++;
        }
        // (result === 'You win!') ? playerScore++ : (result === 'You win!') ? cpuScore++ : 0 ;
    }
    console.log(`${playerScore} - ${cpuScore}`)
    if (playerScore > cpuScore) return 'Congratulations! You won!'
    else if (playerScore < cpuScore) return 'You lose! Good day Sir!'
    else return "Draw! Try again next time."

}

console.log(game());
*/




listOfPlayerChoices = [...document.querySelectorAll('#player-choices > .choice-container > .choice')];
console.log(listOfPlayerChoices)
listOfPlayerChoices.forEach((item,indx)=>{
    item.addEventListener('click', e =>{
        item.classList.add('playerChoice');
    });
});

// console.log(document.querySelector("#player-choices"));