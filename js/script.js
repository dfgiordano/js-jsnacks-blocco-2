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



