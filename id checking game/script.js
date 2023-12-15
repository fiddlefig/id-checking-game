const ids = ['John', 'Cati', 'Austin', 'Piper', 'Lydia', 'Matt', 'Andy']
const months = ['JAN', 'FEB', 'MAR', "APR", 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const wins = document.getElementById('wins'); //done
const losses = document.getElementById('losses'); //done
const currentDate = document.getElementById('date'); //done

const name = document.getElementById('name'); //done
const exp = document.getElementById('exp');
const bday = document.getElementById('bday');
const bdayYr = document.getElementById('bdayYr')
const pic = document.getElementById('pic');

const accepted = document.getElementById('accepted')
const deny = document.getElementById('deny');
const start = document.getElementById('start');


currentDate.textContent = ' 12/12/2023'
let currentDateN = 20231212

let wCount = 0;
let lCount = 0; 
let randomIndex = 0;
let currentPerson = 0

function randomMonth () { //gives random index number for months array
    return rando(months.length)
}
function randoYr () { // random year
    return rando(1990, 2003);
}
console.log(randomMonth(), randoYr());



function displayPerson () { // displays person on card
    name.textContent = ids[currentPerson].name;
    exp.textContent = 'EXP: ' + ids[currentPerson].exp;
    bday.textContent = "Birthday: " + months[randomMonth].bday;
    
}
displayPerson();

accepted.addEventListener('click', function () { //functionality for buttons
    if (ids[currentPerson].exp <= currentDateN && ids[currentPerson].bday <= currentDateN) {
        wCount++
        wins.textContent = wCount;
    }
    else {
        lCount++
        losses.textContent = lCount;
    }
    currentPerson++
    displayPerson();
})



let sumOfScore = lCount + wCount;

function endGame () { // not working, supposed to show 'game over' when a certain score is reached
    if (sumOfScore === ids.length) {
        alert('game over')
    }
}
endGame();

scoreColor = () => { // not working, supposed to change the color of the score numbers
    if (wCount > 0) {
        wins.style.color = 'green';
    }
    else if (lCount > 0) {
        document.getElementById('losses').style.color = 'red';
    }
}
scoreColor();







//randomized name, bday month and bday year POSSIBLY day unsure 
// array of names, months and rando for years between 1990-2003 ?
// check exp, month, year, if all pass = win score + 1
// else lose score + 1






// let john = ids[0];
// let cati = ids[1];
// let austin = ids[2];

// let peopleList  = [john.bdayYear, cati.bdayYear, austin.bdayYear]
// let randomPpl = rando(peopleList);

// console.log(randomPpl); //gives random bday from person

// John = () => {
//     name.textContent = ids[0].name;
//     exp.textContent = 'EXP: ' + ids[0].exp
//     bday.textContent = 'Birthday: ' + ids[0].bday +  '/' + ids[0].bdayYear;
// }
// Cati = () => {
//     name.textContent = ids[1].name;
//     exp.textContent = 'EXP: ' + ids[1].exp
//     bday.textContent = 'Birthday: ' + ids[1].bday +  '/' + ids[1].bdayYear
// }
// Austin = () => {
//     name.textContent = ids[2].name;
//     exp.textContent = 'EXP: ' + ids[2].exp
//     bday.textContent = 'Birthday: ' + ids[2].bday +  '/' + ids[2].bdayYear
// }
// Piper = () => {
//     name.textContent = ids[3].name;
//     exp.textContent = 'EXP: ' + ids[3].exp
//     bday.textContent = 'Birthday: ' + ids[3].bday +  '/' + ids[3].bdayYear
// }
// Matt = () => {
//     name.textContent = ids[4].name;
//     exp.textContent = 'EXP: ' + ids[4].exp
//     bday.textContent = 'Birthday: ' + ids[4].bday +  '/' + ids[4].bdayYear
// }

// const everyone = [John(), Cati(), Austin(), Piper(), Matt()];
// // randP = () => {
// //     const randPP = Math.floor(Math.random())
// //     return randPP
// // }

// const count = everyone.length;
// let i = 0; 
// accepted.addEventListener('click', function () {
//     while (i < count) {
//         Cati()
//         i++
//         console.log(i);
//     }
// })

// // function everyoneRand() {
// //     const everyoneP = Math.floor(Math.random() * everyone.length);
// //     everyone.textContent = everyoneP
// //     return everyoneP
// // }
// // console.log(everyoneRand());




