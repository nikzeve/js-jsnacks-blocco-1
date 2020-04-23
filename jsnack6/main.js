// Stampa le potenze di 2 fino a 1000

var numero_elevato = 2;
console.log('Numero che verrà elevato: ' + numero_elevato);


for (var i = 0; i < 10; i++) {
    var potenza = Math.pow(numero_elevato, i);
    console.log(numero_elevato + ' elevato alla ' + i +' = ' + potenza);


}
