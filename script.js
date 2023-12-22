// trying to turn the months into their index number so i can see if the index # is bigger than 11

const ids = ['John', 'Cati', 'Austin', 'Piper', 'Lydia', 'Matt', 'Andy'];
const months = ['JAN', 'FEB', 'MAR', "APR", 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const wins = document.getElementById('wins'); //done
const losses = document.getElementById('losses'); //done
const currentDate = document.getElementById('date'); //done

const name = document.getElementById('name'); //done
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
     return rando(2018, 2028);
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

let sum = 0;
// determines how old 
function ageCalc () {
    sum = currentDateY - dobNumberYr
}
//functionality for buttons
accepted.addEventListener('click', function () { 
    let expTxt = exp.textContent; // changes exp text content into variable
    let dobTxt = bday.textContent; // changes dob text into variable
    let expMonthTxt = expMonth.textContent; // changes expMonth text content into a variable

    let expMonthNumber = parseInt(expMonthTxt, 10); // changes expmonthtxt into a number
    let expYearNumber = parseInt(expTxt, 10); // turns exptxt into a number
    let dobNumber = parseInt(dobTxt, 10);  // changes dobtxt into a number

    if (expYearNumber >= currentDateY) { // if exp is more than or = to 2023, pass
        console.log('year pass');
        if (randomIndex >= currentDateM) {
            wCount++
            wins.textContent = wCount
            currentPerson++
            console.log('year and month pass');
        }
        else {
            console.log(expMonthNumber, currentDateM);
            console.log('year pass/month fail');
            lCount++
            losses.textContent = lCount
            currentPerson++
        }
    }
    else {
        console.log('expired');
        lCount++
        losses.textContent = lCount
        currentPerson++
    }
   
    displayPerson()
})
console.log(exp.textContent);

deny.addEventListener('click', function () {
    let expTxt = exp.textContent;
    let expMonthTxt = expMonth.textContent;
    let dobTxt = bday.textContent;
    let expMonthNumber = parseInt(expMonthTxt, 10);
    let expNumber = parseInt(expTxt, 10);
    let dobNumber = parseInt(dobTxt, 10);
    if (expNumber < currentDateY) {
        wCount++
        wins.textContent = wCount;
        currentPerson++;
        
    }
    else {
        lCount++
        losses.textContent = lCount;
        currentPerson++
    }
    displayPerson();
    endGame();
    scoreColor();
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


function scoreColor() { // not working, supposed to change the color of the score numbers
    let winsTxt = wins;
    let winsNumber = parseInt(winsTxt, 10)
    if (winsNumber > 0) {
        winsNumber.style.color = 'green';
    }
}





