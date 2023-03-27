// DICE GAME
/*
const diceGameDiv = document.createElement('div');
diceGameDiv.id = 'diceGame';
// diceGameDiv.classList.add('container-md')
document.querySelector("main").append(diceGameDiv);
*/

// Funzione per generare un numero casuale
function randomNumber(min, max) {
    return Math.floor( Math.random() * max + min );        
 }

// Tasto per giocare
const playButton = document.querySelector('#playButton');


playButton.addEventListener('click', function () {

    let myDice = randomNumber(1, 6);
    let rivalDice = randomNumber(1, 6);
    let outcomeDiv = document.querySelector('#outcome');
    console.log(myDice, rivalDice)

    if (myDice > rivalDice) {
        console.log('Hai vinto');
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Vinto!</h2>'
    }
    else if (myDice < rivalDice) {
        console.log('Hai perso')
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Perso!</h2>'
    }
    else {
        console.log('Pareggio!')
        outcomeDiv.innerHTML = '<h2 class="text-center">Pareggio!</h2>'
    };

    // My hand img
    let myHand = document.querySelector('#myHand');
    myHand.innerHTML = 
    `<img src="./assets/img/dice-${myDice}.svg" alt="Immagine dado giocatore" class="dice-img">`
    console.log(myHand)
    // Rival Hand img
    let rivalHand = document.querySelector('#rivalHand');
    rivalHand.innerHTML = 
    `<img src="./assets/img/dice-${rivalDice}.svg" alt="Immagine dado giocatore" class="dice-img">`
    console.log(rivalHand)

});


