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
        peso : 200
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

for (var i = 0; i < arrayBiciclette.length; i++) {
    var pesoBicicletta = arrayBiciclette[i].peso;
    
    console.log(pesoBicicletta);
}
if (pesoBicicletta < pesoBicicletta[i]) {
    console.log(pesoBicicletta);
}




/* Snack 2  */
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.  */
/* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.  */
/* Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.  */
/* Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.  */
/* Snack 3  */
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).   */
/* La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.  */