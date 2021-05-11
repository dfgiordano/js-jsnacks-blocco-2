/* Snack 3  */
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).   */
var arrayNumeri = [10,30,3,25];
// console.log(arrayNumeri);
// creo una funzione, 3argomenti array,a < b 
// ritorna un array
function MiaFunzione (array, a, b) {
    var arrayNuovo = [];
    for (i = a; i < b; i++) {
        arrayNuovo.push(array[i]);
    }
    return arrayNuovo;
};

/* La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.  */
var arrayNuovo = MiaFunzione(arrayNumeri, 0, 2);
console.log(arrayNuovo);