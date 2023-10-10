document.body.innerHTML += "<h1> První program <h1/>";

// cvičení 1
let hourly_rate = 320;

let salary = 7 * hourly_rate * 21;

document.body.innerHTML += salary + " Kč";

document.body.innerHTML += '<br>';

let net_income = salary * 0.4;
let tax = net_income * 0.15;

document.body.innerHTML += Math.floor(tax) + " Kč";

document.body.innerHTML += '<br>';

// cvičení 2
document.body.innerHTML += Math.floor(223 / 60) + " hodin " + (223 % 60) + " minut";

document.body.innerHTML += '<br>';

// cvičení 3
document.body.innerHTML += "kristyna" + "." + "podana" + "@mujmail.com";

document.body.innerHTML += '<br>';