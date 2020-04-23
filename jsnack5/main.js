// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// var cubo_di_quattro = Math.pow(4, 3);
// console.log(cubo_di_quattro);


var n_utente = parseInt(prompt('Inserisci fino a che numero vuoi che venga eseguito il cubo.'))
console.log(n_utente);


for (var i = 1; i <= n_utente; i++) {
    var cubo = Math.pow(i, 3);
    console.log(cubo + ' :cubo di ' + i);
}
