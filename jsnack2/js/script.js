/* Chiedi un numero di 4 cifre all’utente nel prompt
e calcola la somma di tutte le cifre che compongono il numero */

let userNumber = prompt('dimmi un numero di 4 cifre')
let sum = 0;

// scorro l'array
for (let i = 0; i < userNumber.length; i++) {

    // per ogni numero 
    let singleNumber = parseInt(userNumber[i]);
   
    // sommo a 0 i numeri dell'utente uno ad uno
    sum += singleNumber;

}

console.log(sum);