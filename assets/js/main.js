// DICE GAME
function randomNumber(min, max) {
   return Math.floor( Math.random() * max + min );        
}

let myDice = randomNumber(1, 6);
let rivalDice = randomNumber(1, 6);

console.log(myDice, rivalDice)

if (myDice > rivalDice) {
    console.log('Hai vinto')
}
else if (myDice < rivalDice) {
    console.log('Hai perso')
}
else {
    console.log('Pareggio!')
}
