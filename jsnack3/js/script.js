/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0;

// faccio ripetere la domanda all'utente per 10 volte (i < 10)
for (let i = 0; i < 10; i++) {

    // chiedo all'utente un numero
    userNumber = parseInt( prompt('dimmi un numero') );

    // sommo i numeri dati dall'utente
    sum += userNumber;

}

// stampo in console il risultato
console.log(sum)



