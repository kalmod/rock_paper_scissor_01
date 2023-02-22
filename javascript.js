console.log('Hello, time to begin...')

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    let randomChoice = Math.floor(Math.random()*3)
    return choices[randomChoice]
}

for (let i = 0; i < 10; i++){
    console.log(getComputerChoice())
}