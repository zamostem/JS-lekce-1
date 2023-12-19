/*
Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
Hodnotu proměnné prijem vypište do stránky.
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
Vypište do stránky i příjem divadla se započítanou slevou pro studenty.
*/
let cena = 12;
let pocet_navstevniku = 174;
let prijem = cena * pocet_navstevniku * 15;

document.body.innerHTML += prijem;

document.body.innerHTML += '<br>';

let cena_student = cena * 0.65;

document.body.innerHTML += Math.round(((pocet_navstevniku * 0.6 * cena) + (pocet_navstevniku * 0.4 * cena_student)) * 15);

document.body.innerHTML += '<br>';

/*
Mějme v proměnné x uloženo nějaké desetinné číslo. Pomocí funkce Math.round jej můžeme zaokrouhlit na celá čísla takto.

Math.round(x);
Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky? Napište program, který pomocí funkce Math.round

zaokrouhlí číslo x s přesností na desetiny,
zaokrouhlí číslo x s přesností na setiny,
zaokrouhlí číslo x s přesností na celé stovky.
*/

const x = 5496.24567

document.body.innerHTML += Math.round(x * 10) / 10;

document.body.innerHTML += '<br>';

document.body.innerHTML += Math.round(x * 100) / 100;

document.body.innerHTML += '<br>';

document.body.innerHTML += Math.round(x / 100) * 100;

document.body.innerHTML += '<br>';

/*
Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
*/
document.body.innerHTML += Math.ceil(Math.random() * 6);

document.body.innerHTML += '<br>';

document.body.innerHTML += 1 + Math.floor(Math.random() * 6);

document.body.innerHTML += '<br>';