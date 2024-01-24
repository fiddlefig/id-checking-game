const ids = ['John', 'Cati', 'Austin', 'Piper', 'Lydia', 'Matt', 'Andy', 'Mariela', 'Elena', 'Victoria', 'Jayden', 'Jesse'];
const lastnames = ['johnson', 'white', 'heaton', 'burton', 'parks', 'bowen', 'miller', 'mark', 'rehmels']
const months = ['JAN', 'FEB', 'MAR', "APR", 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const wins = document.getElementById('wins'); 
const losses = document.getElementById('losses'); 
const currentDate = document.getElementById('date'); 

const name = document.getElementById('name'); 
const lastname = document.getElementById('lastname');
const exp = document.getElementById('exp');
const bdayYr = document.getElementById('bday'); // bday year
const pic = document.getElementById('pic');
const bdayMonth = document.getElementById('bdayMonth');
const expMonth = document.getElementById('expMonth');

const accepted = document.getElementById('accepted')
const deny = document.getElementById('deny');

document.getElementById('game').style.display = 'none';
document.getElementById('gameover').style.display = 'none';
// start and came over buttons
startBtn.addEventListener('click', function() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('game').style.display = 'block'
    document.getElementById('gameover').style.display = 'none';
    displayPerson();
})

gameover.addEventListener('click', function() {
    document.getElementById('gameover').style.display = 'none'
    document.getElementById('game').style.display = 'block';
    document.getElementById('startScreen').style.display = 'none'
    displayPerson();
})

currentDate.textContent = ' JAN 2024'
let currentDateM = 1
let currentDateY  = 2024

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
let randomIndex2;
function randomMonth2() {
    randomIndex2 = rando(months.length - 1);
    return months[randomIndex2]
}
function randoYr () { // random year
    let randomYear = rando(1998, 2006);
    return randomYear; 
}
function randoExp () { // random exp yr
     return rando(2020, 2025);
}
function randoName () { // random index number for names
    return rando(0, 11);
}
function randomLastName () {
    return rando(0, 8);
}

function displayPerson () { // displays person on card
    name.textContent = ids[randoName()];
    lastname.textContent = lastnames[randomLastName()];
    exp.textContent =  randoExp();
    expMonth.textContent = randomMonth();
    bdayYr.textContent = randoYr();
    bdayMonth.textContent = randomMonth2();
}


accepted.addEventListener('click', function() {
    game('accept');
})
deny.addEventListener('click', function() {
    game('deny');
})


function game(action) {
    let bdayYrTxt = bdayYr.textContent;
    let expYrTxt = exp.textContent;

    let expYrNumber = parseInt(expYrTxt, 10);
    let dobYrNumber = parseInt(bdayYrTxt, 10);

    let ageYrCalc = currentDateY - dobYrNumber;

    if (action == 'accept') {
        if (expYrNumber > currentDateY) { 
            if (ageYrCalc > 21) { 
                scoreUp()
            }
            else if (ageYrCalc === 21) {
                if (randomIndex2 >= currentDateM) {
                    scoreUp()
                }
                else {
                    scoreDown()
                }
            }
            else {
                scoreDown()
            }
        }
        else if (expYrNumber === currentDateY) {
            if (randomIndex >= currentDateM) {
                scoreUp()
            }
            else {
                scoreDown()
            }
        }
        else {
            scoreDown()
        }

    }
    else if (action === 'deny') {
        if (expYrNumber > currentDateY) { // if exp year more than 2024
            if (ageYrCalc > 21) { // if bday yr more than 21
                scoreDown()
                console.log(1);
            }
            else if (ageYrCalc === 21) { //  if 2024-dobyr = 21
                if (randomIndex2 >= currentDateM) { //if bday month >= 1
                    scoreDown()
                    console.log(2);
                }
                else {
                    scoreUp()
                    console.log(3);
                }
            }
            else {
                scoreUp()
                console.log(4); //works
            }
        }
        else if (expYrNumber === currentDateY) {
            if (randomIndex >= currentDateM) {
                scoreUp()
                console.log(5);
            }
            else {
                scoreUp()
                console.log(6);
            }
        }
        else {
            scoreUp()
            console.log(7); //works
        }
    }
    displayPerson()
    endGame();
    scoreColor1();
    scoreColor2();

    
}

function scoreUp() {
    wCount++
    wins.textContent = wCount;
    currentPerson++;
}
function scoreDown() {
    lCount++
    losses.textContent = lCount;
    currentPerson++;
}

function endGame () { 
    if (lCount === 3) {
        document.getElementById('game').style.display = 'none';
        document.getElementById('gameover').style.display = 'block';
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



