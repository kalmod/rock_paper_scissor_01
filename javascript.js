console.log('Hello, time to begin...')

const listOfPlayerChoices = [...document.querySelectorAll('#player-choices > .choice-container > .choice')];
const listOfCpuChoices = [...document.querySelectorAll('#cpu-choices > .choice-container > .choice')];

const playButton = document.querySelector('#playButton');
const resetButton = document.querySelector('#resetButton');
const scoreBoard = document.querySelector('#current-score');

let playState = 0;
let playerScore = 0, cpuScore = 0;
let _PLAYERCHOICE = null;
let _CPUCHOICE = null;

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

function playGame(playerChoice,cpuChoice, rounds = 5){
    const roundResult = playRound(playerChoice,cpuChoice);
    if (roundResult == 'You Win.'){
        document.documentElement.style.setProperty('--knock-out-direction', 50);
        const ele = document.querySelector('.cpuChoice');
        setTimeout(() =>{ele.classList.add('knockout');},10);
        
        playerScore++; 
        
    }
    else if (roundResult == 'You Lose.'){
        document.documentElement.style.setProperty('--knock-out-direction', -50);
        const ele = document.querySelector('.playerChoice')
        setTimeout(() =>{
            ele.classList.add('knockout');}, 10 );
        cpuScore++;
    }
    else {
        
        document.documentElement.style.setProperty('--player-color', 'blue');
        document.documentElement.style.setProperty('--cpu-color', 'blue');
    
        

    }
    scoreBoard.textContent = `${playerScore} - ${cpuScore}`
    setTimeout(() => {removeChoices(listOfPlayerChoices,listOfCpuChoices);}, 500);
    if (playerScore >= rounds || cpuScore >= rounds){
        if (playerScore > cpuScore){
            console.log('You Win. Congrats!');
        }
        else{
            console.log('You Lose. HAH!');
        }
        reset();
    }
}

function removeChoices(playerChoices, cpuChoices){
    playerChoices.forEach((item,indx) => {
        item.classList.remove('playerChoice')
        item.classList.remove('knockout')
    })
    cpuChoices.forEach((item,indx) => {
        item.classList.remove('cpuChoice')
        item.classList.remove('knockout')
        item.style.setProperty('--cpu-inactive-color','rgba(10,10,10,0.4)')
    })
    document.documentElement.style.setProperty('--player-color', 'green');
    document.documentElement.style.setProperty('--cpu-color', 'red');
    _PLAYERCHOICE = null;
    _CPUCHOICE = null;
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

function reset(){
    console.log('RESET');
    playState = 0;
    playButton.textContent = 'Play';
    playerScore = 0
    cpuScore = 0;
    scoreBoard.textContent = `${playerScore} - ${cpuScore}`
}

resetButton.addEventListener('click', (e)=>{
    reset();
})


listOfPlayerChoices.forEach((item,indx)=>{
    item.addEventListener('click', e =>{
        if (playState) {
            item.classList.add('playerChoice');
            _PLAYERCHOICE = (document.querySelector('.playerChoice')).dataset.choice
            setTimeout(() => {
                _CPUCHOICE = getComputerChoice();
                console.log(_PLAYERCHOICE,_CPUCHOICE);
            }, 1000);
            
            setTimeout(() => {playGame(_PLAYERCHOICE,_CPUCHOICE);}, 2000);
            
        }
    });
});



// console.log(document.querySelector("#player-choices"));