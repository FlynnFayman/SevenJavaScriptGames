//importing Anamtion java script

const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#result")
const startPausebutt = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
//all the girds with left and right Logs
const leftLogs = document.querySelectorAll('.log-left')
const rightLogs = document.querySelectorAll('.log-right')
const river = Array.from(new Set ([...leftLogs,...rightLogs]))
//all the divs with left and right cars
const leftCars = document.querySelectorAll('.car-left')
const rightCars = document.querySelectorAll('.car-right')
//width of the board
const width = 9;
const height = 9;
const gridheight = 180;
const gridWidth = 180;
let currentIndex = 76;
//Fucntion to give controls and anmation to the movement of the frog
function moveFrog(e){
    squares[currentIndex].classList.remove('frog')
    switch(e.key){
        case "ArrowLeft" :
            if(currentIndex % width !== 0){
            currentIndex--;}
            else{

            }
            break;
        case "ArrowRight":
            if(currentIndex % width !== 0){
            currentIndex++;}
            else{

            }
            break;
        case "ArrowUp":
            if(currentIndex % height !== 0){
            currentIndex = currentIndex - 9;}
            else{
        
            }
            break;
        case "ArrowDown":
            if(currentIndex % height !== 0){
            currentIndex = currentIndex + 9;}
            else{

            }
    }
    squares[currentIndex].classList.add('frog')
    CantSwim();
    carDeatiction();
};
document.addEventListener('keyup', moveFrog)
//gobal counters for the move log left 
let k = 0;
let i = 1;

//I shoud create a class for moving objects on left and right movment
function moveLeftLogs(){
    leftLogs[k].classList.remove("currentLog");
    leftLogs[i].classList.remove("currentLog");
    //removing
    //k repesents the frist part of the log
    //i repesents the seconde part of the log the back end
    k++;
    i++;
    k = k % width;
    i = i % width;
    // k i are definde so that they don't closed under addation under modual 6
    leftLogs[k].classList.add("currentLog");
    leftLogs[i].classList.add("currentLog");
}
//logRIx is the top of the log
//logRIy is the bottom of the log
//Its all relative so it dosen't matter
let logRIx = 0;
let logRIy = 1;
let currentLeftLog1 = leftLogs[k]
let currentLeftLog2 = leftLogs[i]
//const anmation1 = new VerticalMovingObjectWithSize2(rightCars,".currentCar",true)
//const anmation2 = new VerticalMovingObjectWithSize2(leftCars,".currentCar",false)

//anmation1.StartandSelectMovement()
function moveRightLog(){
    rightLogs[leftLogs.length - (logRIx + 1)].classList.remove("currentLog");
    rightLogs[leftLogs.length - (logRIy + 1)].classList.remove("currentLog");
    //removing
    //k repesents the frist part of the log
    //i repesents the seconde part of the log the back end
    logRIx++;
    logRIy++;
    logRIx = (logRIx) % width;
    logRIy = (logRIy) % width;
    // k i are definde so that they don't closed under addation under modual 6
    rightLogs[leftLogs.length - (logRIx+1)].classList.add("currentLog");
    rightLogs[leftLogs.length - (logRIy+1)].classList.add("currentLog");


}
//Saving the grid square in order to detecate a collsion
let currentRightLog0 = rightLogs[leftLogs.length - (logRIx+1)].classList.add("currentLog");
let currentRightLog1 = rightLogs[leftLogs.length - (logRIy+1)].classList.add("currentLog");
//Below I'm hopping to add a function to tranvers the grid section I have create
let carindex0 = Math.floor(Math.random() * 8)
let carindex1 = carindex0 + 1
let carindexleft = Math.floor(Math.random() * 8)
let carindexleft1 = carindexleft+1

function MoveObjectLeft(){
    console.log(leftCars)
    leftCars[leftCars.length - (carindex0 + 1)].classList.remove("currentCar")
    leftCars[leftCars.length - (carindex1 + 1)].classList.remove("currentCar")
    carindex0++;
    carindex1++;
    carindex0 = carindex0 % width
    carindex1 = carindex1 % width
    leftCars[leftCars.length - (carindex0 + 1)].classList.add("currentCar")
    leftCars[leftCars.length - (carindex1 + 1)].classList.add("currentCar")

}
function MoveObjectRight(){
    rightCars[carindexleft].classList.remove("currentCar")
    rightCars[carindexleft1].classList.remove("currentCar")
    carindexleft++;
    carindexleft1++;
    carindexleft = carindexleft % width
    carindexleft1 = carindexleft1 % width
    rightCars[carindexleft].classList.add("currentCar")
    rightCars[carindexleft1].classList.add("currentCar")

}
setInterval(MoveObjectRight,1000)
setInterval(MoveObjectLeft,1000)
setInterval(moveLeftLogs,1000);
setInterval(moveRightLog,1000);


//Have to create a Function that will dectect if an objects coldies with a player
//player location is refecenced by
function carDeatiction(){
    if(squares[currentIndex] === rightCars[carindexleft] || 
       squares[currentIndex] === rightCars[carindexleft1] ||
       squares[currentIndex] === squares[carindex0] ||
       squares[currentIndex] === squares[carindex0]
    ){
        alert("Hit by a car game over")
        startGame()

    }
}
//Function to decated if the 
function CantSwim(){
    if(river.includes(squares[currentIndex])){
        if([currentRightLog0,currentRightLog1,currentLeftLog1,currentLeftLog2].includes(squares[currentIndex]) == false){
            alert("You can't swim you lose")
            startGame()
        }

    }

}


function startGame(){
    carindex0 = Math.floor(Math.random() * 8)
    carindex1 = carindex0 + 1
    carindexleft = Math.floor(Math.random() * 8)
    carindexleft1 = carindexleft+1
    k = startingLeftLogIndex[0];
    i = startingLeftLogIndex[1]
    logRIx = 0
    logRIy = 1
    squares[currentIndex].classList.remove('frog')
    currentIndex = 76
    squares[currentIndex].classList.add('frog')

}