/* Chiedi un numero di 4 cifre all’utente nel prompt
e calcola la somma di tutte le cifre che compongono il numero */

// chiedo all'utente un numero di 4 cifre
let userNumber = prompt('dimmi un numero di 4 cifre')
let sum = 0;

// scorro l'array
for (let i = 0; i < userNumber.length; i++) {

    // per ogni numero 
    let singleNumber = parseInt(userNumber[i]);
   
    // sommo a 0 tutte le cifre che compongono il numero
    sum += singleNumber;

}

// stampo in console il risultato 
console.log(sum);