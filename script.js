const ids = ['John', 'Cati', 'Austin', 'Piper', 'Lydia', 'Matt', 'Andy', 'Mariela', 'Elena', 'Victoria', 'Jayden', 'Jesse'];
const months = ['JAN', 'FEB', 'MAR', "APR", 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const wins = document.getElementById('wins'); 
const losses = document.getElementById('losses'); 
const currentDate = document.getElementById('date'); 

const name = document.getElementById('name'); 
const exp = document.getElementById('exp');
const bday = document.getElementById('bday');
const pic = document.getElementById('pic');
const bdayMonth = document.getElementById('bdayMonth');
const expMonth = document.getElementById('expMonth');

const accepted = document.getElementById('accepted')
const deny = document.getElementById('deny');
const start = document.getElementById('start');

currentDate.textContent = ' DEC 2023'
let currentDateM = 11
let currentDateY  = 2023

let wCount = 0;
let lCount = 0; 
let currentPerson = 0

window.addEventListener('DOMContentLoaded', function () {
    displayPerson();
})
let randomIndex;
function randomMonth () { //gives random index number for months array
    randomIndex = Math.floor(Math.random() * 11);
    return months[randomIndex];
}
function randomMonth2() {
    let randomIndex2 = rando(months.length - 1);
    return months[randomIndex2]
}
function randoYr () { // random year
    return rando(1990, 2003);
}
function randoExp () { // random exp yr
     return rando(2020, 2025);
}
function randoName () { // random index number for names
    return rando(0, 6);
}




function displayPerson () { // displays person on card
    name.textContent = ids[randoName()];
    exp.textContent =  randoExp();
    expMonth.textContent = randomMonth();
    bday.textContent = randoYr();
    bdayMonth.textContent = randomMonth2();
}


//functionality for buttons
accepted.addEventListener('click', function () { 
    let expTxt = exp.textContent; // changes exp text content into variable
    let dobTxt = bday.textContent; // changes dob text into variable
    let expMonthTxt = expMonth.textContent; // changes expMonth text content into a variable

    let expMonthNumber = parseInt(expMonthTxt, 10); // changes expmonthtxt into a number
    let expYearNumber = parseInt(expTxt, 10); // turns exptxt into a number
    let dobNumber = parseInt(dobTxt, 10);  // changes dobtxt into a number

    if (expYearNumber > currentDateY) { // if exp Year is more than or = to 2023, pass
        wCount++
        wins.textContent = wCount
        currentPerson++
        console.log('exp year more than 2023 auto pass');
    }
    else if (expYearNumber == currentDateY) {
        if (randomIndex >= currentDateM) {
            wCount++
            wins.textContent = wCount
            currentPerson++
            console.log('year was equal to 2023 and month was >= 11');
        }
        else if (randomIndex < currentDateM) {
            lCount++
            losses.textContent = lCount
            currentPerson++
            console.log('year was equal to 2023 but month was less than 11');
        }
    }
    else {
        console.log('expired');
        lCount++
        losses.textContent = lCount
        currentPerson++
        console.log('year was less than 2023');
    }
    scoreColor1();
    displayPerson();
    scoreColor2();
})


deny.addEventListener('click', function () {
    let expTxt = exp.textContent;
    let expMonthTxt = expMonth.textContent;
    let dobTxt = bday.textContent;
    let expMonthNumber = parseInt(expMonthTxt, 10);
    let expNumber = parseInt(expTxt, 10);
    let dobNumber = parseInt(dobTxt, 10);
    if (expNumber < currentDateY) { // if expNumber is less than current year- win
        wCount++
        wins.textContent = wCount;
        currentPerson++;
        console.log('exp year less than 2023 auto pass');
    }
    else if (expNumber == currentDateY) {
        if (randomIndex <= currentDateM) {
            wCount++
            wins.textContent = wCount;
            currentPerson++
            console.log('year was = to 2023 and month was >= 11');
        }
        else if (randomIndex < currentDateM) {
            lCount++
            losses.textContent = lCount;
            currentPerson++
            console.log('year = 2023 but month was < 11');
        }
        else {
            lCount++
            losses.textContent = lCount;
            currentPerson++
            console.log('?');
        }
    }
    else {
        lCount++
        losses.textContent = lCount;
        currentPerson++
        console.log('year less than 2023');
    }
    displayPerson();
    endGame();
    scoreColor1();
    scoreColor2();
})


function endGame () { 
    if (lCount === 3) {
        alert('You have denied too many people! you are fired!!!')
        lCount = 0;
        wCount = 0;
        wins.textContent = wCount;
        losses.textContent = lCount;
    }
}


function scoreColor1() {
    let winTxt = wins.textContent;
    let winNumber = parseInt(winTxt, 10);
    if (winNumber > 0) {
        document.getElementById('wins').style.color = "green"
    }
}
function scoreColor2() {
    let lossTxt = losses.textContent;
    let lossNumber = parseInt(lossTxt, 10)
    if (lossNumber > 0 ) {
        document.getElementById('losses').style.color = 'red'
    }
}





