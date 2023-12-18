const ids = ['John', 'Cati', 'Austin', 'Piper', 'Lydia', 'Matt', 'Andy'];
const months = ['JAN', 'FEB', 'MAR', "APR", 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const wins = document.getElementById('wins'); //done
const losses = document.getElementById('losses'); //done
const currentDate = document.getElementById('date'); //done

const name = document.getElementById('name'); //done
const exp = document.getElementById('exp');
const bday = document.getElementById('bday');
const pic = document.getElementById('pic');

const accepted = document.getElementById('accepted')
const deny = document.getElementById('deny');
const start = document.getElementById('start');


currentDate.textContent = ' DEC 2023'
let currentDateM = 11
let currentDateY  = 2023

let wCount = 0;
let lCount = 0; 
let randomIndex = 0;
let currentPerson = 0

function randomMonth () { //gives random index number for months array
    return rando(0, 11)
}
function randoYr () { // random year
    return rando(1990, 2003);
}
function randoExp () { // random exp yr
    return rando(2020, 2028);
}
function randoName () { // random index number for names
    return rando(0, 6);
}

function displayPerson () { // displays person on card
    name.textContent = ids[randoName()];
    exp.textContent =  randoExp(); //months[randomMonth()] + ' ' +
    bday.textContent = randoYr(); //months[randomMonth()] + ' ' + 
    
}
displayPerson();

let expNumber = parseInt(exp.textContent, 10)
let dobNumberYr = parseInt(bday.textContent, 10)

let sum = 0;
function ageCalc () {
    sum = currentDateY - dobNumberYr
}

accepted.addEventListener('click', function () { //functionality for buttons
    if (expNumber >= currentDateY || ageCalc >= 21) {
        if (sum >= 21) {
            wCount++
            wins.textContent = wCount;
            
        }
        else {
            lCount++ 
            losses.textContent = lCount;
            console.log('no');
        }
    } else {
        console.log(':(');
    }
    currentPerson++
    displayPerson();
})
ageCalc();
console.log(ageCalc());

losses.addEventListener('click', function () {
    //exp date is greater than current date or bday month is greater than current date month && bday yr is greater than curernt date yr
})



let sumOfScore = lCount + wCount;

function endGame () { // not working, supposed to show 'game over' when a certain score is reached
    
}
endGame();

function scoreColor() { // not working, supposed to change the color of the score numbers
    if (wins.textContent > 0) {
        document.getElementById('wins').style.color = 'green'
    }
    if (losses.textContent < 0) {
        document.getElementById('losses').style.color = 'red'
    }
}
scoreColor();




