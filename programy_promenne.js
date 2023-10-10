// cvičení 1
document.body.innerHTML += Math.random()

document.body.innerHTML += '<br>';

// cvičení 2
let wage_in_eur = 20;
let wage_in_czk = Math.round(wage_in_eur * 24.55);

document.body.innerHTML += "<h1> Mzda v korunách: " + wage_in_czk + " Kč </h1>";

document.body.innerHTML += '<br>';

// cvičení 3
let start = 15;
let delka = 13;
let konec = (start + delka) % 24;

document.body.innerHTML += konec;

document.body.innerHTML += '<br>';