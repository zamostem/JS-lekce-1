document.body.innerHTML += "<h1> První program <h1/>";

/*
Založte si novou prázdnou stránku s JavaScriptovým programem.
V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Měsíční příjem vypište do stránky.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
Daň také vypište do stránky.
*/
let hourly_rate = 320;

let salary = 7 * hourly_rate * 21;

document.body.innerHTML += salary + " Kč";

document.body.innerHTML += '<br>';

let net_income = salary * 0.4;
let tax = net_income * 0.15;

document.body.innerHTML += Math.floor(tax) + " Kč";

document.body.innerHTML += '<br>';

/*
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách.

Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
Obě hodnoty vypište do stránky.
*/
document.body.innerHTML += Math.floor(223 / 60) + " hodin " + (223 % 60) + " minut";

document.body.innerHTML += '<br>';

/*
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
Celou e-mailovou adresu vypište do stránky.
*/
document.body.innerHTML += "kristyna" + "." + "podana" + "@mujmail.com";

document.body.innerHTML += '<br>';