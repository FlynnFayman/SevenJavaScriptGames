// Card array list of objects with the name of the objects and 
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    //repeating the amount of objects twice
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },


]

//This bit of code sorts an array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const reslutDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function creatBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id',i);
        //Buy not using () with filp card you are allowing the user to use flipCard when clicking
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

creatBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const cardsId1 = cardsChosenId[0];
    const cardsId2 = cardsChosenId[1];
    if(cardsId1 == cardsId2){
        alert("You have click the same image please click two differnt images")
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        alert("You have found a match!")
        cards[cardsId1].setAttribute('src','images/white.png');
        cards[cardsId2].setAttribute('src','images/white.png');
        cards[cardsId1].removeEventListener('click',flipCard);
        cards[cardsId2].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);

    }
    else{
        cards[cardsId1].setAttribute('src','images/blank.png');
        cards[cardsId2].setAttribute('src','images/blank.png');
        setTimeout(alert("Worng!! Loser!!"), 100);
    }
    reslutDisplay.innerHTML = cardsWon.length
    cardsChosen = [];
    cardsChosenId = [];
    reslutDisplay.textContent = cardsWon.length
    if(cardsWon.length == (cardArray.length/2)){
        reslutDisplay.textContent = "You have found the won"

    }

}

function flipCard(){
    let CardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[CardId].name);
    cardsChosenId.push(CardId)
    this.setAttribute('src',cardArray[CardId].img);
    if(cardsChosen.length === 2){
        //Rember don't use () for checkMathc or another function call
        setTimeout(checkMatch, 500)

    }
}









