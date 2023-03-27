// DICE GAME

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
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Vinto!</h2>';
    }
    else if (myDice < rivalDice) {
        console.log('Hai perso');
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Perso!</h2>';
    }
    else {
        console.log('Pareggio!');
        outcomeDiv.innerHTML = '<h2 class="text-center">Pareggio!</h2>';
    };

    // My hand img
    let myHand = document.querySelector('#myHand');
    myHand.innerHTML = 
    `<img src="./assets/img/dice-${myDice}.svg" alt="Immagine dado giocatore" class="dice-img">`;
    // Rival Hand img
    let rivalHand = document.querySelector('#rivalHand');
    rivalHand.innerHTML = 
    `<img src="./assets/img/dice-${rivalDice}.svg" alt="Immagine dado giocatore" class="dice-img">`;

});

// VALIDATION FORM

const validationDiv = document.querySelector('#validationDiv');
const loginButton = document.querySelector('#loginButton');
const diceGame = document.querySelector('#diceGame');
let welcomeText = document.querySelector('main h1');

let emailList = ['player1@gmail.com', 'player2@live.it', 'player3@gmail.com', 'player4@gmail.com', 'player5@live.it'];


loginButton.addEventListener('click', function (invioForm) {
    //Evito che si ricarichi il sito
    invioForm.preventDefault();

    // valori del form
    let emailValue = document.querySelector('#floatingEmail').value;
    const floatingName = document.querySelector('#floatingName').value;
    const floatingSurname = document.querySelector('#floatingSurname').value;


    if (emailList.includes(emailValue)) {
        validationDiv.classList.add("d-none");
        diceGame.classList.remove("d-none")
        welcomeText.innerHTML = `Benvenuto ${floatingName} ${floatingSurname}`;
    }
    else {
        alert("E-MAIL NON VALIDA. NON HAI ACCESSO A QUESTO SERVIZIO - TORNA INDIETRO");
    }

});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    window.location.reload();
});

