const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultChoiceDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
/* winStat = the stats of who one the game
   computerChoice = What the computer randomly chose 
   userChoice = What the user chose*/
let userChoice
let computerChoice
let winStat

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = generateCompterChoice();
    WhoWon(computerChoice,userChoice);
    resultChoiceDisplay.innerHTML = winStat;
}));

function generateCompterChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum);
    switch(randomNum){
        case 1:
            computerChoice = 'rock';
            return 'rock';
        case 2:
            computerChoice = 'paper';
            return 'paper'
        case 3:
            computerChoice = 'scissors';
            return 'scissors';
    }

}

function WhoWon(comGuess,UsGuess){
    if (comGuess == UsGuess){
        winStat = "Draw";
    }
    else if ((UsGuess == "paper" && comGuess == "rock") || 
            (UsGuess == "rock" && comGuess == "scissors") || 
            (UsGuess == "scissors" && comGuess == "paper")){
                winStat = "User Wins";


    }
    else{
        winStat = "Computer Won"
    }

}