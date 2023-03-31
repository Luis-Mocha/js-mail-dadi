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

    /*
    if (emailList.includes(emailValue)) {
        validationDiv.classList.add("d-none");
        diceGame.classList.remove("d-none")
        welcomeText.innerHTML = `Ciao ${floatingName} ${floatingSurname}`;
    }
    else {
        alert("E-MAIL NON VALIDA. NON HAI ACCESSO A QUESTO SERVIZIO - TORNA INDIETRO");
    }
    */

    // metodo con ciclo for e variabile di controllo
    let controllo = false;
    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] == emailValue ) {
            controllo = true;
        }
    }
    
    if (controllo == true) {
        validationDiv.classList.add("d-none");
        diceGame.classList.remove("d-none")
        welcomeText.innerHTML = `Ciao ${floatingName} ${floatingSurname}`;
    }
    else {
        alert("E-MAIL NON VALIDA. NON HAI ACCESSO A QUESTO SERVIZIO - TORNA INDIETRO");
    }


});

// Bottone di reset
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    window.location.reload();
});



// DICE GAME

let winDiv = document.querySelector('#winDiv');
let lossDiv = document.querySelector('#lossDiv');
let drawDiv = document.querySelector('#drawDiv');
let numberGames = document.querySelector('#numberGames');

let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

// Funzione per generare un numero casuale
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );        
};

// Tasto per giocare
const playButton = document.querySelector('#playButton');

// Funzione al click del play button
playButton.addEventListener('click', function () {

    let myDice = randomNumber(1, 6);
    let rivalDice = randomNumber(1, 6);
    let outcomeDiv = document.querySelector('#outcome');
    console.log(myDice, rivalDice)

    

    if (myDice > rivalDice) {
        console.log('Hai vinto');
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Vinto!</h2>';
        winCounter += 1;

    }
    else if (myDice < rivalDice) {
        console.log('Hai perso');
        outcomeDiv.innerHTML = '<h2 class="text-center">Hai Perso!</h2>';
        lossCounter += 1;
    }
    else {
        console.log('Pareggio!');
        outcomeDiv.innerHTML = '<h2 class="text-center">Pareggio!</h2>';
        drawCounter += 1;
    };

    console.log(winCounter, lossCounter, drawCounter)


    // My hand img
    let myHand = document.querySelector('#myHand');
    myHand.innerHTML = 
    `<span class="d-block fw-semibold text-center text-uppercase mb-3">Your dice</span>
    <img src="./assets/img/dice-${myDice}.svg" alt="Immagine dado giocatore" class="dice-img">`;
    // Rival Hand img
    let rivalHand = document.querySelector('#rivalHand');
    rivalHand.innerHTML =
    `<span class="d-block fw-semibold text-center text-uppercase mb-3">Computer dice</span>
    <img src="./assets/img/dice-${rivalDice}.svg" alt="Immagine dado giocatore" class="dice-img">`;

    // stats
    let gamesCounter = winCounter + lossCounter + drawCounter;
    
    winDiv.innerHTML = `Vittorie: ${winCounter}`;
    lossDiv.innerHTML = `Sconfitte: ${lossCounter}`;
    drawDiv.innerHTML = `Pareggi: ${drawCounter}`;
    numberGames.innerHTML = `Partite Giocate: ${gamesCounter}`;

    // cambio la scritta sul bottone
    playButton.innerHTML = 'Prova ancora!';
    let presentation = document.querySelector('#presentation');
    presentation.classList.add('d-none');

});

