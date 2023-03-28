console.log('Hello, time to begin...')

const listOfPlayerChoices = [...document.querySelectorAll('#player-choices > .choice-container > .choice')];
const listOfCpuChoices = [...document.querySelectorAll('#cpu-choices > .choice-container > .choice')];

const playButton = document.querySelector('#playButton');
const resetButton = document.querySelector('#resetButton');
const scoreBoard = document.querySelector('#current-score');

let playState = 0;
let playerChoiceMade = false, cpuChoiceMade = false;
// function getComputerChoice(){
//     const choices = ['Rock','Paper','Scissors']
//     let randomChoice = Math.floor(Math.random()*3)
//     return choices[randomChoice]
// }


function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    let randomChoice = Math.floor(Math.random()*3)
    console.log(randomChoice)
    let cpuChoice = document.querySelector(`#cpu-choices [data-choice="${choices[randomChoice]}"]`);
    cpuChoice.classList.add('cpuChoice');
    cpuChoice.style.setProperty('--cpu-inactive-color','transparent')
    return cpuChoice.dataset.choice
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

// function choices(){
//     let playerChoice = (prompt('Please enter Rock, Paper, or Scissors.'));
//     playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
//     let cpuChoice = getComputerChoice();
//     return { playerChoice, cpuChoice } ;
// }

// function choices(){
//     let chosen = (document.querySelector('.playerChoice')).dataset.choice
//     let playerChoice = chosen.dataset.choice
//     if (chosen){
//         let cpuChoice = getComputerChoice();
//     }
//     return { playerChoice, cpuChoice } ;
// }


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
*/
// console.log(game());

function game(){
    let playerChoice, cpuChoice;
    if (!playerChoiceMade){
        console.log('pchoice')
        playerChoice = (document.querySelector('.playerChoice')).dataset.choice
        playerChoiceMade = true;
    }
    console.log(playerChoice, cpuChoice)
}

function removeChoices(playerChoices, cpuChoices){
    playerChoices.forEach((item,indx) => {
        item.classList.remove('playerChoice')
    })
    cpuChoices.forEach((item,indx) => {
        item.classList.remove('cpuChoice')
        item.style.setProperty('--cpu-inactive-color','rgba(10,10,10,0.4)')
    })

}


console.log(listOfPlayerChoices)

playButton.addEventListener('click',function (e){
    if (playState) {
        playState = 0;
        console.log('Stop');
        playButton.textContent = 'Play';
        removeChoices(listOfPlayerChoices,listOfCpuChoices)
    }
    else {
        playState = 1;
        playButton.textContent = 'Stop';
        console.log('Start');

    }
    
})

listOfPlayerChoices.forEach((item,indx)=>{
    item.addEventListener('click', e =>{
        if (playState) {
            item.classList.add('playerChoice');
            let playerChoice = (document.querySelector('.playerChoice')).dataset.choice
            let cpuChoice = getComputerChoice();
            console.log(playerChoice,cpuChoice)
        }
    });
});



// console.log(document.querySelector("#player-choices"));