/* Snack 1 */
/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.  */
/* Stampare a schermo la bici con peso minore.  */
var arrayBiciclette = [
    {
        nome : "bianca",
        peso : 100
    },
    {
        nome : "gialla",
        peso : 80
    },
    {
        nome : "rossa",
        peso : 250
    },
    {
        nome : "blu",
        peso : 150
    }
];

// var pesoMinore = arrayBiciclette[0].peso; inizializzo la variabile con indexPesoMinore, perchè in questa maniera non prendo solo il peso della bicicletta, ma prendo l'intero oggetto in considerazione
var indexPesoMinore = 0;
for (var i = 1; i < arrayBiciclette.length; i++) {
    var pesoBicicletta = arrayBiciclette[i].peso;
    
    if (pesoBicicletta < arrayBiciclette[indexPesoMinore].peso) {
        indexPesoMinore = i;
    }
}

console.log(arrayBiciclette[indexPesoMinore].nome);

/* Snack 2  */
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.  */
/* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.  */
/* Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.  */
var arraySquadre = [
    {
        nome : "Juventus",
        puntiFatti : getRandomNumber(1,100),
        falliSubiti : getRandomNumber(1,50)
    },
    {
        nome : "Inter",
        puntiFatti : getRandomNumber(1,100),
        falliSubiti : getRandomNumber(1,50)
    },
    {
        nome : "Milan",
        puntiFatti : getRandomNumber(1,100),
        falliSubiti : getRandomNumber(1,50)
    }
];
console.log(arraySquadre);

/* Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.  */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

var nuovoArray = [];

for (var i = 0; i < arraySquadre.length; i++) {
    var nuoviDati = arraySquadre[i];
    nuovoArray.push("Punti fatti : " + nuoviDati.puntiFatti + ", Falli subiti : " + nuoviDati.falliSubiti);
    
}
console.log(nuovoArray);

/* Snack 3  */
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).   */
/* La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.  */