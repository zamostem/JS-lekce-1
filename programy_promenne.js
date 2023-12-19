/*
Založte si JavaScriptový program a pomocí document.body.innerHTML a funkce Math.random zobrazte na stránce náhodné číslo. Zkuste stránku několikrát po sobě obnovit a ověřte si, že pokaždé obdržíte jiné číslo.
*/
document.body.innerHTML += Math.random()

document.body.innerHTML += '<br>';


/*
Založte si novou prázdnou stránku s JavaScriptovým programem.

Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.

Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 24.55 Kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné wageInCzk.

Vypište obsah proměnné wageInCzk do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:

Mzda v korunách: 532 Kč
*/
let wage_in_eur = 20;
let wage_in_czk = Math.round(wage_in_eur * 24.55);

document.body.innerHTML += "<h1> Mzda v korunách: " + wage_in_czk + " Kč </h1>";

document.body.innerHTML += '<br>';


/*
Představte si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve tři hodiny odpoledne, což ve 24hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

Založte si JavaScriptový program a uložte čas startu závodu do proměnné start.
Do proměnné delka uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion.
Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky.
Vyzkoušejte různé délky a ověřte, že váš postup funguje.
*/
let start = 15;
let delka = 13;
let konec = (start + delka) % 24;

document.body.innerHTML += konec;

document.body.innerHTML += '<br>';