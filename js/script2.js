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