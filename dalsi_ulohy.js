// cvičení 1
let cena = 12;
let pocet_navstevniku = 174;
let prijem = cena * pocet_navstevniku * 15;

document.body.innerHTML += prijem;

document.body.innerHTML += '<br>';

let cena_student = cena * 0.65;

document.body.innerHTML += Math.round(((pocet_navstevniku * 0.6 * cena) + (pocet_navstevniku * 0.4 * cena_student)) * 15);

document.body.innerHTML += '<br>';

// cvičení 2

const x = 5496.24567

document.body.innerHTML += Math.round(x * 10) / 10;

document.body.innerHTML += '<br>';

document.body.innerHTML += Math.round(x * 100) / 100;

document.body.innerHTML += '<br>';

document.body.innerHTML += Math.round(x / 100) * 100;

document.body.innerHTML += '<br>';

// cvičení 3
document.body.innerHTML += Math.ceil(Math.random() * 6);

document.body.innerHTML += '<br>';

document.body.innerHTML += 1 + Math.floor(Math.random() * 6);

document.body.innerHTML += '<br>';